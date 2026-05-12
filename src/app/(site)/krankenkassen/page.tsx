import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { getKrankenkassen } from "@/lib/data";

export const metadata: Metadata = {
  title: "Krankenkassen",
  description:
    "Viele gesetzliche Krankenkassen bezuschussen osteopathische Behandlungen. Hier finden Sie eine Übersicht.",
};

export default async function KrankenkassenPage() {
  const krankenkassen = await getKrankenkassen();

  return (
    <>
      <PageHeader
        eyebrow="Kostenerstattung"
        title="Krankenkassen, die Osteopathie bezuschussen"
        intro="Zahlreiche gesetzliche Krankenkassen erstatten einen Teil der Behandlungskosten. Auch viele private Krankenversicherungen übernehmen Osteopathie. Wir beraten Sie gerne dazu."
      />

      <Container className="py-14 sm:py-20">
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {krankenkassen.map((kk) => (
            <li
              key={kk}
              className="flex items-start gap-2 rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground/80"
            >
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m5 12 5 5 9-11" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {kk}
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-sm text-muted">
          Hinweis: Die genauen Erstattungs­konditionen unterscheiden sich von
          Kasse zu Kasse. Erfragen Sie bei Ihrer Versicherung den
          Erstattungs­satz pro Sitzung und die maximale Anzahl pro Jahr.
        </p>
      </Container>
    </>
  );
}
