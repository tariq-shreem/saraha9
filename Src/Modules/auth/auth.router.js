import {Router} from 'express';
const router = Router();
import * as AuthController from './auth.controller.js';
import validation from '../../Middleware/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';

router.post('/register',validation(registerSchema),AuthController.register);
router.post('/login',validation(loginSchema),AuthController.login);
router.get('/allUsers',AuthController.allUsers);

export default router;


