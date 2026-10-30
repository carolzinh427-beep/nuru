import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function IntroSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const textColRef = useRef(null);
  const lineRef = useRef(null);
  const imageMaskRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Expanding gold decorative line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.out',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: lineRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Text block fade-in + translateY
      if (textColRef.current) {
        gsap.fromTo(
          textColRef.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textColRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Image reveal via clip-path
      if (imageMaskRef.current) {
        gsap.fromTo(
          imageMaskRef.current,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.4,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: imageMaskRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        {/* Expanding decorative top line */}
        <div ref={lineRef} className="gold-line max-w-sm mb-16 origin-left" />

        {/* 2-Column Layout: Text on one side, Image on the other (Safe Margins) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div ref={textColRef} className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow mb-4 block">{t.intro.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.intro.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-xl">
              {t.intro.text}
            </p>

            <p className="text-sm text-gray-warm font-normal italic mb-10 max-w-lg">
              {t.intro.note}
            </p>

            {/* Three indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle max-w-xl">
              {t.intro.indicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-gold-main shrink-0" />
                  <span className="text-xs uppercase tracking-widest text-cream-text/90 font-medium">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column: Safely bounded, does not touch site edges */}
          <div className="lg:col-span-5 px-2 sm:px-4">
            <div
              ref={imageMaskRef}
              className="relative overflow-hidden bg-dark-card border border-gold-main/30 aspect-[4/5] w-full max-w-md mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group"
            >
              <img
                src={IMAGES.locationImage}
                alt="Intimate candlelit sanctuary in Central London near Victoria Station"
                className="w-full h-full object-cover object-center filter saturate-[0.92] contrast-[1.05] brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Sensual Vignette Shading on borders */}
              <div
                className="absolute inset-0 pointer-events-none shadow-[inset_0_0_55px_15px_#0A0A0A,inset_0_0_110px_35px_rgba(10,10,10,0.7)]"
                aria-hidden="true"
              />
              <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
