import LinkContainers from "./LinkContainers";

const landingLinks = ["Home", "Features", "Prices", "Faqs"];
const legalLinks = ["Terms & Conditions", "Privacy policy", "Cookies policy"];
const moreLinks = ["postonreddit", "describify"];

export default function Footer() {
    return (
        <div className="w-full h-auto flex flex-col md:flex-row items-start justify-start gap-10 md:gap-6 mt-52 pt-10 pb-20 border-t border-zinc-800">
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start gap-y-6">
                <h1 className="text-lg font-medium text-zinc-50">Logo app</h1>
                <h3 className="text-sm font-medium text-zinc-400">
                    Ship your startup in days, not weeks
                    <br />
                    Copyright © 2025 - All rights reserved
                </h3>
            </div>
            <LinkContainers title="LINKS" links={landingLinks} />
            <LinkContainers title="LEGAL" links={legalLinks} />
            <LinkContainers title="MORE" links={moreLinks} />
        </div>
    );
}
