import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { errorHandler, NoSuchRouteExists } from './middlewares';
import { categoryRoutes, quizRoutes, userRoutes } from './routes';

const app: Express = express();
connectDB();
app.use(cors());

const PORT = process.env.PORT || 5000;


app.use(express.json());  //to accept req.body

//routes
app.use('/api/category', categoryRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/user', userRoutes);

//keep this at last
app.use(errorHandler);
app.use(NoSuchRouteExists);


app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});