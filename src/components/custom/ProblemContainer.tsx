interface ProblemContainerProps {
    colors: string;
    array: string[];
    icon: any;
}

export default function ProblemContainer({ colors, array, icon }: ProblemContainerProps) {
    return (
        <div className={`w-full md:w-[40%] h-fit min-h-[50svh] flex flex-col items-center justify-center rounded-xl text-zinc-300 ${colors}`}>
            <ul>
                {array.map((item, index) => (
                    <li className="flex" key={index}>{icon}{item}</li>
                ))}
            </ul>
        </div>
    );
}
