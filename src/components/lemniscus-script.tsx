import type { Praxis } from "@/lib/types";

/**
 * Lädt das LemmyFlansch-Aktivierungs-Script einmalig site-weit.
 *
 * Wir rendern den Script-Tag direkt als JSX (kein next/script), damit:
 * - die data-Attribute (token, floating-side) bereits im initial HTML stehen,
 * - das Script seinen eigenen Tag via document.getElementById("lemmyFlansch") findet,
 * - React 19 das Element automatisch in den <head> hoistet.
 *
 * Sobald geladen, übernimmt LemmyFlansch:
 * - <a data-lemmy-flansch="button">    → Buchungs-Button
 * - <div data-lemmy-flansch="teasers"> → nächste freie Termine
 * - Floating-Widget (links/rechts/aus, je nach Konfiguration)
 */
export function LemniscusScript({ praxis }: { praxis: Praxis }) {
  const token = praxis.lemniscusToken;
  if (!token) return null;

  return (
    <script
      async
      id="lemmyFlansch"
      data-token={token}
      data-floating-side={praxis.lemniscusFloatingSide ?? "right"}
      src="https://my.lemniscus.de/js/lemmyFlansch.js"
    />
  );
}
