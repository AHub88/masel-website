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
        <p className="text-sm text-muted">
          <strong>Hinweis:</strong> Mit <code>TODO</code> markierte Stellen vor
          Go-Live ergänzen oder verifizieren.
        </p>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          {praxis.name}
          <br />
          Barbara und Martin Masel
          <br />
          {praxis.address.street}
          <br />
          {praxis.address.zip} {praxis.address.city}
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {praxis.phoneDisplay}
          <br />
          E-Mail: {praxis.email}
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>
          <strong>Berufsbezeichnung:</strong> Heilpraktiker / Heilpraktikerin
          (verliehen in der Bundesrepublik Deutschland)
          <br />
          <strong>Zuständige Aufsichtsbehörde:</strong>{" "}
          <em className="text-muted">TODO: Aufsichtsbehörde verifizieren — vermutlich Landratsamt Rosenheim, Gesundheitsamt, Wittelsbacherstr. 53, 83022 Rosenheim</em>
        </p>
        <p>
          Maßgebliche berufsrechtliche Regelungen:
        </p>
        <ul>
          <li>Heilpraktikergesetz (HPG)</li>
          <li>Erste Durchführungsverordnung zum Heilpraktikergesetz (1. DVO-HPG)</li>
          <li>Berufsordnung für Heilpraktiker (soweit anwendbar)</li>
        </ul>
        <p>
          Die Berufsbezeichnung wurde in Deutschland verliehen.
        </p>

        <h2>Berufshaftpflichtversicherung</h2>
        <p className="text-muted">
          <em>TODO: vom Kunden ergänzen lassen:</em>
        </p>
        <ul className="text-muted">
          <li>Name der Versicherung</li>
          <li>Anschrift der Versicherung</li>
          <li>Geltungsbereich (i.&nbsp;d.&nbsp;R. Deutschland)</li>
        </ul>

        <h2>Umsatzsteuer-Identifikationsnummer</h2>
        <p className="text-muted">
          <em>TODO: USt-ID-Nr. ergänzen, falls vorhanden. Heilbehandlungen
          sind nach § 4 Nr. 14 UStG i.&nbsp;d.&nbsp;R. umsatzsteuerbefreit —
          dann entfällt diese Angabe.</em>
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">
            ec.europa.eu/consumers/odr
          </a>
          . Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucher­schlichtungsstelle
          teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen
          zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          der Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht.
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
          schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </Prose>
    </>
  );
}
