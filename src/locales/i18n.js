import i18n from 'i18next';
import enTranslation from './en.json';
import esTranslation from './es.json';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'lang';

const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'es';

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;

    const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'es';
};

const properties = {
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    resources: {
        en: { translation: enTranslation },
        es: { translation: esTranslation }
    },
    interpolation: {
        escapeValue: false
    }
};

i18n.use(initReactI18next).init(properties);

// Persistir el idioma cada vez que cambie.
i18n.on('languageChanged', lng => {
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, lng);
});

export default i18n;
