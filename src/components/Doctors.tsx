import { type FC } from 'react';
import DoctorCard from './DoctorCard';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Doctors: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const doctors = [
    {
      name: t.doctors.specialists.yehia,
      specialty: t.doctors.specialty,
      image: 'https://i.ytimg.com/vi/6B7OoUcNl-A/maxresdefault.jpg',
    },
    {
      name: t.doctors.specialists.sherif,
      specialty: t.doctors.specialty,
      image: 'https://i.ytimg.com/vi/54KG-sag-Hs/hqdefault.jpg',
    },
    {
      name: t.doctors.specialists.helmy,
      specialty: t.doctors.specialty,
      image: 'https://i.ytimg.com/vi/_A_sSjifPTM/maxresdefault.jpg',
    },
  ];

  return (
    <section id="doctors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.doctors.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;