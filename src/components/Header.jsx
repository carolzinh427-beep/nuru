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
    { href: '#booking', label: t.nav.booking },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Floating Navbar Container: Appears smoothly upon scroll */}
      <header
        className={`fixed top-3 sm:top-5 left-0 right-0 z-40 flex justify-center px-3 sm:px-6 transition-all duration-500 ease-out ${
          isScrolled
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-8 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-5xl rounded-full bg-dark-deep/80 backdrop-blur-xl border border-gold-main/30 shadow-[0_16px_50px_rgba(0,0,0,0.85)] text-cream-text flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5">
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
            className="hidden md:flex items-center space-x-6"
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

          {/* Desktop Right: Language + Instagram + Floating CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher isScrolled={isScrolled} />
            <a
              href="https://instagram.com/nurumassagelondon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-warm hover:text-gold-main transition-colors duration-300 focus-visible:outline-gold-main"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-xs tracking-wider uppercase px-4 py-2 rounded-full transition-all duration-300 border border-gold-main/60 bg-dark-deep/40 backdrop-blur-sm text-gold-main hover:bg-gold-main hover:text-dark-deep hover:border-gold-main font-medium shadow-[0_2px_12px_rgba(194,142,66,0.18)]"
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
