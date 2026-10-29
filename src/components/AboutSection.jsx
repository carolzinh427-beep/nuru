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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left discreet image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-dark-card border border-border-subtle shadow-lg">
              <img
                src={IMAGES.therapistImage}
                alt="Massage environment and attention to detail"
                className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1] brightness-[0.8]"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
            </div>
          </div>

          {/* Right text content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.about.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6">
              {t.about.text}
            </p>

            <div className="border-l-2 border-gold-main pl-6 my-6">
              <p className="text-sm text-gray-warm font-normal italic">
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
      </div>
    </section>
  );
}

export default AboutSection;
