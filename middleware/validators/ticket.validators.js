const {body, check, validationResult} = require('express-validator');
const Customer = require('../../models/customer.model');

// validate according to customer schema
exports.validateSchema = [
    check('customer')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('customer is required.')
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

exports.validateCreate = [
    body('customer').custom(async (customer) => {
        try {
            await Customer.findOne({_id: customer}).exec();
        } catch (err) {
            return Promise.reject('customer does not exist');
        }
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