import { GET_ALL_CATEGORIES, SELECTED_LEVEL } from '../constants/constants';

// ----------------------------------------------------CONTEXT--------------------------------------------------

export interface StateInterface {
    user: {};
    categories: Category[];
    selectedLevel: string;
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
    } | {
        type: typeof SELECTED_LEVEL,
        payload: { selectedLevel: string; };
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
