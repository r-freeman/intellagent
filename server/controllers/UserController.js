import {User, Team, Role} from '../models';

exports.findOne = async (req, res) => {
    try {
        if (Object.keys(req.params).length !== 0) {
            const {id} = req.params;
            const filter = (typeof id !== 'undefined' && id.length === 24) ? {_id: id} : {};
            const user = await User.findOne(filter)
                .populate([
                    {
                        path: 'role',
                        model: Role
                    },
                    {
                        path: 'team',
                        select: '-tags',
                        model: Team
                    }
                ])
                .select('name email phone photo').exec();

            if (user !== null) {
                return res.status(200).send(user);
            }
        }

        return res.status(404).send({error: 'Not found'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}

exports.findAll = async (req, res) => {
    try {
        const users = await User.find()
            .populate([
                {
                    path: 'role',
                    model: Role
                },
                {
                    path: 'team',
                    select: '-tags',
                    model: Team
                }
            ])

        return res.status(200).send(users);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}