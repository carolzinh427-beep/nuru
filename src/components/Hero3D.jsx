import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/content';
import { openWhatsapp } from '../utils/whatsapp';

export function Hero3D() {
  const { t, whatsappMessages } = useLanguage();
  const heroRef = useRef(null);

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
      {/* Background Atmosphere: Subtle dark spa imagery with solid overlays only */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={IMAGES.heroImage}
          alt=""
          className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.2] saturate-[0.6] opacity-35"
        />
        {/* Solid dark tint overlay */}
        <div className="absolute inset-0 bg-dark-deep/80" />

        {/* Fine gold architectural lines */}
        <div className="absolute right-12 sm:right-24 top-0 bottom-0 w-[1px] bg-border-subtle/60" />
        <div className="absolute right-16 sm:right-32 top-1/4 h-64 w-[1px] bg-gold-main/20" />
        <div className="absolute left-8 bottom-32 w-48 h-[1px] bg-gold-main/15" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container-max pt-32 sm:pt-40 pb-16 flex-1 flex flex-col justify-center">
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

      {/* Bottom bar */}
      <div className="relative z-10 container-max pb-8 pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-warm tracking-wider">
        <div className="flex items-center space-x-6 mb-3 sm:mb-0">
          <span>CENTRAL LONDON</span>
          <span className="text-gold-main/40">&bull;</span>
          <span>VICTORIA STATION</span>
          <span className="text-gold-main/40">&bull;</span>
          <span>10:00 – 23:00</span>
        </div>
        <div className="flex items-center space-x-2 text-gold-main">
          <span>SCROLL TO EXPLORE</span>
          <svg className="w-3.5 h-3.5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero3D;
