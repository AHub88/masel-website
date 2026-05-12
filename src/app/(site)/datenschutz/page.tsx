import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Prose>
        <p className="text-sm text-muted">
          Platzhalter — die finale Datenschutzerklärung wird vor Go-Live mit
          allen tatsächlich eingesetzten Diensten (Vercel, Sanity, lemniscus,
          ggf. Plausible) erstellt und juristisch geprüft.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>Naturheilpraxis Masel, Bahnhofstr. 8, 83043 Bad Aibling.</p>

        <h2>2. Hosting</h2>
        <p>
          Diese Website wird auf Servern in Frankfurt am Main betrieben.
          Auftragsverarbeitungs­verträge mit allen Dienstleistern liegen vor.
        </p>

        <h2>3. Online-Terminbuchung</h2>
        <p>
          Für die Online-Terminbuchung wird das System lemniscus my/OT
          eingebunden (Anbieter: lemniscus GmbH, Deutschland). Beim Aufruf
          des Buchungsbereichs werden Daten an lemniscus übertragen. Details
          siehe Datenschutzhinweise von lemniscus.
        </p>

        <h2>4. Kartendarstellung</h2>
        <p>
          Karten werden über eine Zwei-Klick-Lösung eingebunden. Eine
          Verbindung zum Kartenanbieter wird erst aufgebaut, wenn Sie die
          Karte aktiv anklicken.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Bei
          Fragen wenden Sie sich an die in Punkt 1 genannten Kontaktdaten.
        </p>
      </Prose>
    </>
  );
}
