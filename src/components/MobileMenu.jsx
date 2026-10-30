import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';
import StarBorder from './StarBorder';

/**
 * MobileMenu
 *
 * Glassmorphic ("fundo vidralítico transparente") floating mobile menu
 * Anchored from top-right corner with smooth transitions between options.
 */
export function MobileMenu({ isOpen, onClose, triggerRef }) {
  const { t, whatsappMessages } = useLanguage();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timeout = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const focusableElements = dialog.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeout);
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#booking', label: t.nav.booking },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  const handleWhatsappClick = () => {
    onClose();
    openWhatsapp(whatsappMessages.general);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex items-start justify-end p-3 sm:p-5"
    >
      {/* Translucent Dimmed Backdrop with Blur ("fundo transparente") */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Floating Glassmorphic Menu Panel ("fundo vidralítico") */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-sm ml-auto bg-dark-deep/80 backdrop-blur-3xl border border-gold-main/40 rounded-3xl p-5 sm:p-6 shadow-[0_24px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(194,142,66,0.18)] max-h-[94vh] overflow-y-auto flex flex-col justify-between animate-in fade-in zoom-in-95 duration-250 ease-out"
      >
        {/* Top row: Brand Logo + Close Button */}
        <div className="flex items-center justify-between pb-4 border-b border-gold-main/20">
          <div className="flex items-center">
            <img
              src="/images/logo-navbar.png"
              alt="Nuru Massage London"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-gold-main hover:text-gold-light rounded-full border border-gold-main/30 hover:border-gold-main bg-dark-card/60 transition-all duration-300 hover:rotate-90 active:scale-95 focus-visible:outline-gold-main"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Options with smooth transitions between options */}
        <nav className="my-auto py-3">
          <ul className="flex flex-col space-y-1.5">
            {navItems.map((item, idx) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between px-3.5 py-2.5 sm:py-3 rounded-2xl border border-transparent hover:border-gold-main/35 hover:bg-gold-main/12 hover:translate-x-1.5 transition-all duration-300 active:scale-[0.98]"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-[11px] font-sans tracking-widest text-gold-main/60 group-hover:text-gold-main font-semibold transition-colors duration-300">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-cream-text group-hover:text-gold-light transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>

                  {/* Soft animated chevron transition */}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-gold-main/20 text-gold-main transition-all duration-300">
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Area: Language + Social + WhatsApp Booking CTA */}
        <div className="pt-4 border-t border-gold-main/20 space-y-3.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] tracking-widest text-gray-warm uppercase font-medium">
              Language
            </span>
            <div className="rounded-full bg-dark-card/60 border border-gold-main/30 px-2 py-0.5">
              <LanguageSwitcher isScrolled={true} />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://instagram.com/nurumassagelondon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-gold-main/30 bg-dark-card/60 text-gold-main hover:text-gold-light hover:border-gold-main transition-colors duration-300 shrink-0 flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <StarBorder
              as="button"
              type="button"
              onClick={handleWhatsappClick}
              color="#F5EFE6"
              trailColor="#D9A75E"
              backgroundColor="#C28E42"
              textColor="#0A0A0A"
              borderColor="rgba(194, 142, 66, 0.6)"
              radius={9999}
              thickness={1.5}
              glow={0.7}
              sparkle={true}
              className="flex-1 text-center !rounded-full uppercase tracking-widest text-xs font-semibold py-3 px-6 shadow-[0_4px_20px_rgba(194,142,66,0.25)] hover:scale-[1.02] active:scale-95 transition-transform"
            >
              {t.nav.cta}
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
