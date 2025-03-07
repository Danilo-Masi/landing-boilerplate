import { lazy, Suspense, memo } from "react";
import AppContainer from "@/components/custom/AppContainer";
import Fallback from "@/components/fallback/Fallback";

// Lazy loading delle sezioni
const Hero = lazy(() => import("@/components/hero/Hero"));
const Problem = lazy(() => import("@/components/problem/Problem"));
const Features = lazy(() => import("@/components/features/Features"));
const Social = lazy(() => import("@/components/social/Social"));
const About = lazy(() => import("@/components/about/About"));
const Pricing = lazy(() => import("@/components/pricing/Pricing"));
const Faqs = lazy(() => import("@/components/faqs/Faqs"));
const FooterHero = lazy(() => import("@/components/footerHero/FooterHero"));
const Footer = lazy(() => import("@/components/footer/Footer"));

// Memoizzazione per evitare render inutili
const MemoHero = memo(Hero);
const MemoProblem = memo(Problem);
const MemoFeatures = memo(Features);
const MemoSocial = memo(Social);
const MemoAbout = memo(About);
const MemoPricing = memo(Pricing);
const MemoFaqs = memo(Faqs);
const MemoFooterHero = memo(FooterHero);
const MemoFooter = memo(Footer);

export default function Homepage() {
    return (
        <AppContainer>
            <Suspense fallback={<Fallback />}>
                <MemoHero />
                <MemoProblem />
                <MemoFeatures />
                <MemoSocial />
                <MemoAbout />
                <MemoPricing />
                <MemoFaqs />
                <MemoFooterHero />
                <MemoFooter />
            </Suspense>
        </AppContainer>
    );
}