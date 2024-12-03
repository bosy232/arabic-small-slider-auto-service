import { type FC } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Contact: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.contact.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">{t.contact.getInTouch}</h3>
            
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-[#903060] mr-3 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{t.contact.location}</h4>
                <a 
                  href="https://www.google.com/maps/place/30%C2%B001'12.9%22N+31%C2%B026'08.0%22E/@30.02025,31.4355556,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#903060] transition-colors"
                >
                  HCC bldg., Tesaeen St, behind Air Force Hospital، 90 N Teseen St, New Cairo 1
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-[#903060] mr-3 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{t.contact.phone}</h4>
                <a 
                  href="tel:15679" 
                  className="text-gray-600 hover:text-[#903060] transition-colors"
                >
                  15679
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-[#903060] mr-3 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{t.contact.email}</h4>
                <a 
                  href="mailto:info@queensroyal.com"
                  className="text-gray-600 hover:text-[#903060] transition-colors"
                >
                  info@queensroyal.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-[#903060] mr-3 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{t.contact.workingHours}</h4>
                <div className="text-gray-600">
                  <p>{t.contact.emergencyServices}</p>
                  <p>{t.contact.regularHours}</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t.contact.form.name}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
                  placeholder={t.contact.form.placeholders.name}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">{t.contact.form.email}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
                  placeholder={t.contact.form.placeholders.email}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">{t.contact.form.subject}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors"
                  placeholder={t.contact.form.placeholders.subject}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">{t.contact.form.message}</label>
                <textarea
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060] focus:border-[#903060] transition-colors h-32 resize-none"
                  placeholder={t.contact.form.placeholders.message}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#903060] text-white py-3 rounded-md hover:bg-[#802050] transition-colors font-medium"
              >
                {t.contact.form.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;