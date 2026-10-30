import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';

export function ContactSection() {
  const { t, whatsappMessages } = useLanguage();

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

          <p className="text-sm text-gray-warm font-normal italic mb-12 text-center">
            {t.contact.note}
          </p>

          {/* WhatsApp CTA Buttons: Discreet, no raw number exposed */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16 w-full max-w-md mx-auto">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.97.57 3.805 1.554 5.356L2 22l4.743-1.527a9.98 9.98 0 005.288 1.488h.004c5.535 0 10.029-4.494 10.029-10.03 0-2.679-1.045-5.197-2.942-7.094A9.957 9.957 0 0012.031 2zm0 18.256h-.003a8.21 8.21 0 01-4.184-1.149l-.3-.178-3.111 1.002.825-3.033-.195-.311a8.22 8.22 0 01-1.263-4.556c0-4.549 3.702-8.251 8.254-8.251 2.204 0 4.276.859 5.834 2.417a8.204 8.204 0 012.414 5.835c0 4.55-3.702 8.253-8.254 8.253zm4.526-6.177c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.539.062-.248-.124-1.049-.387-1.998-1.233-.739-.659-1.238-1.473-1.383-1.722-.145-.248-.016-.382.109-.506.112-.112.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.428h-.477c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075 0 1.224.891 2.407 1.016 2.573.124.166 1.754 2.679 4.249 3.757.593.257 1.057.41 1.419.525.596.19 1.139.163 1.568.099.479-.072 1.467-.6 1.674-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z"/>
              </svg>
              <span>{t.contact.ctaPrimary}</span>
            </button>
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.availability)}
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center"
            >
              <span>{t.contact.ctaSecondary}</span>
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
