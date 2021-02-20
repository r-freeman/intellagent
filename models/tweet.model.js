const mongoose = require('mongoose');

// tweets belong to one customer and customers can have many tweets
const TweetSchema = new mongoose.Schema({
    tweet_id: {
        type: Number,
        required: true,
        unique: true,
    },
    tweet_id_str: {
        type: String,
        required: true,
        unique: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    text: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;
