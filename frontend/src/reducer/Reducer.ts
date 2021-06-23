import { StateInterface } from '../types/context.types';

export type QuizAction = | {
    type: 'GET_ALL_CATEGORIES',
    payload: [];
};


export const reducer = (state: StateInterface, action: QuizAction) => {
    switch (action.type) {
        default: return state;
    }
};