import { Gift, PlayCircle, Zap } from "lucide-react";
import HeroSideContainer from "../custom/HeroSideContainer";
import { Button } from "../ui/button";

interface HeroSideLeftProps {
    handleClick: () => void;
}

export default function HeroSideLeft({ handleClick }: HeroSideLeftProps) {
    return (
        <HeroSideContainer>
            <div className="flex flex-col items-center md:items-start gap-y-5">
                <a href="#" className="flex text-violet-700 underline"><PlayCircle className="mr-1"/> Watch demo video</a>
                <h1 className="text-6xl font-extrabold text-balance text-zinc-50">Ship your startup in days,not weeks</h1>
                <h3 className="text-xl text-balance text-zinc-400">The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.</h3>
            </div>
            <div className="w-full flex flex-col items-center md:items-start gap-y-5">
                <Button
                    type="button"
                    className="w-2/3 md:w-1/3 py-7 md:py-6 text-lg md:text-base cursor-pointer bg-violet-700 hover:bg-violet-600"
                    onClick={handleClick}>
                    <Zap />
                    Call to action
                </Button>
                <p className="flex text-balance text-zinc-400">
                    <span className="text-violet-700"><Gift className="animate-bounce" /></span>
                    <span className="mx-1 text-violet-700">$100 off</span>
                    for the first 6570 customers
                </p>
            </div>
        </HeroSideContainer>
    );
}
