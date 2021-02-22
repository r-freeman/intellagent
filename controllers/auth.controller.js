const User = require('../models/user.model');

exports.login = async (req, res) => {
    try {
        return res.status(200).send();
        // return res.status(401).send();
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

exports.register = async (req, res) => {
    try {
        return res.status(201).send();
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}