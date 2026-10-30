import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import IntroSection from './components/IntroSection';
import MassageMenu from './components/MassageMenu';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OrganicCurveDivider from './components/OrganicCurveDivider';
import AnimatedContent from './components/AnimatedContent';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-deep text-cream-text font-sans flex flex-col selection:bg-gold-main selection:text-dark-deep overflow-x-hidden">
        <ScrollProgress />
        <Header />

        <main id="main-content" className="flex-1">
          <Hero3D />
          <OrganicCurveDivider variant="duo" />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <IntroSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="oil" />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <MassageMenu />
          </AnimatedContent>

          <OrganicCurveDivider variant="silk" />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <ExperienceSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="duo" flip={true} />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <AboutSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="oil" flip={true} />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <BookingSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="silk" flip={true} />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <LocationSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="duo" />

          <AnimatedContent distance={45} duration={0.85} ease="power3.out" threshold={0.12}>
            <ContactSection />
          </AnimatedContent>

          <OrganicCurveDivider variant="oil" />
        </main>

        <AnimatedContent distance={35} duration={0.8} ease="power3.out" threshold={0.1}>
          <Footer />
        </AnimatedContent>
      </div>
    </LanguageProvider>
  );
}

export default App;
