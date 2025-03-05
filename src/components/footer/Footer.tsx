import { Link } from "react-router-dom";
import LinkContainers from "./LinkContainers";
import { scrollToElement } from "@/utility/useAnimation";
import { ModeToggle } from "../theme/ModeToogle";

const landingLinks = ["Features", "Pricing", "Faqs"];
const legalLinks = [
    { title: "Terms of services", path: "/terms-of-services" },
    { title: "Privacy policy", path: "/privacy-policy" },
];
const moreLinks = [
    { title: "postonreddit", path: "https://www.postonreddit.com" },
    { title: "describify", path: "https://www.describify.it" },
];

export default function Footer() {
    return (
        <div className="w-full h-auto flex flex-col md:flex-row items-start justify-start gap-10 md:gap-6 mt-52 pt-10 pb-20 border-t border-muted-foreground">
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-y-6">
                <h1 className="text-lg font-medium text-foreground">Logo app</h1>
                <h3 className="text-sm font-medium text-muted-foreground">
                    Ship your startup in days, not weeks
                    <br />
                    Copyright © 2025 - All rights reserved
                </h3>
                <ModeToggle />
            </div>
            <LinkContainers title="LINKS">
                {landingLinks.map((item, index) => (
                    <li key={index}><Link to="/" onClick={() => scrollToElement(`#${item}`)}>{item}</Link></li>
                ))}
            </LinkContainers>
            <LinkContainers title="LEGALS">
                {legalLinks.map((item, index) => (
                    <li key={index}><Link to={item.path} onClick={() => scrollTo(0,0)}>{item.title}</Link></li>
                ))}
            </LinkContainers>
            <LinkContainers title="MORE">
                {moreLinks.map((item, index) => (
                    <li key={index}>
                        <a href={item.path} target="_blank">{item.title}</a>
                    </li>
                ))}
            </LinkContainers>
        </div>
    );
}
