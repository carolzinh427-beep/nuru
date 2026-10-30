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
            src="/images/logo-navbar.png"
            alt="Nuru Massage London"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-gray-warm hover:text-gold-main focus-visible:outline-gold-main rounded-full"
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
      <nav className="my-auto py-6 text-center">
        <ul className="flex flex-col space-y-5 items-center">
          {navItems.map((item, idx) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="font-serif text-2xl sm:text-3xl text-cream-text hover:text-gold-main transition-colors duration-200 block text-center"
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
      <div className="border-t border-border-subtle pt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-widest text-gray-warm uppercase">
            Language
          </span>
          <LanguageSwitcher isScrolled={true} />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/nurumassagelondon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-4 py-3 text-center inline-flex items-center justify-center shrink-0 rounded-full"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 text-gold-main" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <button
            type="button"
            onClick={handleWhatsappClick}
            className="btn-primary flex-1 text-center rounded-full"
          >
            {t.nav.cta}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
