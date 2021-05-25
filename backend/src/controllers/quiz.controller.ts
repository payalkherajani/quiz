import { Request, Response } from "express";
import asynHandler from "../middlewares/async-handler.middleware";
import { Quiz } from "../models";
import { Puzzel } from "../models/quiz.model";


const addNewQuiz = asynHandler(async (req: Request, res: Response) => {
    const { quizname, questions, totalscore }: Puzzel = req.body;
    const addQuiz = new Quiz({
        quizname,
        questions,
        totalscore
    });
    await addQuiz.save();
});

export { addNewQuiz };