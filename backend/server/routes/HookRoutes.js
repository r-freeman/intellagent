import express from 'express';
import * as HookController from '../controllers/HookController';

const HookRoutes = express.Router();

HookRoutes.post('/hooks', HookController.post);

export default HookRoutes;
