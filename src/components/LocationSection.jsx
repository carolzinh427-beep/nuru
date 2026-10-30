import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/content';

export function LocationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        {/* 2-Column Layout: Text and Indicators on left, Interactive Google Maps on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.location.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.location.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-10 max-w-xl">
              {t.location.text}
            </p>

            {/* Indicator blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-xl">
              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Area
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.area}
                </span>
              </div>

              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Access
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.near}
                </span>
              </div>

              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Hours
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.hours}
                </span>
              </div>
            </div>

            {/* Google Maps CTA */}
            <div>
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.location.cta}
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Integration */}
          <div className="lg:col-span-6 px-2 sm:px-4">
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto bg-dark-card border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 overflow-hidden shadow-2xl">
              {/* Gold Luxury Map Badge */}
              <div className="absolute top-4 left-4 z-10 bg-dark-deep/90 backdrop-blur-md border border-gold-main/30 text-gold-main px-3.5 py-1.5 text-[11px] tracking-widest uppercase font-medium shadow-lg pointer-events-none flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-gold-main shrink-0" />
                <span>Victoria Station SW1</span>
              </div>

              {/* Embedded Google Maps with dark luxury filter */}
              <iframe
                title="Victoria Station London Map"
                src="https://maps.google.com/maps?q=Victoria+Station,+London,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[95%] brightness-[90%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Subtle gold inner border highlight */}
              <div className="absolute inset-0 border border-gold-main/15 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
