import Link from "next/link";
import { Container } from "./container";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-primary px-8 py-14 text-primary-foreground sm:px-14 sm:py-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-dark/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-primary-foreground sm:text-4xl">
              Bereit für Ihren Termin?
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Buchen Sie bequem online — oder rufen Sie uns an, wir beraten
              Sie gerne persönlich.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 rounded-md bg-surface px-6 py-3 text-base font-medium text-primary transition hover:bg-primary-light"
              >
                Termin online buchen
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-6 py-3 text-base font-medium text-primary-foreground transition hover:bg-primary-dark"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
