import mongoose, { Schema } from 'mongoose';
import { Puzzel } from './quiz.model';

//interface representing document in MongoDB
interface Category {
    level: string;
    image: string;
    quizzes: Puzzel[];
}

const categoryModel = new Schema<Category>(
    {
        level: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        quizzes: [{ ref: 'Quiz', type: Schema.Types.ObjectId }]

    },

    {
        timestamps: true
    }
);

const Categories = mongoose.model<Category>('Categories', categoryModel);

export default Categories;