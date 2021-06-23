import mongoose, {Schema} from 'mongoose';

const NotificationSchema = new Schema({
    type: {
        type: String,
        enum: ['info', 'success', 'error'],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;
