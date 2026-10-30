import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';

export function ContactSection() {
  const { t, whatsappMessages, company } = useLanguage();

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
          <span className="eyebrow mb-4 inline-block text-center">{t.contact.eyebrow}</span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-cream-text font-normal leading-tight mb-8 text-center">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-2xl mx-auto text-center">
            {t.contact.text}
          </p>

          <p className="text-sm text-gray-warm font-normal italic mb-10 text-center">
            {t.contact.note}
          </p>

          {/* WhatsApp Direct Number Display */}
          <div className="inline-flex items-center justify-center space-x-3 mb-12 border-b border-border-subtle pb-3">
            <span className="text-xs uppercase tracking-widest text-gray-warm font-medium">
              WhatsApp
            </span>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="font-serif text-2xl sm:text-3xl text-gold-main hover:text-gold-light transition-all duration-200 focus-visible:outline-gold-main"
            >
              {company.whatsappDisplay}
            </button>
          </div>

          {/* CTA Buttons: Centered */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 w-full max-w-md mx-auto">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary w-full sm:w-auto"
            >
              {t.contact.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.availability)}
              className="btn-secondary w-full sm:w-auto"
            >
              {t.contact.ctaSecondary}
            </button>
          </div>

          {/* Operating hours: Centered */}
          <div className="border-t border-border-subtle pt-8 max-w-sm mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-center">
            <span className="uppercase tracking-widest text-gray-warm font-semibold">
              {t.contact.hoursLabel}
            </span>
            <span className="font-serif text-lg text-gold-main">
              {t.contact.hoursValue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
