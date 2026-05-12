import type { Praxis } from "@/lib/types";

/**
 * Lädt das LemmyFlansch-Aktivierungs-Script einmalig site-weit.
 *
 * Wir rendern den Script-Tag direkt als JSX (kein next/script), damit:
 * - die data-Attribute (token, floating-side, debug) bereits im initial HTML stehen,
 * - das Script seinen eigenen Tag via document.getElementById("lemmyFlansch") findet,
 * - React 19 das Element automatisch in den <head> hoistet.
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
      {...(praxis.lemniscusDebug ? { "data-debug": "1" } : {})}
      src="https://my.lemniscus.de/js/lemmyFlansch.js"
    />
  );
}
