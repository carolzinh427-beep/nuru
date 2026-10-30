import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';

export function Footer() {
  const { t, language, company, whatsappMessages } = useLanguage();

  return (
    <footer className="bg-dark-deep text-cream-text py-8 sm:py-10 relative">
      <div className="container-max flex flex-col items-center text-center px-4">
        {/* Row 1: Logo & Horários */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl pb-6 border-b border-border-subtle/80 gap-4 sm:gap-6">
          {/* Logo with transparent PNG */}
          <a
            href="#home"
            className="inline-flex items-center focus-visible:outline-gold-main group"
            aria-label="Nuru Massage London Return to Top"
          >
            <img
              src="/images/logo-navbar.png"
              alt="Nuru Massage London"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Operating Hours */}
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-cream-text">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-main shrink-0" />
            <span className="text-gray-warm font-medium">
              {company.hours[language] || company.hours.en}
            </span>
          </div>

          {/* Social and Review Actions */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp */}
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-xs uppercase tracking-wider font-semibold text-gold-main hover:text-gold-light hover:border-gold-main transition-colors py-1.5 px-3.5 border border-gold-main/30 bg-dark-card focus-visible:outline-gold-main inline-flex items-center space-x-1.5 rounded-full"
              aria-label="WhatsApp"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.97.57 3.805 1.554 5.356L2 22l4.743-1.527a9.98 9.98 0 005.288 1.488h.004c5.535 0 10.029-4.494 10.029-10.03 0-2.679-1.045-5.197-2.942-7.094A9.957 9.957 0 0012.031 2zm0 18.256h-.003a8.21 8.21 0 01-4.184-1.149l-.3-.178-3.111 1.002.825-3.033-.195-.311a8.22 8.22 0 01-1.263-4.556c0-4.549 3.702-8.251 8.254-8.251 2.204 0 4.276.859 5.834 2.417a8.204 8.204 0 012.414 5.835c0 4.55-3.702 8.253-8.254 8.253zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.539.062-.248-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428h-.477c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.757.593.257 1.057.41 1.419.525.596.19 1.139.163 1.568.099.479-.072 1.467-.6 1.674-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z"/>
              </svg>
              <span>WhatsApp</span>
            </button>

            {/* Instagram */}
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-gray-warm hover:text-gold-main hover:border-gold-main transition-colors py-1.5 px-3 border border-border-subtle bg-dark-card focus-visible:outline-gold-main inline-flex items-center space-x-1.5 rounded-full"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

            {/* Google Reviews */}
            <a
              href={COMPANY.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-gray-warm hover:text-gold-main hover:border-gold-main transition-colors py-1.5 px-3 border border-border-subtle bg-dark-card focus-visible:outline-gold-main inline-flex items-center space-x-1.5 rounded-full"
              aria-label="Google Reviews"
            >
              <svg className="w-3.5 h-3.5 text-gold-main shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="hidden sm:inline">{t.footer.reviewText}</span>
            </a>
          </div>
        </div>

        {/* Row 2: Compact details and copyright */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-[11px] text-gray-warm/60 gap-2 text-center">
          <p className="tracking-wider">
            {company.location[language] || company.location.en}
          </p>
          <p className="tracking-wider">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
