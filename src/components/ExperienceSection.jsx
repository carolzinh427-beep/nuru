import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const pillarsRef = useRef(null);
  const parallaxImgRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered entry for the 3 pillars
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Subtle parallax on the treatment room image
      if (parallaxImgRef.current) {
        gsap.to(parallaxImgRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-off-white text-text-dark border-b border-line-soft overflow-hidden"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="eyebrow mb-4 block">{t.experience.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-deep-blue font-normal leading-tight">
            {t.experience.title}
          </h2>
        </div>

        {/* 3 Pillars */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20"
        >
          {t.experience.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border-t border-line-soft pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl sm:text-5xl text-warm-beige block mb-4 font-normal">
                  {pillar.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-deep-blue font-normal mb-3">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-text-dark/80 font-light leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width Treatment Room Image with Parallax container */}
        <div className="relative aspect-[21/9] min-h-[300px] overflow-hidden bg-line-soft border border-line-soft">
          <img
            ref={parallaxImgRef}
            src={IMAGES.treatmentRoomImage}
            alt="Discreet, clean massage environment"
            className="w-full h-[120%] object-cover object-center -mt-[10%] filter saturate-[0.85] contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 border border-line-soft/80 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

