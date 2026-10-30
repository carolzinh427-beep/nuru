import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { openWhatsapp } from '../utils/whatsapp';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function MassageMenu() {
  const { t, language, services, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
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
      id="menu"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-dark-deep text-cream-text border-b border-border-subtle"
    >
      <div className="container-max">
        {/* Header: Centered */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 px-4">
          <span className="eyebrow mb-4 block text-center">{t.menu.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-6 text-center">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-warm font-light leading-relaxed text-center">
            {t.menu.text}
          </p>
        </div>

        {/* Services Grid (2 cards): Centered with safe margins */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 max-w-4xl mx-auto px-2 sm:px-4">
          {services.map((service) => {
            const serviceName = service.name[language] || service.name.en;
            const serviceDesc = service.description[language] || service.description.en;
            const messageToSend = whatsappMessages[service.whatsappKey] || whatsappMessages.general;

            return (
              <article
                key={service.id}
                className="group bg-dark-card border border-border-subtle transition-all duration-300 hover:border-gold-main/60 hover:shadow-[0_4px_30px_rgba(194,142,66,0.14)] flex flex-col justify-between text-center"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-deep">
                  <img
                    src={service.image}
                    alt={serviceName}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter saturate-[0.9] contrast-[1.05] brightness-[0.9]"
                    loading="lazy"
                  />
                  {/* Sensual subtle border shading */}
                  <div
                    className="absolute inset-0 pointer-events-none shadow-[inset_0_0_35px_10px_#0A0A0A]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 border-b border-border-subtle pointer-events-none" />
                </div>

                {/* Content: Centered */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between items-center text-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl sm:text-3xl font-serif text-cream-text font-normal mb-4 group-hover:text-gold-light transition-colors duration-200 text-center">
                      {serviceName}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-warm font-light leading-relaxed mb-6 text-center max-w-sm">
                      {serviceDesc}
                    </p>
                  </div>

                  <div className="w-full flex flex-col items-center">
                    {/* Decorative fine line */}
                    <div className="fine-line mb-6 max-w-xs mx-auto" />

                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                      <span className="text-xs uppercase tracking-wider text-gold-main font-medium text-center">
                        {t.menu.priceNote}
                      </span>
                      <button
                        type="button"
                        onClick={() => openWhatsapp(messageToSend)}
                        className="btn-primary text-xs py-3 px-8 whitespace-nowrap"
                      >
                        {t.menu.ctaButton}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footnote: Centered */}
        <div className="max-w-2xl mx-auto pt-8 border-t border-border-subtle text-center px-4">
          <p className="text-xs sm:text-sm text-gray-warm font-light italic leading-relaxed text-center">
            {t.menu.footNote}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MassageMenu;
