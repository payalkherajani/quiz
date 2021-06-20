import * as React from "react";

interface AppContextInterface {
    theme: string;
}

export const AppCtx = React.createContext<AppContextInterface>({ theme: 'dark' });

const sampleAppContext: AppContextInterface = {
    theme: 'dark'
};

export const Provider: React.FC = ({ children }) => {

    return (
        <AppCtx.Provider value={sampleAppContext}>
            {children}
        </AppCtx.Provider>

    );
};

export const appContext = () => React.useContext(AppCtx);

