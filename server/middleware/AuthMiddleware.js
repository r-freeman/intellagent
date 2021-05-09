const compose = require("compose-middleware").compose;
const {body, check, validationResult} = require("express-validator");

import {User} from '../models';

const validateLogin = [
    check('email')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('email is required.')
        .isEmail()
        .withMessage('email is invalid.')
        .bail(),
    check('password')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('password is required.')
        .bail(),
    ((req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({errors: errors.array()});
        } else {
            next();
        }
    })
];

const validateUser = [
    body('email').custom(email => {
        email = email.toLowerCase();
        return User.findOne({email}).then(user => {
            if (!user) {
                return Promise.reject('User does not exist');
            }
        });
    }),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json({error: 'Unauthorised'});
        } else {
            next();
        }
    }
];

module.exports = compose([validateLogin, validateUser]);