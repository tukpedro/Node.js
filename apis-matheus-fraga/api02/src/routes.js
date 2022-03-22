import { Router } from 'express';
import SessionController from './controllers/SessionController.js';

const routes = new Router();

routes.get('/', SessionController.store);

export default routes;
