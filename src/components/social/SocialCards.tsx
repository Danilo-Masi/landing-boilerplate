type Proof = {
    content: string;
    name: string;
    usurname: string;
}

interface SocialCardProps {
    proofs: Proof[],
}

export default function SocialCard({ proofs }: SocialCardProps) {
    return (
        <div className="w-full md:w-[calc(25%-0.25rem)] h-auto flex flex-col gap-y-4">
            {proofs.map((item, index) => (
                <div
                    key={index}
                    className="w-full h-fit p-5 flex flex-col gap-y-5 bg-zinc-800 border border-zinc-700 rounded-lg">
                    <p className="text-zinc-50">{item.content}</p>
                    <div className="flex gap-x-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center p-3 bg-zinc-700 text-zinc-300 font-semibold">
                            <p>{item.name.slice(0, 2).toUpperCase()}</p>
                        </div>
                        <div>
                            <p className="text-zinc-50">{item.name}</p>
                            <p className="text-zinc-400">@{item.usurname}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
