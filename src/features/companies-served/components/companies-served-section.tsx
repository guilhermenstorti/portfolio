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
];

export const CompaniesServedSection = () => (
  <section className="bg-white px-6 py-16">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-3xl font-bold text-ink">
        Empresas atendidas pelos produtos que liderei
      </h2>
      <p className="mt-4 text-ink-light">
        Mais de 450 empresas em 13 países já se beneficiaram dos produtos que
        ajudei a construir e evoluir.
      </p>
      <div className="mt-10 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {COMPANY_LOGOS.map((logo) => (
          <img
            key={logo.slug}
            src={`/portfolio/assets/img/logos/${logo.slug}.svg`}
            alt={logo.name}
            className="mx-auto h-10 w-auto grayscale transition hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  </section>
);
