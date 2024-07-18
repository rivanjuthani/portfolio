import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <AppContext.Provider value={[sidebarOpen, setSidebarOpen]}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}