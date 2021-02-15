const {body, check, validationResult} = require('express-validator');
const Customer = require('../../models/customer.model');

// validate according to customer schema
exports.validateSchema = [
    check('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('name is required.')
        .bail(),
    check('email')
        .trim()
        .escape()
        .optional({nullable: true})
        .isEmail()
        .withMessage('email is invalid.')
        .bail(),
    check('phone')
        .trim()
        .escape()
        .optional({nullable: true}),
    check('twitter_id')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('twitter_id is required.')
        .bail(),
    check('twitter_id_str')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('twitter_id_str is required.')
        .bail(),
    check('twitter_screen_name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('twitter_screen_name is required.')
        .bail(),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            next();
        }
    }
];

// check for duplicate indexes
exports.validateCreate = [
    body('email').custom(email => {
        return Customer.findOne({email: email}).then(customer => {
            if (customer) {
                return Promise.reject('email already exists');
            }
        });
    }),
    body('twitter_id').custom(twitter_id => {
        return Customer.findOne({twitter_id: twitter_id}).then(customer => {
            if (customer) {
                return Promise.reject('twitter_id already exists');
            }
        });
    }),
    body('twitter_id_str').custom(twitter_id_str => {
        return Customer.findOne({twitter_id_str: twitter_id_str}).then(customer => {
            if (customer) {
                return Promise.reject('twitter_id_str already exists');
            }
        });
    }),
    body('twitter_screen_name').custom(twitter_screen_name => {
        return Customer.findOne({twitter_screen_name: twitter_screen_name}).then(customer => {
            if (customer) {
                return Promise.reject('twitter_screen_name already exists');
            }
        });
    }),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()});
        } else {
            next();
        }
    }
];