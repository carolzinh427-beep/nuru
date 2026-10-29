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
            ? 'text-gold-main font-semibold border-b border-gold-main'
            : 'text-gray-warm hover:text-cream-text'
        }`}
      >
        EN
      </button>
      <span
        className="px-1 select-none text-border-subtle"
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
            ? 'text-gold-main font-semibold border-b border-gold-main'
            : 'text-gray-warm hover:text-cream-text'
        }`}
      >
        PT
      </button>
    </div>
  );
}

export default LanguageSwitcher;
