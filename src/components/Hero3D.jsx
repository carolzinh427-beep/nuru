import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export function Hero3D() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const contentRef = useRef(null);
  const goldLineRef = useRef(null);
  const bottomBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Subtle parallax on background image
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 2. Smooth fade and gentle lift on text content as user scrolls
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -50,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '70% top',
            scrub: true,
          },
        });
      }

      // 3. Gold vertical architectural line expansion on scroll
      if (goldLineRef.current) {
        gsap.to(goldLineRef.current, {
          scaleY: 1.5,
          y: 40,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 4. Bottom bar fades out early in the scroll
      if (bottomBarRef.current) {
        gsap.to(bottomBarRef.current, {
          opacity: 0,
          y: -25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '35% top',
            scrub: true,
          },
        });
      }

      // 5. Continuous luxury pulse on the scroll line indicator
      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { y: -16, opacity: 0 },
          {
            y: 16,
            opacity: 1,
            repeat: -1,
            duration: 1.8,
            ease: 'power2.inOut',
            yoyo: false,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full bg-dark-deep text-cream-text overflow-hidden flex flex-col justify-between"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Atmosphere with Parallax */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          ref={bgImageRef}
          src={IMAGES.heroImage}
          alt=""
          className="w-full h-[120%] object-cover object-center -mt-[10%] filter brightness-[0.22] contrast-[1.2] saturate-[0.6] opacity-35"
        />
        {/* Solid dark tint overlay */}
        <div className="absolute inset-0 bg-dark-deep/80" />

        {/* Fine gold architectural lines with scroll reactivity */}
        <div className="absolute right-12 sm:right-24 top-0 bottom-0 w-[1px] bg-border-subtle/60" />
        <div
          ref={goldLineRef}
          className="absolute right-16 sm:right-32 top-1/4 h-64 w-[1px] bg-gold-main/30"
        />
        <div className="absolute left-8 bottom-32 w-48 h-[1px] bg-gold-main/15" />
      </div>

      {/* Main Hero Content with Scroll Fade & Lift */}
      <div
        ref={contentRef}
        className="relative z-10 container-max pt-32 sm:pt-40 pb-16 flex-1 flex flex-col justify-center"
      >
        <div className="max-w-2xl">
          {/* Subtle gold indicator */}
          <div className="inline-flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-gold-main inline-block" />
            <span className="text-xs tracking-widest-plus uppercase text-gold-main font-semibold">
              Central London &bull; Victoria
            </span>
          </div>

          {/* Single H1 on the site */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-cream-text font-normal leading-[1.14] mb-6">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-warm font-light leading-relaxed mb-6 max-w-xl">
            {t.hero.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-gold-main tracking-widest uppercase mb-10 font-medium">
            {t.hero.note}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={scrollToMenu}
              className="btn-secondary"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar with Animated Scroll Indicator */}
      <div
        ref={bottomBarRef}
        className="relative z-10 container-max pb-8 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-warm tracking-wider gap-4"
      >
        <div className="flex items-center space-x-6">
          <span>CENTRAL LONDON</span>
          <span className="text-gold-main/40">&bull;</span>
          <span>VICTORIA STATION</span>
          <span className="text-gold-main/40">&bull;</span>
          <span>10:00 – 23:00</span>
        </div>

        {/* Clickable Luxury Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToMenu}
          className="group inline-flex items-center space-x-3 text-gold-main hover:text-gold-light transition-colors cursor-pointer text-left focus-visible:outline-gold-main"
          aria-label="Scroll to explore massage menu"
        >
          <span className="text-[11px] tracking-widest uppercase font-medium">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-7 bg-border-subtle relative overflow-hidden flex items-center justify-center">
            <div
              ref={scrollIndicatorRef}
              className="w-[2px] h-3 bg-gold-main absolute top-0"
            />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero3D;
