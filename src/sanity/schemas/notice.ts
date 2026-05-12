import { defineType, defineField } from "sanity";

export const notice = defineType({
  name: "notice",
  title: "Hinweisbox",
  type: "document",
  fields: [
    defineField({
      name: "active",
      title: "Aktiv anzeigen",
      type: "boolean",
      initialValue: false,
      description: "Schalter zum Ein-/Ausblenden des Banners auf der Startseite.",
    }),
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      description: "z. B. Urlaubshinweis, Praxisschließung",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "validUntil",
      title: "Anzeigen bis (optional)",
      type: "date",
      description: "Wenn gesetzt, wird die Box nach diesem Datum automatisch ausgeblendet.",
    }),
  ],
  preview: {
    select: { title: "title", active: "active" },
    prepare: ({ title, active }) => ({
      title: title || "Hinweisbox",
      subtitle: active ? "● Aktiv" : "○ Inaktiv",
    }),
  },
});
