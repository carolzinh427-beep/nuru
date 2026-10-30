import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';
import StarBorder from './StarBorder';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text relative"
    >
      <div className="container-max">
        <div ref={contentRef} className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-cream-text font-normal leading-tight mb-8 text-center">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-cream-text/90 font-light leading-relaxed mb-6 max-w-2xl mx-auto text-center">
            {t.contact.text}
          </p>

          <p className="text-sm text-gray-warm font-normal italic mb-12 text-center">
            {t.contact.note}
          </p>

          {/* Single CTA Button: Ask about availability */}
          <div className="flex justify-center items-center w-full max-w-xs mx-auto">
            <StarBorder
              as="button"
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.availability)}
              color="#F5EFE6"
              trailColor="#D9A75E"
              backgroundColor="#C28E42"
              textColor="#0A0A0A"
              borderColor="rgba(194, 142, 66, 0.6)"
              radius={9999}
              thickness={1.5}
              glow={0.7}
              sparkle={true}
              className="w-full inline-flex items-center justify-center text-center !rounded-full uppercase tracking-widest text-xs font-semibold py-3.5 px-8 shadow-[0_4px_20px_rgba(194,142,66,0.25)] hover:scale-[1.02] active:scale-95 transition-transform"
            >
              <span>{t.contact.ctaSecondary}</span>
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
