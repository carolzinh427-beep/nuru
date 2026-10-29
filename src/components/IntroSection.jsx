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
      // Expanding decorative line
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
      className="py-24 sm:py-32 bg-off-white text-text-dark border-b border-line-soft"
    >
      <div className="container-max">
        {/* Expanding decorative top line */}
        <div ref={lineRef} className="fine-line mb-16 origin-left" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div ref={textColRef} className="lg:col-span-7 flex flex-col justify-center">
            <span className="eyebrow mb-4">{t.intro.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deep-blue font-normal leading-tight mb-8">
              {t.intro.title}
            </h2>

            <p className="text-base sm:text-lg text-text-dark/85 font-light leading-relaxed mb-6">
              {t.intro.text}
            </p>

            <p className="text-sm text-slate-blue font-normal italic mb-10">
              {t.intro.note}
            </p>

            {/* Three indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-line-soft">
              {t.intro.indicators.map((indicator, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-1.5 h-1.5 bg-warm-beige shrink-0" />
                  <span className="text-xs uppercase tracking-widest text-text-dark font-medium">
                    {indicator}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column with animated reveal */}
          <div className="lg:col-span-5">
            <div
              ref={imageMaskRef}
              className="relative overflow-hidden bg-line-soft shadow-sm aspect-[4/5] w-full"
            >
              <img
                src={IMAGES.locationImage}
                alt="Central London location near Victoria Station"
                className="w-full h-full object-cover object-center filter saturate-[0.85] contrast-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-line-soft/60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

