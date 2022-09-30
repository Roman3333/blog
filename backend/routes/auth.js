import { Router } from 'express';
import { register, login, getMe } from '../controllers/auth.js';

const router = new Router();

router.post('/register', register);
router.post('/login', login);
router.get('/getMe', getMe);

export default router;
