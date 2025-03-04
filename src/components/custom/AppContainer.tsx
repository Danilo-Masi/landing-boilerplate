import { ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center bg-zinc-950">
            <div className="w-[90%] h-auto flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}
