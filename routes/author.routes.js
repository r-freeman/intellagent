const express = require('express');
const AuthorRoutes = express.Router();
const AuthorController = require('../controllers/author.controller');

const {validateAuthor} = require('../middleware/validators/author.validator');

AuthorRoutes.post('/', validateAuthor, AuthorController.upsert);

module.exports = AuthorRoutes;