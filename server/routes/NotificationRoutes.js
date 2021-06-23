import express from 'express';
import * as NotificationController from '../controllers/NotificationController';

const NotificationRoutes = express.Router();

NotificationRoutes.get('/notifications', NotificationController.findAll);
NotificationRoutes.delete('/notifications', NotificationController.deleteAll);
NotificationRoutes.delete('/notifications/:id', NotificationController.delete);

export default NotificationRoutes;
