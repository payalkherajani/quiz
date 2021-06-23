import * as React from "react";
import { AppContextInterface, StateInterface } from '../types/context.types';
import { reducer } from '../reducer/Reducer';

export const AppCtx = React.createContext({});

const initialState: StateInterface = {
    user: {}
};

export const Provider: React.FC = ({ children }): JSX.Element => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AppCtx.Provider value={{ state, dispatch }}>
            {children}
        </AppCtx.Provider>

    );
};

export const AppContext = () => React.useContext(AppCtx);

