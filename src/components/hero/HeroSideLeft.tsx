import { Gift, PlayCircle } from "lucide-react";
import HeroSideContainer from "../custom/HeroSideContainer";
import ActionButton from "../custom/ActionButton";
import { Link } from "react-router-dom";
import { scrollToElement } from "@/utility/useAnimation";

interface HeroSideLeftProps {
    handleClick: () => void;
}

export default function HeroSideLeft({ handleClick }: HeroSideLeftProps) {
    return (
        <HeroSideContainer>
            <div className="flex flex-col items-center md:items-start gap-y-5">
                <Link to="/" className="flex underline text-principal" onClick={() => scrollToElement("#Video")}><PlayCircle className="mr-1" /> Watch demo video</Link>
                <h1 className="text-6xl font-extrabold text-balance text-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                </h1>
                <h3 className="text-xl text-balance text-muted-foreground">
                    Aenean at porttitor eros. Duis malesuada odio eget aliquet porttitor. Suspendisse non diam euismod, cursus arcu a, porttitor eros. Fusce
                </h3>
            </div>
            <div className="w-full flex flex-col items-center md:items-start gap-y-5">
                <ActionButton width="w-2/3 md:w-1/3" handleClick={handleClick} text="Call to action" />
                <p className="flex text-balance text-muted-foreground">
                    <span className="text-principal"><Gift className="animate-bounce" /></span>
                    <span className="mx-1 text-principal">$100 off</span>
                    for the first 6570 customers
                </p>
            </div>
        </HeroSideContainer>
    );
}
