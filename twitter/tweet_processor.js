import fetch from "node-fetch";
import twitterClient from './client';

const twClient = twitterClient;
const defaultTweet = require('./default_tweet');
const {headers} = require('../common');

const tweetProcessor = {
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
                const response = await fetch(`${process.env.BASE_URL}customers?twitter_id=${sender.id}`, {
                    method: 'get',
                    headers
                });

                if (response.status === 200) {
                    customer = await response.json();
                } else if (response.status === 404) {
                    //  no customer found with twitter_id, create one
                    const response = await fetch(`${process.env.BASE_URL}customers`, {
                        method: 'post',
                        body: JSON.stringify({
                            name: sender.name,
                            twitter_id: sender.id,
                            twitter_id_str: sender.id_str,
                            twitter_screen_name: sender.screen_name
                        }),
                        headers
                    })

                    if (response.status === 201) {
                        customer = await response.json();
                    }
                }
            } catch (err) {
                console.error(err);
            }

            if (customer !== null) {
                // TODO: the initial tweet might contain important information about the problem
                //       store the tweet and associate it with this customer

                try {
                    // send a tweet reply, inviting the customer to a direct message conversation
                    await twClient.replyToTweet(defaultTweet(sender.screen_name,
                        this.deeplinkWelcomeMessage(user.id_str, require('./default_welcome_message_id'))), tweet.id_str);
                } catch (err) {
                    console.error(err);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default tweetProcessor;