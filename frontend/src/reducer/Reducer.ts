import { GET_ALL_CATEGORIES, SELECTED_LEVEL } from '../constants/constants';
import { StateInterface, ActionsTypes } from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload.categories };

        case SELECTED_LEVEL:
            return { ...state, selectedLevel: action.payload.selectedLevel };
        default:
            return state;
    }
};