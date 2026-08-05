import { useTranslation } from 'react-i18next';
import { LogoMarquee } from "@/features/companies-served/components/logo-marquee";

interface CompanyLogo {
  readonly name: string;
  readonly slug: string;
}

const COMPANY_LOGOS: readonly CompanyLogo[] = [
  { name: "Will Bank", slug: "will-bank" },
  { name: "Dotz", slug: "dotz" },
  { name: "Zup", slug: "zup" },
  { name: "GRI Club", slug: "gri-club" },
  { name: "Grupo Salta", slug: "grupo-salta" },
  { name: "Atlantic City Casinos", slug: "atlantic-city" },
  { name: "Burger King", slug: "burger-king" },
  { name: "Flamengo", slug: "flamengo" },
  { name: "Itaú", slug: "itau" },
  { name: "Botafogo", slug: "botafogo" },
  { name: "Instituto Ayrton Senna", slug: "instituto-a-s" },
  { name: "TOTVS", slug: "totvs" },
];

export const CompaniesServedSection = () => {
  const { t } = useTranslation('companiesServed');

  return (
    <section className="px-12 py-16">
      <div className="mx-auto max-w-content text-center">
        <h2 className="text-3xl text-foreground">
          {t('title')}
        </h2>
        <p className="mt-4 text-muted">
          {t('subtitle')}
        </p>
        <div className="mt-10">
          <LogoMarquee logos={COMPANY_LOGOS} />
        </div>
      </div>
    </section>
  );
};
