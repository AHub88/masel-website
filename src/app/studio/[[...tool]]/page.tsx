import { isSanityConfigured } from "@/sanity/env";
import { Studio } from "./studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <SetupNotice />;
  }
  return <Studio />;
}

function SetupNotice() {
  return (
    <main style={{ padding: "4rem 2rem", maxWidth: 720, margin: "0 auto", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Sanity ist noch nicht konfiguriert</h1>
      <p>Damit das CMS-Studio läuft, muss einmalig ein Sanity-Projekt erstellt und in den Environment-Variablen hinterlegt werden:</p>
      <ol style={{ paddingLeft: "1.25rem", marginTop: "1rem" }}>
        <li>
          Bei{" "}
          <a href="https://sanity.io/manage" style={{ color: "#5C7A56" }}>
            sanity.io/manage
          </a>{" "}
          ein neues Projekt erstellen (kostenlos, Region <strong>EU</strong> wählen).
        </li>
        <li>Project-ID und Dataset (z. B. <code>production</code>) notieren.</li>
        <li>
          Im Projekt-Root die Datei <code>.env.local</code> nach Vorlage <code>.env.example</code> erstellen und ausfüllen.
        </li>
        <li>Dev-Server neu starten: <code>pnpm dev</code></li>
      </ol>
      <p style={{ marginTop: "1.5rem", color: "#666", fontSize: "0.9rem" }}>
        Solange nicht konfiguriert, läuft die Website mit Mock-Daten weiter — das CMS lädt sich automatisch hier, sobald die Env-Variablen gesetzt sind.
      </p>
    </main>
  );
}
