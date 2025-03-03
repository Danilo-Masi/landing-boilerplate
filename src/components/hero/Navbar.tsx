import { Gift } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <div className="w-full h-[12svh] md:h-[10svh] flex items-center justify-between">
            <h1 className="text-lg md:text-3xl font-bold text-zinc-50">landing-boilerplate</h1>
            <ul className="flex items-center justify-center gap-10 ml-20 text-zinc-50">
                <li className="hidden md:flex"><a href="#">Features</a></li>
                <li className="hidden md:flex"><a href="#">Pricing</a></li>
                <li className="hidden md:flex"><a href="#">Faqs</a></li>
                <li><Button className="py-6 md:py-0 cursor-pointer bg-violet-700 hover:bg-violet-600"><Gift /> Try for free</Button></li>
            </ul>
        </div>
    );
}
