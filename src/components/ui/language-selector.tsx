import { useLanguage } from '@/i18n/hooks/useLanguage';

export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const isEnglish = language === 'en';

  const toggleLanguage = () => {
    changeLanguage(isEnglish ? 'pt' : 'en');
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEnglish}
      aria-label={isEnglish ? 'Switch to Portuguese' : 'Switch to English'}
      onClick={toggleLanguage}
      className="relative h-6 w-11 shrink-0 overflow-hidden rounded-full border border-border-soft shadow-inner transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <img
        src="/portfolio/assets/img/logos/pt.png"
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
          isEnglish ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/portfolio/assets/img/logos/gb.png"
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out ${
          isEnglish ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full border-2 border-white/90 bg-white/30 shadow-[0_1px_4px_rgba(0,0,0,0.65)] ring-1 ring-black/30 backdrop-blur-md transition-transform duration-300 ease-out ${
          isEnglish ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
};
