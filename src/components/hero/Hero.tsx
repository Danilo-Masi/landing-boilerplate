import HeroSideLeft from "./HeroSideLeft";
import HeroSideRight from "./HeroSideRight";
import Navbar from "./Navbar";

export default function Hero() {

    const handleClick = () => {
        alert('Button click');
    }

    return (
        <div className="w-full h-auto min-h-svh flex flex-col md:flex-row md:flex-wrap gap-20 md:gap-0">
            <Navbar />
            <HeroSideLeft handleClick={handleClick} />
            <HeroSideRight />
        </div>
    );
}
