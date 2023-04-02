import {handleTweet, handleMessage} from '../twitter/events';

exports.post = async (req, res) => {
    try {
        const event = req.body;

        if (event.tweet_create_events) {
            await handleTweet(event);
        } else if (event.direct_message_events) {
            await handleMessage(event);
        }

        res.status(200).send('OK');
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}