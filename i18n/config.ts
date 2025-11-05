import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Import translation files
import ko from './locales/ko.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import id from './locales/id.json';

// Available languages
export const languages = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '简体中文',
  id: 'Bahasa Indonesia',
} as const;

export type LanguageCode = keyof typeof languages;

// Detect device language
const getDeviceLanguage = (): LanguageCode => {
  const deviceLanguage = Localization.getLocales()[0]?.languageCode || 'ko';
  
  // Map device language to supported languages
  const languageMap: Record<string, LanguageCode> = {
    ko: 'ko',
    en: 'en',
    ja: 'ja',
    zh: 'zh',
    'zh-Hans': 'zh',
    'zh-CN': 'zh',
    id: 'id',
  };

  return languageMap[deviceLanguage] || 'ko';
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      ko: { translation: ko },
      en: { translation: en },
      ja: { translation: ja },
      zh: { translation: zh },
      id: { translation: id },
    },
    lng: getDeviceLanguage(),
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false,
    },
  });

// Change language function
export const changeLanguage = (lang: LanguageCode) => {
  i18n.changeLanguage(lang);
};

export default i18n;

