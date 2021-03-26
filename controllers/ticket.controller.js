const Ticket = require('../models/ticket.model');

// create a new ticket
exports.create = async (req, res) => {
    try {
        const {status, customer} = req.body;

        const ticket = await Ticket.create({
            status,
            customer
        });

        return res.status(201).send(ticket);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

// find ticket by ticket._id or by reference
exports.findOne = async (req, res) => {
    try {
        const {_id, reference} = req.query;
        const filter = (typeof _id !== 'undefined' && _id.length === 24) ? {_id: _id} : {reference: reference};

        const ticket = await Ticket.findOne(filter).populate('customer issue_type').exec();

        if (ticket !== null) {
            return res.status(200).send(ticket);
        } else {
            return res.status(404).send({});
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

// returns all the user's tickets
exports.findAll = async (req, res) => {
    try {
        const tickets = await Ticket.find({user: req.user['sub']}).populate('customer issue_type').exec();

        return res.status(200).send(tickets);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}