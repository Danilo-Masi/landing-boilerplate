import Header from "../custom/Header";
import PriceCard from "./PriceCard";

const starterValidPoints = [
    "React boilerplate",
    "SEO e Blog",
    "Mailgun emails",
    "Stripe / Lemon squeezy",
];

const starterInvalidPoints = [
    "Discord community & Leaderboard",
    "$1,210 worth of discounts",
];

const premiumValidPoints = [
    "React boilerplate",
    "SEO e Blog",
    "Mailgun emails",
    "Stripe / Lemon squeezy",
    "Discord community & Leaderboard",
    "$1,210 worth of discounts",
]

export default function Pricing() {
    return (
        <div className="w-full md:w-4/5 h-auto flex flex-col items-center justify-center gap-10 md:gap-6 mt-52" id="Pricing">
            <Header
                title="Phasellus euismod est eget tempus tincidunt. Donec"
                description="Phasellus dictum imperdiet velit eget commodo. Quisque auctor quis leo sed aliquam. In aliquet feugiat libero ac semper. Vestibulum id" />
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                <PriceCard
                    title="Starter"
                    price="299"
                    discountedPrice="199"
                    validPoint={starterValidPoints}
                    invalidPoint={starterInvalidPoints}
                    textButton="Call to action" />
                <PriceCard
                    title="Premium"
                    price="349"
                    discountedPrice="249"
                    validPoint={premiumValidPoints}
                    textButton="Call to action"
                    bestOffer="Premium" />
            </div>
        </div>
    );
}
