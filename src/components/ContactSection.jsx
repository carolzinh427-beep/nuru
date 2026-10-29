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
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow mb-4 inline-block">{t.contact.eyebrow}</span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-cream-text font-normal leading-tight mb-8">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-2xl mx-auto">
            {t.contact.text}
          </p>

          <p className="text-sm text-gray-warm font-normal italic mb-10">
            {t.contact.note}
          </p>

          {/* WhatsApp Direct Number Display */}
          <div className="inline-flex items-center space-x-3 mb-12 border-b border-border-subtle pb-2">
            <span className="text-xs uppercase tracking-widest text-gray-warm font-medium">
              WhatsApp:
            </span>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="font-serif text-2xl sm:text-3xl text-gold-main hover:text-gold-light transition-colors focus-visible:outline-gold-main"
            >
              {company.whatsappDisplay}
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary"
            >
              {t.contact.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.availability)}
              className="btn-secondary"
            >
              {t.contact.ctaSecondary}
            </button>
          </div>

          {/* Operating hours */}
          <div className="border-t border-border-subtle pt-8 max-w-sm mx-auto flex items-center justify-between text-xs sm:text-sm">
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
