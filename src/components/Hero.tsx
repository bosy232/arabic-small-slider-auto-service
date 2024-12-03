import { type FC } from 'react';
import Slideshow from './Slideshow';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Hero: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  return (
    <section id="home" className="pt-20">
      <div className="bg-gradient-to-r from-[#903060] to-[#802050] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl text-pink-100 mb-8">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#appointment"
                  className="bg-white text-[#903060] px-6 py-3 rounded-md font-semibold hover:bg-pink-50 transition-colors"
                >
                  {t.hero.bookAppointment}
                </a>
                <a
                  href="#services"
                  className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#903060] transition-colors"
                >
                  {t.hero.ourServices}
                </a>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Slideshow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;