import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import categoryRoutes from './routes/category.route';
import quizRoutes from './routes/quiz.route';
import { errorHandler, NoSuchRouteExists } from './middlewares';

const app: Express = express();
connectDB();
app.use(cors());

const PORT = process.env.PORT || 5000;


app.use(express.json());  //to accept req.body

//routes
app.use('/api/category', categoryRoutes);
app.use('/api/quiz', quizRoutes);

//keep this at last
app.use(errorHandler);
app.use(NoSuchRouteExists);


app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});