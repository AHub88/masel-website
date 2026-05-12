/**
 * Befüllt das Sanity-Dataset mit den Mock-Inhalten aus src/lib/mock-data.ts.
 *
 * Voraussetzung — ein Schreib-Token mit Editor-Rechten:
 *   1. https://sanity.io/manage → Projekt „Praxis Masel" → API → Tokens
 *   2. „Add API token" · Name z. B. „seed-script" · Permissions: **Editor**
 *   3. Token kopieren und in `.env.local` ergänzen:
 *        SANITY_API_WRITE_TOKEN=sk...
 *
 * Ausführen:
 *   pnpm seed
 */

import { createClient } from "@sanity/client";
import {
  mockNotice,
  mockPersonen,
  mockPraxis,
  mockSchwerpunkte,
} from "../src/lib/mock-data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID fehlt in .env.local");
  process.exit(1);
}
if (!token) {
  console.error(
    "❌ SANITY_API_WRITE_TOKEN fehlt in .env.local\n   Token erstellen unter https://sanity.io/manage → API → Tokens (Editor-Rechte).",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function seed() {
  console.log(`📡 Verbinde mit Sanity (project: ${projectId}, dataset: ${dataset})\n`);

  // 1. Praxis-Einstellungen (Singleton)
  console.log("→ Praxis-Einstellungen");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: mockPraxis.name,
    tagline: mockPraxis.tagline,
    metaDescription: mockPraxis.metaDescription,
    phone: mockPraxis.phone,
    phoneDisplay: mockPraxis.phoneDisplay,
    email: mockPraxis.email,
    address: {
      street: mockPraxis.address.street,
      zip: mockPraxis.address.zip,
      city: mockPraxis.address.city,
      lat: mockPraxis.address.lat,
      lng: mockPraxis.address.lng,
    },
    openingHours: mockPraxis.openingHours.map((h, i) => ({
      _key: `oh-${i}`,
      _type: "hour",
      day: h.day,
      from: h.from,
      to: h.to,
    })),
    openingHoursNote: mockPraxis.openingHoursNote,
  });

  // 2. Hinweisbox (Singleton, inaktiv)
  console.log("→ Hinweisbox");
  await client.createOrReplace({
    _id: "notice",
    _type: "notice",
    active: false,
    title: mockNotice.title,
    text: mockNotice.text,
    validUntil: mockNotice.validUntil,
  });

  // 3. Personen
  console.log("→ Personen");
  for (const [i, p] of mockPersonen.entries()) {
    await client.createOrReplace({
      _id: `person.${p.slug}`,
      _type: "person",
      firstName: p.firstName,
      lastName: p.lastName,
      slug: { _type: "slug", current: p.slug },
      title: p.title,
      qualifications: p.qualifications,
      bio: p.bio,
      order: i,
    });
    console.log(`   · ${p.firstName} ${p.lastName}`);
  }

  // 4. Behandlungsschwerpunkte
  console.log("→ Behandlungsschwerpunkte");
  for (const [i, s] of mockSchwerpunkte.entries()) {
    await client.createOrReplace({
      _id: `schwerpunkt.${s.slug}`,
      _type: "schwerpunkt",
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      summary: s.summary,
      icon: s.icon,
      order: i,
    });
    console.log(`   · ${s.title}`);
  }

  console.log("\n✅ CMS befüllt. Studio neu laden und Inhalte prüfen.");
}

seed().catch((err) => {
  console.error("\n❌ Seed fehlgeschlagen:");
  console.error(err);
  process.exit(1);
});
