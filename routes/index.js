const express = require('express');
const router = express.Router();

const HookRoutes = require('./hook.routes');
const CustomerRoutes = require('./customer.routes');
const TweetRoutes = require('./tweet.routes');

router.use('/hook', HookRoutes);
router.use('/customers', CustomerRoutes);
router.use('/tweets', TweetRoutes);

module.exports = router;