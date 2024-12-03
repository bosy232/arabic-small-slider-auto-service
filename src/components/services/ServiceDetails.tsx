import { type FC } from 'react';
import { Clock, Users, Stethoscope, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';
import { type ServiceDetailsProps } from './types';
import ServiceFeatureCard from './ServiceFeature';
import { getServiceInfo } from './utils';

const ServiceDetails: FC<ServiceDetailsProps> = ({ serviceId }) => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const serviceInfo = getServiceInfo(serviceId, t);

  if (!serviceInfo) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8 transition-all duration-300">
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        {serviceInfo.description}
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {serviceInfo.features.map((feature, index) => (
          <ServiceFeatureCard key={index} feature={feature} />
        ))}
      </div>
      
      <div className="bg-primary/10 p-6 rounded-lg">
        <h4 className="font-semibold text-primary mb-2">{t.services.availabilityTitle}</h4>
        <p className="text-gray-700">{serviceInfo.availability}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;