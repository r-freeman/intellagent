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
        enum: ['unassigned', 'open', 'closed'],
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
    }
}, {timestamps: true});

// use pre middleware to generate a unique reference property
TicketSchema.pre('save', function (next) {
    this.reference = nanoId();
    next();
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
