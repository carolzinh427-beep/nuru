import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher({ isScrolled = false }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="inline-flex items-center text-xs tracking-widest font-medium"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`px-2 py-1 transition-colors duration-200 uppercase ${
          language === 'en'
            ? isScrolled
              ? 'text-deep-blue font-semibold border-b border-deep-blue'
              : 'text-warm-beige font-semibold border-b border-warm-beige'
            : isScrolled
              ? 'text-slate-blue hover:text-deep-blue'
              : 'text-off-white/70 hover:text-off-white'
        }`}
      >
        EN
      </button>
      <span
        className={`px-1 select-none ${
          isScrolled ? 'text-line-soft' : 'text-off-white/40'
        }`}
        aria-hidden="true"
      >
        /
      </span>
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
        className={`px-2 py-1 transition-colors duration-200 uppercase ${
          language === 'pt'
            ? isScrolled
              ? 'text-deep-blue font-semibold border-b border-deep-blue'
              : 'text-warm-beige font-semibold border-b border-warm-beige'
            : isScrolled
              ? 'text-slate-blue hover:text-deep-blue'
              : 'text-off-white/70 hover:text-off-white'
        }`}
      >
        PT
      </button>
    </div>
  );
}

export default LanguageSwitcher;

