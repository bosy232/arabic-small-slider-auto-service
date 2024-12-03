import { type FC } from 'react';

interface ServiceDetailsProps {
  selectedService: string;
}

const serviceDetails = {
  obstetrics: {
    title: 'Obstetrics & Gynecology',
    description: 'Comprehensive care for women throughout all stages of life.',
    features: [
      'Prenatal Care',
      'High-Risk Pregnancy Management',
      'Gynecological Surgery',
      'Fertility Services',
      'Regular Check-ups'
    ],
    availability: '24/7 Emergency Services Available'
  },
  pediatrics: {
    title: 'Pediatrics & Neonatology',
    description: 'Specialized care for infants, children, and adolescents.',
    features: [
      'Newborn Care',
      'Developmental Assessment',
      'Vaccination Programs',
      'Pediatric Emergency Care',
      'Growth Monitoring'
    ],
    availability: 'Regular Hours: 8:00 AM - 8:00 PM'
  },
  surgery: {
    title: 'General Surgery',
    description: 'Advanced surgical procedures with state-of-the-art technology.',
    features: [
      'Minimally Invasive Surgery',
      'Laparoscopic Procedures',
      'Emergency Surgery',
      'Post-operative Care',
      'Surgical Consultation'
    ],
    availability: '24/7 Emergency Surgery Available'
  },
  emergency: {
    title: 'Emergency Care',
    description: 'Round-the-clock emergency medical services.',
    features: [
      'Immediate Medical Attention',
      'Critical Care Units',
      'Trauma Care',
      'Ambulance Services',
      'Emergency Surgery'
    ],
    availability: '24/7 Emergency Services'
  }
};

const ServiceDetails: FC<ServiceDetailsProps> = ({ selectedService }) => {
  if (!selectedService) return null;

  const details = serviceDetails[selectedService as keyof typeof serviceDetails];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <h3 className="text-2xl font-bold text-[#903060] mb-4">{details.title}</h3>
      <p className="text-gray-600 mb-6">{details.description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Key Features:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {details.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-[#903060] rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-pink-50 p-4 rounded-md">
        <p className="text-[#903060] font-medium">{details.availability}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;