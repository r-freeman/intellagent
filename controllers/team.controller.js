const Team = require('../models/team.model');
const Tag = require('../models/tag.model');

exports.findOne = async (req, res) => {
    try {
        if (Object.keys(req.query).length !== 0) {
            const {_id} = req.query;
            const filter = (typeof _id !== 'undefined' && _id.length === 24) ? {_id: _id} : {};
            const team = await Team.findOne(filter).populate('tags').exec();

            if (team !== null) {
                return res.status(200).send(team);
            }
        }

        return res.status(404).send({});
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

exports.findAll = async (req, res) => {
    try {
        let teams = await Team.find().populate('tags').exec();

        return res.status(200).send(teams);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};