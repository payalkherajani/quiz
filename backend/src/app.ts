import express, { Express } from 'express';
import cors from 'cors';
const app: Express = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`);
});