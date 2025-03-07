import HeroSideContainer from "../custom/HeroSideContainer";
import heroImage from '../../assets/hero-image.png';

export default function HeroSideRight() {
    return (
        <HeroSideContainer>
            <img
                src={heroImage}
                alt="hero image"
                className="w-full 2xl:w-[90%]" />
        </HeroSideContainer>
    );
}
