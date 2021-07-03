import express from 'express';
import { registerNewUser } from '../controllers/user.controller';
const router = express.Router();

router.post('/register', registerNewUser);
// router.post('/login')
// router.get('/score')

export default router;