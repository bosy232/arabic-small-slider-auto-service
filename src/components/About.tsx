import { type FC } from 'react';
import Stats from './about/Stats';
import Mission from './about/Mission';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';




const About: FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Mission />
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default About;