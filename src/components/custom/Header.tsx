interface HeaderProps {
    title: string;
    description?: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-y-3 mb-10">
            <h1 className="max-w-5xl text-5xl text-balance text-center font-bold text-foreground">{title}</h1>
            <h3 className="max-w-4xl text-lg text-balance text-center font-medium text-muted-foreground">{description}</h3>
        </div>
    );
}
