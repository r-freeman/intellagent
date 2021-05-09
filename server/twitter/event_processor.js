import fetch from 'node-fetch';
import twitterClient from './client';
import {Customer, Tag, Ticket, Team} from '../models';

import {
    createWelcomeMessage,
    createDeeplink,
    createDefaultTweet,
    createDefaultMessage,
    cleanTweet
} from './helpers';

const twClient = twitterClient;

const eventProcessor = {
    tweet: async function (event) {
        try {
            // get our twitter user
            const user = await twClient.getUser();

            // get the tweet from the event array
            const tweet = event.tweet_create_events.shift();

            // get the sender's details
            const sender = {
                id: tweet.user.id,
                id_str: tweet.user.id_str,
                name: tweet.user.name,
                screen_name: tweet.user.screen_name,
                photo_url: tweet.user.profile_image_url_https
            }

            let customer = null;

            // return if the sender is the same as our user
            if (sender.id_str === user.id_str) return;

            // return if the tweet is in reply to a status update
            if (tweet.in_reply_to_status_id !== null) return;

            console.log(`Tweet received from @${sender.screen_name}`);
            console.log(tweet);

            // try to locate the customer (from twitter id) or create a new one
            customer = await Customer.findByTwitterId(sender.id_str);
            if (customer === null) {
                customer = await Customer.create({
                    name: sender.name,
                    twitter_id: sender.id,
                    twitter_id_str: sender.id_str,
                    twitter_screen_name: sender.screen_name,
                    twitter_photo_url: sender.photo_url
                })
            }

            // prepare the text for classification
            let tweetText;
            if (tweet.truncated) {
                // get the full text if the tweet was truncated
                const {full_text} = tweet.extended_tweet;
                if (typeof full_text !== 'undefined') {
                    // remove user mentions, hashtags etc from the tweet leaving only text
                    tweetText = cleanTweet(full_text);
                }
            } else {
                tweetText = cleanTweet(tweet.text);
            }

            const classifyTweet = await fetch(process.env.CLASSIFIER_ENDPOINT, {
                method: 'post',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({'utterance': tweetText})
            });

            if (classifyTweet.status === 200) {
                const classification = await classifyTweet.json();
                const tag = await Tag.findByName(classification.category);

                // create a new ticket
                const ticket = await Ticket.create({
                    customer: customer._id,
                    issue_type: tag._id,
                    messages: [
                        {
                            incoming: true,
                            body: tweetText
                        }
                    ]
                });

                // create a personalised welcome message
                const welcomeMessage = await createWelcomeMessage({
                    recipient: customer,
                    tweetText,
                    tag,
                    reference: ticket.reference
                })

                // associate the ticket with the welcome message
                ticket.welcome_message_id = welcomeMessage.id;
                await ticket.save();

                // finally reply to the customer's tweet with a call to action to start a private conversation
                await twClient.replyToTweet(createDefaultTweet(customer.twitter_screen_name, createDeeplink(user.id_str, welcomeMessage.id)), tweet.id_str);
            }
        } catch (err) {
            console.error(err);
        }
    },
    message: async function (event) {
        try {
            // get our twitter user
            const user = await twClient.getUser();

            // get the message from the event array
            const message = event.direct_message_events.shift();

            // get the sender id, name and screen name from the message
            const sender = {
                id: message.message_create.sender_id,
                name: event.users[message.message_create.sender_id].name,
                screen_name: event.users[message.message_create.sender_id].screen_name
            };

            let customer = null;

            // return if the sender is the same as our user
            if (sender.id === user.id) return;

            console.log(`Message received from @${sender.screen_name}`);
            console.log(message.message_create.message_data);
            console.log(message);

            if (typeof message.initiated_via !== 'undefined' && typeof message.initiated_via.welcome_message_id !== 'undefined') {
                const welcome_message_id = message.initiated_via.welcome_message_id;

                if (typeof message.message_create.message_data.quick_reply_response !== 'undefined') {
                    const metadata = message.message_create.message_data.quick_reply_response.metadata;
                    const ticket = await Ticket.findByWelcomeMessageId(welcome_message_id);

                    if (ticket !== null) {
                        if (metadata === 'correct_issue_type') {
                            // find the appropriate agent for this issue type
                            const agg = [
                                {
                                    '$match': {
                                        'tags': ticket.issue_type
                                    }
                                },
                                {
                                    '$lookup': {
                                        'from': 'users',
                                        'localField': '_id',
                                        'foreignField': 'team',
                                        'as': 'agent'
                                    }
                                },
                                {
                                    '$unwind': {
                                        'path': '$agent'
                                    }
                                },
                                {
                                    '$project': {
                                        '_id': 0,
                                        'name': 1,
                                        'agent._id': 1,
                                        'agent.name': 1
                                    }
                                },
                                {
                                    '$sample': {
                                        'size': 1
                                    }
                                },
                                {
                                    '$addFields': {
                                        'agent.team': '$name'
                                    }
                                }
                            ];

                            const aggregate = await Team.aggregate(agg).exec();
                            const {agent} = aggregate.shift();

                            ticket.status = 'open';
                            ticket.user = agent._id;
                            ticket.save();

                            await twClient.sendDirectMessage(createDefaultMessage(agent), sender.id);
                        } else if (metadata === 'incorrect_issue_type') {
                            // handle incorrect classification
                        }
                    }
                }
            } else {

            }
        } catch (err) {
            console.error(err);
        }
    }
};

export default eventProcessor;