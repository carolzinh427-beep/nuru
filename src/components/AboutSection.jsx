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
        {/* 2-Column Layout: Image on one side, text on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with sensual vignette shading, safe margins */}
          <div className="lg:col-span-5 order-2 lg:order-1 px-2 sm:px-4">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group">
              <img
                src={IMAGES.therapistImage}
                alt="Thaissa | Private and sensual massage in Central London"
                className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.04] brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Sensual Vignette Shading on borders */}
              <div
                className="absolute inset-0 pointer-events-none shadow-[inset_0_0_55px_15px_#0A0A0A,inset_0_0_110px_35px_rgba(10,10,10,0.7)]"
                aria-hidden="true"
              />

              {/* Bottom shadow lift for name plate */}
              <div
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none shadow-[inset_0_-80px_60px_-15px_#0A0A0A]"
                aria-hidden="true"
              />

              {/* Sensual Name Tag in the bottom corner */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-gold-main font-semibold block">
                    Private Sanctuary
                  </span>
                  <span className="font-serif text-2xl text-cream-text tracking-wide block">
                    Thaissa
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-gold-main shadow-[0_0_10px_rgba(194,142,66,0.8)]" />
              </div>

              {/* Delicate Gold Border Accent */}
              <div className="absolute inset-0 border border-gold-main/25 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.about.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-xl">
              {t.about.text}
            </p>

            <div className="border-t border-b border-gold-main/30 py-5 my-8 max-w-lg">
              <p className="text-sm sm:text-base text-gold-light/90 font-normal italic">
                {t.about.note}
              </p>
            </div>

            <div className="pt-4">
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
