import {Router} from 'express';
const router = Router();
import * as MessageController from './message.controller.js';
import validation from '../../Middleware/validation.js';
import { sendMessageSchema } from './message.validation.js';
import { auth } from '../../Middleware/auth.js';


router.post('/:receiverId',validation(sendMessageSchema),MessageController.sendMessage);
router.get('/',auth,MessageController.getMessages)

export default router;


