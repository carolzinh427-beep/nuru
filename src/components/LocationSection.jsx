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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text and Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.location.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.location.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-10">
              {t.location.text}
            </p>

            {/* Indicator blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="border border-border-subtle p-5 bg-dark-card">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Area
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.area}
                </span>
              </div>

              <div className="border border-border-subtle p-5 bg-dark-card">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Access
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.near}
                </span>
              </div>

              <div className="border border-border-subtle p-5 bg-dark-card">
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

          {/* Right: Stylized Minimalist Map Placeholder (Solid Palette Colors) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-dark-card border border-border-subtle overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              {/* Minimalist SVG Street Grid */}
              <svg
                className="absolute inset-0 w-full h-full text-border-subtle"
                viewBox="0 0 600 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Secondary streets */}
                <path d="M0 80H600" stroke="#2B2722" strokeWidth="2" />
                <path d="M0 160H600" stroke="#2B2722" strokeWidth="3" />
                <path d="M0 240H600" stroke="#2B2722" strokeWidth="1.5" />
                <path d="M0 320H600" stroke="#2B2722" strokeWidth="2.5" />
                <path d="M0 400H600" stroke="#2B2722" strokeWidth="1.5" />

                <path d="M100 0V450" stroke="#2B2722" strokeWidth="2" />
                <path d="M220 0V450" stroke="#2B2722" strokeWidth="3" />
                <path d="M340 0V450" stroke="#2B2722" strokeWidth="2" />
                <path d="M460 0V450" stroke="#2B2722" strokeWidth="2.5" />

                {/* Diagonal Avenue */}
                <path d="M60 450L480 0" stroke="#2B2722" strokeWidth="4" />
                <path d="M160 450L580 0" stroke="#2B2722" strokeWidth="2" />

                {/* Thames river stylized segment (solid color) */}
                <path
                  d="M0 410C120 400 240 430 380 410C480 395 540 420 600 405"
                  stroke="#1E1B17"
                  strokeWidth="16"
                />

                {/* Victoria Station indicator ring */}
                <circle cx="280" cy="210" r="38" stroke="#C9A24B" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
                <circle cx="280" cy="210" r="8" fill="#C9A24B" />
                <circle cx="280" cy="210" r="3" fill="#0A0A0A" />
              </svg>

              {/* Top tag */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-dark-deep border border-border-subtle text-gold-main px-3 py-1.5 text-[11px] tracking-widest uppercase font-medium">
                  Central London &bull; SW1
                </div>
                <div className="bg-dark-card border border-border-subtle px-3 py-1.5 text-[11px] tracking-wider text-gray-warm">
                  Victoria Station
                </div>
              </div>

              {/* Pin card bottom */}
              <div className="relative z-10 bg-dark-deep border border-border-subtle p-4 max-w-xs shadow-md">
                <span className="font-serif text-lg text-cream-text block font-medium">
                  Victoria Station Area
                </span>
                <span className="text-xs text-gray-warm font-light block mt-1">
                  Walking distance from underground and rail connections.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
