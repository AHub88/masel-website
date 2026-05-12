# Naturheilpraxis Masel — Relaunch

Moderne Praxis-Website mit Next.js 15, Sanity CMS und Vercel-Hosting (Frankfurt-Region).

🟢 **Live (Preview)**: https://masel-website.vercel.app
📁 **Repo**: https://github.com/AHub88/masel-website
🛠️ **CMS Studio**: https://masel-website.vercel.app/studio

> Eine ausführliche Entwickler-Doku mit Konventionen, Pitfalls und Daten-Flow steht in [`CLAUDE.md`](./CLAUDE.md).

---

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** mit eigenem Theme in `src/app/globals.css` (Sage-Palette `#5c7a56`)
- **Sanity v3** Headless-CMS, Studio embedded unter `/studio`
- **next/font** self-hosted: Inter (sans) + Lora (serif)
- **lemniscus LemmyFlansch** für Online-Terminvergabe
- **Vercel** Hosting, Region `fra1` (Frankfurt) — DSGVO-konform
- Mock-Daten-Fallback in `src/lib/mock-data.ts` — Seite läuft auch ohne CMS-Konfiguration

## Schnellstart (lokal)

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

Funktioniert sofort mit Mock-Daten. Für CMS-Anbindung `.env.local` nach `.env.example` ausfüllen:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=91lyoipp
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_WRITE_TOKEN=sk...    # nur für pnpm seed (Editor-Permission)
```

CMS einmalig mit Mock-Inhalten befüllen:

```bash
pnpm seed
```

## Seitenstruktur

```
/                          Startseite mit Hero, USPs, Schwerpunkten, Personen, CTA
/osteopathie               Methoden-Erklärung
/behandlungsschwerpunkte   6 Schwerpunkte als Detail-Seiten
/praxis                    Barbara & Martin (Foto, Bio, Qualifikationen)
/termin                    LemmyFlansch Buchungs-Widget
/anfahrt                   Adresse + Anfahrtsbeschreibung
/kontakt                   Kontaktformular (Backend folgt)
/krankenkassen             Bezuschussungs-Liste
/hygienekonzept            Standards der Praxis
/datenschutz /impressum    Rechtliches
/studio                    Sanity CMS (Editor-Login)
```

## CMS pflegen

Im Studio (`/studio`) liegen vier Bereiche in der linken Sidebar:

| Inhaltstyp | Wo es auftaucht |
|---|---|
| **Praxis-Einstellungen** (Singleton) | Header, Footer, alle Pages (Kontaktdaten, Öffnungszeiten, lemniscus-Token) |
| **Hinweisbox** (Singleton) | Banner über der Startseite (z. B. Urlaub). Per Toggle aktivieren, Datum „validUntil" blendet automatisch aus |
| **Personen** (Liste) | `/praxis` und Personen-Teaser auf der Startseite |
| **Behandlungsschwerpunkte** (Liste) | Karten auf der Startseite + Details auf `/behandlungsschwerpunkte` |

Änderungen erscheinen nach **Publish** + ~60 Sekunden auf der Live-Site (ISR-Revalidate).

## Online-Terminvergabe (lemniscus LemmyFlansch)

Komplett CMS-gesteuert über zwei Felder in den Praxis-Einstellungen:

- **LemmyFlansch Token** (UUID aus dem lemniscus-Backend)
- **Floating-Widget Position** (rechts / links / aus)

Sobald der Token gesetzt ist:
- Site-weites Floating-Widget am Bildschirmrand
- Auf `/termin`: Teaser mit nächsten freien Slots + Buchungs-Button
- Styling automatisch in Sage-Palette (CSS-Overrides in `globals.css`)

## Deployment

Auto-Deploy bei jedem Push auf `master`. Manuell triggern:

```bash
git -c user.email="99470230+AHub88@users.noreply.github.com" \
    -c user.name="AHub88" \
    commit -m "..."
git push
```

⚠️ Die Noreply-Mail ist Pflicht (siehe [CLAUDE.md](./CLAUDE.md) → Pitfalls).

Env-Variablen in Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, default `2025-01-01`)
- `NEXT_PUBLIC_SITE_URL` (für finale Domain `https://masel.info` setzen)

Sanity CORS-Origins (in [sanity.io/manage](https://sanity.io/manage) → API):
- `http://localhost:3000` (Dev)
- `https://masel-website.vercel.app` (Preview/Production)
- `https://masel.info` (sobald Domain umgezogen)

## DSGVO

- Hosting: **Vercel Frankfurt** (`fra1`) — DPF-zertifiziert, AVV abschließen
- CMS: **Sanity EU-Region** — DPF-zertifiziert, AVV abschließen
- lemniscus: deutscher Anbieter, AVV läuft direkt zwischen Praxis und lemniscus
- **Keine Cookies** auf der Site selbst, kein Tracking
- **Keine Google Fonts** (alles self-hosted)
- **Karten** als Klick-zu-Aktivieren-Platzhalter
- Datenschutzerklärung und Impressum stehen unter `/datenschutz` und `/impressum` — **vor Go-Live anwaltlich prüfen lassen**

## Offene Punkte

In Reihenfolge der Dringlichkeit:

1. Echte Fotos der Osteopath:innen im Studio hochladen
2. Kontaktformular-Backend (Resend → Mail an `praxis@masel.info`)
3. Statische OpenStreetMap-Karte mit Klick-zu-Aktivieren
4. Impressum-TODOs ausfüllen (Aufsichtsbehörde, Berufshaftpflicht, USt-IdNr.)
5. AVVs unterzeichnen
6. Domain `masel.info` von Strato auf Vercel umstellen
7. Anwaltliche Prüfung von DSE + Impressum

---

Detailliertere Doku, Konventionen und bekannte Stolperstellen siehe **[`CLAUDE.md`](./CLAUDE.md)**.
