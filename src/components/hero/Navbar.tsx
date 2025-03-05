import { Link } from "react-router-dom";
import ActionButton from "../custom/ActionButton";
import { scrollToElement } from "@/utility/useAnimation";

export default function Navbar() {

    const handleClick = () => {
        alert('Navbar Button Click');
    }

    return (
        <div className="w-full h-[12svh] md:h-[10svh] flex items-center justify-between mb-5">
            <h1 className="text-lg md:text-3xl font-bold text-foreground">Logo app</h1>
            <ul className="flex items-center justify-center gap-10 ml-20 text-foreground">
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Features")}>Features</Link></li>
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Pricing")}>Pricing</Link></li>
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Faqs")}>Faqs</Link></li>
                <li><ActionButton width="w-full" padding="p-5" handleClick={handleClick} text="Call to action" /></li>
            </ul>
        </div>
    );
}
