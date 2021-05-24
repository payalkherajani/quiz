// import Category from '../models/index';
import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async-handler.middleware';
import { Categories } from '../models';

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
    const categories = await Categories.find({});
    res.status(200).json({ success: true, data: categories });
});



export { addNewCategory, getAllCategories };