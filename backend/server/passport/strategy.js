import fs from 'fs';
import passportJwt from 'passport-jwt';

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

import {User} from '../models';

const PUB_KEY = fs.readFileSync('id_rsa_pub.pem', 'utf8');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

const verifyCallback = async function (payload, done) {
    try {
        const user = await User.findOne({_id: payload.sub}).exec();

        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        console.error(err);
        done(err, null);
    }
};

const strategy = new JwtStrategy(options, verifyCallback);
const passportUseStrategy = (passport) => {
    passport.use(strategy);
};

export default passportUseStrategy;