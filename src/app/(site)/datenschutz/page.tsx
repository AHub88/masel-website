import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Prose } from "@/components/prose";
import { getPraxis } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default async function DatenschutzPage() {
  const praxis = await getPraxis();

  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Prose>
        <p className="text-sm text-muted">
          <strong>Hinweis:</strong> Diese Datenschutzerklärung wurde als
          technisch korrekter Entwurf erstellt und beschreibt alle tatsächlich
          eingesetzten Dienste. <strong>Vor Go-Live anwaltlich prüfen lassen.</strong>{" "}
          Stand: {new Date().toLocaleDateString("de-DE")}.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p>
          {praxis.name}
          <br />
          Barbara und Martin Masel
          <br />
          {praxis.address.street}
          <br />
          {praxis.address.zip} {praxis.address.city}
          <br />
          Telefon: {praxis.phoneDisplay}
          <br />
          E-Mail: {praxis.email}
        </p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzerinnen und Nutzer
          grundsätzlich nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Website sowie unserer Inhalte und Leistungen
          erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur nach
          Einwilligung oder wenn die Verarbeitung durch gesetzliche
          Vorschriften gestattet ist (Art. 6 Abs. 1 DSGVO).
        </p>

        <h2>3. Hosting (Vercel)</h2>
        <p>
          Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
          91789, USA, gehostet. Die Auslieferung erfolgt aus der Region
          Frankfurt am Main (Edge-Region <code>fra1</code>). Beim Aufruf der
          Website werden technische Daten an die Server von Vercel übermittelt
          (insbesondere IP-Adresse, Datum/Uhrzeit, abgerufene Seite,
          User-Agent) und in Server-Logs gespeichert.
        </p>
        <p>
          Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Mit
          Vercel besteht ein Auftragsverarbeitungsvertrag (AVV). Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
          sicheren und performanten Bereitstellung der Website).
        </p>

        <h2>4. Content-Management-System (Sanity)</h2>
        <p>
          Die Inhalte dieser Website werden über das Headless-CMS Sanity
          (Sanity Inc., 41 Hartwell Avenue, Suite 200, Lexington, MA 02421, USA)
          verwaltet. Die Inhalte werden in der EU-Region (Frankfurt) gespeichert
          und über das CDN von Sanity ausgeliefert. Mit Sanity besteht ein AVV;
          Sanity ist DPF-zertifiziert.
        </p>
        <p>
          Eine direkte Übermittlung personenbezogener Daten von
          Website-Besuchern an Sanity findet im Regelfall nicht statt
          (Bilder und Texte werden über Vercel gecached und ausgeliefert).
        </p>

        <h2>5. Online-Terminvergabe (lemniscus / LemmyFlansch)</h2>
        <p>
          Auf der Seite <a href="/termin">Termin online buchen</a> wird das
          Buchungs-Widget &bdquo;LemmyFlansch&ldquo; der Lemniscus AG geladen
          (Anbieter siehe lemniscus.de/impressum). Beim Aufruf dieser Seite
          wird automatisch das JavaScript{" "}
          <code>https://my.lemniscus.de/js/lemmyFlansch.js</code> nachgeladen
          und eine Verbindung zu den Servern von lemniscus aufgebaut. Dabei
          werden technische Daten (IP-Adresse, User-Agent, Datum/Uhrzeit) an
          lemniscus übertragen.
        </p>
        <p>
          Wenn Sie über das Widget tatsächlich einen Termin buchen, werden die
          von Ihnen angegebenen Daten (Name, Kontaktdaten, gewünschte
          Behandlung) direkt an lemniscus übermittelt und dort gespeichert.
          Die Verarbeitung erfolgt im Rahmen der Patientenbeziehung
          (Art. 6 Abs. 1 lit. b und Art. 9 Abs. 2 lit. h DSGVO). Die Server
          von lemniscus stehen in Deutschland.
        </p>
        <p>
          Rechtsgrundlage für das Laden des Widgets ist unser berechtigtes
          Interesse an einer effizienten Terminvereinbarung (Art. 6 Abs. 1
          lit. f DSGVO). Datenschutzhinweise von lemniscus: <a href="https://lemniscus.de/datenschutz" target="_blank" rel="noopener">lemniscus.de/datenschutz</a>.
        </p>

        <h2>6. Schriftarten</h2>
        <p>
          Diese Website nutzt die Schriftarten <em>Inter</em> und <em>Lora</em>.
          Beide Schriften werden lokal vom Server dieser Website ausgeliefert
          (selbst-gehostet via <code>next/font</code>); es findet keine
          Verbindung zu Google Fonts oder anderen externen Anbietern statt.
        </p>

        <h2>7. Kartendarstellung (Anfahrt)</h2>
        <p>
          Auf der Seite <a href="/anfahrt">Anfahrt</a> wird eine Karte über
          eine sogenannte Zwei-Klick-Lösung eingebunden: Eine Verbindung zum
          Kartenanbieter wird erst aufgebaut, nachdem Sie die Karte aktiv
          aktivieren.
        </p>

        <h2>8. Kontaktformular</h2>
        <p>
          Wenn Sie das Kontaktformular auf der Seite{" "}
          <a href="/kontakt">Kontakt</a> nutzen, werden die von Ihnen
          eingegebenen Daten (Name, E-Mail, ggf. Telefon, Nachricht) zur
          Bearbeitung Ihrer Anfrage erhoben und gespeichert. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines
          Vertragsverhältnisses) bzw. Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung). Ihre Daten werden gelöscht, sobald die Anfrage
          abgeschlossen ist und keine gesetzliche Aufbewahrungspflicht
          besteht.
        </p>

        <h2>9. Server-Logfiles</h2>
        <p>
          Beim Aufruf der Website werden automatisch Daten in Server-Logs
          gespeichert (IP-Adresse anonymisiert, Datum/Uhrzeit, aufgerufene
          URL, User-Agent, Referrer). Diese Daten dienen ausschließlich der
          Sicherheit und Stabilität des Betriebs. Rechtsgrundlage:
          Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: maximal 30 Tage.
        </p>

        <h2>10. Cookies</h2>
        <p>
          Diese Website setzt selbst <strong>keine Cookies</strong> ein und
          nutzt kein Tracking. Bei Aufruf der{" "}
          <a href="/termin">Online-Terminvergabe</a> können durch lemniscus
          technisch notwendige Cookies gesetzt werden — Details siehe
          Datenschutzhinweise von lemniscus.
        </p>

        <h2>11. Ihre Rechte</h2>
        <p>Sie haben gegenüber dem Verantwortlichen folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich an die unter Punkt 1
          genannten Kontaktdaten.
        </p>

        <h2>12. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
          beschweren. Für unsere Praxis zuständig ist:
        </p>
        <p>
          <em>Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)</em>
          <br />
          Promenade 18, 91522 Ansbach
          <br />
          <a href="https://www.lda.bayern.de" target="_blank" rel="noopener">lda.bayern.de</a>
        </p>

        <h2>13. Aktualität und Änderungen</h2>
        <p>
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
          {new Date().toLocaleDateString("de-DE")}. Durch die Weiterentwicklung
          unserer Website oder aufgrund geänderter rechtlicher bzw.
          behördlicher Vorgaben kann es notwendig werden, diese
          Datenschutzerklärung zu ändern.
        </p>
      </Prose>
    </>
  );
}
