import { useState, useCallback, useEffect } from 'react';

type Language = 'en' | 'fr';

function getBrowserLanguage(): Language {
  // Get browser language (e.g., 'en-US' or 'fr-FR')
  const browserLang = navigator.language.toLowerCase();
  
  // Check if it starts with 'fr', otherwise default to 'en'
  return browserLang.startsWith('fr') ? 'fr' : 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => getBrowserLanguage());

  const toggleLanguage = useCallback(() => {
    setLanguage(current => current === 'en' ? 'fr' : 'en');
  }, []);

  // Update language if browser preference changes
  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(getBrowserLanguage());
    };

    window.addEventListener('languagechange', updateLanguage);
    return () => window.removeEventListener('languagechange', updateLanguage);
  }, []);

  return {
    language,
    toggleLanguage,
  };
}