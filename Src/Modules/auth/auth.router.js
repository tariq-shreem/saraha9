import {Router} from 'express';
const router = Router();
import * as AuthController from './auth.controller.js';

router.post('/register',AuthController.register);
router.post('/login',AuthController.login);

export default router;