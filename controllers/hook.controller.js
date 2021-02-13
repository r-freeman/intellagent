import tweetProcessor from '../twitter/tweet_processor';
import messageProcessor from '../twitter/message_processor';

exports.post = async (req, res) => {
    try {
        const event = req.body;

        if (event.tweet_create_events) {
            await tweetProcessor.process(event);
        } else if (event.direct_message_events) {
            await messageProcessor.process(event);
        }

        res.send('OK');
    } catch (e) {
        console.error(e);
    }
}