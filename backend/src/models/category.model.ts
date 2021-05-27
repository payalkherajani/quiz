import mongoose, { Schema } from 'mongoose';

//interface representing document in MongoDB
export interface Category {
    level: string;
    image: string;
    quizzes: string[];
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
        quizzes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'quiz'
            }
        ]
    },

    {
        timestamps: true
    }
);

const Categories = mongoose.model<Category>('categories', categoryModel);

export default Categories;