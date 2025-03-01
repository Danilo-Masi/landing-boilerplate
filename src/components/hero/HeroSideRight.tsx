import HeroSideContainer from "../custom/HeroSideContainer";
import heroImage from '../../assets/heroImage.png';

export default function HeroSideRight() {
    return (
        <HeroSideContainer>
            <img
                src={heroImage}
                alt="hero image"
                className="w-full md:w-[90%]" />
        </HeroSideContainer>
    );
}
