import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./logo";
import { navigation } from "@/lib/data";
import type { Praxis } from "@/lib/types";
import { formatPhone } from "@/lib/utils";

export function Header({ praxis }: { praxis: Praxis }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <Container as="div" className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${formatPhone(praxis.phone)}`}
            className="hidden text-sm font-medium text-foreground/80 transition-colors hover:text-primary md:inline-flex"
          >
            {praxis.phoneDisplay}
          </a>
          <Link
            href="/termin"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary-dark"
          >
            Termin buchen
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative lg:hidden">
      <summary
        className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-border text-foreground transition hover:bg-primary-light [&::-webkit-details-marker]:hidden"
        aria-label="Menü öffnen"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      </summary>
      <nav
        className="absolute right-0 top-12 w-64 rounded-lg border border-border bg-surface p-2 shadow-card"
        aria-label="Mobile Navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm text-foreground transition hover:bg-primary-light hover:text-primary-dark"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
