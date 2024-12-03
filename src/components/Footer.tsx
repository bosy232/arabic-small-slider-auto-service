import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function Footer() {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="Queens Royal Hospital" className="h-16 w-auto mb-4 brightness-200" />
            <p className="text-pink-100">{t.footer.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-pink-100 hover:text-white">{t.nav.about}</a></li>
              <li><a href="#services" className="text-pink-100 hover:text-white">{t.nav.services}</a></li>
              <li><a href="#doctors" className="text-pink-100 hover:text-white">{t.nav.doctors}</a></li>
              <li><a href="#patient-info" className="text-pink-100 hover:text-white">{t.nav.patientInfo}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-pink-100">HCC bldg., Tesaeen St, behind Air Force Hospital، 90 N Teseen St, New Cairo 1</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-pink-100">15679</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span className="text-pink-100">info@queensroyal.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/QRH.Official" className="text-pink-100 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/queens_royalhospital/?hl=ar" className="text-pink-100 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-light">
          <p className="text-center text-pink-100">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}