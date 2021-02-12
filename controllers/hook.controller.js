import tweetProcessor from '../twitter/tweet_processor';
import messageProcessor from '../twitter/message_processor';

exports.post = (req, res) => {
    const event = req.body;

    if (event.tweet_create_events) {
        tweetProcessor.process(event);
    } else if (event.direct_message_events) {
        messageProcessor.process(event);
    }

    res.send('OK');
}