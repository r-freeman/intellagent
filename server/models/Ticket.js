import {customAlphabet} from 'nanoid';
import mongoose, {Schema} from 'mongoose';

const nanoId = customAlphabet('0123456789', 8);

const TicketSchema = new Schema({
        reference: {
            type: String,
            unique: true
        },
        status: {
            type: String,
            enum: ['open', 'closed', 'hidden'],
            default: 'hidden'
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false,
            default: null
        },
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        issue_type: {
            type: Schema.Types.ObjectId,
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
            default: undefined
        }
    }, {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

// use pre middleware to generate a unique reference property
TicketSchema.pre('save', function (next) {
    const ticket = this;

    if (!ticket.isNew) {
        return next();
    }

    this.reference = nanoId();
    next();
});

// locate ticket by reference number
TicketSchema.statics.findByReference = async function (reference) {
    return await this.findOne({reference}).exec();
};

// locate ticket by welcome message id
TicketSchema.statics.findByWelcomeMessageId = async function (welcome_message_id) {
    return await this.findOne({welcome_message_id}).populate('customer').exec();
};

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;