import {Ticket, Customer, Tag} from '../models';
import twitterClient from '../twitter/client';
import messageBody from '../twitter/messages/message_body';

const socketio = require('../socketio');
const twClient = twitterClient;

exports.findAll = async (req, res) => {
    try {
        const tickets = await Ticket.find({user: req.user['sub']}).populate('customer issue_type').exec();

        return res.status(200).send(tickets);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};

exports.createMessage = async (req, res) => {
    try {
        const {id} = req.params;
        const {text, recipient_id, incoming} = req.body;
        const ticket = await Ticket.findOne({_id: id, user: req.user['sub']}).exec();

        let message = {
            body: text
        };
        if (ticket !== null) {
            const io = socketio.getInstance();

            ticket.customer = await Customer.findById(ticket.customer).exec();
            ticket.issue_type = await Tag.findById(ticket.issue_type).exec();

            // handle incoming message
            if (incoming) {
                message.incoming = true;
                message.read = false;

                ticket.messages.push(message);
                await ticket.save();

                io.to(ticket.user.toString()).emit('TICKET_NEW_MESSAGE', ticket);

                return res.sendStatus(201);
            }

            // handle outgoing message
            messageBody.event.message_create.target.recipient_id = recipient_id;
            messageBody.event.message_create.message_data.text = text;

            const response = await twClient.sendDirectMessage(messageBody);

            if (response) {
                message.incoming = false;
                message.read = true;

                ticket.messages.push(message);
                await ticket.save();

                return res.status(201).send(ticket);
            }
        }

        return res.status(422).send({error: 'Unprocessable entity'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};

exports.changeStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const ticket = await Ticket.findOne({_id: id, user: req.user['sub']}).exec();

        const statuses = ['open', 'closed'];

        if (statuses.includes(status.toLowerCase()) && ticket !== null) {
            ticket.status = status;
            await ticket.save();

            ticket.customer = await Customer.findById(ticket.customer).exec();
            ticket.issue_type = await Tag.findById(ticket.issue_type).exec();

            return res.status(200).send(ticket);
        }

        return res.status(422).send({error: 'Unprocessable entity'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};