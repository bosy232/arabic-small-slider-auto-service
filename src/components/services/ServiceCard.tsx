import { type FC } from 'react';
import { type ServiceCardProps } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  name,
  description,
  icon: Icon,
  isSelected,
  onSelect,
}) => {
  const { isArabic } = useLanguage();
  
  return (
    <button
      onClick={() => onSelect(id)}
      className={`w-full p-8 rounded-lg ${isArabic ? 'text-right' : 'text-left'} transition-all duration-300 transform hover:scale-105 ${
        isSelected
          ? 'bg-primary text-white shadow-lg'
          : 'bg-white hover:bg-pink-50 shadow-md'
      }`}
    >
      <Icon className={`w-12 h-12 mb-4 ${
        isSelected ? 'text-white' : 'text-primary'
      }`} />
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className={`text-sm ${isSelected ? 'text-pink-100' : 'text-gray-600'}`}>
        {description}
      </p>
    </button>
  );
};

export default ServiceCard;