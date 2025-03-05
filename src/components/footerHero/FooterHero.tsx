import ActionButton from "../custom/ActionButton";

export default function FooterHero() {

    const handleClick = () => {
        alert('FooterHero Button Clicked');
    }

    return (
        <div className="w-full h-auto flex flex-col items-center justify-center text-center md:text-left gap-10 md:gap-6 pb-20 mt-52">
            <h1 className="text-5xl font-bold text-foreground">Boost your app, launch, earn</h1>
            <h3 className="text-xl font-medium text-muted-foreground">Don't waste time on Stripe subscriptions or designing a pricing section...</h3>
            <ActionButton width="w-2/3 md:w-1/4" handleClick={handleClick} text="Call to action" />
        </div>
    );
}
