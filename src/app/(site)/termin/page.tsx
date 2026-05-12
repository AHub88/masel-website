import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { getPraxis } from "@/lib/data";
import { formatPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Termin online buchen",
  description:
    "Buchen Sie Ihren Osteopathie-Termin in der Naturheilpraxis Masel in Bad Aibling bequem online.",
};

export default async function TerminPage() {
  const praxis = await getPraxis();
  const tokenSet = Boolean(praxis.lemniscusToken);

  return (
    <>
      <PageHeader
        eyebrow="Online-Terminbuchung"
        title="Ihren Termin direkt buchen"
        intro="Wählen Sie einen für Sie passenden Termin direkt aus unserem Kalender. Die Buchung erfolgt über das System unserer Praxissoftware — Ihre Daten werden DSGVO-konform in Deutschland verarbeitet."
      />

      <Container className="py-14 sm:py-20">
        {tokenSet ? (
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-xl text-foreground">Nächste freie Termine</h2>
              <p className="mt-1 text-sm text-muted">
                Klicken Sie auf einen Termin oder nutzen Sie den Button für die vollständige Auswahl.
              </p>
              <div data-lemmy-flansch="teasers" />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a data-lemmy-flansch="button" />
              <a
                href={`tel:${formatPhone(praxis.phone)}`}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                Oder anrufen: {praxis.phoneDisplay}
              </a>
            </div>

            <p className="text-xs text-muted">
              Hinweis: Die Online-Terminvergabe lädt erst nach Aufruf der Seite und stellt die
              Verbindung zu my.lemniscus.de her. Details siehe{" "}
              <Link href="/datenschutz" className="underline underline-offset-4">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-surface/40 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
              Platzhalter
            </p>
            <h2 className="mt-3 font-serif text-2xl">lemniscus my/OT noch nicht aktiviert</h2>
            <p className="mt-3 max-w-2xl text-foreground/75">
              Sobald der LemmyFlansch-Token im CMS unter &bdquo;Praxis-Einstellungen &rarr;
              lemniscus LemmyFlansch Token&ldquo; hinterlegt ist, erscheint hier die
              Online-Terminvergabe.
            </p>

            <div className="mt-8 rounded-md bg-primary-light/40 p-5 text-sm text-primary-dark">
              <p className="font-medium">In der Zwischenzeit:</p>
              <p className="mt-2">
                Rufen Sie uns gerne unter{" "}
                <a
                  href={`tel:${formatPhone(praxis.phone)}`}
                  className="font-semibold underline underline-offset-4"
                >
                  {praxis.phoneDisplay}
                </a>{" "}
                an oder schreiben Sie uns über das{" "}
                <Link href="/kontakt" className="font-semibold underline underline-offset-4">
                  Kontaktformular
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
