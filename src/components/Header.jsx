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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-dark-deep/75 backdrop-blur-xl border-b border-gold-main/25 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] text-cream-text'
            : 'bg-dark-deep/40 backdrop-blur-md border-b border-white/[0.05] py-5 text-cream-text'
        }`}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex flex-col focus-visible:outline-gold-main"
            aria-label="Nuru Massage London Home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.2em] font-normal text-cream-text transition-colors duration-300 group-hover:text-gold-light">
              NURU
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase -mt-1 font-medium text-gold-main transition-colors duration-300 group-hover:text-gold-light">
              MASSAGE LONDON
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center space-x-8"
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

          {/* Desktop Right: Language + Glassmorphic CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-xs tracking-wider uppercase px-5 py-2.5 transition-all duration-300 border border-gold-main/60 bg-dark-deep/40 backdrop-blur-sm text-gold-main hover:bg-gold-main hover:text-dark-deep hover:border-gold-main font-medium shadow-[0_2px_12px_rgba(212,175,55,0.15)]"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Right: Language + Hamburger */}
          <div className="flex md:hidden items-center space-x-3">
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
