import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationTR from './locales/tr/translation.json';

// call the translations
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeperator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already saves from xss
    },
  });

export default i18n;
