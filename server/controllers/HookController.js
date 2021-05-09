import eventProcessor from '../twitter/event_processor';

exports.post = async (req, res) => {
    try {
        const event = req.body;

        if (event.tweet_create_events) {
            await eventProcessor.tweet(event);
        } else if (event.direct_message_events) {
            await eventProcessor.message(event);
        }

        res.status(200).send('OK');
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}