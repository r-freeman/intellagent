const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    twitter_id: {
        unique: true,
        type: Number,
        required: true
    },
    twitter_id_str: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    screen_name: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
