import { ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <div className="w-full h-auto min-h-svh flex flex-col justify-center items-center bg-background">
            <div className="w-[90%] 2xl:w-[70%] h-auto flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}
