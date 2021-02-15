const express = require('express');
const router = express.Router();

const HookRoutes = require('./hook.routes');
const CustomerRoutes = require('./customer.routes');

router.use('/hook', HookRoutes);
router.use('/customers', CustomerRoutes);

module.exports = router;