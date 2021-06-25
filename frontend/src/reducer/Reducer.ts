import { GET_ALL_CATEGORIES } from '../constants/constants';
import { StateInterface, ActionsTypes } from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload.categories };
        default:
            return state;
    }
};