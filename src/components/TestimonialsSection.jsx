import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  const testimonials = t.testimonials?.items || [];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-dark-deep text-cream-text relative overflow-hidden"
    >
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4 mb-14 sm:mb-16">
          {/* Trust Platform Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold-main/35 bg-dark-card/60 shadow-[0_0_20px_rgba(194,142,66,0.12)] mb-6">
            {/* 5-Star Row */}
            <div className="flex space-x-1 text-gold-main">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 fill-gold-main shrink-0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-widest text-gold-light font-medium">
              5.0 · massagehub.uk
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-text font-normal leading-tight mb-4 text-center">
            {t.testimonials?.title}
          </h2>

          <p className="text-xs sm:text-sm text-gold-light/90 uppercase tracking-[0.2em] font-sans font-light text-center max-w-xl">
            {t.testimonials?.subtitle}
          </p>
        </div>

        {/* 4 Testimonial Cards: Balanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="bg-dark-card/60 backdrop-blur-sm border border-gold-main/30 hover:border-gold-main/60 transition-all duration-300 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(194,142,66,0.1)] flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle inner gold accent border */}
              <div className="absolute inset-0 border border-gold-main/15 pointer-events-none rounded-3xl" />

              {/* Top Row: User Avatar, Name, Date & Stars */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex items-center space-x-3.5">
                  {/* Initial Avatar */}
                  <div className="w-11 h-11 rounded-full bg-dark-deep border border-gold-main/40 text-gold-light font-serif text-base font-semibold flex items-center justify-center shadow-[0_0_15px_rgba(194,142,66,0.15)] shrink-0">
                    {item.initial}
                  </div>

                  {/* Name and Date */}
                  <div className="flex flex-col text-left">
                    <div className="flex items-center space-x-2">
                      <span className="text-cream-text font-serif text-base sm:text-lg font-medium leading-none">
                        {item.author}
                      </span>
                      {item.verified && (
                        <span
                          className="inline-flex items-center text-[10px] uppercase tracking-wider text-gold-main bg-gold-main/10 border border-gold-main/25 px-1.5 py-0.5 rounded-full"
                          title="Verified Client on massagehub.uk"
                        >
                          Verified
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-warm font-light tracking-wide mt-1">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex space-x-1 text-gold-main shrink-0" aria-label="5 out of 5 stars">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-gold-main shrink-0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <p className="text-cream-text/90 font-light text-sm sm:text-base leading-relaxed italic text-left">
                  "{item.text}"
                </p>
              </div>

              {/* Subtle Platform Attribution */}
              <div className="mt-5 pt-4 border-t border-border-subtle/50 flex items-center justify-between text-[11px] text-gray-warm font-light relative z-10">
                <span className="tracking-wide">Massage Experience</span>
                <span className="text-gold-main/80 font-mono tracking-wider">massagehub.uk</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
