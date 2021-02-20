const express = require('express');
const TicketRoutes = express.Router();
const TicketController = require('../controllers/ticket.controller');

// const {validateSchema, validateCreate} = require('../middleware/validators/tweet.validators');

TicketRoutes.post('/', TicketController.create);
TicketRoutes.get('/', TicketController.findOne);

module.exports = TicketRoutes;