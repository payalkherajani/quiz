import { Request, Response } from "express";
import { asyncHandler } from "../middlewares";
import User from "../models/user.model";
import { UserFields } from "../models/user.model";
import { generateToken } from "../utlis/generateToken";
import bcrypt from 'bcrypt';
import { Categories } from "../models";
const mongoose = require('mongoose');


const registerNewUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password }: UserFields = req.body;

    const userAlreadyExistswithEmail = await User.findOne({ email });

    if (userAlreadyExistswithEmail === null) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            quizPlayed: []
        });
        await user.save();
        return res.status(200).json({ success: true, user });
    }
    else {
        return res.status(400).json({ success: false, message: 'User Already Exists with this email' });
    }

});


const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            const data = { id: user._id };
            const token = generateToken(data);
            return res.status(200).json({ success: true, token });
        }
        else {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }
    }
});


const getUserByID = async (req: Request, res: Response) => {
    try {
        const userId = req.user!.id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({ success: false, message: 'No User Found' });
        }
        return res.status(200).json({ success: true, user });
    } catch (err) {
        console.log(err);
    }
};


const UpdateScore = asyncHandler(async (req: Request, res: Response) => {

    const userId = req.user!.id;
    const { quizId, score } = req.body;
    const user = await User.findOne({ _id: userId });
    if (!user) {
        return res.status(400).json({ success: false, message: 'No User Found' });
    }

    let quizUpdated;

    const quizIDdontExists = user.quizPlayed.some((q) => q.quiz == quizId);


    if (user.quizPlayed.length === 0 || !quizIDdontExists) {
        quizUpdated = [...user.quizPlayed, { _id: new mongoose.Types.ObjectId(), quiz: quizId, score: score }];
    }
    else {
        quizUpdated = user.quizPlayed.map((q) => {
            if (q.quiz == quizId) {
                q.score = Number(score);
            }
            return q;
        });
    }

    const update = {
        name: user.name,
        email: user.email,
        password: user.password,
        quizPlayed: quizUpdated
    };

    const updatedResults = await User.findOneAndUpdate({ _id: userId }, { $set: update }, { new: true });

    return res.status(200).json({ success: true, updatedResults });
});


const getUserScoreDetails = asyncHandler(async (req: Request, res: Response) => {
    const userId = req.user!.id;

    //2-level-of populate data
    const details = await User.findOne({ _id: userId }).populate({
        path: 'quizPlayed.quiz',
        select: ['quizname', 'category'],
        populate: { path: 'category', select: 'level' }
    }).exec();
    const scoredetails = details?.quizPlayed;
    return res.status(200).json({ success: true, scoredetails });
});
export { registerNewUser, loginUser, UpdateScore, getUserByID, getUserScoreDetails };