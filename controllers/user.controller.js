const User = require('../models/user.model');
const Role = require('../models/role.model');
const Team = require('../models/team.model');
const Tag = require('../models/tag.model');

exports.findOne = async (req, res) => {
    try {
        if (Object.keys(req.query).length !== 0) {
            const {_id} = req.query;
            const filter = (typeof _id !== 'undefined' && _id.length === 24) ? {_id: _id} : {};
            const user = await User.findOne(filter)
                .populate([
                    {
                        path: 'role',
                        model: Role
                    },
                    {
                        path: 'team',
                        model: Team,
                        populate: [{
                            path: 'tags',
                            model: Tag
                        }]
                    }
                ])
                .select('name email phone').exec();

            if (user !== null) {
                return res.status(200).send(user);
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
        let users = await User.find()
            .populate([
                {
                    path: 'role',
                    model: Role
                },
                {
                    path: 'team',
                    model: Team,
                    populate: [{
                        path: 'tags',
                        model: Tag
                    }]
                }
            ])
            .select('name email phone')
            .exec();

        return res.status(200).send(users);
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};