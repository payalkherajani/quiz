import {
    ADD_SELECTED_QUIZ_QUESTIONS,
    GET_ALL_CATEGORIES,
    GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY,
    INCREASE_POINTER_OF_QUESTION,
    SELECTED_CATERGORY,
    SET_LOGGED_IN_USER_DETAILS,
    UPDATE_TOTAL_SCORE
} from '../constants/constants';

// ----------------------------------------------------CONTEXT--------------------------------------------------

export interface StateInterface {
    user: {
        name: string;
        email: string;
    };
    categories: Category[];
    chooseCategoryDetails: { selectedCategory: string, selectedCategoryID: string; };
    selectedCategoryQuizzess: Puzzel[];
    selectedQuizQuestions: Question[];
    pointerOnQuestionNumber: number;
    totalscore: number;
}

export interface ContextValue {
    state: StateInterface;
    dispatch: (action: ActionsTypes) => void;
}

// -----------------------------------------------------REDUCER--------------------------------------------------

export type ActionsTypes =
    | {
        type: typeof GET_ALL_CATEGORIES,
        payload: { categories: Category[]; };
    }
    | {
        type: typeof SELECTED_CATERGORY,
        payload: { selectedCategory: string, selectedCategoryID: string; };
    }
    | {
        type: typeof GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY,
        payload: { selectedCategoryQuizzess: Puzzel[]; };
    }
    | {
        type: typeof ADD_SELECTED_QUIZ_QUESTIONS,
        payload: { selectedQuizQuestions: Question[]; };
    }
    | {
        type: typeof UPDATE_TOTAL_SCORE,
        payload: { score: number; };
    } |
    {
        type: typeof INCREASE_POINTER_OF_QUESTION,
        payload: { pointer: number; };
    } |
    {
        type: typeof SET_LOGGED_IN_USER_DETAILS,
        payload: { user: User; };
    };

//---------------------------------------------------------CATEGORY---------------------------------------------

export interface Category {
    level: string;
    image: string;
    quizzes: string[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface ServerError {
    success: boolean;
    message: string;
}
export interface CategoriesRes {
    success: boolean;
    categories: Category[];
}

export interface SelectedCategoryQuizzessRes {
    success: boolean;
    quizzes: Puzzel[];
}

export interface getUserDetailsRes {
    success: boolean;
    user: User;
}

export interface SelectedCategoryDetails {
    success: boolean;
    SingleCategory: Category;
}
export interface Option {
    text: string;
    isRight: boolean;
    _id: string;
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
    _id: string;
}

export interface User {
    name: string;
    email: string;
}