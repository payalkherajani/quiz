import { NextFunction, Request, Response } from "express";

const asynHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(res, res, next)).catch(next);
};
export default asynHandler;