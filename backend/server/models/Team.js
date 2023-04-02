import mongoose, {Schema} from 'mongoose';

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    colour: {
        type: String,
        required: false,
        default: 'blue'
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ]
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;