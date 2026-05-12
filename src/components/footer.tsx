import Link from "next/link";
import { Container } from "./container";
import { footerNavigation } from "@/lib/data";
import type { Praxis } from "@/lib/types";
import { formatPhone } from "@/lib/utils";

export function Footer({ praxis }: { praxis: Praxis }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-surface/60">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl text-primary">Masel</p>
          <p className="mt-1 text-sm text-muted">Osteopathie & Naturheilkunde</p>
          <p className="mt-4 text-sm text-foreground/80">
            {praxis.address.street}
            <br />
            {praxis.address.zip} {praxis.address.city}
          </p>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${formatPhone(praxis.phone)}`}
                className="text-foreground/80 transition hover:text-primary"
              >
                {praxis.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${praxis.email}`}
                className="text-foreground/80 transition hover:text-primary"
              >
                {praxis.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
            Öffnungszeiten
          </h3>
          <ul className="mt-4 space-y-1 text-sm text-foreground/80">
            <li>Mo – Fr · 08:30 – 18:00</li>
            <li className="text-muted text-xs mt-2">Nach Terminvereinbarung</li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-muted">
            Service
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-border/60">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {praxis.name} · {praxis.address.city}</p>
          <p>Mit Sorgfalt gestaltet.</p>
        </Container>
      </div>
    </footer>
  );
}
