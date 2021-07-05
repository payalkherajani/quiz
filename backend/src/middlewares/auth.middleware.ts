import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import User from '../models/user.model';


const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {

        const decoded = await jwt.verify(token, process.env.JWT_SECRET!);
        console.log({ decoded });

        // req.user = decoded.user;

        // const { id } = req.user;

        // const verifiedUser = await User.findOne({ _id: id });

        // if (verifiedUser) {
        //     next();
        // }
        // else {
        //     return res.status(401).json({ message: 'Bad token, authorization denied' });
        // }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }

};

export default auth;