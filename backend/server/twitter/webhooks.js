import {Autohook} from 'twitter-autohook';
import {handleTweet, handleMessage} from './events';

// initialise twitter web hooks
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
                // handle incoming tweet
                await handleTweet(event);
            } else if (event.direct_message_events) {
                // handle incoming messages
                await handleMessage(event);
            }
        });

        // Starts a server and adds a new webhook
        await webhook.start();

        // Subscribes to your own user's activity
        await webhook.subscribe({
            oauth_token: process.env.TWITTER_ACCESS_TOKEN,
            oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        });
    } catch (err) {
        // Display the error and quit
        console.error(err);
        process.exit(1);
    }
})();