import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';

export function Footer() {
  const { t, language, company, whatsappMessages } = useLanguage();

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#menu', label: t.nav.menu },
    { href: '#about', label: t.nav.about },
    { href: '#location', label: t.nav.location },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-dark-deep text-cream-text pt-20 pb-12 border-t border-border-subtle">
      <div className="container-max flex flex-col items-center text-center px-4">
        {/* Brand logo centered */}
        <a
          href="#home"
          className="inline-flex items-center mb-8 focus-visible:outline-gold-main group"
          aria-label="Nuru Massage London Return to Top"
        >
          <img
            src="/images/logo-navbar.jpg"
            alt="Nuru Massage London"
            className="h-12 sm:h-14 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <p className="text-sm text-gray-warm font-light leading-relaxed max-w-md mx-auto mb-10 text-center">
          {t.footer.tagline}
        </p>

        {/* Links horizontal centered */}
        <nav aria-label="Footer navigation" className="mb-10">
          <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs tracking-wider uppercase text-gray-warm hover:text-gold-main transition-colors duration-200 block text-center"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Hours centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-xs text-gray-warm pb-12 border-b border-border-subtle w-full max-w-2xl mx-auto text-center">
          <div>
            <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-2 text-center">
              Direct Contact
            </span>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-xs uppercase tracking-wider font-semibold text-gold-main hover:text-gold-light hover:border-gold-main transition-colors py-1.5 px-4 border border-gold-main/30 bg-dark-card focus-visible:outline-gold-main text-center inline-flex items-center space-x-2"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.97.57 3.805 1.554 5.356L2 22l4.743-1.527a9.98 9.98 0 005.288 1.488h.004c5.535 0 10.029-4.494 10.029-10.03 0-2.679-1.045-5.197-2.942-7.094A9.957 9.957 0 0012.031 2zm0 18.256h-.003a8.21 8.21 0 01-4.184-1.149l-.3-.178-3.111 1.002.825-3.033-.195-.311a8.22 8.22 0 01-1.263-4.556c0-4.549 3.702-8.251 8.254-8.251 2.204 0 4.276.859 5.834 2.417a8.204 8.204 0 012.414 5.835c0 4.55-3.702 8.253-8.254 8.253zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.539.062-.248-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428h-.477c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.757.593.257 1.057.41 1.419.525.596.19 1.139.163 1.568.099.479-.072 1.467-.6 1.674-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z"/>
              </svg>
              <span>{t.nav.cta}</span>
            </button>
          </div>

          <div>
            <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-1 text-center">
              Location
            </span>
            <span className="block text-cream-text text-center">
              {company.location[language] || company.location.en}
            </span>
          </div>

          <div>
            <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-1 text-center">
              Hours
            </span>
            <span className="block text-cream-text text-center">
              {company.hours[language] || company.hours.en}
            </span>
          </div>
        </div>

        {/* Disclaimer & Copyright: Centered */}
        <div className="pt-8 flex flex-col items-center justify-center text-xs text-gray-warm/60 gap-3 text-center">
          <p className="italic text-center max-w-lg">
            {t.footer.disclaimer}
          </p>
          <p className="tracking-wider text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
