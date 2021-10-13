import { Router } from 'express';
import ClientsController from './controllers/ClientsController.js';
import OperationsController from './controllers/OperationsController.js';
import Middlewares from './controllers/Middlewares.js';

const router = Router();

router.use(Middlewares.logRoutes);

router.post('/account', Middlewares.cpfFormat, ClientsController.create);

router.get('/clients', ClientsController.getClients);

router.use(Middlewares.cpfExists);

router.get('/statement', ClientsController.getStatement);

router.get('/statement/date', ClientsController.getStatementByDate);

router.post('/deposit', OperationsController.deposit);

router.post('/withdraw', OperationsController.withdraw);

export default router;
