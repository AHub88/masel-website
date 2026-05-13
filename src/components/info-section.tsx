import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import type { Praxis } from "@/lib/types";
import { formatPhone } from "@/lib/utils";

export function InfoSection({ praxis }: { praxis: Praxis }) {
  return (
    <section className="bg-surface/50 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
              Sprechzeiten
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">Wann wir für Sie da sind</h2>

            <dl className="mt-6 divide-y divide-border">
              {praxis.openingHours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-2.5">
                  <dt className="text-sm font-medium text-foreground/80">{h.day}</dt>
                  <dd className="text-sm text-foreground/70">
                    {h.from} – {h.to}
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between py-2.5">
                <dt className="text-sm font-medium text-foreground/80">Sa · So</dt>
                <dd className="text-sm text-muted">geschlossen</dd>
              </div>
            </dl>

            <p className="mt-5 rounded-md bg-primary-light/60 p-3 text-xs text-primary-dark">
              {praxis.openingHoursNote}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-dark"
              >
                Online buchen
              </Link>
              <a
                href={`tel:${formatPhone(praxis.phone)}`}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                {praxis.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
              Anfahrt
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl">So finden Sie uns</h2>

            <address className="mt-6 not-italic">
              <p className="text-lg text-foreground">{praxis.name}</p>
              <p className="mt-1 text-foreground/75">
                {praxis.address.street}
                <br />
                {praxis.address.zip} {praxis.address.city}
              </p>
            </address>

            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-md bg-primary-light">
              <Image
                src="/anfahrt-karte.png"
                alt={`Lageplan ${praxis.name}, ${praxis.address.city}`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted">
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
            </p>

            <ul className="mt-5 space-y-1.5 text-sm text-foreground/75">
              <li>· Direkt am Bahnhof {praxis.address.city}</li>
              <li>· Parkplätze in unmittelbarer Nähe</li>
              <li>· Barrierearmer Zugang</li>
            </ul>

            <Link
              href="/anfahrt"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Detaillierte Anfahrtsbeschreibung
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
