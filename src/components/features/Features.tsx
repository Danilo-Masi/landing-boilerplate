import Header from "../custom/Header";
import FeaturesDescriptions from "./FeaturesDescriptions"
import FeaturesImages from "./FeaturesImages";

const featuresDescriptions = [
    { title: "title 1", description: "description 1" },
    { title: "title 2", description: "description 2" },
    { title: "title 3", description: "description 3" },
    { title: "title 4", description: "description 4" },
]

export default function Features() {
    return (
        <div className="w-full h-auto  flex flex-col md:flex-row md:flex-wrap md:gap-6 mt-52">
            <Header
                title="Supercharge your app instantly, launch faster, make $"
                description="Login users, process payments and send emails at lightspeed. Spend your time building your startup, not integrating APIs. ShipFast provides you with the boilerplate code you need to launch, FAST." />
            <FeaturesDescriptions featuresDescriptions={featuresDescriptions} />
            <FeaturesImages />
        </div>
    );
}
