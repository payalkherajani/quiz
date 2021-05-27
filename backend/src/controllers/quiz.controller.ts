import { Request, Response } from "express";
import { asyncHandler } from "../middlewares";
import { Quiz } from "../models";
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
    const newlyCreatedQuiz = await addQuiz.save();  //_id 
    // put category_model call and push quiz id
});

export { addNewQuiz };