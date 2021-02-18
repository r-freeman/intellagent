const {body, check, validationResult} = require('express-validator');
const Tweet = require('../../models/tweet.model');

// validate according to customer schema
exports.validateSchema = [
    check('tweet_id')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('tweet_id is required.')
        .bail(),
    check('tweet_id_str')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('tweet_id_str is required.')
        .bail(),
    check('customer')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('customer is required.')
        .bail(),
    check('text')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('text is required.')
        .bail(),
    check('created_at')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('created_at is required.')
        .bail(),
    check('timestamp_ms')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('timestamp_ms is required.')
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
    body('tweet_id').custom(tweet_id => {
        return Tweet.findOne({tweet_id: tweet_id}).then(tweet => {
            if (tweet) {
                return Promise.reject('tweet_id already exists');
            }
        });
    }),
    body('tweet_id_str').custom(tweet_id_str => {
        return Tweet.findOne({tweet_id_str: tweet_id_str}).then(tweet => {
            if (tweet) {
                return Promise.reject('tweet_id_str already exists');
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