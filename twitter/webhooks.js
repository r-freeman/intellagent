const {Autohook} = require('twitter-autohook');

import tweetProcessor from './tweet_processor';
import messageProcessor from './message_processor';

// initialise web hooks
(async start => {
    try {
        const webhook = new Autohook({
            port: process.env.WEBHOOKS_PORT
        });

        // Removes existing webhooks
        await webhook.removeWebhooks();

        // Listens to incoming activity
        webhook.on('event', async (event) => {
            if (event.tweet_create_events) {
                await tweetProcessor.process(event);
            } else if (event.direct_message_events) {
                await messageProcessor.process(event);
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

process.on('SIGINT', () => {
    process.exit(0);
})