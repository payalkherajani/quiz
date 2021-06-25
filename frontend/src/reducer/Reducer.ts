import { GET_ALL_CATEGORIES } from '../constants/constants';
import { StateInterface } from '../types/context.types';
import { ActionsTypes } from '../types/reducer.types';

export const reducer = (state: StateInterface, action: ActionsTypes) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_CATEGORIES:
            return { ...state, category: payload };

        default: return state;
    }
};