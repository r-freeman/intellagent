const express = require('express');
const AuthRoutes = express.Router();
const AuthController = require('../controllers/auth.controller');

AuthRoutes.post('/login', AuthController.login);
AuthRoutes.post('/register', AuthController.register);

module.exports = AuthRoutes;