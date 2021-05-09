import mongoose, {Schema} from 'mongoose';
import {generateHashSalt} from '../passport/helpers';

const UserSchema = new Schema({
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
    photo: {
        type: String,
        required: false,
        default: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
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
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    team: {
        type: Schema.Types.ObjectId,
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
    return await this.findOne({email}).populate('team').exec();
};

const User = mongoose.model('User', UserSchema);

export default User;
