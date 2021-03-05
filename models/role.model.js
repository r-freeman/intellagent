const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
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

module.exports = Role;
