const express = require('express');
const HookRoutes = express.Router();
const HookController = require('../controllers/hook.controller');

HookRoutes.post('/', HookController.post);

module.exports = HookRoutes;