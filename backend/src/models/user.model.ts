import mongoose, { Schema } from 'mongoose';
import { Puzzel } from './quiz.model';


export interface ScoreType {
    quiz: Puzzel;
    score: number;
}

export interface UserFields {
    name: string;
    email: string;
    password: string;
    quizplayed: ScoreType[];
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
        quizPlayed: [
            {
                quiz: {
                    type: Schema.Types.ObjectId,
                    ref: 'quiz'
                },

                score: {
                    type: String,
                    default: 0
                }
            },

        ]

    },

    {
        timestamps: true
    }

);

const User = mongoose.model<UserFields>('user', userSchema);

export default User;