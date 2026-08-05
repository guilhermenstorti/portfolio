import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptCommon from './locales/pt/common.json';
import ptHeader from './locales/pt/header.json';
import ptFooter from './locales/pt/footer.json';
import ptHero from './locales/pt/hero.json';
import ptQuickScan from './locales/pt/quick-scan.json';
import ptCompaniesServed from './locales/pt/companies-served.json';
import ptCaseCards from './locales/pt/case-cards.json';
import ptAbout from './locales/pt/about.json';
import ptFinalCta from './locales/pt/final-cta.json';
import ptCaseStudy from './locales/pt/case-study.json';

import enCommon from './locales/en/common.json';
import enHeader from './locales/en/header.json';
import enFooter from './locales/en/footer.json';
import enHero from './locales/en/hero.json';
import enQuickScan from './locales/en/quick-scan.json';
import enCompaniesServed from './locales/en/companies-served.json';
import enCaseCards from './locales/en/case-cards.json';
import enAbout from './locales/en/about.json';
import enFinalCta from './locales/en/final-cta.json';
import enCaseStudy from './locales/en/case-study.json';

const resources = {
  pt: {
    common: ptCommon,
    header: ptHeader,
    footer: ptFooter,
    hero: ptHero,
    quickScan: ptQuickScan,
    companiesServed: ptCompaniesServed,
    caseCards: ptCaseCards,
    about: ptAbout,
    finalCta: ptFinalCta,
    caseStudy: ptCaseStudy,
  },
  en: {
    common: enCommon,
    header: enHeader,
    footer: enFooter,
    hero: enHero,
    quickScan: enQuickScan,
    companiesServed: enCompaniesServed,
    caseCards: enCaseCards,
    about: enAbout,
    finalCta: enFinalCta,
    caseStudy: enCaseStudy,
  },
};

const getLanguageFromStorage = () => {
  const stored = localStorage.getItem('portfolio-language');
  if (stored === 'en' || stored === 'pt') {
    return stored;
  }
  return 'pt';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguageFromStorage(),
  fallbackLng: 'pt',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
