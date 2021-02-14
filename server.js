const express = require('express');
const mongoose = require('mongoose');
const {Autohook} = require('twitter-autohook');

const routes = require('./routes/index.js');

import tweetProcessor from './twitter/tweet_processor';
import messageProcessor from './twitter/message_processor';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
});

// connect to mongodb
(async function () {
    try {
        let mongoDb = process.env.LOCAL_URI;
        await mongoose.connect(mongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Connected to ${mongoDb}`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();

// initialise web hooks
// (async start => {
//     try {
//         const webhook = new Autohook({
//             port: process.env.WEBHOOKS_PORT
//         });
//
//         // Removes existing webhooks
//         await webhook.removeWebhooks();
//
//         // Listens to incoming activity
//         webhook.on('event', async (event) => {
//             if (event.tweet_create_events) {
//                 await tweetProcessor.process(event);
//             } else if (event.direct_message_events) {
//                 await messageProcessor.process(event);
//             }
//         });
//
//         // Starts a server and adds a new webhook
//         await webhook.start();
//
//         // Subscribes to your own user's activity
//         await webhook.subscribe({
//             oauth_token: process.env.TWITTER_ACCESS_TOKEN,
//             oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
//         });
//     } catch (e) {
//         // Display the error and quit
//         console.error(e);
//         process.exit(1);
//     }
// })();
//
// process.on('SIGINT', () => {
//     process.exit(0);
// })