import { type LucideIcon } from 'lucide-react';

export interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export interface ServiceFeature {
  icon: LucideIcon;
  text: string;
}

export interface ServiceInfo {
  features: ServiceFeature[];
  description: string;
  availability: string;
}

export interface ServiceDetailsProps {
  serviceId: string;
}