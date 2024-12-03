import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { getBrowserLanguage, setDocumentLanguage } from '../utils/language';

type LanguageContextType = {
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isArabic, setIsArabic] = useState(() => {
    const browserLang = getBrowserLanguage();
    return browserLang === 'ar';
  });

  useEffect(() => {
    setDocumentLanguage(isArabic);
  }, [isArabic]);

  const toggleLanguage = () => {
    setIsArabic((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}