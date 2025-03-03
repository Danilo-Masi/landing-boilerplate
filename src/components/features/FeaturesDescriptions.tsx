type featureDescription = {
    title: string;
    description: string;
}

interface FeaturesDescriptionsProps {
    featuresDescriptions: featureDescription[],
}

export default function FeaturesDescriptions({ featuresDescriptions }: FeaturesDescriptionsProps) {
    return (
        <div className="w-full md:w-[calc(50%-0.75rem)] h-auto min-h-[70svh] flex flex-col gap-4">
            {featuresDescriptions.map((item, index) => (
                <div
                    key={index}
                    className="w-full h-[calc(25%-0.25rem)] flex flex-col gap-2 bg-red-500">
                    <h1>{item.title}</h1>
                    <h3>{item.description}</h3>
                </div>
            ))}
        </div>
    );
}
