import React from 'react';
import { Logo } from './components/Logo';
import { ArrowRight } from 'lucide-react';
import { translations } from './i18n/translations';
import { useLanguage } from './hooks/useLanguage';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Language Toggle */}
        <LanguageToggle 
          currentLanguage={language} 
          onToggle={toggleLanguage}
        />

        {/* Header */}
        <header className="py-6">
          <Logo />
        </header>

        {/* Hero */}
        <main className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {t.subtitle}
            </p>
            
            {/* CTA Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYL1ssTJSZHXMBSedMdI2nGWeEI8obwwT6p3tqFL8vBGCGCg/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              {t.joinWaitlist}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            {/* Trust Indicators */}
            <div className="mt-16 text-sm text-gray-500">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div>🔒 {t.secure}</div>
                <div>✨ {t.earlyAccess}</div>
                <div>🚀 {t.updates}</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-100">
          <p>{t.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;