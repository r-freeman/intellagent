import express from 'express';
import * as AuthController from '../controllers/AuthController';

const AuthRoutes = express.Router();

// middleware
const AuthMiddleware = require("../middleware/AuthMiddleware");

AuthRoutes.post('/auth/login', AuthMiddleware, AuthController.login);

export default AuthRoutes;
