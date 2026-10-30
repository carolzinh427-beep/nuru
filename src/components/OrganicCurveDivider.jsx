import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function OrganicCurveDivider({ variant = 'silk', className = '', flip = false }) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const secondaryPathRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle organic sway on scroll
      if (pathRef.current) {
        gsap.to(pathRef.current, {
          y: flip ? -8 : 8,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      if (secondaryPathRef.current) {
        gsap.to(secondaryPathRef.current, {
          y: flip ? 10 : -10,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, flip]);

  // Variant 1: Dual Silk Flow (Inspired by reference image)
  if (variant === 'duo') {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        className={`relative w-full overflow-hidden pointer-events-none py-4 sm:py-6 ${className} ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 md:h-32 lg:h-40 overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Ambient Oil Droplets / Golden Stardust */}
          <g opacity="0.65">
            <circle cx="120" cy="90" r="1.5" fill="#D9A75E" />
            <circle cx="160" cy="110" r="1.2" fill="#C28E42" />
            <circle cx="210" cy="95" r="1" fill="#D9A75E" />
            <circle cx="340" cy="70" r="1.8" fill="#C28E42" opacity="0.8" />
            <circle cx="390" cy="85" r="1.2" fill="#D9A75E" />
            <circle cx="440" cy="65" r="1.5" fill="#C28E42" />
            <circle cx="720" cy="90" r="1" fill="#D9A75E" />
            <circle cx="850" cy="60" r="1.6" fill="#C28E42" />
            <circle cx="920" cy="80" r="1.2" fill="#D9A75E" opacity="0.9" />
            <circle cx="980" cy="55" r="1.5" fill="#C28E42" />
            <circle cx="1040" cy="95" r="1" fill="#D9A75E" />
            <circle cx="1120" cy="75" r="1.8" fill="#C28E42" />
            <circle cx="1180" cy="105" r="1.3" fill="#D9A75E" />
            <circle cx="1240" cy="85" r="1" fill="#C28E42" />
            <circle cx="1320" cy="65" r="1.5" fill="#D9A75E" />
          </g>

          {/* Top Silk Curve: Flowing down, pinching, then rising */}
          <path
            ref={pathRef}
            d="M-40 40 C 260 140, 480 135, 760 70 C 1040 10, 1260 15, 1480 80"
            stroke="#C28E42"
            strokeWidth="2"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_10px_rgba(194,142,66,0.4)]"
          />

          {/* Top Silk Secondary Highlight */}
          <path
            d="M-40 40 C 260 140, 480 135, 760 70 C 1040 10, 1260 15, 1480 80"
            stroke="#D9A75E"
            strokeWidth="0.75"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />

          {/* Bottom Silk Curve: Inverted flow creating sensual waist */}
          <path
            ref={secondaryPathRef}
            d="M-40 140 C 260 40, 480 45, 760 110 C 1040 170, 1260 165, 1480 100"
            stroke="#C28E42"
            strokeWidth="2"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_10px_rgba(194,142,66,0.4)]"
          />

          {/* Bottom Silk Secondary Highlight */}
          <path
            d="M-40 140 C 260 40, 480 45, 760 110 C 1040 170, 1260 165, 1480 100"
            stroke="#D9A75E"
            strokeWidth="0.75"
            strokeOpacity="0.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Variant 2: Warm Massage Oil Glide (Soft single sensual wave with ambient glow)
  if (variant === 'oil') {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        className={`relative w-full overflow-hidden pointer-events-none py-3 sm:py-5 ${className} ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 md:h-24 lg:h-28 overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Golden oil droplets */}
          <g opacity="0.55">
            <circle cx="280" cy="55" r="1.5" fill="#D9A75E" />
            <circle cx="340" cy="75" r="1.2" fill="#C28E42" />
            <circle cx="680" cy="35" r="1.6" fill="#D9A75E" />
            <circle cx="750" cy="50" r="1" fill="#C28E42" />
            <circle cx="1080" cy="80" r="1.4" fill="#D9A75E" />
            <circle cx="1140" cy="65" r="1" fill="#C28E42" />
          </g>

          {/* Deep sensual massage oil glide line */}
          <path
            ref={pathRef}
            d="M-20 60 C 240 115, 520 15, 820 95 C 1120 135, 1340 30, 1460 65"
            stroke="#C28E42"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_8px_rgba(194,142,66,0.35)]"
          />

          {/* Metallic core shimmer */}
          <path
            d="M-20 60 C 240 115, 520 15, 820 95 C 1120 135, 1340 30, 1460 65"
            stroke="#D9A75E"
            strokeWidth="0.75"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Variant 3: Draped Silk Ribbon (Asymmetrical luxury fold)
  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none py-3 sm:py-5 ${className} ${flip ? 'scale-y-[-1]' : ''}`}
    >
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 sm:h-20 md:h-28 overflow-visible"
        preserveAspectRatio="none"
      >
        {/* Subtle shimmering specks */}
        <g opacity="0.6">
          <circle cx="180" cy="45" r="1.3" fill="#D9A75E" />
          <circle cx="480" cy="85" r="1.5" fill="#C28E42" />
          <circle cx="560" cy="60" r="1" fill="#D9A75E" />
          <circle cx="880" cy="110" r="1.6" fill="#C28E42" />
          <circle cx="940" cy="90" r="1.2" fill="#D9A75E" />
          <circle cx="1280" cy="40" r="1.4" fill="#C28E42" />
        </g>

        {/* Primary flowing silk curve */}
        <path
          ref={pathRef}
          d="M-20 90 C 320 20, 620 130, 960 40 C 1220 -10, 1380 70, 1460 85"
          stroke="#C28E42"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_10px_rgba(194,142,66,0.38)]"
        />

        {/* Secondary silk highlight trailing slightly */}
        <path
          ref={secondaryPathRef}
          d="M-20 98 C 320 28, 620 138, 960 48 C 1220 -2, 1380 78, 1460 93"
          stroke="#D9A75E"
          strokeWidth="0.8"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default OrganicCurveDivider;

