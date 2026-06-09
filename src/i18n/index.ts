import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ca from './ca.json';
import es from './es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ca: { translation: ca },
      es: { translation: es },
    },
    fallbackLng: 'ca',
    supportedLngs: ['ca', 'es'],
    interpolation: { escapeValue: false },
    detection: {
      // Por defecto catalan; solo cambia si el usuario lo elige (persistido).
      order: ['localStorage'],
      lookupLocalStorage: 'po-lang',
      caches: ['localStorage'],
    },
  });

export default i18n;
