import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

export function Header() {
  const { t, whatsappMessages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Floating Navbar Container */}
      <header
        className="fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none"
      >
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 ease-out flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? 'bg-dark-deep/75 backdrop-blur-xl border border-gold-main/30 shadow-[0_16px_50px_rgba(0,0,0,0.7)] text-cream-text'
              : 'bg-dark-deep/45 backdrop-blur-md border border-gold-main/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-cream-text'
          }`}
        >
          {/* Logo with User Uploaded Image */}
          <a
            href="#home"
            className="flex items-center focus-visible:outline-gold-main group"
            aria-label="Nuru Massage London Home"
          >
            <img
              src="/images/logo-navbar.jpg"
              alt="Nuru Massage London"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-7"
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

          {/* Desktop Right: Language + Floating Glass CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-xs tracking-wider uppercase px-5 py-2 rounded-full transition-all duration-300 border border-gold-main/60 bg-dark-deep/40 backdrop-blur-sm text-gold-main hover:bg-gold-main hover:text-dark-deep hover:border-gold-main font-medium shadow-[0_2px_12px_rgba(212,175,55,0.18)]"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Right: Language + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              ref={hamburgerButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="p-2 text-cream-text hover:text-gold-main transition-colors duration-300 focus-visible:outline-gold-main"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

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
