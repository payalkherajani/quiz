import { Request, Response } from 'express';

const NoSuchRouteExists = (req: Request, res: Response) => {
    res.status(500).json({ success: false, message: 'No Such Route Route' });
};

export default NoSuchRouteExists;