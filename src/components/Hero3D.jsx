import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { openWhatsapp } from '../utils/whatsapp';
import HeroScene from './HeroScene';

gsap.registerPlugin(ScrollTrigger);

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export function Hero3D() {
  const { t, whatsappMessages } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef(null);

  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setHasWebGL(checkWebGLSupport());

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll progress via GSAP ScrollTrigger
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

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
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-dark-deep text-cream-text overflow-hidden flex flex-col justify-between"
      style={{ minHeight: '100vh' }}
    >
      {/* 3D Canvas or Static Solid Layered Fallback */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {hasWebGL ? (
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
            dpr={[1, 2]}
            className="w-full h-full opacity-80 sm:opacity-90"
          >
            <HeroScene
              scrollProgress={scrollProgress}
              mouse={mouse}
              isMobile={isMobile}
              prefersReducedMotion={prefersReducedMotion}
            />
          </Canvas>
        ) : (
          /* Static solid layered geometric fallback - solid shapes only */
          <div className="w-full h-full relative flex items-center justify-center">
            <div className="absolute w-96 h-96 rounded-full bg-dark-card border border-border-subtle -top-12 -right-12" />
            <div className="absolute w-80 h-80 rounded-full bg-dark-card border border-gold-main/30 top-1/3 right-1/4" />
            <div className="absolute w-64 h-64 rounded-full bg-dark-deep border border-border-subtle bottom-12 left-1/3" />
            <div className="w-48 h-48 border border-gold-main/40 rotate-45 transform" />
          </div>
        )}
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
