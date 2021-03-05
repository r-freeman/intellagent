const User = require('../models/user.model');
const {validatePassword, issueJwt} = require('../passport/helpers');

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findByEmail(email);

        if (!user) return res.status(401).send({error: 'Unauthorised'});

        // validate the password against the hash and salt combination
        const validPassword = validatePassword(password, user.hash, user.salt);

        if (validPassword) {
            const {token} = issueJwt(user);
            const {_id, name, email} = user;

            return res.status(200).send({_id, name, email, token});
        }

        return res.status(401).send({error: 'Unauthorised'});
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
};

exports.register = async (req, res) => {
    try {
        return res.status(201).send();
    } catch (err) {
        console.error(err);
        return res.status(500).send();
    }
}