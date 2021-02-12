const {Autohook} = require('twitter-autohook');
const fs = require('fs');

// captures twitter webhook events and saves them to json in ./event_data
// useful for testing the Twitter API with Postman
(async function () {
    try {
        const webhook = new Autohook();
        let path = null;

        // Removes existing webhooks
        await webhook.removeWebhooks();

        // Listens to incoming activity
        webhook.on('event', async (event) => {
            if (event.tweet_create_events) {
                path = './event_data/tweet_create_events.json';
                // event = event.tweet_create_events.shift();
            } else if (event.direct_message_events) {
                path = './event_data/direct_message_events.json';
                // event = event.direct_message_events.shift();
            }

            if (path !== null) {
                fs.writeFileSync(path, JSON.stringify(event));
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