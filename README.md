# Naturheilpraxis Masel — Relaunch

Next.js + Sanity CMS, deploybar auf Vercel (Region Frankfurt).

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** mit eigenem Theme (`src/app/globals.css`)
- **next/font** mit Inter (sans) + Lora (serif), self-hosted
- **Sanity v3** als Headless-CMS, Studio eingebettet unter `/studio`
- Mock-Fallback in `src/lib/mock-data.ts` — Seite läuft auch ohne Sanity-Konfiguration

## Lokal starten

```bash
pnpm install
pnpm dev
# http://localhost:3000
```

Die Seite läuft sofort — mit Mock-Daten. Das Studio unter `/studio` zeigt
eine Setup-Anleitung, solange Sanity nicht konfiguriert ist.

## Sanity einrichten (einmalig)

1. **Projekt anlegen** unter [sanity.io/manage](https://sanity.io/manage)
   (kostenlos, Region **EU** wählen).
2. **Project-ID** notieren, Dataset bleibt `production`.
3. Datei `.env.local` nach Vorlage `.env.example` erstellen:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=<deine-id>
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. **CORS-Origin** im Sanity-Manage hinzufügen:
   `http://localhost:3000` (Dev) + später `https://masel.info` (Prod), mit „Credentials" aktiviert.
5. Dev-Server neu starten — Studio unter `/studio` ist nun live.
6. Erstes Login: dein Sanity-Account, Inhalte anlegen über die Sidebar.

## Deployment auf Vercel

1. Bei [vercel.com](https://vercel.com) einloggen (GitHub/GitLab-Konto reicht).
2. „New Project" → dieses Repo verknüpfen (oder via Vercel CLI: `pnpm dlx vercel`).
3. **Environment Variables** setzen:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy starten. Region ist über `vercel.json` auf `fra1` (Frankfurt) festgelegt.
5. Custom Domain hinzufügen: `masel.info` → DNS-Eintrag bei Strato auf Vercel zeigen lassen
   (Vercel zeigt dir die genauen A/CNAME-Records).
6. In Sanity unter „API → CORS Origins" die Produktions-URL hinzufügen.

## Verzeichnis

```
src/
  app/
    (site)/                    Öffentliche Routen mit Header/Footer
      page.tsx                 Startseite
      osteopathie/             Was ist Osteopathie?
      behandlungsschwerpunkte/ Übersicht aller Schwerpunkte
      praxis/                  Über uns (Barbara & Martin)
      termin/                  lemniscus my/OT (eingebettet)
      anfahrt/                 Adresse + Karte (DSGVO-2-Klick)
      kontakt/                 Formular
      krankenkassen/           Liste bezuschussender Kassen
      hygienekonzept/ datenschutz/ impressum/
      layout.tsx               Site-Layout: Header + Main + Footer
    studio/[[...tool]]/        Embedded Sanity Studio
    layout.tsx                 Root-Layout: html/body + Fonts
    globals.css                Theme & Basis-Styles
    sitemap.ts / robots.ts
  components/                  Layout & Section-Komponenten
  lib/
    data.ts                    Async-Getter mit Sanity + Mock-Fallback
    mock-data.ts               Fallback-Daten
    types.ts                   TypeScript-Modelle
    utils.ts
  sanity/
    env.ts                     Sanity-Konfiguration
    schemas/                   Inhalts-Typen (siteSettings, person, schwerpunkt, notice)
    structure.ts               Studio-Sidebar (Singletons + Listen)
    lib/                       Client, Image-URL-Builder, GROQ-Queries
sanity.config.ts               Studio-Root-Config
sanity.cli.ts                  Sanity-CLI (Migrations, Backups)
vercel.json                    fra1-Region + Security-Header
```

## Inhalts-Modelle (Sanity)

- **Praxis-Einstellungen** (Singleton): Name, Adresse, Kontakt,
  Öffnungszeiten, lemniscus-Embed-URL
- **Hinweisbox** (Singleton): Urlaubs-/Praxisschließungs-Banner
- **Personen**: Barbara & Martin (Foto, Bio, Qualifikationen)
- **Behandlungsschwerpunkte**: Karten auf der Startseite + Detail-Seite

## Was als Nächstes kommt

1. **Sanity-Projekt erstellen** + Env-Vars setzen
2. Inhalte ins CMS pflegen (Erstbefüllung anhand `mock-data.ts`)
3. Echte Fotos hochladen
4. lemniscus my/OT URL ins CMS eintragen, sobald aktiviert
5. Kontaktformular-Backend (Resend empfohlen)
6. **Deployment** auf Vercel
7. Domain `masel.info` umziehen (DNS bei Strato auf Vercel)
8. Finale Datenschutzerklärung + Cookie-Konzept (mit Anwalt prüfen)
