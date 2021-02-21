const express = require('express');
const TweetRoutes = express.Router();
const TweetController = require('../controllers/tweet.controller');

const {validateSchema, validateCreate} = require('../middleware/validators/tweet.validators');

TweetRoutes.post('/new', validateSchema, validateCreate, TweetController.create);
TweetRoutes.get('/show', TweetController.findOne);
TweetRoutes.get('/list', TweetController.findAll);

module.exports = TweetRoutes;