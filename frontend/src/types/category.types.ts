export interface Category {
    level: string;
    image: string;
    quizzes: string[];
    createdAt: Date;
    updatedAt: Date;
    _id: string;
    __v: number;

}

export interface ServerError {
    success: boolean;
    message: string;
}