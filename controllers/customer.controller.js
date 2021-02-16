const Customer = require('../models/customer.model');

// create a new customer
exports.create = async (req, res) => {
    try {
        const {name, twitter_id, twitter_id_str, twitter_screen_name} = req.body;

        const customer = await Customer.create({
            name, twitter_id, twitter_id_str, twitter_screen_name
        });

        return res.status(201).send(customer);
    } catch (err) {
        console.error(err);
    }
};

// find customer by customer._id or twitter_id_str
exports.findOne = async (req, res) => {
    try {
        const {_id, twitter_id_str} = req.query;
        const filter = typeof _id !== 'undefined' ? {_id: _id} : {twitter_id_str: twitter_id_str};

        const customer = await Customer.findOne(filter).exec();

        if (customer !== null) {
            return res.status(200).send(customer);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.error(err);
    }
};