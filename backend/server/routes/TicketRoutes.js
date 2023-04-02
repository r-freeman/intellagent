import express from 'express';
import * as TicketController from '../controllers/TicketController';

const TicketRoutes = express.Router();

TicketRoutes.get('/tickets', TicketController.findAll);
TicketRoutes.post('/tickets/:id/messages', TicketController.createMessage);
TicketRoutes.put('/tickets/:id/status', TicketController.changeStatus);

export default TicketRoutes;
