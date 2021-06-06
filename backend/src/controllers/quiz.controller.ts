import { Request, Response } from "express";
import { asyncHandler } from "../middlewares";
import { Quiz, Categories } from "../models";
import { Puzzel } from "../models/quiz.model";

//@desc   Add a New Quiz
//route   /api/quiz
//access  Public

const addNewQuiz = asyncHandler(async (req: Request, res: Response) => {
    const { quizname, questions, category }: Puzzel = req.body;
    const addQuiz = new Quiz({
        quizname,
        questions,
        category
    });
    const newlyCreatedQuiz = await addQuiz.save();
    const categoryModel = await Categories.findOne({ _id: category });
    categoryModel?.quizzes.push(newlyCreatedQuiz._id);
    await categoryModel?.save();
    res.status(200).json({ success: true, data: newlyCreatedQuiz });

});

export { addNewQuiz };