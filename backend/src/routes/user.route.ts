import express from 'express';
import {
    loginUser,
    registerNewUser
} from '../controllers/user.controller';
const router = express.Router();

router.post('/register', registerNewUser);
router.post('/login', loginUser);
// router.get('/score')

export default router;