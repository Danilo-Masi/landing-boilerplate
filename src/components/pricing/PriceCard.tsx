import { Check, FastForward, X } from "lucide-react";
import { Button } from "../ui/button";

interface PriceCardProps {
    title: string,
    price: string,
    discountedPrice: string,
    validPoint: string[],
    invalidPoint?: string[],
}

export default function PriceCard({ title, price, discountedPrice, validPoint, invalidPoint }: PriceCardProps) {
    return (
        <div className="w-full md:w-2/5 h-auto min-h-[50svh] p-5 flex flex-col gap-y-6 rounded-lg bg-zinc-800">
            <h3 className="text-2xl font-semibold text-zinc-50">{title}</h3>
            <h3 className="text-4xl font-bold text-zinc-50">
                <span className="text-lg font-medium line-through text-zinc-500 mr-3">${price}</span>
                ${discountedPrice}</h3>
            <div>
                <ul>
                    {validPoint.map((item, index) => (
                        <li
                            className="flex text-zinc-100 mb-3"
                            key={index}><Check className="mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
                <ul>
                    {invalidPoint && invalidPoint.map((item, index) => (
                        <li
                            className="flex text-zinc-500 mb-3"
                            key={index}><X className="mr-2" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                type="button"
                className="w-full py-7 text-lg cursor-pointer bg-violet-700 hover:bg-violet-600">
                <FastForward />Get started
            </Button>
        </div>
    );
}
