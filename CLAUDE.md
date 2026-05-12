# CLAUDE.md

Onboarding für KI-Assistenten / neue Entwickler. Kurz, dicht, action-oriented.

## Was ist das?

Relaunch der **Naturheilpraxis Masel** (Bad Aibling, Barbara & Martin Masel, Osteopathie). Ersetzt eine veraltete WordPress-Seite. Live unter https://masel-website.vercel.app (Production-Domain `masel.info` folgt nach DNS-Umzug).

## Stack (kurz)

- **Next.js 15** App Router, **React 19**, **TypeScript**
- **Tailwind v4** mit `@theme inline` → Sage-Palette in `src/app/globals.css`
- **Sanity v3** (CMS, embedded Studio unter `/studio`)
- **Vercel** Frankfurt-Region (`fra1`)
- **pnpm 10.x**

## Lokal starten

```bash
pnpm install
pnpm dev           # localhost:3000
pnpm seed          # CMS mit Mock-Daten befüllen (braucht SANITY_API_WRITE_TOKEN in .env.local)
pnpm build         # Production-Build verifizieren
```

`.env.local` (nicht im Repo):
```
NEXT_PUBLIC_SANITY_PROJECT_ID=91lyoipp
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_WRITE_TOKEN=sk...   # nur für lokales pnpm seed
```

## Verzeichnis-Konventionen

```
src/
  app/
    (site)/             Öffentliche Seiten mit Header/Footer (Route-Group)
    studio/[[...tool]]/ Embedded Sanity Studio
    layout.tsx          Root: html/body + Fonts + generateMetadata
    globals.css         Theme-Tokens + Tailwind + Lemmy-Overrides
    opengraph-image.tsx Generiertes OG-Image (1200×630)
    icon.svg            Favicon (Sage-„M")
    robots.ts sitemap.ts
  components/           Server Components by default
  lib/
    data.ts             Async-Getter mit React.cache + Sanity + Mock-Fallback
    mock-data.ts        Fallback-Daten (typgleich mit Sanity-Output halten!)
    site-url.ts         Dynamische Site-URL (env → vercel → localhost)
    types.ts            TypeScript-Modelle
    utils.ts
  sanity/
    schemas/            siteSettings + notice (Singletons), person + schwerpunkt (Listen)
    lib/                Client, Queries (GROQ), Image-URL-Builder
    structure.ts        Studio-Sidebar
    env.ts              Robust env-Loading mit Format-Validation
scripts/
  seed-cms.ts           Befüllt Sanity mit mock-data via Write-Token
sanity.config.ts / sanity.cli.ts
vercel.json             fra1-Region + Security-Header
```

## Daten-Flow

Server Components rufen direkt `getPraxis()`, `getPersonen()`, `getSchwerpunkte()`, `getNotice()`, `getKrankenkassen()` aus `src/lib/data.ts` auf. Diese sind `cache()`d (per request) und fallbacken auf Mock wenn Sanity nicht konfiguriert.

**ISR**: 60 s revalidate für alle CMS-Inhalte.

Header/Footer brauchen Praxis-Daten → `(site)/layout.tsx` fetcht einmal und gibt per Props weiter (vermeidet 3× Sanity-Calls pro Request).

## Konventionen

- **Server Components by default**. Client-Components nur wo nötig (`LemniscusScript` z. B.).
- **Keine deutschen typografischen Anführungszeichen** in TypeScript-Strings — der TS-Parser bricht bei `"foo „bar" baz"`. Stattdessen Unicode-Escape `„…“` oder neutralen Text. In JSX-Text-Inhalten HTML-Entities (`&bdquo; &ldquo;`).
- **Mock-Daten** sind die Spec für Sanity-Schemas — wenn Mock-Type sich ändert, Schema und `data.ts`-Mapping mitziehen.
- **Lemmy-Widgets** nicht mit Tailwind-Klassen stylen — Lemmy überschreibt sie. Statt dessen CSS-Variablen in `globals.css` mit `body`-prefixed Selektoren (höhere Specificity).
- **`@/*` Import-Alias** auf `src/*`.
- **ESLint-Build-Check** läuft auf Vercel — unescaped Quotes in JSX (`"`) brechen den Build. Mit `&quot; &ldquo; &rdquo;` lösen.

## Git / Deploy

Repo: https://github.com/AHub88/masel-website (public). Vercel deployt automatisch bei Push auf `master`.

**Wichtig**: Commit-Author MUSS `99470230+AHub88@users.noreply.github.com` sein, sonst blockt Vercel den Deploy (Hobby-Plan-Restriktion):

```bash
git -c user.name="AHub88" \
    -c user.email="99470230+AHub88@users.noreply.github.com" \
    commit -m "..."
```

## Pitfalls (out of bitter experience)

1. **Hobby-Plan Vercel-Block**: Repo muss public sein UND Commit-Author muss noreply-Mail sein
2. **LemmyFlansch nur bei Hard-Reload**: Bei Client-Side-Nav muss Script neu injiziert werden — `LemniscusScript` Client-Component macht das via `usePathname`-Dep
3. **next/script + Hydration #418**: Direktes JSX `<script>` führt zu Mismatch — Client-Component mit `useEffect` ist sauber
4. **`scripts/` aus tsconfig excluden**: Sonst läuft Vercel-Typecheck über das Seed-Skript und meckert wegen `@sanity/client` (transitive Dep)
5. **`@eslint/eslintrc`** muss als direkte devDep deklariert sein, sonst bricht der Vercel-Build (auch wenn transitive vorhanden)
6. **Sanity-Token-Format**: UUID muss exakt `8-4-4-4-12` Hexgroups sein — Demo-Token aus dem lemniscus-Helpdesk funktioniert nicht für echte Praxen

## Was bewusst NICHT da ist

- Kein Cookie-Banner (wir setzen keine Cookies)
- Keine Analytics
- Kein Google Maps (DSGVO-Klick-Lösung als Platzhalter, statische OSM kommt später)
- Keine Tests (zu früh für Test-Setup bei einer 11-Routen-Marketing-Site)

## TODOs (in Reihenfolge)

1. Echte Fotos im Studio hochladen → in `getPersonen()` werden `photoUrl` + `photoAlt` resolved
2. Kontaktformular-Backend → Resend bevorzugt, Mail an `praxis@masel.info`
3. Statische OSM-Karte mit 2-Klick auf `/anfahrt` und `/`
4. Impressum-TODOs (Aufsichtsbehörde verifizieren, Berufshaftpflicht, USt-IdNr.)
5. AVVs abschließen (Vercel, Sanity, lemniscus)
6. Custom Domain `masel.info` umziehen + `NEXT_PUBLIC_SITE_URL` setzen
7. DSE + Impressum anwaltlich gegenlesen lassen
