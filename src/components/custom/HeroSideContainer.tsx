import { ReactNode } from "react"

interface HeroSideContainerProps {
    children: ReactNode;
}

export default function HeroSideContainer({ children }: HeroSideContainerProps) {
    return (
        <div className="w-full md:w-1/2 h-auto flex flex-col gap-10 md:gap-14 justify-center items-center md:items-start text-center md:text-left">
            {children}
        </div>
    );
}
