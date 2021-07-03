import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (data: { id: string; }) => {
    const jwtPayload = {
        user: data
    };
    return jwt.sign(jwtPayload, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

export { generateToken };