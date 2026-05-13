import type { Metadata } from "next";
import Image from "next/image";
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
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-primary-light">
              <Image
                src={`https://staticmap.openstreetmap.de/staticmap.php?center=${praxis.address.lat},${praxis.address.lng}&zoom=16&size=900x675&markers=${praxis.address.lat},${praxis.address.lng},red-pushpin`}
                alt={`Lageplan: ${praxis.name}, ${praxis.address.street}, ${praxis.address.zip} ${praxis.address.city}`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
              <span>
                Kartenausschnitt ©{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  OpenStreetMap
                </a>
                -Mitwirkende
              </span>
              <a
                href={`https://www.openstreetmap.org/?mlat=${praxis.address.lat}&mlon=${praxis.address.lng}#map=17/${praxis.address.lat}/${praxis.address.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Interaktive Karte öffnen ↗
              </a>
            </figcaption>
          </figure>

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
