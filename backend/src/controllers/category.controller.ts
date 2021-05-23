// import Category from '../models/index';
import { Request, Response } from 'express';
import asyncHandler from '../middlewares/async-handler.middleware';


//@desc   Add a New Category
//route   
//access
const addNewCategory = asyncHandler(async (req: Request, res: Response) => {
    console.log(req.body);
    res.status(200).json({ success: true, message: 'Got Data' });
});

export { addNewCategory };