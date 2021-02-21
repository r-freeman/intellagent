const express = require('express');
const CustomerRoutes = express.Router();
const CustomerController = require('../controllers/customer.controller');

const {validateSchema, validateCreate} = require('../middleware/validators/customer.validators');

CustomerRoutes.post('/', validateSchema, validateCreate, CustomerController.create);
CustomerRoutes.get('/', CustomerController.findOneOrAll);

module.exports = CustomerRoutes;