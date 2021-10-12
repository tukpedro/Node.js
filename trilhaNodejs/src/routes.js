import { Router } from 'express';
import MainController from './controllers/MainController.js';

const router = Router();

router.use(MainController.logRoutes);

router.post('/account', MainController.create);

router.get('/clients', MainController.getClients);

router.use(MainController.verifyCpf);

router.get('/statement', MainController.getStatement);

router.post('/deposit', MainController.deposit);

export default router;
