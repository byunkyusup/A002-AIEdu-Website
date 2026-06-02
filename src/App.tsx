import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { ValueProps } from './components/sections/ValueProps';
import { Tracks } from './components/sections/Tracks';
import { HowItWorks } from './components/sections/HowItWorks';
import { Projects } from './components/sections/Projects';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Faq } from './components/sections/Faq';
import { FinalCta } from './components/sections/FinalCta';

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 건너뛰기</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Stats />
        <ValueProps />
        <Tracks />
        <HowItWorks />
        <Projects />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
