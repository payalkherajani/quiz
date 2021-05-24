import express from 'express';
import { addNewCategory, getAllCategories } from '../controllers/category.controller';
const router = express.Router();

router.post('/', addNewCategory);
router.get('/', getAllCategories);

export default router;