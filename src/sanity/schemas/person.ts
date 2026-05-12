import { defineType, defineField } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "Vorname",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lastName",
      title: "Nachname",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) =>
          `${(doc as { firstName?: string }).firstName ?? ""}-${(doc as { lastName?: string }).lastName ?? ""}`,
        maxLength: 80,
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Berufsbezeichnung",
      type: "string",
      description: "z. B. Heilpraktikerin Osteopathin D.O.",
    }),
    defineField({
      name: "qualifications",
      title: "Qualifikationen",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bio",
      title: "Kurzbiografie",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt-Text (Bildbeschreibung)",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
      description: "Niedrigere Zahlen werden zuerst angezeigt.",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { first: "firstName", last: "lastName", media: "photo" },
    prepare: ({ first, last, media }) => ({
      title: `${first ?? ""} ${last ?? ""}`.trim(),
      media,
    }),
  },
});
