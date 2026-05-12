import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { LemniscusEmbed } from "@/components/lemniscus-embed";
import { getPraxis } from "@/lib/data";
import { formatPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Termin online buchen",
  description:
    "Buchen Sie Ihren Osteopathie-Termin in der Naturheilpraxis Masel in Bad Aibling bequem online.",
};

export default async function TerminPage() {
  const praxis = await getPraxis();
  const embedCode = praxis.lemniscusEmbedCode?.trim();
  const embedUrl = praxis.lemniscusEmbedUrl;

  return (
    <>
      <PageHeader
        eyebrow="Online-Terminbuchung"
        title="Ihren Termin direkt buchen"
        intro="Wählen Sie einen für Sie passenden Termin direkt aus unserem Kalender. Die Buchung erfolgt über das System unserer Praxissoftware — Ihre Daten werden DSGVO-konform in Deutschland verarbeitet."
      />

      <Container className="py-14 sm:py-20">
        {embedCode ? (
          <div className="rounded-lg border border-border bg-surface p-4 shadow-soft sm:p-6">
            <LemniscusEmbed code={embedCode} />
          </div>
        ) : embedUrl ? (
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
            <iframe
              src={embedUrl}
              title="Online-Terminvergabe"
              className="block h-[80vh] min-h-[640px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-border bg-surface/40 p-8 sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
              Platzhalter
            </p>
            <h2 className="mt-3 font-serif text-2xl">lemniscus my/OT Buchungs-Widget</h2>
            <p className="mt-3 max-w-2xl text-foreground/75">
              Hier wird der Lemmy-Flansch eingebettet, sobald my/OT in der
              Praxis aktiviert ist. Der Einbettungscode wird im CMS unter
              &bdquo;Praxis-Einstellungen &rarr; lemniscus my/OT&ldquo;
              gepflegt.
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
