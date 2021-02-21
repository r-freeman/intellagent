const express = require('express');
const TicketRoutes = express.Router();
const TicketController = require('../controllers/ticket.controller');

const {validateSchema, validateCreate} = require('../middleware/validators/ticket.validators');

TicketRoutes.post('/new', validateSchema, validateCreate, TicketController.create);
TicketRoutes.get('/show', TicketController.findOne);
TicketRoutes.get('/list', TicketController.findAll);

module.exports = TicketRoutes;