const express = require('express');
const router = express.Router();

const HookRoutes = require('./hook.routes');
const AuthorRoutes = require('./author.routes');

router.use('/hook', HookRoutes);
router.use('/authors', AuthorRoutes);

module.exports = router;