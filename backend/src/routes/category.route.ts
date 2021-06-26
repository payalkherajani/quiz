import express from 'express';
import { addNewCategory, getAllCategories, getAllQuizzess } from '../controllers/category.controller';
const router = express.Router();

router.post('/', addNewCategory);
router.get('/', getAllCategories);
router.get('/:categoryId', getAllQuizzess);

export default router;