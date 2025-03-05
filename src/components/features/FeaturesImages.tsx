import { useAppContext } from "@/context/AppContext";
import feature1 from '../../assets/feature1-image.jpg';
import feature2 from '../../assets/feature2-image.jpg';
import feature3 from '../../assets/feature3-image.jpg';
import feature4 from '../../assets/feature3-image.jpg';

export default function FeaturesImaages() {

    const { selectedSection } = useAppContext();

    const imageMap: Record<string, string> = {
        "feature-1": feature1,
        "feature-2": feature2,
        "feature-3": feature3,
        "feature-4": feature4,
    };

    const currentImage = imageMap[selectedSection] || feature1;

    return (
        <div className="w-full md:w-[calc(50%-0.75rem)] h-auto max-h-[70svh] rounded-lg">
            <img
                src={currentImage}
                alt='feature image'
                className='object-cover w-full h-full rounded-lg' />
        </div>
    );
}
