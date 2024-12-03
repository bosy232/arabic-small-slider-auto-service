import { type FC } from 'react';
import { type ServiceFeature } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServiceFeatureProps {
  feature: ServiceFeature;
}

const ServiceFeatureCard: FC<ServiceFeatureProps> = ({ feature }) => {
  const { isArabic } = useLanguage();
  const Icon = feature.icon;
  
  return (
    <div className={`flex items-start ${isArabic ? 'space-x-reverse' : 'space-x-4'} p-4 rounded-lg bg-pink-50`}>
      <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
      <p className="text-gray-700">{feature.text}</p>
    </div>
  );
};

export default ServiceFeatureCard;