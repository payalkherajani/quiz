import * as React from "react";
import { StateInterface, ContextValue } from '../types/context.types';
import { reducer } from '../reducer/Reducer';

export const AppCustomCtx = React.createContext({} as ContextValue);


const initialState: StateInterface = {
    user: {},
    categories: []
};

export const Provider: React.FC = ({ children }): JSX.Element => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AppCustomCtx.Provider value={{ state, dispatch }}>
            {children}
        </AppCustomCtx.Provider>

    );
};


export const useAppContext = () => React.useContext(AppCustomCtx);
