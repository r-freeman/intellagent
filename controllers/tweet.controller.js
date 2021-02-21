const Tweet = require('../models/tweet.model');

// store a tweet
exports.create = async (req, res) => {
    try {
        const {
            tweet_id,
            tweet_id_str,
            customer,
            text
        } = req.body;

        const tweet = await Tweet.create({
            tweet_id,
            tweet_id_str,
            customer,
            text
        });

        return res.status(201).send(tweet);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}

// find a tweet by _id or tweet_id_str (includes customer in response)
exports.findOne = async (req, res) => {
    try {
        const {_id, tweet_id_str} = req.query;
        const filter = (typeof _id !== 'undefined' && _id.length === 24) ? {_id: _id} : {tweet_id_str: tweet_id_str};

        const tweet = await Tweet.findOne(filter).populate('customer').exec();

        if (tweet !== null) {
            return res.status(200).send(tweet);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

exports.findAll = async (req, res) => {
    try {
        let tweets = await Tweet.find().populate('customer').exec();

        return res.status(200).send(tweets);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};