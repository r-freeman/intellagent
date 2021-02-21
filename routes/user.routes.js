const express = require('express');
const UserRoutes = express.Router();
const UserController = require('../controllers/user.controller');

UserRoutes.get('/list', UserController.findAll);

module.exports = UserRoutes;