import {Router} from 'express';
const router = Router();
import * as AuthController from './auth.controller.js';
import validation from '../../Middleware/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';

router.post('/register',validation(registerSchema),AuthController.register);
router.post('/login',validation(loginSchema),AuthController.login);
<<<<<<< HEAD
router.get('/allUsers',AuthController.allUsers);
=======
>>>>>>> 901555ae540c708282778e954cbb97525893b308

export default router;


