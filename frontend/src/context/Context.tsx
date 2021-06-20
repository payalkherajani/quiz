import * as React from "react";
import { AppContextInterface } from '../types/context.types';

export const AppCtx = React.createContext<AppContextInterface>({ theme: 'dark' });

const sampleAppContext: AppContextInterface = {
    theme: 'dark'
};

export const Provider: React.FC = ({ children }): JSX.Element => {

    return (
        <AppCtx.Provider value={sampleAppContext}>
            {children}
        </AppCtx.Provider>

    );
};

export const appContext = () => React.useContext(AppCtx);

