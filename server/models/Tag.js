import mongoose, {Schema} from 'mongoose';

const TagSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }
});

TagSchema.statics.findByName = async function (name) {
    return await this.findOne({name: name.toLowerCase()}).exec();
};

const Tag = mongoose.model('Tag', TagSchema);

export default Tag;
