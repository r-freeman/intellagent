import {Customer, Ticket} from '../../models';

const socketio = require('../../socketio');

/**
 *
 * @param message
 * @param sender_id
 * @returns {Promise<null|{event: *}>}
 */
export async function assignTicket(message, sender_id) {
    try {
        const io = socketio.getInstance();
        const customer = await Customer.findOne({twitter_id: sender_id}).exec();
        const ticket = await Ticket.findOne({customer: customer._id, status: 'hidden'}).exec();

        if (ticket) {
            const agent = await ticket.assign();

            io.to(ticket.user.toString()).emit('TICKET_ASSIGNED', ticket);

            message.message_create.message_data.text = `Thank you for confirming, ${agent.name.split(" ")[0]} from our ${agent.team} team will assist you shortly.`;

            return {event: message};
        } else {
            return null;
        }
    } catch (err) {
        console.error(err);
    }
}
