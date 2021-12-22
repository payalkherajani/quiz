import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import User from '../models/user.model';
// import { JWTPayload } from '../utlis/generateToken';


// export interface IRequest extends Request {
//     user: {
//         id: string;
//     };
// }
const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-auth-token');

    if (!token) {
        res.status(401).json({ success: false, message: 'No token, authorization denied' });
        return;
    }

    try {

        const decoded = await jwt.verify(token, process.env.JWT_SECRET!);
        if (typeof decoded === 'string') {
            res.status(400).json({ success: false, message: 'Error' });
            return;
        }

        req.user = decoded.user;

        const { id } = req.user!;

        const verifiedUser = await User.findOne({ _id: id });

        if (verifiedUser) {
            next();
        }
        else {
            res.status(401).json({ message: 'Bad token, authorization denied' });
            return;
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }

};

export default auth;