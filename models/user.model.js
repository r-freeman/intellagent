const mongoose = require('mongoose');
const {generateHashSalt} = require('../passport/helpers');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: false,
        default: null
    }
});

// hash the users password on save or update
UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    const {salt, hash} = generateHashSalt(user.password);

    user.hash = hash;
    user.salt = salt;

    next();
});

UserSchema.statics.findByEmail = async function (email) {
    return await this.findOne({email}).select('-team -role').exec();
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
