const Ticket = require('../models/ticket.model');

// create a new ticket
exports.create = async (req, res) => {
    try {
        const {status} = req.body;

        const ticket = await Ticket.create({
            status
        });

        return res.status(201).send(ticket);
    } catch (err) {
        console.error(err);
    }
};

// find customer by customer._id or by reference
exports.findOne = async (req, res) => {
    try {
        const {_id, reference} = req.query;
        const filter = typeof _id !== 'undefined' ? {_id: _id} : {reference: reference};

        const ticket = await Ticket.findOne(filter).exec();

        if (ticket !== null) {
            return res.status(200).send(ticket);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.error(err);
    }
};