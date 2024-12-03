import { type FC } from 'react';
import { Building, Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const Stats: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const stats = [
    { icon: Building, value: '4', label: t.about.stats.theaters },
    { icon: Users, value: '50+', label: t.about.stats.specialists },
    { icon: Award, value: '25+', label: t.about.stats.experience },
    { icon: Clock, value: '24/7', label: t.about.stats.emergency },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-pink-50 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
        >
          <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;