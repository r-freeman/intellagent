const Team = require('../models/team.model');
const Tag = require('../models/tag.model');

exports.findAll = async (req, res) => {
    try {
        let teams = await Team.find().populate('tags').exec();

        return res.status(200).send(teams);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};