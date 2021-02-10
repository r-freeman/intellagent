const express = require('express');
const router = express.Router();

const HookRoutes = require('./hook.routes');

router.use('/hook', HookRoutes);

module.exports = router;