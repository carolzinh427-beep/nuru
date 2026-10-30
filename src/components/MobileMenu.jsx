import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import LanguageSwitcher from './LanguageSwitcher';

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
      className="fixed inset-0 z-50 bg-dark-deep text-cream-text flex flex-col justify-between p-6 sm:p-10"
    >
      {/* Top row */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-6">
        <div className="flex items-center">
          <img
            src="/images/logo-navbar.jpg"
            alt="Nuru Massage London"
            className="h-9 sm:h-10 w-auto object-contain mix-blend-screen"
          />
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-gray-warm hover:text-gold-main focus-visible:outline-gold-main"
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

      {/* Nav Links: Centered */}
      <nav className="my-auto py-8 text-center">
        <ul className="flex flex-col space-y-6 items-center">
          {navItems.map((item, idx) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="font-serif text-3xl sm:text-4xl text-cream-text hover:text-gold-main transition-colors duration-200 block text-center"
              >
                <span className="text-xs text-gold-main/60 font-sans tracking-widest mr-3 inline-block">
                  0{idx + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Area */}
      <div className="border-t border-border-subtle pt-6 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-widest text-gray-warm uppercase">
            Language
          </span>
          <LanguageSwitcher isScrolled={true} />
        </div>

        <button
          type="button"
          onClick={handleWhatsappClick}
          className="btn-primary w-full text-center"
        >
          {t.nav.cta}
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
