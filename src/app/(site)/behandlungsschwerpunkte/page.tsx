import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { CtaSection } from "@/components/cta-section";
import { getSchwerpunkte } from "@/lib/data";

export const metadata: Metadata = {
  title: "Behandlungsschwerpunkte",
  description:
    "Unsere Schwerpunkte in der Osteopathie — von Säuglingen über Schwangerschaft bis zum Bewegungsapparat.",
};

export default async function BehandlungsschwerpunktePage() {
  const schwerpunkte = await getSchwerpunkte();

  return (
    <>
      <PageHeader
        eyebrow="Was wir behandeln"
        title="Unsere Behandlungsschwerpunkte"
        intro="Osteopathie wirkt dort, wo der Körper aus dem Gleichgewicht gekommen ist. Diese Themen begleiten wir besonders häufig in unserer Praxis."
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-8 sm:gap-12">
          {schwerpunkte.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 gap-4 border-b border-border pb-10 last:border-b-0 sm:grid-cols-[1fr_2fr] sm:gap-10"
            >
              <h2 className="font-serif text-2xl text-primary-dark sm:text-3xl">
                {s.title}
              </h2>
              <div className="space-y-4 text-foreground/80">
                <p className="leading-relaxed">{s.summary}</p>
                <p className="text-sm text-muted">
                  Detailtext folgt — dieser Bereich wird im CMS gepflegt.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
