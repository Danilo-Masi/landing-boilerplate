import { useAppContext } from "@/context/AppContext";

type featureDescription = {
    index: string;
    title: string;
    description: string;
}

interface FeaturesDescriptionsProps {
    featuresDescriptions: featureDescription[],
}

export default function FeaturesDescriptions({ featuresDescriptions }: FeaturesDescriptionsProps) {

    const { selectedSection, setSelectedSection } = useAppContext();

    return (
        <div className="w-full md:w-[calc(50%-0.75rem)] h-auto flex flex-col gap-4 mb-10 md:mb-0">
            {featuresDescriptions.map((item, index) => (
                <div
                    key={index}
                    className={`w-full flex flex-col gap-2 p-3 ${selectedSection === item.index ? 'h-full' : 'h-fit'}`}>
                    <h1
                        className={`cursor-pointer ${selectedSection === item.index ? 'text-principal underline' : 'text-foreground'}`}
                        onClick={() => setSelectedSection(item.index)}>
                        {item.title}
                    </h1>
                    <h3 className={`text-muted-foreground ${selectedSection === item.index ? 'flex' : 'hidden'}`}>{item.description}</h3>
                </div>
            ))}
        </div>
    );
}
