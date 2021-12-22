import express from 'express';
import {
    getUserByID,
    getUserScoreDetails,
    loginUser,
    registerNewUser,
    UpdateScore
} from '../controllers/user.controller';
import auth from '../middlewares/auth.middleware';
const router = express.Router();

router.post('/register', registerNewUser);
router.post('/login', loginUser);
router.get('/', auth, getUserByID);
router.post('/score', auth, UpdateScore);
router.get('/scoredetails', auth, getUserScoreDetails);

export default router;