import tweetProcessor from './twitter/tweet-processor';
import messageProcessor from './twitter/message-processor';

const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/twitter', async function (req, res) {
    const event = req.body;

    if (event.tweet_create_events) {
        // retrieve the first tweet in the array
        const tweet = event.tweet_create_events.shift();

        console.log(tweet);
    } else if (event.direct_message_events) {
        // grab the first message in the array
        const message = event.direct_message_events.shift();

        // get the sender id and screen name from the message
        const sender = {
            id: message.message_create.sender_id,
            screenName: event.users[message.message_create.sender_id].screen_name
        };

        let messageStatus = await messageProcessor.process(message, sender);

        if (messageStatus) {

        }
    }

    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
});


