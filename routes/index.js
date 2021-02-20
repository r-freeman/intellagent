const express = require('express');
const router = express.Router();

const HookRoutes = require('./hook.routes');
const CustomerRoutes = require('./customer.routes');
const TweetRoutes = require('./tweet.routes');
const TicketRoutes = require('./ticket.routes');
const UserRoutes = require('./user.routes');

router.use('/hook', HookRoutes);
router.use('/customers', CustomerRoutes);
router.use('/tweets', TweetRoutes);
router.use('/tickets', TicketRoutes);
router.use('/users', UserRoutes);

module.exports = router;