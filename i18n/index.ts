// Re-export i18n configuration and utilities
export { default as i18n, changeLanguage, languages } from './config';
export type { LanguageCode } from './config';

// Re-export translation hook for convenience
export { useTranslation } from 'react-i18next';

