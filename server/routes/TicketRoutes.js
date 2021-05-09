import express from 'express';
import * as TicketController from '../controllers/TicketController';

const TicketRoutes = express.Router();

TicketRoutes.get('/tickets', TicketController.findAll);
TicketRoutes.post('/tickets/:id/messages', TicketController.createMessage);

export default TicketRoutes;
