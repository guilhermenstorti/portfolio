import { Button } from "@/components/ui/button";
import { AnchorScrollLink } from "@/components/ui/anchor-scroll-link";
import { getButtonClassName } from "@/components/ui/button-styles";
import { CalendarIcon } from "@/components/ui/icons";
import { CONTACT_LINKS } from "@/lib/contact-links";
import { QuickInfoBar } from "@/features/hero/components/quick-info-bar";

export const HeroSection = () => (
  <section className="px-12 py-24 text-center">
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-faint">
        Você provavelmente está com 14 abas abertas agora.
        <br />
        Se essa for a última que você precisar abrir, fiz meu trabalho.
      </p>
      <h1 className="mt-4 text-[clamp(40px,5.5vw,68px)] leading-[1.02] tracking-[-0.02em] text-foreground">
        Guilherme Storti
      </h1>
      <p className="mt-2 text-[22px] font-medium text-accent">Product Manager Senior</p>
      <p className="mx-auto mt-6 max-w-2xl text-muted">
        PM Senior com 6+ anos em produtos digitais, fazendo produto de verdade:
        estruturando métricas antes do MVP, reduzindo churn enquanto escala,
        falando a mesma língua do dev e navegando IA sem perder a visão
        estratégica.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button
          href={CONTACT_LINKS.scheduleCall}
          label="Agendar Chamada"
          icon={<CalendarIcon className="h-4 w-4" />}
          variant="primary"
          target="_blank"
          className="shine-cta relative overflow-hidden"
        />
        <AnchorScrollLink
          targetId="cases"
          label="Ver Cases"
          className={getButtonClassName("secondary")}
        />
      </div>
      <QuickInfoBar />
    </div>
  </section>
);
