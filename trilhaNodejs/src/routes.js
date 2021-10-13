import { Router } from 'express';
import ClientsController from './controllers/ClientsController.js';
import OperationsController from './controllers/OperationsController.js';
import Middlewares from './controllers/Middlewares.js';

const router = Router();

router.use(Middlewares.logRoutes);

router.post('/account', ClientsController.create);

router.get('/clients', ClientsController.getClients);

router.use(Middlewares.verifyCpf);

router.get('/statement', ClientsController.getStatement);

router.post('/deposit', OperationsController.deposit);

router.post('/withdraw', OperationsController.withdraw);

export default router;
