import mongoose, {Schema} from 'mongoose';

const RoleSchema = new Schema({
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

RoleSchema.statics.findByName = async function (name) {
    return await this.findOne({name}).exec();
};

const Role = mongoose.model('Role', RoleSchema);

export default Role;
