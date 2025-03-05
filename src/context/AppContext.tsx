import { createContext, ReactNode, useContext, useState } from "react"

// Definisci il tipo del contesto
type AppContextType = {
    selectedSection: string;
    setSelectedSection: (section: string) => void;
}

// Crea il contesto e fornisci un valore predefinito
const AppContext = createContext<AppContextType | undefined>(undefined);

// Crea un provider per il contesto
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [selectedSection, setSelectedSection] = useState<string>("feature-1");

    return (
        <AppContext.Provider
            value={{ selectedSection, setSelectedSection }} >
            {children}
        </AppContext.Provider>
    );
}

// Hook per usare il contesto
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}