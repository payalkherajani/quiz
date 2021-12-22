import express from 'express';
import { addNewQuiz } from '../controllers/quiz.controller';
const router = express.Router();
router.post('/', addNewQuiz);

export default router;