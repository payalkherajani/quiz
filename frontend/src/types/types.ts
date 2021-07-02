import { ADD_SELECTED_QUIZ_QUESTIONS, GET_ALL_CATEGORIES, GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY, SELECTED_CATERGORY } from '../constants/constants';

// ----------------------------------------------------CONTEXT--------------------------------------------------

export interface StateInterface {
    user: {};
    categories: Category[];
    chooseCategoryDetails: { selectedCategory: string, selectedCategoryID: string; };
    selectedCategoryQuizzess: Puzzel[];
    selectedQuizQuestions: Question[];
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

export interface SelectedCategoryDetails {
    success: boolean;
    SingleCategory: Category;
}
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