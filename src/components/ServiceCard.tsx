import { type FC } from 'react';
import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  name,
  description,
  icon: Icon,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      onClick={() => onSelect(id)}
      className={`p-8 rounded-lg text-left transition-all transform hover:scale-105 ${
        isSelected
          ? 'bg-[#903060] text-white shadow-lg'
          : 'bg-white hover:bg-pink-50 shadow-md'
      }`}
    >
      <Icon className={`w-12 h-12 mb-4 ${
        isSelected ? 'text-white' : 'text-[#903060]'
      }`} />
      <h3 className="text-xl font-semibold mb-3">{name}</h3>
      <p className={`text-sm ${isSelected ? 'text-pink-100' : 'text-gray-600'}`}>
        {description}
      </p>
    </button>
  );
};

export default ServiceCard;