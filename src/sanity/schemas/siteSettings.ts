import { defineType, defineField, defineArrayMember } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Praxis-Einstellungen",
  type: "document",
  groups: [
    { name: "general", title: "Allgemein", default: true },
    { name: "contact", title: "Kontakt" },
    { name: "hours", title: "Öffnungszeiten" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name der Praxis",
      type: "string",
      group: "general",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Untertitel",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-Beschreibung (SEO)",
      type: "text",
      rows: 3,
      group: "seo",
      validation: (r) => r.max(160),
    }),
    defineField({
      name: "phone",
      title: "Telefon (international, z. B. +4980619377020)",
      type: "string",
      group: "contact",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "phoneDisplay",
      title: "Telefon (Anzeige, z. B. 08061 9377020)",
      type: "string",
      group: "contact",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
      group: "contact",
      validation: (r) => r.required().email(),
    }),
    defineField({
      name: "address",
      title: "Adresse",
      type: "object",
      group: "contact",
      fields: [
        { name: "street", title: "Straße & Hausnr.", type: "string" },
        { name: "zip", title: "PLZ", type: "string" },
        { name: "city", title: "Ort", type: "string" },
        { name: "lat", title: "Latitude", type: "number" },
        { name: "lng", title: "Longitude", type: "number" },
      ],
    }),
    defineField({
      name: "openingHours",
      title: "Öffnungszeiten",
      type: "array",
      group: "hours",
      of: [
        defineArrayMember({
          type: "object",
          name: "hour",
          fields: [
            {
              name: "day",
              title: "Tag",
              type: "string",
              options: {
                list: [
                  { title: "Montag", value: "Mo" },
                  { title: "Dienstag", value: "Di" },
                  { title: "Mittwoch", value: "Mi" },
                  { title: "Donnerstag", value: "Do" },
                  { title: "Freitag", value: "Fr" },
                  { title: "Samstag", value: "Sa" },
                  { title: "Sonntag", value: "So" },
                ],
              },
            },
            { name: "from", title: "Von (HH:MM)", type: "string" },
            { name: "to", title: "Bis (HH:MM)", type: "string" },
          ],
          preview: {
            select: { day: "day", from: "from", to: "to" },
            prepare: ({ day, from, to }) => ({
              title: `${day}: ${from} – ${to}`,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "openingHoursNote",
      title: "Hinweis zu den Öffnungszeiten",
      type: "string",
      group: "hours",
      description: "z. B. Behandlung ausschließlich nach Terminvereinbarung.",
    }),
    defineField({
      name: "lemniscusToken",
      title: "lemniscus — LemmyFlansch Token",
      type: "string",
      group: "general",
      description:
        "Der Token aus dem lemniscus-Backend (z. B. 87027031-62f5-43f3-9c34-f00a63aca145). Aktiviert die Online-Terminvergabe site-weit.",
    }),
    defineField({
      name: "lemniscusFloatingSide",
      title: "lemniscus — Floating-Widget Position",
      type: "string",
      group: "general",
      options: {
        list: [
          { title: "Rechts", value: "right" },
          { title: "Links", value: "left" },
          { title: "Aus (kein Floating-Widget)", value: "none" },
        ],
      },
      initialValue: "right",
      description:
        "Position des schwebenden Buchungs-Buttons am Bildschirmrand. Auf Aus, wenn nur Inline-Buttons gewünscht sind.",
    }),
  ],
  preview: {
    select: { title: "name" },
    prepare: ({ title }) => ({ title: title || "Praxis-Einstellungen" }),
  },
});
