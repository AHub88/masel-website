import { defineType, defineField } from "sanity";

export const schwerpunkt = defineType({
  name: "schwerpunkt",
  title: "Behandlungsschwerpunkt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "summary",
      title: "Kurzbeschreibung (Karten-Text)",
      type: "text",
      rows: 3,
      validation: (r) => r.max(220),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Säugling", value: "baby" },
          { title: "Schwangerschaft", value: "pregnant" },
          { title: "Wirbelsäule", value: "spine" },
          { title: "Kiefer", value: "jaw" },
          { title: "Kopf", value: "head" },
          { title: "Organe", value: "organ" },
        ],
      },
    }),
    defineField({
      name: "body",
      title: "Ausführlicher Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "order",
      title: "Reihenfolge",
      type: "number",
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
    select: { title: "title", subtitle: "summary" },
  },
});
