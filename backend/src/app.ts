import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';

const app: Express = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});