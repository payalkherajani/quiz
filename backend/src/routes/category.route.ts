import express from 'express';

import {
    addNewCategory,
    getAllCategories,
    getAllQuizzess,
    getSingleCategoryDetail
} from '../controllers/category.controller';

const router = express.Router();

router.post('/', addNewCategory);
router.get('/', getAllCategories);
router.get('/:categoryId', getAllQuizzess);
router.get('/single/:id', getSingleCategoryDetail);

export default router;