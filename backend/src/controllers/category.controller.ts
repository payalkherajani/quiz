// import Category from '../models/index';
import { Request, Response } from 'express';
import { asyncHandler } from '../middlewares';
import { Categories } from '../models';
import { Category } from '../models/category.model';

//@desc   Add a New Category
//route   /api/category
//access  Public
const addNewCategory = asyncHandler(async (req: Request, res: Response) => {
    const { level, image } = req.body;
    const createNewLevel = new Categories({
        level,
        image
    });
    await createNewLevel.save();
    res.status(200).json({ success: true, data: createNewLevel });
});

//@desc   GET all Categories
//route   /api/category
//access  Public
const getAllCategories = asyncHandler(async (req: Request, res: Response) => {
    const categories: Category[] = await Categories.find({});
    res.status(200).json({ success: true, categories });
});



export { addNewCategory, getAllCategories };