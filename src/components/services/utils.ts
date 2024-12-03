import { Clock, Users, Stethoscope, Phone } from 'lucide-react';
import type { ServiceInfo } from './types';

export const getServiceInfo = (id: string, t: any): ServiceInfo | null => {
  const services: Record<string, ServiceInfo> = {
    obstetrics: {
      features: [
        { icon: Clock, text: t.services.features.obstetrics.scheduling },
        { icon: Users, text: t.services.features.obstetrics.specialists },
        { icon: Stethoscope, text: t.services.features.obstetrics.care },
        { icon: Phone, text: t.services.features.obstetrics.support }
      ],
      description: t.services.descriptions.obstetrics,
      availability: t.services.availability.obstetrics
    },
    pediatrics: {
      features: [
        { icon: Clock, text: t.services.features.pediatrics.scheduling },
        { icon: Users, text: t.services.features.pediatrics.specialists },
        { icon: Stethoscope, text: t.services.features.pediatrics.care },
        { icon: Phone, text: t.services.features.pediatrics.support }
      ],
      description: t.services.descriptions.pediatrics,
      availability: t.services.availability.pediatrics
    },
    surgery: {
      features: [
        { icon: Clock, text: t.services.features.surgery.scheduling },
        { icon: Users, text: t.services.features.surgery.specialists },
        { icon: Stethoscope, text: t.services.features.surgery.care },
        { icon: Phone, text: t.services.features.surgery.support }
      ],
      description: t.services.descriptions.surgery,
      availability: t.services.availability.surgery
    },
    emergency: {
      features: [
        { icon: Clock, text: t.services.features.emergency.scheduling },
        { icon: Users, text: t.services.features.emergency.specialists },
        { icon: Stethoscope, text: t.services.features.emergency.care },
        { icon: Phone, text: t.services.features.emergency.support }
      ],
      description: t.services.descriptions.emergency,
      availability: t.services.availability.emergency
    }
  };

  return services[id] || null;
};