import { Request, Response } from "express";
import { asyncHandler } from "../middlewares";
import User from "../models/user.model";
import { UserFields } from "../models/user.model";
import { generateToken } from "../utlis/generateToken";

const registerNewUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password }: UserFields = req.body;
    //hashpassword and then store in DB
    const user = new User({
        name,
        email,
        password,
        quizPlayed: []
    });
    await user.save();
    return res.status(200).json({ success: true, user });
});


const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        // unhash the password
        if (password === user.password) {
            const data = { id: user._id };
            const token = generateToken(data);
            return res.status(200).json({ success: true, token });
        }
        else {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }
    }
});



const getUserByID = asyncHandler(async (req: Request, res: Response) => {

    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.status(400).json({ success: false, message: 'No User Found' });
    }
    return res.status(200).json({ success: true, user });
});


const UpdateScore = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) {
        return res.status(400).json({ success: false, message: 'No User Found' });
    }
});

export { registerNewUser, loginUser, UpdateScore, getUserByID };