import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';
import { HeroLigatureTitle } from './HeroLigatureTitle';

gsap.registerPlugin(ScrollTrigger);

export function Hero3D() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const contentRef = useRef(null);
  const bottomBarRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Subtle parallax on background massage image
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 18,
          scale: 1.05,
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
          y: -45,
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

      // 3. Bottom bar fades out early in the scroll
      if (bottomBarRef.current) {
        gsap.to(bottomBarRef.current, {
          opacity: 0,
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '35% top',
            scrub: true,
          },
        });
      }

      // 4. Continuous luxury pulse on the scroll line indicator
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
      {/* Background Massage Image with Parallax and Elegant Bottom Shadow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden shadow-[inset_0_-160px_100px_-20px_#0A0A0A,inset_0_120px_80px_-20px_#0A0A0A]"
        aria-hidden="true"
      >
        <img
          ref={bgImageRef}
          src={IMAGES.heroImage}
          alt="Candlelit luxury massage sanctuary in London"
          className="w-full h-[125%] object-cover object-center -mt-[12%] filter brightness-[0.75] contrast-[1.12] saturate-[1.15] opacity-80"
        />
        {/* Solid dark tint overlay for high text contrast without extinguishing candle glow */}
        <div className="absolute inset-0 bg-dark-deep/45" />
      </div>

      {/* Elegant Deep Bottom Shadow: Blends into next section seamlessly */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none z-10 shadow-[inset_0_-160px_100px_-20px_#0A0A0A]"
        aria-hidden="true"
      />

      {/* Main Hero Content: Centered, no edge touching */}
      <div
        ref={contentRef}
        className="relative z-20 container-max pt-36 sm:pt-44 pb-16 flex-1 flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
          {/* Single H1 on the site: Art Nouveau Ligature Typography */}
          <HeroLigatureTitle title={t.hero.title} />

          {/* Subtitle: Editorial perfumery typography matching reference mockup, no ornaments underneath */}
          <p className="text-xs sm:text-sm text-gold-light/95 font-light leading-relaxed mb-10 max-w-2xl text-center uppercase tracking-[0.24em] whitespace-pre-line font-sans">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-md mx-auto">
            <button
              type="button"
              onClick={() => openWhatsapp(whatsappMessages.general)}
              className="btn-primary w-full sm:w-auto rounded-full"
            >
              {t.hero.ctaPrimary}
            </button>
            <button
              type="button"
              onClick={scrollToMenu}
              className="btn-secondary w-full sm:w-auto rounded-full"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar with Animated Scroll Indicator: Centered, safe gutters */}
      <div
        ref={bottomBarRef}
        className="relative z-20 container-max pb-6 pt-4 flex items-center justify-center text-xs text-gray-warm tracking-wider text-center"
      >
        {/* Clickable Luxury Scroll Indicator */}
        <button
          type="button"
          onClick={scrollToMenu}
          className="group inline-flex items-center space-x-3 text-gold-main hover:text-gold-light transition-colors cursor-pointer text-center focus-visible:outline-gold-main"
          aria-label="Scroll to explore massage menu"
        >
          <span className="text-[11px] tracking-widest uppercase font-medium">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-7 bg-border-subtle relative overflow-hidden flex items-center justify-center rounded-full">
            <div
              ref={scrollIndicatorRef}
              className="w-[2px] h-3 bg-gold-main absolute top-0 rounded-full"
            />
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero3D;
