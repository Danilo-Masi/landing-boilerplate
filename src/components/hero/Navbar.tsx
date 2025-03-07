import { Link } from "react-router-dom";
import ActionButton from "../custom/ActionButton";
import { scrollToElement } from "@/utility/useAnimation";
import icon from '../../assets/icon.png';

export default function Navbar() {

    const handleClick = () => {
        alert('Navbar Button Click');
    }

    return (
        <div className="w-full h-[12svh] md:h-[10svh] flex mb-5">
            <div className="w-1/2 h-full flex items-center justify-start gap-2">
                <img src={icon} className="h-[70%]" />
                <h1 className="hidden md:flex text-lg md:text-3xl font-bold text-foreground">
                    Logo app
                </h1>
            </div>
            <ul className="w-1/2 h-full flex items-center justify-end gap-10 text-foreground">
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Features")}>Features</Link></li>
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Pricing")}>Pricing</Link></li>
                <li className="hidden md:flex"><Link to="/" onClick={() => scrollToElement("#Faqs")}>Faqs</Link></li>
                <li><ActionButton width="w-full" padding="p-5" handleClick={handleClick} text="Call to action" /></li>
            </ul>
        </div>
    );
}
