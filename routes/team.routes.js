const express = require('express');
const TeamRoutes = express.Router();
const TeamController = require('../controllers/team.controller');

TeamRoutes.get('/show', TeamController.findOne);
TeamRoutes.get('/list', TeamController.findAll);

module.exports = TeamRoutes;