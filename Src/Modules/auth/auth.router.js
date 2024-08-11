import {Router} from 'express';
const router = Router();
import * as AuthController from './auth.controller.js';

router.post('/',AuthController.register);

export default router;