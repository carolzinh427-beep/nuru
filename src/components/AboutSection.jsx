import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';

export function AboutSection() {
  const { t, whatsappMessages } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
          <span className="eyebrow mb-4 block text-center">{t.about.eyebrow}</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8 text-center">
            {t.about.title}
          </h2>

          {/* Discreet image centered with safe margins */}
          <div className="w-full max-w-md mx-auto mb-10 px-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-dark-card border border-border-subtle shadow-xl">
              <img
                src={IMAGES.therapistImage}
                alt="Massage environment and attention to detail"
                className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1] brightness-[0.8]"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
            </div>
          </div>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 text-center max-w-2xl">
            {t.about.text}
          </p>

          <div className="border-t border-b border-gold-main/30 py-5 my-8 max-w-xl mx-auto">
            <p className="text-sm sm:text-base text-gold-light/90 font-normal italic text-center">
              {t.about.note}
            </p>
          </div>

          <div className="pt-6">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary"
            >
              {t.about.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
