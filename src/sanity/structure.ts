import type { StructureResolver } from "sanity/structure";

const SINGLETONS = ["siteSettings", "notice"] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Inhalte")
    .items([
      S.listItem()
        .title("Praxis-Einstellungen")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Hinweisbox")
        .id("notice")
        .child(S.document().schemaType("notice").documentId("notice")),
      S.divider(),
      S.documentTypeListItem("person").title("Personen"),
      S.documentTypeListItem("schwerpunkt").title("Behandlungsschwerpunkte"),
    ]);

export const isSingleton = (type: string): boolean =>
  (SINGLETONS as readonly string[]).includes(type);
