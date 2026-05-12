import Link from "next/link";
import { Container } from "./container";
import type { Praxis } from "@/lib/types";
import { formatPhone } from "@/lib/utils";

export function Hero({ praxis }: { praxis: Praxis }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-light via-background to-accent-light/50" />
      <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
            Naturheilpraxis · {praxis.address.city}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.5rem]">
            Ganzheitliche Osteopathie
            <span className="block text-primary">für die ganze Familie.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
            Seit über 15 Jahren begleiten wir Sie auf Ihrem Weg zu mehr
            Beweglichkeit, weniger Schmerzen und einem besseren Körpergefühl —
            persönlich, achtsam und mit Zeit für Sie.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/termin"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-soft transition hover:bg-primary-dark"
            >
              Termin online buchen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={`tel:${formatPhone(praxis.phone)}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-base font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {praxis.phoneDisplay}
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Bezuschussung durch viele gesetzliche Krankenkassen möglich.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}

function HeroPhoto() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-primary-light shadow-card sm:aspect-[5/6]">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-primary/15">
              <svg viewBox="0 0 24 24" className="h-14 w-14 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="8" r="3" />
                <circle cx="16" cy="9" r="2.5" />
                <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" strokeLinecap="round" />
                <path d="M14 20c0-2.5 2-4 4-4s4 1.5 4 4" strokeLinecap="round" />
              </svg>
            </div>
            <p className="mt-4 font-serif text-lg text-primary-dark">
              Foto folgt
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">
              Barbara & Martin Masel
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-dark/10 to-transparent" />
      </div>

      <div className="absolute -bottom-5 -left-5 hidden rounded-lg bg-surface px-5 py-4 shadow-card sm:block">
        <p className="text-xs uppercase tracking-wider text-muted">Seit</p>
        <p className="font-serif text-2xl text-primary">2008</p>
      </div>
    </div>
  );
}
