import { GET_ALL_CATEGORIES } from '../constants/constants';
import { StateInterface } from '../types/context.types';
import { ActionsTypes } from '../types/reducer.types';

export const reducer = (state: StateInterface, action: ActionsTypes) => {
    switch (action.type) {
        case GET_ALL_CATEGORIES:
            console.log(action.payload, "pay");
            return state;
        default: return state;
    }
};