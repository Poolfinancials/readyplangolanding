import { useState, useCallback } from 'react';

type Language = 'en' | 'fr';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage(current => current === 'en' ? 'fr' : 'en');
  }, []);

  return {
    language,
    toggleLanguage,
  };
}