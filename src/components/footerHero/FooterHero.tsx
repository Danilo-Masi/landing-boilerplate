import { Zap } from "lucide-react";
import { Button } from "../ui/button";


export default function FooterHero() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center text-center md:text-left gap-10 md:gap-6 pb-20 mt-52">
            <h1 className="text-5xl font-bold text-zinc-50">Boost your app, launch, earn</h1>
            <h3 className="text-xl font-medium text-zinc-300">Don't waste time on Stripe subscriptions or designing a pricing section...</h3>
            <Button
                type="button"
                className="w-2/3 md:w-1/5 py-7 md:py-6 text-lg md:text-base cursor-pointer bg-violet-700 hover:bg-violet-600">
                <Zap />
                Get started
            </Button>
        </div>
    )
}
