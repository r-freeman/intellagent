const express = require('express');
const TweetRoutes = express.Router();
const TweetController = require('../controllers/tweet.controller');

const {validateSchema} = require('../middleware/validators/tweet.validators');

TweetRoutes.post('/', validateSchema, TweetController.create);
TweetRoutes.get('/', TweetController.findOne);

module.exports = TweetRoutes;