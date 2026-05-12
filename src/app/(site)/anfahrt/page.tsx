import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { getPraxis } from "@/lib/data";

export async function generateMetadata(): Promise<Metadata> {
  const praxis = await getPraxis();
  return {
    title: "Anfahrt",
    description: `So finden Sie uns in ${praxis.address.city} — Anfahrt mit dem Auto, ÖPNV und Parkmöglichkeiten.`,
  };
}

export default async function AnfahrtPage() {
  const praxis = await getPraxis();

  return (
    <>
      <PageHeader
        eyebrow="Der Weg zu uns"
        title="Anfahrt"
        intro={`Unsere Praxis liegt zentral in ${praxis.address.city}, in unmittelbarer Nähe zum Bahnhof.`}
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-primary-light">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 text-primary/60" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11Z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <p className="mt-3 text-sm text-muted">Karte erscheint nach Klick</p>
                <p className="mt-1 text-xs text-muted">(DSGVO-konforme Zwei-Klick-Lösung)</p>
              </div>
            </div>
          </div>

          <div>
            <address className="not-italic">
              <p className="font-serif text-xl text-foreground">{praxis.name}</p>
              <p className="mt-1 text-foreground/75">
                {praxis.address.street}
                <br />
                {praxis.address.zip} {praxis.address.city}
              </p>
            </address>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-serif text-lg text-foreground">Mit dem Auto</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  Über die A8 (Ausfahrt {praxis.address.city}). Parkplätze
                  finden Sie am Bahnhof sowie in der unmittelbaren Umgebung.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground">Mit der Bahn</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  Bahnhof {praxis.address.city} — die Praxis liegt direkt
                  gegenüber (1 Minute Fußweg).
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg text-foreground">Barrierefreiheit</h3>
                <p className="mt-2 text-sm text-foreground/75">
                  Der Zugang zur Praxis ist barrierearm. Bei Bedarf
                  unterstützen wir Sie gerne — melden Sie sich kurz vor Ihrem
                  Termin telefonisch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
