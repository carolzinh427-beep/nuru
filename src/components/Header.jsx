import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import StarBorder from './StarBorder';

export function Header() {
  const { t, whatsappMessages } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerButtonRef = useRef(null);

  useEffect(() => {
    // Appear 1 second (1000ms) after opening the site
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Or appear immediately if user scrolls
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#booking', label: t.nav.booking },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Desktop Floating Navbar: Centered pill appearing 1s after load or upon scroll */}
      <header
        className={`hidden md:flex fixed top-4 sm:top-5 left-0 right-0 z-40 justify-center px-4 sm:px-6 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-5xl rounded-full bg-dark-deep/80 backdrop-blur-xl border border-gold-main/30 shadow-[0_16px_50px_rgba(0,0,0,0.85)] text-cream-text flex items-center justify-between px-6 py-2.5">
          {/* Logo with Transparent PNG (No Background) */}
          <a
            href="#home"
            className="flex items-center focus-visible:outline-gold-main group"
            aria-label="Nuru Massage London Home"
          >
            <img
              src="/images/logo-navbar.png"
              alt="Nuru Massage London"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="flex items-center space-x-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-gray-warm hover:text-gold-main transition-colors duration-300 relative py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Language + Floating CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isVisible} />
            <StarBorder
              as="button"
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              color="#F5EFE6"
              trailColor="#D9A75E"
              backgroundColor="rgba(10, 10, 10, 0.6)"
              textColor="#C28E42"
              borderColor="rgba(194, 142, 66, 0.45)"
              radius={9999}
              thickness={1.2}
              glow={0.6}
              sparkle={true}
              className="text-xs tracking-wider uppercase px-4 py-2 !rounded-full transition-all duration-300 hover:text-gold-light hover:bg-gold-main/15 font-medium shadow-[0_2px_12px_rgba(194,142,66,0.18)]"
            >
              {t.nav.cta}
            </StarBorder>
          </div>
        </div>
      </header>

      {/* Mobile Top-Left Corner: Floating Glass Brand Logo (appears after 1s or on scroll) */}
      <div
        className={`fixed top-3 left-3 sm:top-4 sm:left-4 z-40 md:hidden transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <a
          href="#home"
          className="rounded-full bg-dark-deep/85 backdrop-blur-2xl border border-gold-main/30 shadow-[0_8px_30px_rgba(0,0,0,0.85)] px-3 py-1.5 flex items-center group focus-visible:outline-gold-main active:scale-95 transition-transform duration-200"
          aria-label="Nuru Massage London Home"
        >
          <img
            src="/images/logo-navbar.png"
            alt="Nuru Massage London"
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>
      </div>

      {/* Mobile Top-Right Corner: Floating Glass Navbar Pill (appears after 1s or on scroll) */}
      <div
        className={`fixed top-3 right-3 sm:top-4 sm:right-4 z-40 md:hidden transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="rounded-full bg-dark-deep/85 backdrop-blur-2xl border border-gold-main/40 text-cream-text shadow-[0_8px_32px_rgba(0,0,0,0.85),0_0_24px_rgba(194,142,66,0.18)] px-3 py-1.5 flex items-center space-x-2.5">
          <LanguageSwitcher isScrolled={true} />

          {/* Subtle gold separator */}
          <span className="w-[1px] h-3.5 bg-gold-main/30 shrink-0" aria-hidden="true" />

          {/* Trigger button opening glass menu */}
          <button
            ref={hamburgerButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            className="group flex items-center space-x-1.5 text-gold-main hover:text-gold-light focus-visible:outline-gold-main py-0.5 active:scale-95 transition-transform duration-200"
          >
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-main">
              MENU
            </span>
            <div className="w-4 h-3 flex flex-col justify-between items-end">
              <span className="w-4 h-[1.5px] bg-gold-main rounded-full transition-all duration-300 group-hover:w-4" />
              <span className="w-3 h-[1.5px] bg-gold-main rounded-full transition-all duration-300 group-hover:w-4" />
              <span className="w-2 h-[1.5px] bg-gold-main rounded-full transition-all duration-300 group-hover:w-4" />
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={hamburgerButtonRef}
      />
    </>
  );
}

export default Header;
