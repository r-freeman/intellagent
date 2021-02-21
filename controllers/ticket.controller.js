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

        const ticket = await Ticket.findOne(filter).populate('customer').exec();

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

// return all tickets
exports.findAll = async (req, res) => {
    try {
        let ticket = await Ticket.find().populate('customer').exec();

        return res.status(200).send(ticket);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}