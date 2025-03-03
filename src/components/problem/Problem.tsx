import ProblemContainer from "../custom/ProblemContainer";
import { Check, X } from "lucide-react";

const problems = [
    "problem 1",
    "problem 2",
    "problem 3",
    "problem 4",
    "problem 5",
    "problem 6",
];

const solutions = [
    "solutions 1",
    "solutions 2",
    "solutions 3",
    "solutions 4",
    "solutions 5",
    "solutions 6",
]

export default function Problem() {
    return (
        <div className="w-full h-auto  flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 mt-52">
            <ProblemContainer colors="bg-red-900" array={problems} icon={<X />} />
            <ProblemContainer colors="bg-green-900" array={solutions} icon={<Check />} />
        </div>
    );
}
