import Notification from '../models/Notification';

exports.findAll = async (req, res) => {
    try {
        const notifications = await Notification.find({user: req.user['sub']}).exec();

        return res.status(200).send(notifications);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};

exports.delete = async (req, res) => {
    try {
        const {id} = req.params;

        if (typeof id !== 'undefined' && id.length === 24) {
            const notification = await Notification.findOne({
                _id: id,
                user: req.user['sub']
            }).exec();

            if (notification) {
                notification.delete();
                return res.sendStatus(204);
            }
        }

        return res.status(404).send({error: 'Not found'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};