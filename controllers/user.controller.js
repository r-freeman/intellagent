const User = require('../models/user.model');
const Role = require('../models/role.model');

exports.findAll = async (req, res) => {
    try {
        let users = [];
        users = await User.find().populate('role').select('name email phone role').exec();

        return res.status(200).send(users);
    } catch (err) {
        console.error(err);
    }
};