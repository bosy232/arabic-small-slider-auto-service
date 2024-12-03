import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const Mission: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">{t.about.mission.title}</h2>
        <p className="text-gray-600 leading-relaxed">
          {t.about.mission.description}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">{t.about.mission.vision}</h3>
        <p className="text-gray-600 leading-relaxed">
          {t.about.mission.visionText}
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">{t.about.mission.commitment.title}</h3>
        <div className="grid gap-6">
          <div className="bg-pink-50 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t.about.mission.commitment.quality}
            </h4>
            <p className="text-gray-600">
              {t.about.mission.commitment.qualityDesc}
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t.about.mission.commitment.patient}
            </h4>
            <p className="text-gray-600">
              {t.about.mission.commitment.patientDesc}
            </p>
          </div>
          <div className="bg-pink-50 p-6 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">
              {t.about.mission.commitment.innovation}
            </h4>
            <p className="text-gray-600">
              {t.about.mission.commitment.innovationDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;