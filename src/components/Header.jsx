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
      if (window.scrollY > 40) {
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-off-white/95 backdrop-blur-sm border-b border-line-soft py-3 shadow-sm text-text-dark'
            : 'bg-transparent py-5 text-off-white'
        }`}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group flex flex-col focus-visible:outline-slate-blue"
            aria-label="Nuru Massage London - Home"
          >
            <span
              className={`font-serif text-xl sm:text-2xl tracking-[0.2em] font-normal transition-colors duration-200 ${
                isScrolled ? 'text-deep-blue' : 'text-off-white'
              }`}
            >
              NURU
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase -mt-1 font-medium transition-colors duration-200 ${
                isScrolled ? 'text-slate-blue' : 'text-warm-beige'
              }`}
            >
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
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  isScrolled
                    ? 'text-text-dark/80 hover:text-deep-blue'
                    : 'text-off-white/80 hover:text-warm-beige'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Language + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className={`text-xs tracking-wider uppercase px-4 py-2.5 transition-colors duration-200 border ${
                isScrolled
                  ? 'border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-off-white'
                  : 'border-warm-beige/80 text-warm-beige hover:bg-warm-beige hover:text-deep-blue'
              }`}
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
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? 'text-deep-blue' : 'text-off-white'
              }`}
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

