import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="w-full h-full bg-gold-main origin-left scale-x-0"
      />
    </div>
  );
}

export default ScrollProgress;
