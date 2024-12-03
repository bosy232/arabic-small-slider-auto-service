import { type FC } from 'react';
import { CreditCard, FileText, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const PatientInfo: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const insuranceProviders = [
    'Bupa',
    'Med right',
    'Next care',
    'Prime health',
    'Egycare',
    'Al Ahly',
    'Al Mashreq',
    'Med Mark',
    'Med Com',
    'Cigna',
    'Alpha Care',
    'Car Gas',
    'Enppi',
    'SOS',
  ];

  return (
    <section id="patient-info" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.patientInfo.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.patientInfo.insurance.title}</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <CreditCard className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{t.patientInfo.insurance.providers}</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {insuranceProviders.map((provider) => (
                      <li key={provider}>{provider}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start mt-6">
                <FileText className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{t.patientInfo.insurance.payment}</h4>
                  <p className="text-gray-600">
                    {t.patientInfo.insurance.paymentDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">{t.patientInfo.guidelines.title}</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-6">
                <Clock className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{t.patientInfo.guidelines.visiting}</h4>
                  <p className="text-gray-600">
                    {t.patientInfo.guidelines.visitingHours.general}<br />
                    {t.patientInfo.guidelines.visitingHours.icu}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">{t.patientInfo.guidelines.contacts}</h4>
                  <div className="text-gray-600">
                    <p>{t.nav.emergency}: 15679</p>
                    <p>{t.contact.phone}: 15679</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfo;