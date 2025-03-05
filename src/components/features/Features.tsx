import Header from "../custom/Header";
import FeaturesDescriptions from "./FeaturesDescriptions"
import FeaturesImages from "./FeaturesImages";

const featuresDescriptions = [
    { index: "feature-1", title: "Cras posuere elit interdum tempor consectetur", description: "Vestibulum non rutrum elit. Proin ex augue, vestibulum sit amet tristique sollicitudin, vulputate ac nulla. Mauris vel tellus libero. Maecenas eu lacus nunc. Praesent lobortis elit arcu, at efficitur leo convallis id. Vivamus ac nisi ligula. Fusce rutrum non tellus finibus vulputate." },
    { index: "feature-2", title: "Aliquam dignissim tincidunt mi a condimentum.", description: "Vestibulum non rutrum elit. Proin ex augue, vestibulum sit amet tristique sollicitudin, vulputate ac nulla. Mauris vel tellus libero. Maecenas eu lacus nunc. Praesent lobortis elit arcu, at efficitur leo convallis id. Vivamus ac nisi ligula. Fusce rutrum non tellus finibus vulputate." },
    { index: "feature-3", title: "In eget risus efficitur, venenatis metus sit amet", description: "Vestibulum non rutrum elit. Proin ex augue, vestibulum sit amet tristique sollicitudin, vulputate ac nulla. Mauris vel tellus libero. Maecenas eu lacus nunc. Praesent lobortis elit arcu, at efficitur leo convallis id. Vivamus ac nisi ligula. Fusce rutrum non tellus finibus vulputate." },
    { index: "feature-4", title: "Duis vitae metus tempor, molestie turpis sed", description: "Vestibulum non rutrum elit. Proin ex augue, vestibulum sit amet tristique sollicitudin, vulputate ac nulla. Mauris vel tellus libero. Maecenas eu lacus nunc. Praesent lobortis elit arcu, at efficitur leo convallis id. Vivamus ac nisi ligula. Fusce rutrum non tellus finibus vulputate." },
]

export default function Features() {
    return (
        <div className="w-full h-auto  flex flex-col md:flex-row md:flex-wrap md:gap-6 mt-52" id="Features">
            <Header
                title="Aenean purus nulla, scelerisque id aliquam sed"
                description="Duis sagittis vitae quam vitae vehicula. Curabitur molestie, lacus vitae ultricies gravida, risus mauris hendrerit magna, ut pellentesque enim sapien" />
            <FeaturesDescriptions
                featuresDescriptions={featuresDescriptions} />
            <FeaturesImages />
        </div>
    );
}
