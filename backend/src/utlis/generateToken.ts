import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export interface Data {
    id: string;
}
export interface JWTPayload {
    user: Data;
}

const generateToken = (data: Data) => {
    const jwtPayload: JWTPayload = {
        user: data
    };
    return jwt.sign(jwtPayload, process.env.JWT_SECRET!, { expiresIn: '30d' });
};

export { generateToken };