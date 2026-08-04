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
  <section className="px-12 py-16">
    <div className="mx-auto max-w-content text-center">
      <h2 className="text-3xl text-foreground">
        Empresas atendidas pelos produtos que liderei
      </h2>
      <p className="mt-4 text-muted">
        Mais de 450 empresas em 13 países já se beneficiaram dos produtos que
        ajudei a construir e evoluir.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {COMPANY_LOGOS.map((logo) => (
          <div
            key={logo.slug}
            className="group flex items-center justify-center rounded border border-border-soft p-4 transition-colors hover:border-company-hover-border"
          >
            <img
              src={`/portfolio/assets/img/logos/${logo.slug}.svg`}
              alt={logo.name}
              className="h-8 w-auto grayscale opacity-70 transition group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
