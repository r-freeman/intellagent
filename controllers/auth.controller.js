const {validatePassword, generateHashSalt, issueJwt} = require('../passport/helpers');
const User = require('../models/user.model');
const Role = require('../models/role.model');

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findByEmail(email);

        if (!user) return res.status(401).send({error: 'Unauthorised'});

        // validate the password against the hash and salt combination
        const validPassword = validatePassword(password, user.hash, user.salt);

        if (validPassword) {
            const {token} = issueJwt(user);

            if (token) {
                const {_id, name, email} = user;
                return res.status(200).send({_id, name, email, token});
            }
        }

        return res.status(401).send({error: 'Unauthorised'});
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

exports.register = async (req, res) => {
    try {
        const {email, name, password} = req.body;
        const {salt, hash} = generateHashSalt(password);
        const userExists = await User.findByEmail(email);

        if (userExists) return res.status(422).send({error: 'User already exists'});

        // create a new user and assign agent role
        const agentRole = await Role.findByName('agent');
        const newUser = new User({name, email, hash, salt, role: agentRole._id});

        const user = await newUser.save();

        // retrieve the token
        const {token} = issueJwt(user);

        if (token) {
            const {_id, name, email} = user;
            return res.status(200).send({_id, name, email, token});
        }

        return res.status(201).send();

    } catch
        (err) {
        console.error(err);
        return res.status(500).send();
    }
}