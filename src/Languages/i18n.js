import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import global_en from '../Languages/en/global.json';
import global_es from '../Languages/es/global.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: { escapeValue: false },
    lng: 'es',
    fallbackLng: 'es',
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });

export default i18n;
