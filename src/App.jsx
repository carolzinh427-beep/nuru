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

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-deep text-cream-text font-sans flex flex-col selection:bg-gold-main selection:text-dark-deep overflow-x-hidden">
        <ScrollProgress />
        <Header />

        <main id="main-content" className="flex-1">
          <Hero3D />
          <OrganicCurveDivider variant="duo" />
          <IntroSection />
          <OrganicCurveDivider variant="oil" />
          <MassageMenu />
          <OrganicCurveDivider variant="silk" />
          <ExperienceSection />
          <OrganicCurveDivider variant="duo" flip={true} />
          <AboutSection />
          <OrganicCurveDivider variant="oil" flip={true} />
          <BookingSection />
          <OrganicCurveDivider variant="silk" flip={true} />
          <LocationSection />
          <OrganicCurveDivider variant="duo" />
          <ContactSection />
          <OrganicCurveDivider variant="oil" />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
