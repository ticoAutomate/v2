import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'es';
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem('ticoautomate-language');
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    // Continue with browser preference when local storage is unavailable.
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try { window.localStorage.setItem('ticoautomate-language', language); } catch { /* Optional preference */ }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
