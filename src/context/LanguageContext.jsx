import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize from localStorage or fallback to Spanish
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('zerocog_lang');
    return saved && (saved === 'es' || saved === 'en') ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('zerocog_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (path) => {
    const keys = path.split('.');
    let result = TRANSLATIONS[lang];
    
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        console.warn(`Translation path not found: ${path} for language ${lang}`);
        return path;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
