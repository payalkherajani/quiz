import { GET_ALL_CATEGORIES } from '../constants/constants';
import { Category } from '../types/category.types';

export type ActionsTypes =
    | {
        type: typeof GET_ALL_CATEGORIES,
        payload: { categories: Category[]; };
    };