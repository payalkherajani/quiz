import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import categoryRoutes from './routes/category.route';

const app: Express = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());  //to accept req.body

//routes
app.use('/api/category', categoryRoutes);


app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});