const mongoose = require('mongoose');

// tweets belong to one customer and customers can have many tweets
const TweetSchema = new mongoose.Schema({
    tweet_id: {
        type: Number,
        required: true,
        unique: true,
        index: true
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
    },
    extended_text: {
        type: String,
        required: false
    },
    in_reply_to_user_id: {
        type: Number,
        required: true,
    },
    in_reply_to_user_id_str: {
        type: String,
        required: true
    },
    in_reply_to_user_screen_name: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    },
    timestamp_ms: {
        type: String,
        required: true
    }
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;
