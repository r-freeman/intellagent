const Tweet = require('../models/tweet.model');

// store a tweet
exports.create = async (req, res) => {
    try {
        const {
            tweet_id,
            tweet_id_str,
            customer,
            text,
            extended_text = null,
            in_reply_to_user_id,
            in_reply_to_user_id_str,
            in_reply_to_user_screen_name,
            created_at,
            timestamp_ms
        } = req.body;

        const tweet = await Tweet.create({
            tweet_id,
            tweet_id_str,
            customer,
            text,
            extended_text,
            in_reply_to_user_id,
            in_reply_to_user_id_str,
            in_reply_to_user_screen_name,
            created_at,
            timestamp_ms
        });

        return res.status(201).send(tweet);
    } catch (err) {
        console.error(err);
    }
}

// find a tweet by _id or tweet_id (includes customer in response)
exports.findOne = async (req, res) => {
    try {
        const {_id, tweet_id} = req.query;
        const filter = typeof _id !== 'undefined' ? {_id: _id} : {tweet_id: tweet_id};

        const tweet = await Tweet.findOne(filter).populate('customer').exec();

        if (tweet !== null) {
            return res.status(200).send(tweet);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.error(err);
    }
};