import mongoose, { Schema } from 'mongoose';

//interface representing document in MongoDB
interface Category {
    level: string;
    image: string;
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

    },

    {
        timestamps: true
    }
);

const Categories = mongoose.model<Category>('Categories', categoryModel);

export default Categories;