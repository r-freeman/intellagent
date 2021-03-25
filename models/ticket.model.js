import {customAlphabet} from 'nanoid';

const mongoose = require('mongoose');
const nanoId = customAlphabet('0123456789', 8);

const TicketSchema = new mongoose.Schema({
    reference: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        enum: ['unassigned', 'open', 'closed', 'hidden'],
        default: 'unassigned'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    issue_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    },
    messages: [
        {
            incoming: {
                type: Boolean,
                required: true
            },
            read: {
                type: Boolean,
                required: false,
                default: false
            },
            body: {
                type: String,
                required: true
            }
        }
    ],
    welcome_message_id: {
        type: String,
        required: false,
        unique: true
    }
}, {timestamps: true});

// use pre middleware to generate a unique reference property
TicketSchema.pre('save', function (next) {
    const ticket = this;

    if (!ticket.isNew) {
        return next();
    }

    this.reference = nanoId();
    next();
});

// locate ticket by referenece number
TicketSchema.statics.findByReference = async function (reference) {
    return await this.findOne({reference}).exec();
};

// locate ticket by welcome message id
TicketSchema.statics.findByWelcomeMessageId = async function (welcome_message_id) {
    return await this.findOne({welcome_message_id}).exec();
};

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
