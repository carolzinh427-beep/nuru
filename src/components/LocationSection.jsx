import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function LocationSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text relative"
    >
      <div className="container-max">
        {/* 2-Column Layout: Text and Indicators on left, Interactive Google Maps on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div ref={leftColRef} className="lg:col-span-6 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.location.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.location.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-10 max-w-xl">
              {t.location.text}
            </p>

            {/* Indicator blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-xl">
              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card rounded-2xl flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Area
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.area}
                </span>
              </div>

              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card rounded-2xl flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Access
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.near}
                </span>
              </div>

              <div className="border border-border-subtle hover:border-gold-main/40 transition-colors duration-300 p-5 bg-dark-card rounded-2xl flex flex-col">
                <span className="text-[10px] tracking-widest uppercase text-gold-main block mb-1 font-semibold">
                  Hours
                </span>
                <span className="text-sm font-medium text-cream-text block">
                  {t.location.labels.hours}
                </span>
              </div>
            </div>

            {/* CTAs: Google Maps + Avalie no Google */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={COMPANY.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center rounded-full"
              >
                {t.location.cta}
              </a>

              <a
                href={COMPANY.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-center rounded-full"
              >
                {/* 5-star rating icon */}
                <svg className="w-4 h-4 text-gold-main shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{t.location.reviewCta}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Integration */}
          <div ref={rightColRef} className="lg:col-span-6 px-2 sm:px-4">
            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto bg-dark-card border border-gold-main/30 hover:border-gold-main/50 transition-colors duration-300 overflow-hidden shadow-2xl rounded-2xl sm:rounded-3xl">
              {/* Gold Luxury Map Badge */}
              <div className="absolute top-4 left-4 z-10 bg-dark-deep/90 backdrop-blur-md border border-gold-main/30 text-gold-main px-3.5 py-1.5 text-[11px] tracking-widest uppercase font-medium shadow-lg pointer-events-none flex items-center space-x-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-main shrink-0" />
                <span>Nuru Massage London</span>
              </div>

              {/* Embedded Google Maps with dark luxury filter centered at Victoria Station */}
              <iframe
                title="Nuru Massage London Map"
                src="https://maps.google.com/maps?q=51.4927645,-0.1377144&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-[95%] brightness-[90%]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Subtle gold inner border highlight */}
              <div className="absolute inset-0 border border-gold-main/20 pointer-events-none rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
