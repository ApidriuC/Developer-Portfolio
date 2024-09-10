import i18n from 'i18next';
import enTranslation from './en.json';
import esTranslation from './es.json';
import { initReactI18next } from 'react-i18next';

const properties =
{
    lng: 'es', // Default language
    fallbackLng: 'en',
    resources:
    {
        en: { translation: enTranslation },
        es: { translation: esTranslation }
    },
    interpolation:
    {
        escapeValue: false
    }
};

i18n.use(initReactI18next).init(properties);
export default i18n;