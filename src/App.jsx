import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import IntroSection from './components/IntroSection';
import MassageMenu from './components/MassageMenu';
import ExperienceSection from './components/ExperienceSection';
import AboutSection from './components/AboutSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-deep text-cream-text font-sans flex flex-col selection:bg-gold-main selection:text-dark-deep">
        <ScrollProgress />
        <Header />

        <main id="main-content" className="flex-1">
          <Hero3D />
          <IntroSection />
          <MassageMenu />
          <ExperienceSection />
          <AboutSection />
          <LocationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
