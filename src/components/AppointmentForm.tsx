import { type FC, type FormEvent } from 'react';
import { Calendar, Phone, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const AppointmentForm: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="appointment" className="py-16 bg-[#903060] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t.appointment.title}</h2>
            <p className="text-xl text-pink-100 mb-8">
              {t.appointment.subtitle}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                <span>{t.appointment.features.scheduling}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>{t.appointment.features.support}</span>
              </div>
              <div className="flex items-center">
                <Search className="w-6 h-6 mr-3" />
                <span>{t.appointment.features.specialist}</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">{t.appointment.form.fullName}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t.appointment.form.email}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t.appointment.form.phone}</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t.appointment.form.date}</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#903060]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#903060] text-white py-2 rounded-md hover:bg-[#802050] transition-colors"
              >
                {t.appointment.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;