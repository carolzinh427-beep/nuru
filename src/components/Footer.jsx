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
        {/* Brand centered */}
        <a
          href="#home"
          className="inline-flex flex-col items-center mb-6 focus-visible:outline-gold-main"
          aria-label="Nuru Massage London Return to Top"
        >
          <span className="font-serif text-2xl tracking-[0.2em] font-normal text-cream-text">
            NURU
          </span>
          <span className="text-[10px] tracking-[0.3em] text-gold-main uppercase -mt-1 font-medium">
            MASSAGE LONDON
          </span>
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
            <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-1 text-center">
              WhatsApp
            </span>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="text-sm font-medium text-gold-main hover:text-gold-light hover:underline focus-visible:outline-gold-main text-center"
            >
              {company.whatsappDisplay}
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
