import express from 'express';
import * as UserController from '../controllers/UserController';

const UserRoutes = express.Router();

UserRoutes.get('/users/:id', UserController.findOne);
UserRoutes.get('/users', UserController.findAll);

export default UserRoutes;