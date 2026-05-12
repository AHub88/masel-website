import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { getPraxis } from "@/lib/data";
import { formatPhone } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie die Naturheilpraxis Masel in Bad Aibling — telefonisch, per E-Mail oder über das Formular.",
};

export default async function KontaktPage() {
  const praxis = await getPraxis();

  return (
    <>
      <PageHeader
        eyebrow="Schreiben Sie uns"
        title="Kontakt"
        intro="Sie haben eine Frage oder möchten einen Termin vereinbaren? Wir freuen uns auf Ihre Nachricht."
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Telefon
              </h3>
              <a
                href={`tel:${formatPhone(praxis.phone)}`}
                className="mt-2 block font-serif text-2xl text-primary hover:text-primary-dark"
              >
                {praxis.phoneDisplay}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                E-Mail
              </h3>
              <a
                href={`mailto:${praxis.email}`}
                className="mt-2 block text-lg text-primary hover:text-primary-dark"
              >
                {praxis.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Adresse
              </h3>
              <address className="mt-2 not-italic text-foreground/80">
                {praxis.name}
                <br />
                {praxis.address.street}
                <br />
                {praxis.address.zip} {praxis.address.city}
              </address>
            </div>
          </div>

          <form className="space-y-4 rounded-lg border border-border bg-surface p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="E-Mail" name="email" type="email" required />
            </div>
            <Field label="Telefon (optional)" name="phone" type="tel" />
            <div>
              <label className="block text-sm font-medium text-foreground/80" htmlFor="message">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-muted">
              <input type="checkbox" required className="mt-0.5 accent-[var(--color-primary)]" />
              <span>
                Ich habe die Datenschutzerklärung gelesen und stimme der
                Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-dark sm:w-auto"
            >
              Nachricht senden
            </button>

            <p className="text-xs text-muted">
              (Formular-Backend wird im nächsten Schritt angebunden — z.&nbsp;B.
              Resend oder direkt SMTP.)
            </p>
          </form>
        </div>
      </Container>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
