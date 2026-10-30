import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';
import FlexCarousel from './FlexCarousel';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const { t, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const pillarsRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered entry for the 3 pillars
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 82%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Carousel items representing pillars 01, 02, 03 and exclusive sanctuary experience
  const carouselItems = [
    {
      src: IMAGES.treatmentRoomImage,
      alt: t.experience.pillars[0]?.title || 'Absolute Privacy',
      title: `01 · ${t.experience.pillars[0]?.title || 'Absolute Privacy'}`,
      subtitle: t.experience.pillars[0]?.text || ''
    },
    {
      src: IMAGES.heroImage,
      alt: t.experience.pillars[1]?.title || 'Sensory Atmosphere',
      title: `02 · ${t.experience.pillars[1]?.title || 'Sensory Atmosphere'}`,
      subtitle: t.experience.pillars[1]?.text || ''
    },
    {
      src: IMAGES.locationImage,
      alt: t.experience.pillars[2]?.title || 'Refined Well-being',
      title: `03 · ${t.experience.pillars[2]?.title || 'Refined Well-being'}`,
      subtitle: t.experience.pillars[2]?.text || ''
    },
    {
      src: IMAGES.therapistEveningImage,
      alt: language === 'pt' ? 'Santuário Privado' : 'Private Sanctuary',
      title: language === 'pt' ? 'Santuário Privado' : 'Private Sanctuary',
      subtitle: language === 'pt' ? 'Dedicação exclusiva para cada atendimento privativo' : 'Dedicated exclusive attention for each private appointment'
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text overflow-hidden relative"
    >
      <div className="container-max">
        {/* Header: Centered */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight text-center">
            {t.experience.title}
          </h2>
        </div>

        {/* Interactive React Bits WebGL FlexCarousel for Pillars 1, 2 and 3 */}
        <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 mb-16 sm:mb-20">
          <div className="w-full h-[460px] sm:h-[520px] md:h-[560px] relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold-main/30 bg-dark-card/50 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(194,142,66,0.12)]">
            <FlexCarousel
              items={carouselItems}
              preset="liquid"
              intro="rise"
              cardHeight={0.56}
              gap={14}
              radius={16}
              squeeze={0.2}
              focusOnClick
              captions
            />
          </div>
        </div>

        {/* 3 Pillars Summary Cards: Centered */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-5xl mx-auto px-4"
        >
          {t.experience.pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border border-border-subtle/60 hover:border-gold-main/40 transition-colors duration-300 p-6 sm:p-7 bg-dark-card/40 rounded-2xl flex flex-col items-center text-center backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl text-gold-main block mb-3 font-normal text-center tracking-tight">
                  {pillar.number}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-cream-text font-normal mb-2 text-center">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-warm font-light leading-relaxed text-center max-w-xs">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Treatment Room Image: Perfectly centered on mobile and desktop without cropping */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] rounded-2xl sm:rounded-3xl">
            <img
              src={IMAGES.treatmentRoomImage}
              alt="Private candlelit massage suite with luxurious linens and warm oils"
              className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] brightness-[0.92]"
              loading="lazy"
            />
            {/* Sensual Vignette Shading on borders */}
            <div
              className="absolute inset-0 pointer-events-none shadow-[inset_0_0_55px_15px_#0A0A0A,inset_0_0_110px_35px_rgba(10,10,10,0.7)]"
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
