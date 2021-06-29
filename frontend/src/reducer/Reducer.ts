import { GET_ALL_CATEGORIES, GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY, SELECTED_CATERGORY } from '../constants/constants';
import { StateInterface, ActionsTypes } from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload.categories };

        case SELECTED_CATERGORY:
            return { ...state, chooseCategoryDetails: { selectedCategory: action.payload.selectedCategory, selectedCategoryID: action.payload.selectedCategoryID } };

        case GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY:
            return { ...state, selectedCategoryQuizzess: action.payload.selectedCategoryQuizzess };

        default:
            return state;
    }
};