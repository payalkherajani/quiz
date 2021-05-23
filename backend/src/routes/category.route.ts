import express from 'express';
import { addNewCategory } from '../controllers/category.controller';
const router = express.Router();

router.post('/', addNewCategory);

export default router;