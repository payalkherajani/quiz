// import Category from '../models/index';
import { Request, Response } from 'express';
import { asyncHandler } from '../middlewares';
import { Categories } from '../models';
import { Category } from '../models/category.model';

const addNewCategory = asyncHandler(async (req: Request, res: Response) => {
    const { level, image } = req.body;
    const createNewLevel = new Categories({
        level,
        image
    });
    await createNewLevel.save();
    res.status(200).json({ success: true, data: createNewLevel });
});


const getAllCategories = asyncHandler(async (req: Request, res: Response) => {
    const categories: Category[] = await Categories.find({});
    res.status(200).json({ success: true, categories });
});


const getAllQuizzess = asyncHandler(async (req: Request, res: Response) => {

    const { categoryId } = req.params;
    if (!categoryId) {
        return res.status(400).json({ success: false, message: 'Category ID is required' });
    }
    const category: Category | null = await Categories.findOne({ _id: categoryId }).populate('quizzes', ['quizname', 'questions', 'category', 'totalscore']);

    if (category === null) {
        return res.status(400).json({ success: false, message: 'No Category Found with this ID ' });
    }

    const { quizzes } = category;
    res.status(200).json({ success: true, quizzes });
});

const getSingleCategoryDetail = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const SingleCategory = await Categories.findOne({ _id: id });
    res.status(200).json({ success: false, SingleCategory });
});

export { addNewCategory, getAllCategories, getAllQuizzess, getSingleCategoryDetail };