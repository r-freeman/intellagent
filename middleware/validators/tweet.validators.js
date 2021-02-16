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
    // check('extended_tweet')
    //     .trim()
    //     .escape()
    //     .optional({nullable: true}),
    check('in_reply_to_user_id')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('in_reply_to_user_id is required.')
        .bail(),
    check('in_reply_to_user_id_str')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('in_reply_to_user_id_str is required.')
        .bail(),
    check('in_reply_to_screen_name')
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage('in_reply_to_screen_name is required.')
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
// exports.validateCreate = [
//     body('email').custom(email => {
//         return Customer.findOne({email: email}).then(customer => {
//             if (customer) {
//                 return Promise.reject('email already exists');
//             }
//         });
//     }),
//     body('twitter_id').custom(twitter_id => {
//         return Customer.findOne({twitter_id: twitter_id}).then(customer => {
//             if (customer) {
//                 return Promise.reject('twitter_id already exists');
//             }
//         });
//     }),
//     body('twitter_id_str').custom(twitter_id_str => {
//         return Customer.findOne({twitter_id_str: twitter_id_str}).then(customer => {
//             if (customer) {
//                 return Promise.reject('twitter_id_str already exists');
//             }
//         });
//     }),
//     body('twitter_screen_name').custom(twitter_screen_name => {
//         return Customer.findOne({twitter_screen_name: twitter_screen_name}).then(customer => {
//             if (customer) {
//                 return Promise.reject('twitter_screen_name already exists');
//             }
//         });
//     }),
//     (req, res, next) => {
//         const errors = validationResult(req);
//
//         if (!errors.isEmpty()) {
//             return res.status(422).json({errors: errors.array()});
//         } else {
//             next();
//         }
//     }
// ];