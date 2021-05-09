import {Team} from '../models';

exports.findAll = async (req, res) => {
    try {
        const teams = await Team.find().populate('tags').exec();

        return res.status(200).send(teams);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
};