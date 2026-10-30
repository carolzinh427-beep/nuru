import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const photosRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (photosRef.current) {
        gsap.fromTo(
          photosRef.current,
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

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 25, opacity: 0 },
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
      id="about"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        {/* 2-Column Layout: Dual photos on one side, text on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Dual photos of Thaissa with sensual vignette shading */}
          <div
            ref={photosRef}
            className="lg:col-span-6 order-2 lg:order-1 px-1 sm:px-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {/* Photo 1: Studio portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group">
                <img
                  src={IMAGES.therapistImage}
                  alt="Thaissa | Private and sensual massage in Central London"
                  className="w-full h-full object-cover object-center filter saturate-[1.02] contrast-[1.04] brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Sensual Vignette Shading on borders */}
                <div
                  className="absolute inset-0 pointer-events-none shadow-[inset_0_0_45px_12px_#0A0A0A,inset_0_0_90px_25px_rgba(10,10,10,0.7)]"
                  aria-hidden="true"
                />

                {/* Bottom shadow lift */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none shadow-[inset_0_-60px_50px_-15px_#0A0A0A]"
                  aria-hidden="true"
                />

                {/* Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase text-gold-main font-semibold block">
                      Host & Masseuse
                    </span>
                    <span className="font-serif text-xl text-cream-text tracking-wide block">
                      Thaissa
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold-main shadow-[0_0_8px_rgba(194,142,66,0.8)]" />
                </div>

                <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
              </div>

              {/* Photo 2: Evening elegance with wine */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group sm:translate-y-4">
                <img
                  src={IMAGES.therapistEveningImage}
                  alt="Thaissa | Sensual Elegance in Central London"
                  className="w-full h-full object-cover object-top filter saturate-[1.02] contrast-[1.04] brightness-[0.96] transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Sensual Vignette Shading on borders */}
                <div
                  className="absolute inset-0 pointer-events-none shadow-[inset_0_0_45px_12px_#0A0A0A,inset_0_0_90px_25px_rgba(10,10,10,0.7)]"
                  aria-hidden="true"
                />

                {/* Bottom shadow lift */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none shadow-[inset_0_-60px_50px_-15px_#0A0A0A]"
                  aria-hidden="true"
                />

                {/* Atmosphere Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase text-gold-main font-semibold block">
                      Sanctuary
                    </span>
                    <span className="font-serif text-xl text-cream-text tracking-wide block">
                      Elegance
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gold-main shadow-[0_0_8px_rgba(194,142,66,0.8)]" />
                </div>

                <div className="absolute inset-0 border border-gold-main/20 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div
            ref={textRef}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >
            <span className="eyebrow mb-4 block">{t.about.eyebrow}</span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-xl">
              {t.about.text}
            </p>

            <div className="border-t border-b border-gold-main/30 py-5 my-8 max-w-lg w-full">
              <p className="text-sm sm:text-base text-gold-light/90 font-normal italic">
                {t.about.note}
              </p>
            </div>

            <div className="pt-2">
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
