import { ReactNode } from "react";

interface AppContainerProps {
    children: ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
    return (
        <div className="w-full h-auto flex justify-center bg-zinc-800">
            <div className="w-[90%] h-auto min-h-svh flex flex-col">
                {children}
            </div>
        </div>
    );
}
