import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: string;
  onToggle: () => void;
}

export function LanguageToggle({ currentLanguage, onToggle }: LanguageToggleProps) {
  // Show the opposite language that users can switch to
  const targetLanguage = currentLanguage === 'en' ? 'Français' : 'English';
  
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 inline-flex items-center px-3 py-2 border border-gray-200 rounded-md shadow-sm text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <Languages className="h-4 w-4 mr-2" />
      {targetLanguage}
    </button>
  );
}