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
            transformOrigin: 'center center',
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
        {/* Expanding decorative top line: Centered */}
        <div ref={lineRef} className="gold-line max-w-md mx-auto mb-16 origin-center" />

        {/* Centered Content Block: No touching edges */}
        <div ref={textColRef} className="max-w-3xl mx-auto text-center flex flex-col items-center px-4 mb-16">
          <span className="eyebrow mb-4 block text-center">{t.intro.eyebrow}</span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8 text-center">
            {t.intro.title}
          </h2>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 text-center max-w-2xl">
            {t.intro.text}
          </p>

          <p className="text-sm text-gray-warm font-normal italic mb-10 text-center">
            {t.intro.note}
          </p>

          {/* Three indicators: Centered */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-6 border-t border-border-subtle w-full max-w-2xl">
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

        {/* Centered Image with Safe Margins: Doesn't touch edges */}
        <div className="max-w-2xl mx-auto px-4">
          <div
            ref={imageMaskRef}
            className="relative overflow-hidden bg-dark-card border border-border-subtle aspect-[16/10] sm:aspect-[16/9] w-full shadow-lg"
          >
            <img
              src={IMAGES.locationImage}
              alt="Central London location near Victoria Station"
              className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1] brightness-[0.85]"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
