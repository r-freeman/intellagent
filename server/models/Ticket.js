import {customAlphabet} from 'nanoid';
import mongoose, {Schema} from 'mongoose';
import Team from './Team';

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
                type: new Schema({
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
                }, {
                    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
                })
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

// assigns ticket to random agent
TicketSchema.methods.assign = async function () {
    const agg = [
        {
            '$match': {
                'tags': this.issue_type
            }
        },
        {
            '$lookup': {
                'from': 'users',
                'localField': '_id',
                'foreignField': 'team',
                'as': 'agent'
            }
        },
        {
            '$unwind': {
                'path': '$agent'
            }
        },
        {
            '$project': {
                '_id': 0,
                'name': 1,
                'agent._id': 1,
                'agent.name': 1
            }
        },
        {
            '$sample': {
                'size': 1
            }
        },
        {
            '$addFields': {
                'agent.team': '$name'
            }
        }
    ];

    const aggregate = await Team.aggregate(agg).exec();
    const {agent} = aggregate.shift();

    this.status = 'open';
    this.user = agent._id;
    this.welcome_message_id = null;
    await this.save();

    return agent;
};

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;