import { type FC } from 'react';
import { Clock, Shield, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Features: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const features = [
    {
      icon: Clock,
      title: t.features.emergency.title,
      description: t.features.emergency.description,
    },
    {
      icon: Shield,
      title: t.features.technology.title,
      description: t.features.technology.description,
    },
    {
      icon: Users,
      title: t.features.team.title,
      description: t.features.team.description,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-pink-50 rounded-lg transform hover:scale-105 transition-all duration-300">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;