import mongoose, { Schema } from 'mongoose';
import { Puzzel } from './quiz.model';

interface UserFields {
    name: string;
    email: string;
    password: string;
    quizplayed: Puzzel[];
}

const userSchema = new Schema<UserFields>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        quizPlayed: {
            quiz: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'quiz'
                }
            ]
        }
    },

    {
        timestamps: true
    }

);

const User = mongoose.model<UserFields>('user', userSchema);

export default User;