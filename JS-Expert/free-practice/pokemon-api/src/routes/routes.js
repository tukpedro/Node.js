import { Router } from 'express';
import { Controller } from '../controller/controller.js';

const router = Router();

router.get('/:pokemon', Controller.getPokemon);

export default router;
