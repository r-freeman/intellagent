const express = require('express');
const CustomerRoutes = express.Router();
const CustomerController = require('../controllers/customer.controller');

const {validateSchema, validateCreate} = require('../middleware/router_level/customer.validator');

CustomerRoutes.post('/new', validateSchema, validateCreate, CustomerController.create);
CustomerRoutes.get('/show', CustomerController.findOne);
CustomerRoutes.get('/list', CustomerController.findAll);
// CustomerRoutes.put('/update', CustomerController.update);

module.exports = CustomerRoutes;