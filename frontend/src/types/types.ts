import { GET_ALL_CATEGORIES } from '../constants/constants';

// ----------------------------------------------------CONTEXT--------------------------------------------------

export interface StateInterface {
    user: {};
    categories: [];
}

export interface ContextValue {
    state: StateInterface;
    dispatch: (action: ActionsTypes) => void;
}

// -----------------------------------------------------REDUCER--------------------------------------------------

export type ActionsTypes =
    | {
        type: typeof GET_ALL_CATEGORIES,
        payload: { categories: []; };
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
    categories: [];
}
