import { type FC } from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const LanguageToggle: FC = () => {
  const { isArabic, toggleLanguage } = useLanguage();
  const t = useTranslation(isArabic);

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-gray-700 hover:text-primary transition-colors"
      aria-label={t.nav.toggleLanguage}
    >
      <Languages className="w-5 h-5 mr-1" />
      <span>{isArabic ? 'English' : 'عربي'}</span>
    </button>
  );
};

export default LanguageToggle;