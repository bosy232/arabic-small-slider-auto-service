import { type FC } from 'react';
import { Heart, Users, Activity, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';
import ServiceCard from './services/ServiceCard';
import ServiceDetails from './services/ServiceDetails';

interface ServicesProps {
  selectedService: string;
  onServiceSelect: (id: string) => void;
}

const Services: FC<ServicesProps> = ({ selectedService, onServiceSelect }) => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const services = [
    {
      id: 'obstetrics',
      name: t.services.obstetrics,
      description: t.services.shortDesc.obstetrics,
      icon: Heart
    },
    {
      id: 'pediatrics',
      name: t.services.pediatrics,
      description: t.services.shortDesc.pediatrics,
      icon: Users
    },
    {
      id: 'surgery',
      name: t.services.surgery,
      description: t.services.shortDesc.surgery,
      icon: Activity
    },
    {
      id: 'emergency',
      name: t.services.emergency,
      description: t.services.shortDesc.emergency,
      icon: Clock
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">{t.services.title}</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              isSelected={selectedService === service.id}
              onSelect={onServiceSelect}
            />
          ))}
        </div>

        {selectedService && (
          <ServiceDetails serviceId={selectedService} />
        )}
      </div>
    </section>
  );
};

export default Services;