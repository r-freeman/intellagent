import express from 'express';
import * as TeamController from '../controllers/TeamController';

const TeamRoutes = express.Router();

TeamRoutes.get('/teams', TeamController.findAll);

export default TeamRoutes;