interface ProblemContainerProps {
    colors: string;
    array: string[];
    icon: any;
}

export default function ProblemContainer({ colors, array, icon }: ProblemContainerProps) {
    return (
        <div className={`w-full md:w-[calc(50%-0.75rem)] h-fit py-10 flex items-center justify-center rounded-lg text-zinc-50 ${colors}`}>
            <ul className="flex flex-col items-center justify-center gap-y-3">
                {array.map((item, index) => (
                    <li className="flex items-center justify-center" key={index}>{icon}{item}</li>
                ))}
            </ul>
        </div>
    );
}
