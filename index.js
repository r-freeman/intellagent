const {Autohook} = require('twitter-autohook');
const fetch = require('node-fetch');

import tweetProcessor from './twitter/tweet-processor';
import messageProcessor from './twitter/message-processor';

(async start => {
    try {
        const webhook = new Autohook();

        // Removes existing webhooks
        await webhook.removeWebhooks();

        // Listens to incoming activity
        webhook.on('event', async (event) => {
            if (event.tweet_create_events) {
                // grab the first tweet in the array
                const tweet = event.tweet_create_events.shift();

                // pass the tweet into our tweet processor
                let tweetStatus = await tweetProcessor.process(tweet);

                if (tweetStatus) {

                }
            } else if (event.direct_message_events) {
                // grab the first message in the array
                const message = event.direct_message_events.shift();

                // get the sender id and screen name from the message
                const sender = {
                    id: message.message_create.sender_id,
                    screenName: event.users[message.message_create.sender_id].screen_name
                };

                // pass the message and sender into our message processor
                let messageStatus = await messageProcessor.process(message, sender);

                if (messageStatus) {

                }
            }
        });

        // Starts a server and adds a new webhook
        await webhook.start();

        // Subscribes to your own user's activity
        await webhook.subscribe({
            oauth_token: process.env.TWITTER_ACCESS_TOKEN,
            oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
    } catch (e) {
        // Display the error and quit
        console.error(e);
        process.exit(1);
    }
})();