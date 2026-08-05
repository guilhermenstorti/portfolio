import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lang: string) => {
      if (lang === 'en' || lang === 'pt') {
        localStorage.setItem('portfolio-language', lang);
        i18n.changeLanguage(lang);
      }
    },
    [i18n]
  );

  return {
    language: i18n.language,
    changeLanguage,
  };
};
