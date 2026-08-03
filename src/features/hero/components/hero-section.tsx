import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { getButtonClassName } from "@/components/ui/button-styles";
import { CONTACT_LINKS } from "@/lib/contact-links";
import { QuickInfoBar } from "@/features/hero/components/quick-info-bar";

export const HeroSection = () => (
  <section className="bg-gradient-to-br from-primary to-accent px-6 py-20 text-center text-white">
    <div className="mx-auto max-w-3xl">
      <p className="text-blue-100">
        Você provavelmente está com 14 abas abertas agora.
        <br />
        Se essa for a última que você precisar abrir, fiz meu trabalho.
      </p>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Guilherme Storti</h1>
      <p className="mt-2 text-lg font-medium text-blue-100">Product Manager Senior</p>
      <p className="mx-auto mt-6 max-w-2xl text-blue-50">
        PM Senior com 6+ anos em produtos digitais, fazendo produto de verdade:
        estruturando métricas antes do MVP, reduzindo churn enquanto escala,
        falando a mesma língua do dev e navegando IA sem perder a visão
        estratégica.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          href={CONTACT_LINKS.scheduleCall}
          label="📅 Agendar Chamada"
          variant="primary"
          target="_blank"
        />
        <AnchorScrollLink
          targetId="cases"
          label="Ver Cases"
          className={getButtonClassName("outline")}
        />
      </div>
      <QuickInfoBar />
    </div>
  </section>
);
