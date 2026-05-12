import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { getPraxis } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Angaben gemäß § 5 TMG",
  robots: { index: false, follow: true },
};

export default async function ImpressumPage() {
  const praxis = await getPraxis();

  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <Prose>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          {praxis.name}
          <br />
          Barbara und Martin Masel
          <br />
          {praxis.address.street}
          <br />
          {praxis.address.zip} {praxis.address.city}
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {praxis.phoneDisplay}
          <br />
          E-Mail: {praxis.email}
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          Heilpraktiker (Berufsbezeichnung verliehen in der Bundesrepublik
          Deutschland). Zuständige Aufsichtsbehörde: Landratsamt Rosenheim.
          Maßgebliche berufsrechtliche Regelungen: Heilpraktikergesetz (HPG)
          und Durchführungsverordnung zum HPG (DVO-HPG).
        </p>

        <p className="text-sm text-muted">
          Vollständige Pflichtangaben werden vor Go-Live ergänzt.
        </p>
      </Prose>
    </>
  );
}
