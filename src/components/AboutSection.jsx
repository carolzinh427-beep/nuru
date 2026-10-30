import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';
import AccordionGallery from './AccordionGallery';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const photosRef = useRef(null);
  const textRef = useRef(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

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

      // Scroll-driven trigger for mobile vertical accordion:
      // Scrolling down into section expands the bottom image and closes the top one;
      // Scrolling back up closes the bottom image and restores the top one.
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 35%',
        end: 'bottom 65%',
        onEnter: () => setMobileActiveIndex(1),
        onLeaveBack: () => setMobileActiveIndex(0),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const thaissaItems = [
    {
      image: IMAGES.therapistImage,
      label: 'Thaissa · Studio Portrait',
      alt: 'Thaissa | Private and sensual massage in Central London'
    },
    {
      image: IMAGES.therapistEveningImage,
      label: 'Thaissa · Sensual Elegance',
      alt: 'Thaissa | Sensual Elegance in Central London'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text relative"
    >
      <div className="container-max">
        {/* 2-Column Layout: Dual photos on one side, text on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Photos of Thaissa */}
          <div
            ref={photosRef}
            className="lg:col-span-6 order-2 lg:order-1 px-1 sm:px-2"
          >
            {/* Mobile Vertical Accordion: React Bits AccordionGallery with scroll down/up transitions */}
            <div className="block sm:hidden w-full max-w-sm mx-auto">
              <AccordionGallery
                items={thaissaItems}
                orientation="vertical"
                activeIndex={mobileActiveIndex}
                onActiveChange={setMobileActiveIndex}
                height={480}
                gap={12}
                radius={20}
                expandRatio={0.72}
                trigger="click"
                grayscale={false}
                accentColor="#D9A75E"
                overlayColor="#0A0A0A"
                textColor="#F5EFE6"
              />
            </div>

            {/* Desktop & Tablet: Dual photo spread */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {/* Photo 1: Studio portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group rounded-2xl sm:rounded-3xl">
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

                <div className="absolute inset-0 border border-gold-main/20 pointer-events-none rounded-2xl sm:rounded-3xl" />
              </div>

              {/* Photo 2: Evening elegance with wine */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-dark-card border border-gold-main/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(194,142,66,0.12)] group sm:translate-y-4 rounded-2xl sm:rounded-3xl">
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

                <div className="absolute inset-0 border border-gold-main/20 pointer-events-none rounded-2xl sm:rounded-3xl" />
              </div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div
            ref={textRef}
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-8">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-xl">
              {t.about.text}
            </p>

            <div className="border border-gold-main/30 rounded-2xl p-5 my-8 max-w-lg w-full bg-dark-card/40 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-gold-light/90 font-normal italic">
                {t.about.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
