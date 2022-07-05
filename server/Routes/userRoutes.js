import express from 'express';
import { Login, Singup } from '../controllers/user.js';

const router = express.Router();

router.post('/singup',Singup)
router.post('/login',Login)

export default router;