import About from "@/components/about/About";
import AppContainer from "@/components/custom/AppContainer";
import Faqs from "@/components/faqs/Faqs";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import FooterHero from "@/components/footerHero/FooterHero";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Problem from "@/components/problem/Problem";
import Social from "@/components/social/Social";

export default function Homepage() {
    return (
        <AppContainer>
            <Hero />
            <Problem />
            <Features />
            <Social />
            <About />
            <Pricing />
            <Faqs />
            <FooterHero />
            <Footer />
        </AppContainer>
    );
}
