import fetch from 'node-fetch';
import twitterClient from './client';
import cleanTweet from './helpers';

import Customer from '../models/customer.model';
import Tweet from '../models/tweet.model';
import Tag from '../models/tag.model';
import Ticket from '../models/ticket.model';

import welcomeMessage from './welcome_message';

const defaultTweet = require('./default_tweet');

const twClient = twitterClient;
const classifierUrl = process.env.CLASSIFIER_URL;

const tweetProcessor = {
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
                name: tweet.user.name,
                twitter_id: tweet.user.id,
                twitter_id_str: tweet.user.id_str,
                twitter_screen_name: tweet.user.screen_name
            };

            // return if the sender is the same as our user
            if (sender.id === user.id) return;

            // we're only interested in tweets sent to us, not replies to tweets
            if (tweet.in_reply_to_status_id !== null) return;

            console.log(`Tweet received from @${sender.twitter_screen_name}`);
            console.log(tweet);

            // retrieve the customer by twitter id
            customer = await Customer.findByTwitterId(sender.twitter_id_str);
            if (customer === null) {
                // create customer if it doesn't exist
                customer = await Customer.create({
                    name: sender.name,
                    twitter_id: sender.twitter_id,
                    twitter_id_str: sender.twitter_id_str,
                    twitter_screen_name: sender.twitter_screen_name
                });
            }

            let tweetText;
            if (tweet.truncated) {
                // if the tweet was shortened, get the full text
                const {full_text} = tweet.extended_tweet;
                if (typeof full_text !== 'undefined') {
                    // remove user mentions, hashtags etc from the tweet and leave only text
                    tweetText = cleanTweet(full_text);
                }
            } else {
                tweetText = cleanTweet(tweet.text);
            }

            // store the tweet and associate it with this customer
            const newTweet = await Tweet.create({
                tweet_id: tweet.id,
                tweet_id_str: tweet.id_str,
                text: tweetText,
                customer: customer._id
            });

            // make a request to classify the tweet
            const classifyTweet = await fetch(classifierUrl, {
                method: 'post',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({'utterance': newTweet.text})
            });

            if (classifyTweet.status === 200) {
                const classification = await classifyTweet.json();

                const tag = await Tag.findByName(classification.category);

                // create the ticket
                const ticket = await Ticket.create({
                    status: 'hidden',
                    customer: customer._id,
                    issue_type: tag._id,
                    messages: [
                        {
                            incoming: true,
                            body: newTweet.text
                        }
                    ]
                });

                // create a welcome message
                const newWelcomeMessage = await welcomeMessage.create({
                    sender,
                    text: newTweet.text,
                    tag,
                    reference: ticket.reference
                });

                ticket.welcome_message_id = newWelcomeMessage.id;
                await ticket.save();

                // reply to the customer's tweet and display a call to action to join a private conversation
                await twClient.replyToTweet(defaultTweet(sender.twitter_screen_name, twClient.createDeeplink(user.id_str, newWelcomeMessage.id)), newTweet.tweet_id_str);
            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default tweetProcessor;