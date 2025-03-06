import ProblemContainer from "../custom/ProblemContainer";
import { Check, X } from "lucide-react";

const problems = [
    "Donec vel elit sit amet",
    "Donec vel elit sit amet",
    "Donec vel elit sit amet",
    "Donec vel elit sit amet",
    "Donec vel elit sit amet",
    "Donec vel elit sit amet",
];

const solutions = [
    "Ut dignissim sed urna sit",
    "Ut dignissim sed urna sit",
    "Ut dignissim sed urna sit",
    "Ut dignissim sed urna sit",
    "Ut dignissim sed urna sit",
    "Ut dignissim sed urna sit",
];

export default function Problem() {
    return (
        <div className="w-full md:w-4/5 h-auto flex flex-col md:flex-row items-center justify-center gap-6 mt-52">
            <ProblemContainer colors="bg-red-900" array={problems} icon={<X />} />
            <ProblemContainer colors="bg-green-900" array={solutions} icon={<Check />} />
        </div>
    );
}
