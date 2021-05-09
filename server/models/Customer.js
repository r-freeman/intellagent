import mongoose, {Schema} from 'mongoose';

const CustomerSchema = new Schema({
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
    },
    twitter_photo_url: {
        type: String,
        required: false,
        default: "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
    }
});

CustomerSchema.statics.findByEmail = async function (email) {
    return await this.findOne({email}).exec();
};

CustomerSchema.statics.findByTwitterId = async function (twitter_id_str) {
    return await this.findOne({twitter_id_str}).exec();
};

CustomerSchema.statics.findByTwitterScreenName = async function (twitter_screen_name) {
    return await this.findOne({twitter_screen_name}).exec();
};

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;
