import mongoose, { Schema } from 'mongoose';

export interface Option {
    text: string;
    isRight: boolean;
}

export interface Question {
    question: string;
    options: Option[];
    image: string;
    points: number;
    negativemark: number;
}

export interface Puzzel {
    quizname: string;
    category: string;
    questions: Question[];
    totalscore: number;
}

const quizSchema = new Schema<Puzzel>(
    {
        quizname: {
            type: String,
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'categories'
        },
        questions: [
            {
                question: {
                    type: String,
                    required: true
                },
                image: {
                    type: String
                },
                options: [
                    {
                        text: {
                            type: String,
                            required: true
                        },
                        isRight: {
                            type: Boolean,
                            required: true
                        }
                    }
                ],
                points: {
                    type: Number,
                    default: 1
                },
                negativemark: {
                    type: Number,
                    default: -1
                }
            }
        ],
        totalscore: {
            type: Number,
            default: 0
        }

    },
    {
        timestamps: true
    }
);

const Quiz = mongoose.model<Puzzel>('quiz', quizSchema);

export default Quiz;