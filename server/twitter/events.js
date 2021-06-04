import fetch from 'node-fetch';
import twitterClient from './client';
import {Customer, Tag, Ticket, User} from '../models';
import {messages} from './messages';
import {issueJwt} from '../passport/helpers';
import {BASE_URL} from '../api';

import {
    cleanTweet,
    createDeeplink,
    createDefaultTweet,
    createDefaultWelcomeMessage,
    createWelcomeMessage,
    classifyText
} from './helpers';

const twClient = twitterClient;

// function for handling incoming tweets
async function handleTweet(event) {
    try {
        const user = await twClient.getUser();
        const tweet = event.tweet_create_events.shift();

        const sender = {
            id: tweet.user.id,
            id_str: tweet.user.id_str,
            name: tweet.user.name,
            screen_name: tweet.user.screen_name,
            photo_url: tweet.user.profile_image_url_https
        }

        if (sender.id_str === user.id_str) return;
        if (tweet.in_reply_to_status_id !== null) return;

        // find or create customer
        const customer = await Customer.findOneAndUpdate({twitter_id: sender.id_str}, {
            $setOnInsert: {
                name: sender.name,
                twitter_id: sender.id_str,
                twitter_screen_name: sender.screen_name,
                twitter_photo_url: sender.profile_image_url
            }
        }, {
            useFindAndModify: false,
            returnOriginal: false,
            upsert: true
        }).exec();

        // return if the customer has an existing open ticket
        const ticket = await Ticket.findOne({customer: customer._id, status: 'open'}).exec();
        if (ticket !== null) return;

        // prepare the tweet text for classification
        let tweetText;
        if (tweet.truncated) {
            const {full_text} = tweet.extended_tweet;
            if (typeof full_text !== 'undefined') {
                tweetText = cleanTweet(full_text);
            }
        } else {
            tweetText = cleanTweet(tweet.text);
        }

        // classify the tweet text
        const classification = await classifyText(tweetText);

        if (classification !== null) {
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
            const deeplink = createDeeplink(user.id_str, welcomeMessage.id);
            const defaultTweet = createDefaultTweet(customer.twitter_screen_name, deeplink);

            await twClient.sendTweet(defaultTweet, tweet.id_str);
        }
    } catch (err) {
        console.error(err);
    }
}

// function for handling incoming direct messages
async function handleMessage(event) {
    try {
        const user = await twClient.getUser();
        const message = event.direct_message_events.shift();
        const sender_id = message.message_create.sender_id;
        const sender = event.users[sender_id];
        const target = message.message_create.target.recipient_id;

        // return if the sender is the same as our user
        if (sender_id === target || sender_id === user.id_str) return;

        // find or create customer
        const customer = await Customer.findOneAndUpdate({twitter_id: sender.id}, {
            $setOnInsert: {
                name: sender.name,
                twitter_id: sender.id,
                twitter_screen_name: sender.screen_name,
                twitter_photo_url: sender.profile_image_url
            }
        }, {
            useFindAndModify: false,
            returnOriginal: false,
            upsert: true
        }).exec();

        let metadata;
        if (message.type === 'message_create' && sender.id !== String(user.id)) {
            if (typeof message.initiated_via !== 'undefined') {
                const welcome_message_id = message.initiated_via.welcome_message_id;

                if (welcome_message_id === process.env.TWITTER_DEFAULT_WELCOME_MESSAGE_ID) {
                    // if the customer initiated a direct message conversation with us

                    await sendDefaultWelcomeMessage(message.message_create.message_data.text, customer);
                } else {
                    const ticket = await Ticket.findByWelcomeMessageId(welcome_message_id);

                    if (ticket !== null) {
                        metadata = message.message_create.message_data.quick_reply_response.metadata;

                        const messageToSend = await messages.get(metadata, sender.id);

                        await twClient.sendDirectMessage(messageToSend);
                    }
                }
            } else if (typeof message.message_create.message_data.quick_reply_response !== 'undefined') {
                // 1. Check for quick_reply_response object
                // 2. Access the included meta data value
                // 3. Get appropriate response and optional callback function for meta data
                // 4. send message response and invoke the callback function

                metadata = message.message_create.message_data.quick_reply_response.metadata;

                const messageToSend = await messages.get(metadata, sender.id);

                await twClient.sendDirectMessage(messageToSend);
            } else {
                // handle standard direct message
                // 1. check if customer has an existing open ticket
                // 2. make a request to the ticket controller to handle the incoming message
                // 3. the ticket controller will emit a TICKET_NEW_MESSAGE event
                //              or
                // 1. if customer has no existing open tickets
                // 2. send default message containing quick reply options

                const tickets = await Ticket.find({customer: customer._id, status: 'open'}).exec();

                if (tickets.length > 0) {
                    // get the last open ticket
                    const ticket = tickets.slice(-1).shift();

                    // get the user from the ticket
                    const user = await User.findById(ticket.user).exec();

                    // retrieve a token for this user
                    const {token} = issueJwt(user);

                    // make a request to the ticket controller to create a new incoming message
                    await fetch(`${BASE_URL}tickets/${ticket._id}/messages`, {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            text: message.message_create.message_data.text,
                            recipient_id: null,
                            incoming: true
                        })
                    });
                } else {
                    const ticket = await Ticket.findOne({customer: customer._id, status: 'hidden'}).exec();

                    if (ticket === null) {
                        await sendDefaultWelcomeMessage(message.message_create.message_data.text, customer);
                    }
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}

async function sendDefaultWelcomeMessage(messageText, customer) {
    try {
        const classification = await classifyText(messageText);

        const tag = await Tag.findByName(classification.category);

        const ticket = await Ticket.create({
            customer: customer._id,
            issue_type: tag._id,
            messages: [
                {
                    incoming: true,
                    body: messageText
                }
            ]
        });

        const messageToSend = createDefaultWelcomeMessage({
            recipient: customer,
            messageText,
            tag,
            reference: ticket.reference
        });

        await twClient.sendDirectMessage(messageToSend);
    } catch (err) {
        console.log(err);
    }
}

export {handleTweet, handleMessage};
