import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';

export function MobileMenu({ isOpen, onClose, triggerRef }) {
  const { t, whatsappMessages } = useLanguage();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Lock scroll & handle Escape / focus trap
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus initial element
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
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-deep-blue text-off-white flex flex-col justify-between p-6 sm:p-10 animate-fade-in"
    >
      {/* Top row */}
      <div className="flex items-center justify-between border-b border-line-soft/20 pb-6">
        <div>
          <span className="font-serif tracking-widest text-lg font-normal text-off-white block">
            NURU
          </span>
          <span className="text-[10px] tracking-[0.25em] text-warm-beige block uppercase">
            MASSAGE LONDON
          </span>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-off-white/80 hover:text-off-white focus-visible:outline-warm-beige"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-8">
        <ul className="flex flex-col space-y-6">
          {navItems.map((item, idx) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="font-serif text-3xl sm:text-4xl text-off-white/90 hover:text-warm-beige transition-colors duration-200 block"
              >
                <span className="text-xs text-warm-beige/70 font-sans tracking-widest mr-4 inline-block">
                  0{idx + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Area */}
      <div className="border-t border-line-soft/20 pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-widest text-off-white/60 uppercase">
            Language
          </span>
          <LanguageSwitcher isScrolled={false} />
        </div>

        <button
          type="button"
          onClick={handleWhatsappClick}
          className="btn-hero-primary w-full text-center"
        >
          {t.nav.cta}
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;

