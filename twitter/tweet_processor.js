import fetch from "node-fetch";
import twitterClient from './client';

const defaultTweet = require('./default_tweet');
const {headers} = require('../common');

const twClient = twitterClient;

const tweetProcessor = {
    cleanTweet: function (text) {
        // remove url, username and whitespace from tweet
        let url = new RegExp('https?:\/\/[www]?[a-zA-Z0-9_-]+[.a-zA-Z]+([\/a-z0-9A-Z-?=_]+)');
        let username = new RegExp('(\@[a-zA-Z0-9_%]*)');
        text = text.replace(url, '');
        text = text.replace(username, '');
        text = text.trim();
        return text;
    },
    deeplinkWelcomeMessage: function (recipientId, welcomeMessageId) {
        return `https://twitter.com/messages/compose?recipient_id=${recipientId}&welcome_message_id=${welcomeMessageId}`;
    },
    process: async function (event) {
        try {
            // get our user
            const user = await twClient.getUser();

            // declare and initialise customer to null
            let customer = null;

            // retrieve the first tweet in the array
            const tweet = event.tweet_create_events.shift();

            // get the sender id, name and screen name from the tweet
            const sender = {
                id: tweet.user.id,
                id_str: tweet.user.id_str,
                name: tweet.user.name,
                screen_name: tweet.user.screen_name
            };

            // return if the sender is the same as our user
            if (sender.id === user.id) return;

            // we're only interested in tweets sent to us, not replies to tweets
            if (tweet.in_reply_to_status_id !== null) return;

            console.log(`Tweet received from @${sender.screen_name}`);
            console.log(tweet);

            try {
                // look up customer with twitter_id (sender.id)
                const response = await fetch(`${process.env.BASE_URL}customers?twitter_id_str=${sender.id_str}`, {
                    method: 'get',
                    headers
                });

                if (response.status === 200) {
                    customer = await response.json();
                } else if (response.status === 404) {
                    //  no customer found with twitter_id, create one
                    const response = await fetch(`${process.env.BASE_URL}customers`, {
                        method: 'post',
                        headers,
                        body: JSON.stringify({
                            name: sender.name,
                            twitter_id: sender.id,
                            twitter_id_str: sender.id_str,
                            twitter_screen_name: sender.screen_name
                        })
                    })

                    if (response.status === 201) {
                        customer = await response.json();
                    }
                }
            } catch (err) {
                console.error(err);
            }

            if (customer !== null) {
                let tweetText = this.cleanTweet(tweet.text);

                // store the tweet in the database and associate it with the customer
                const response = await fetch(`${process.env.BASE_URL}tweets`, {
                    method: 'post',
                    headers,
                    body: JSON.stringify({
                        tweet_id: tweet.id,
                        tweet_id_str: tweet.id_str,
                        customer: customer._id,
                        text: tweetText,
                        in_reply_to_user_id: tweet.in_reply_to_user_id,
                        in_reply_to_user_id_str: tweet.in_reply_to_user_id_str,
                        in_reply_to_screen_name: tweet.in_reply_to_screen_name,
                        created_at: tweet.created_at,
                        timestamp_ms: tweet.timestamp_ms
                    })
                })

                // tweet was stored successfully
                if (response.status === 201) {
                    try {
                        // send a tweet back to customer with a call to action button to join a private conversation
                        await twClient.replyToTweet(defaultTweet(sender.screen_name,
                            this.deeplinkWelcomeMessage(user.id_str, require('./default_welcome_message_id'))), tweet.id_str);
                    } catch (err) {
                        console.error(err);
                    }
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default tweetProcessor;