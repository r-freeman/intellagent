import {User} from '../models';
import {validatePassword, issueJwt} from '../passport/helpers';

exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findByEmail(email);
        const isPasswordValid = validatePassword(password, user.hash, user.salt);

        if (isPasswordValid) {
            const {token} = issueJwt(user);

            if (token) {
                const {_id, name, email, phone, photo, team} = user;
                return res.status(200).send({_id, name, email, phone, photo, team, token});
            }
        }

        if (!user) return res.status(401).send({error: 'Unauthorised'});
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
}