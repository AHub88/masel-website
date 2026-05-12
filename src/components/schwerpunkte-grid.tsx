import Link from "next/link";
import { Container } from "./container";
import type { Schwerpunkt } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  baby: (
    <path
      d="M9 14s.5 1.5 3 1.5 3-1.5 3-1.5M9 10h.01M15 10h.01"
      strokeLinecap="round"
    />
  ),
  pregnant: (
    <path
      d="M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 6c-3 1-5 4-5 7v3h10v-3c0-2-1-4-3-5Z"
      strokeLinejoin="round"
    />
  ),
  spine: (
    <path
      d="M12 3v18M9 6c2 0 4 0 6 .5M9 11c2 0 4 0 6 .5M9 16c2 0 4 0 6 .5"
      strokeLinecap="round"
    />
  ),
  jaw: (
    <path
      d="M5 8c2-2 4-3 7-3s5 1 7 3c-1 4-3 8-7 8s-6-4-7-8Z"
      strokeLinejoin="round"
    />
  ),
  head: (
    <path
      d="M12 3a7 7 0 0 0-7 7c0 3 2 5 2 7v3h10v-3c2 0 4-2 4-4a7 7 0 0 0-9-10Z"
      strokeLinejoin="round"
    />
  ),
  organ: (
    <path
      d="M9 4c-3 1-5 4-5 8s2 7 5 8 9-3 9-8-1-5-3-7-4-2-6-1Z"
      strokeLinejoin="round"
    />
  ),
};

export function SchwerpunkteGrid({ schwerpunkte }: { schwerpunkte: Schwerpunkt[] }) {
  return (
    <section id="schwerpunkte" className="bg-surface/50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
            Was wir behandeln
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Behandlungsschwerpunkte</h2>
          <p className="mt-4 text-foreground/75">
            Osteopathie wirkt dort, wo der Körper aus dem Gleichgewicht
            gekommen ist — bei akuten Beschwerden ebenso wie bei chronischen
            Themen.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schwerpunkte.map((s) => (
            <Link
              key={s.slug}
              href={`/behandlungsschwerpunkte#${s.slug}`}
              className="group flex flex-col gap-3 rounded-lg border border-border bg-surface p-6 transition hover:border-primary/40 hover:shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-light text-primary-dark transition group-hover:bg-primary group-hover:text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {iconMap[s.icon] ?? iconMap.spine}
                </svg>
              </div>
              <h3 className="font-serif text-xl text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/70">{s.summary}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Mehr erfahren
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
