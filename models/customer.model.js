const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    phone: {
        type: String,
        required: false
    },
    twitter_id: {
        type: Number,
        required: true,
        unique: true,
    },
    twitter_id_str: {
        type: String,
        required: true,
        unique: true
    },
    twitter_screen_name: {
        type: String,
        required: true,
        unique: true
    }
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
