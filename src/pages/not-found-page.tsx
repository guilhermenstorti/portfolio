import { useDocumentMeta } from "@/hooks/use-document-meta";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RouteButton } from "@/components/ui/route-button";
import { Button } from "@/components/ui/button";
import { MAILTO_EMAIL_LINK } from "@/lib/contact-links";

export const NotFoundPage = () => {
  useDocumentMeta({
    title: "Página não encontrada | Guilherme Storti",
    description: "Essa página ficou no backlog. Volte para o portfólio de Guilherme Storti.",
  });

  return (
    <>
      <Header variant="case" />
      <main className="px-12 py-24 text-center">
        <p className="text-6xl">🚧</p>
        <h1 className="mt-6 text-2xl text-foreground">
          Nem toda feature vai para produção.
        </h1>
        <p className="mt-2 text-muted">
          Esta, por exemplo, ficou no backlog. Enquanto isso, você pode:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <RouteButton to="/" label="Voltar pro portfólio" variant="primary" />
          <Button href={MAILTO_EMAIL_LINK} label="Me mandar uma mensagem" variant="secondary" />
        </div>
      </main>
      <Footer />
    </>
  );
};
