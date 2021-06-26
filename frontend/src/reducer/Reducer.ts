import { GET_ALL_CATEGORIES, SELECTED_CATERGORY } from '../constants/constants';
import { StateInterface, ActionsTypes } from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload.categories };

        case SELECTED_CATERGORY:
            return { ...state, chooseCategoryDetails: { selectedCategory: action.payload.selectedCategory, selectedCategoryID: action.payload.selectedCategoryID } };
        default:
            return state;
    }
};