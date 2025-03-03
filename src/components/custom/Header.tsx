interface HeaderProps {
    title: string;
    description?: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-y-3 mb-10">
            <h1 className="max-w-4xl text-4xl text-balance text-center font-bold text-zinc-50">{title}</h1>
            <h3 className="max-w-4xl text-lg text-balance text-center font-medium text-zinc-400">{description}</h3>
        </div>
    );
}
