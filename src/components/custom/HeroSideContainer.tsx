import { ReactNode } from "react"

interface HeroSideContainerProps {
    children: ReactNode;
}

export default function HeroSideContainer({ children }: HeroSideContainerProps) {
    return (
        <div className="w-full md:w-1/2 h-auto min-h-[80svh] flex flex-col gap-10 justify-center items-center text-center md:text-left">
            {children}
        </div>
    );
}
