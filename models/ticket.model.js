import {customAlphabet} from 'nanoid';

const mongoose = require('mongoose');
const nanoId = customAlphabet('0123456789', 8);

const TicketSchema = new mongoose.Schema({
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
    },
    reference: {
        type: String,
        unique: true
    },
    issue_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
    }
}, {timestamps: true});

// use pre middleware to generate a unique reference property
TicketSchema.pre('save', function (next) {
    this.reference = nanoId();
    next();
});

TicketSchema.statics.findByReference = async function (reference) {
    return await this.findOne({reference}).exec();
};

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
