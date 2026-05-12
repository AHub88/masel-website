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
      name: "lemniscusEmbedCode",
      title: "lemniscus my/OT — Einbettungscode (Lemmy-Flansch)",
      type: "text",
      rows: 6,
      group: "general",
      description:
        "Vollständigen Einbettungscode (Script-Tag + DIV) aus lemniscus einfügen. Anleitung: helpdesk.lemniscus.de → my/OT in eigene Website einbinden.",
    }),
    defineField({
      name: "lemniscusEmbedUrl",
      title: "lemniscus my/OT — iframe-URL (Fallback)",
      type: "url",
      group: "general",
      description:
        "Optional: klassische iframe-Einbettung als Fallback. Wird nur genutzt, wenn oben kein Einbettungscode hinterlegt ist.",
    }),
  ],
  preview: {
    select: { title: "name" },
    prepare: ({ title }) => ({ title: title || "Praxis-Einstellungen" }),
  },
});
