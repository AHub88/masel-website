import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Osteopathie",
  description:
    "Was ist Osteopathie? Eine ganzheitliche Behandlungsmethode, die Beweglichkeit, Selbstregulation und Wohlbefinden fördert.",
};

export default function OsteopathiePage() {
  return (
    <>
      <PageHeader
        eyebrow="Methode"
        title="Was ist Osteopathie?"
        intro="Osteopathie ist eine ganzheitliche manuelle Behandlungsmethode. Sie betrachtet den Körper als Einheit und unterstützt seine Fähigkeit zur Selbstregulation — sanft, mit den Händen, ohne Apparate."
      />

      <Prose>
        <h2>Drei Säulen der Osteopathie</h2>
        <p>
          Osteopath:innen unterscheiden klassisch drei Behandlungsfelder, die
          eng zusammenwirken:
        </p>
        <ul>
          <li>
            <strong>Parietale Osteopathie</strong> — Bewegungsapparat:
            Muskeln, Gelenke, Faszien, Wirbelsäule.
          </li>
          <li>
            <strong>Viszerale Osteopathie</strong> — innere Organe und ihre
            Aufhängungen im Bindegewebe.
          </li>
          <li>
            <strong>Kraniosakrale Osteopathie</strong> — Schädel, Kreuzbein
            und das umgebende Nervensystem.
          </li>
        </ul>

        <h2>Was Sie erwartet</h2>
        <p>
          Eine Erstbehandlung dauert ca. 60 Minuten. Wir nehmen uns Zeit für
          eine ausführliche Anamnese, eine sorgfältige Untersuchung und die
          eigentliche Behandlung. Folgetermine sind in der Regel kürzer.
        </p>

        <h2>Hinweis zur Wirksamkeit</h2>
        <p>
          Osteopathie ist eine Methode der Naturheilkunde. Auch wenn viele
          Patientinnen und Patienten von positiven Erfahrungen berichten,
          steht ein abschließender wissenschaftlicher Wirknachweis für alle
          Indikationen noch aus. Wir behandeln nicht statt, sondern in
          Ergänzung zu Ihrer schulmedizinischen Versorgung.
        </p>
      </Prose>

      <CtaSection />
    </>
  );
}
