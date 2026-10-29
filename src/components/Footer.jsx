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
      <div className="container-max">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-border-subtle">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="inline-flex flex-col mb-6 focus-visible:outline-gold-main"
              aria-label="Nuru Massage London - Return to Top"
            >
              <span className="font-serif text-2xl tracking-[0.2em] font-normal text-cream-text">
                NURU
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold-main uppercase -mt-1 font-medium">
                MASSAGE LONDON
              </span>
            </a>
            <p className="text-sm text-gray-warm font-light leading-relaxed max-w-sm mb-6">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-gold-main block mb-6 font-semibold">
              {t.footer.linksTitle}
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs tracking-wider uppercase text-gray-warm hover:text-gold-main transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-gold-main block mb-6 font-semibold">
              {t.footer.contactTitle}
            </span>
            <div className="space-y-3 text-xs text-gray-warm">
              <div>
                <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-1">
                  WhatsApp
                </span>
                <button
                  type="button"
                  onClick={() => openWhatsapp(whatsappMessages.general)}
                  className="text-sm font-medium text-gold-main hover:text-gold-light hover:underline focus-visible:outline-gold-main"
                >
                  {company.whatsappDisplay}
                </button>
              </div>
              <div className="pt-2">
                <span className="block text-gray-warm/60 text-[10px] uppercase tracking-wider mb-1">
                  Location
                </span>
                <span className="block text-cream-text">
                  {company.location[language] || company.location.en}
                </span>
              </div>
            </div>
          </div>

          {/* Hours Col */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-gold-main block mb-6 font-semibold">
              {t.footer.hoursTitle}
            </span>
            <p className="text-xs text-cream-text leading-relaxed">
              {company.hours[language] || company.hours.en}
            </p>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-warm/60 gap-4">
          <p className="italic text-center md:text-left">
            {t.footer.disclaimer}
          </p>
          <p className="tracking-wider text-center md:text-right">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
