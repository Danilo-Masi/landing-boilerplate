import AppContainer from "./components/custom/AppContainer";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import Problem from "./components/problem/Problem";
import Social from "./components/social/Social";

export default function App() {
  return (
    <AppContainer>
      <Hero />
      <Problem />
      <Features />
      <Social />
    </AppContainer>
  );
}
