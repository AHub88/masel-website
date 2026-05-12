import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import type { Person } from "@/lib/types";

export function PersonenTeaser({ personen }: { personen: Person[] }) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
              Wer wir sind
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Eine kleine Praxis mit voller Aufmerksamkeit.
            </h2>
            <p className="mt-5 max-w-md text-foreground/75">
              Wir sind Barbara und Martin Masel — verheiratet, im Beruf wie im
              Leben. Gemeinsam führen wir die Praxis, ergänzen uns in unseren
              Schwerpunkten und nehmen uns die Zeit, die jede Behandlung
              verdient.
            </p>
            <Link
              href="/praxis"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Mehr über uns
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {personen.map((p) => (
              <PersonCard key={p.slug} person={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PersonCard({ person }: { person: Person }) {
  const initials = `${person.firstName[0] ?? ""}${person.lastName[0] ?? ""}`;

  return (
    <article className="rounded-lg border border-border bg-surface p-5">
      <div className="relative aspect-square overflow-hidden rounded-md bg-primary-light">
        {person.photoUrl ? (
          <Image
            src={person.photoUrl}
            alt={person.photoAlt ?? `${person.firstName} ${person.lastName}`}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-serif text-5xl text-primary-dark/70">{initials}</span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-serif text-xl">
        {person.firstName} {person.lastName}
      </h3>
      <p className="text-sm text-primary">{person.title}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/75">{person.bio}</p>
    </article>
  );
}
