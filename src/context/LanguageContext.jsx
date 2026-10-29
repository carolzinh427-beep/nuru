import React, { createContext, useContext, useState, useEffect } from 'react';
import { CONTENT, WHATSAPP_MESSAGES, COMPANY, SERVICES } from '../data/content';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: CONTENT[language],
    whatsappMessages: WHATSAPP_MESSAGES[language],
    company: COMPANY,
    services: SERVICES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;

