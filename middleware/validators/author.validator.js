const {check, validationResult} = require('express-validator');

// validate author middleware
exports.validateAuthor = [
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
    check('name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('name is required.')
        .bail(),
    check('screen_name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('screen_name is required.')
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