import mongoose, { Schema } from 'mongoose';

interface Option {
    text: string;
    isRight: boolean;
}

interface Question {
    question: string;
    options: Option[];
}

export interface Puzzel {
    quizname: string;
    questions: Question[],
    image: string;
    points: number;
    negativemark: number;
}

const quizSchema = new Schema<Puzzel>(
    {
        quizname: {
            type: String,
            required: true
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
            type: Number
        }

    },
    {
        timestamps: true
    }
);

const Quiz = mongoose.model<Puzzel>('Quiz', quizSchema);

export default Quiz;