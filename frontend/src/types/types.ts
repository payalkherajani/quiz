import { GET_ALL_CATEGORIES, SELECTED_CATERGORY } from '../constants/constants';

// ----------------------------------------------------CONTEXT--------------------------------------------------

export interface StateInterface {
    user: {};
    categories: Category[];
    chooseCategoryDetails: { selectedCategory: string, selectedCategoryID: string; };
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
        type: typeof SELECTED_CATERGORY,
        payload: { selectedCategory: string, selectedCategoryID: string; };
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
