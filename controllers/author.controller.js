const Author = require('../models/author.model');

// update an existing author or create one if it doesn't exist
exports.upsert = (req, res) => {
    try {
        const {twitter_id, twitter_id_str, name, screen_name} = req.body;

        // try to locate the author using twitter_id as the index
        Author.findOneAndUpdate({'twitter_id': twitter_id}, {
            twitter_id,
            twitter_id_str,
            name,
            screen_name
        }, {upsert: true, useFindAndModify: false}, function (err, doc) {
            if (err) return res.status(500).send({error: err});

            return res.status(200).send(doc);
        });
    } catch (e) {
        console.error(e);
    }
};