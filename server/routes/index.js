import express from 'express';
import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import TeamRoutes from './TeamRoutes';
import TicketRoutes from './TicketRoutes';
import HookRoutes from './HookRoutes';

const routes = express.Router();

routes.use(AuthRoutes);
routes.use(UserRoutes);
routes.use(TeamRoutes);
routes.use(TicketRoutes);
routes.use(HookRoutes);

export default routes;