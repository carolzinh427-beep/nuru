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
      className="py-20 sm:py-28 bg-dark-deep text-cream-text overflow-hidden relative"
    >
      <div className="container-max">
        {/* Header: Centered */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight text-center">
            {t.experience.title}
          </h2>
        </div>

        {/* 3 Pillars: Centered */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-5xl mx-auto px-4"
        >
          {t.experience.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-border-subtle/60 hover:border-gold-main/40 transition-colors duration-300 p-6 sm:p-8 bg-dark-card/40 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-5xl sm:text-6xl text-gold-main block mb-4 font-normal text-center tracking-tight">
                  {pillar.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-cream-text font-normal mb-3 text-center">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-warm font-light leading-relaxed text-center max-w-xs">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Treatment Room Image: Centered with safe margins, NOT touching viewport edges */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-[16/9] min-h-[260px] sm:min-h-[340px] overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] rounded-2xl sm:rounded-3xl">
            <img
              ref={parallaxImgRef}
              src={IMAGES.treatmentRoomImage}
              alt="Private candlelit massage suite with luxurious linens and warm oils"
              className="w-full h-[120%] object-cover object-center -mt-[10%] filter saturate-[0.95] contrast-[1.05] brightness-[0.92]"
              loading="lazy"
            />
            {/* Sensual Vignette Shading on borders */}
            <div
              className="absolute inset-0 pointer-events-none shadow-[inset_0_0_65px_20px_#0A0A0A,inset_0_0_130px_45px_rgba(10,10,10,0.75)]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 border border-gold-main/20 pointer-events-none rounded-2xl sm:rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
