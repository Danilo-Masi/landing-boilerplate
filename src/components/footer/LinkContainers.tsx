interface LinkContainersProps {
    title: string;
    links?: string[];
}

export default function LinkContainers({ title, links }: LinkContainersProps) {
    return (
        <div className="w-full md:w-1/4 flex flex-col gap-y-6 items-center md:items-start text-center md:text-left">
            <h1 className="text-lg md:text-md font-medium text-zinc-50">{title}</h1>
            <ul className="text-md md:text-sm font-medium text-zinc-400 flex flex-col gap-3">
                {links && links.map((item, index) => (
                    <li key={index}><a href="#">{item}</a></li>
                ))}
            </ul>
        </div>
    );
}
