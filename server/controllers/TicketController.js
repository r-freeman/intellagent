import {Ticket} from '../models';
import twitterClient from '../twitter/client';

const twClient = twitterClient;

exports.findAll = async (req, res) => {
    try {
        const tickets = await Ticket.find({user: req.user['sub']}).populate('customer issue_type').exec();

        return res.status(200).send(tickets);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

exports.createMessage = async (req, res) => {
    try {
        const {id} = req.params;
        const {text, recipient_id} = req.body;

        const ticket = await Ticket.findById(id).exec();

        if (ticket !== null) {
            const response = await twClient.sendDirectMessage(text, recipient_id);

            if (response !== null) {
                const message = {
                    incoming: false,
                    read: true,
                    body: text
                }

                ticket.messages.push(message);
                await ticket.save();

                return res.status(201).send(ticket.messages.slice(-1).shift());
            }
        }

        return res.status(422).send({error: 'Unprocessable entity'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}