import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { PersonCard } from "@/components/personen";
import { CtaSection } from "@/components/cta-section";
import { getPersonen } from "@/lib/data";

export const metadata: Metadata = {
  title: "Unsere Praxis",
  description:
    "Lernen Sie Barbara und Martin Masel kennen — die beiden Osteopath:innen hinter der Naturheilpraxis Masel in Bad Aibling.",
};

export default async function PraxisPage() {
  const personen = await getPersonen();

  return (
    <>
      <PageHeader
        eyebrow="Wer wir sind"
        title="Die Praxis"
        intro="Wir sind Barbara und Martin Masel — verheiratet, im Beruf wie im Leben. Gemeinsam führen wir die Praxis und ergänzen uns in unseren Schwerpunkten."
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {personen.map((p) => (
            <div key={p.slug}>
              <PersonCard person={p} />
              <ul className="mt-5 space-y-2 text-sm text-foreground/75">
                {p.qualifications.map((q) => (
                  <li key={q} className="flex gap-2">
                    <span className="text-primary">·</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <CtaSection />
    </>
  );
}
