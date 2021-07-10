import {
    ADD_SELECTED_QUIZ_QUESTIONS,
    GET_ALL_CATEGORIES,
    GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY,
    INCREASE_POINTER_OF_QUESTION,
    SELECTED_CATERGORY,
    SET_LOGGED_IN_USER_DETAILS,
    UPDATE_TOTAL_SCORE
} from '../constants/constants';

import {
    StateInterface,
    ActionsTypes
} from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {

    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload.categories };

        case SELECTED_CATERGORY:
            return { ...state, chooseCategoryDetails: { selectedCategory: action.payload.selectedCategory, selectedCategoryID: action.payload.selectedCategoryID } };

        case GET_ALL_QUIZZESS_OF_SELECTED_CATEGORY:
            return { ...state, selectedCategoryQuizzess: action.payload.selectedCategoryQuizzess };

        case ADD_SELECTED_QUIZ_QUESTIONS:
            return { ...state, selectedQuizQuestions: action.payload.selectedQuizQuestions };

        case UPDATE_TOTAL_SCORE:
            return { ...state, totalscore: state.totalscore + action.payload.score };

        case INCREASE_POINTER_OF_QUESTION:
            return { ...state, pointerOnQuestionNumber: action.payload.pointer };

        case SET_LOGGED_IN_USER_DETAILS:
            return { ...state, user: action.payload.user };

        default:
            return state;
    }
};