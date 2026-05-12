import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";

export const metadata: Metadata = {
  title: "Hygienekonzept",
  description: "Unser Hygienekonzept für eine sichere Behandlung.",
};

export default function HygienekonzeptPage() {
  return (
    <>
      <PageHeader eyebrow="Information" title="Hygienekonzept" />
      <Prose>
        <p>
          Die Sicherheit unserer Patientinnen und Patienten hat oberste
          Priorität. Wir halten die geltenden Hygienestandards für
          naturheilkundliche Praxen ein und passen unsere Maßnahmen
          fortlaufend an aktuelle Empfehlungen an.
        </p>

        <h2>Unsere Maßnahmen</h2>
        <ul>
          <li>Regelmäßige Flächendesinfektion zwischen den Behandlungen.</li>
          <li>Hände­desinfektion vor und nach jeder Behandlung.</li>
          <li>Frische Bezüge und Handtücher für jede Patientin und jeden Patienten.</li>
          <li>Regelmäßige Lüftung der Behandlungsräume.</li>
          <li>Bei akuten Atemwegs­infekten bitten wir um Terminverschiebung.</li>
        </ul>

        <p className="text-sm text-muted">
          Detailtext folgt — wird im CMS gepflegt.
        </p>
      </Prose>
    </>
  );
}
