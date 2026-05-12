import Script from "next/script";
import type { Praxis } from "@/lib/types";

/**
 * Lädt das LemmyFlansch-Aktivierungs-Script einmalig site-weit.
 * Wird im Site-Layout (app/(site)/layout.tsx) gerendert.
 *
 * Sobald geladen, übernimmt Lemmy-Flansch:
 * - <a data-lemmy-flansch="button">    → Buchungs-Button
 * - <div data-lemmy-flansch="teasers"> → nächste freie Termine
 * - Floating-Widget (links/rechts/aus, je nach Konfiguration)
 */
export function LemniscusScript({ praxis }: { praxis: Praxis }) {
  const token = praxis.lemniscusToken;
  if (!token) return null;

  return (
    <Script
      id="lemmyFlansch"
      src="https://my.lemniscus.de/js/lemmyFlansch.js"
      strategy="afterInteractive"
      async
      data-token={token}
      data-floating-side={praxis.lemniscusFloatingSide ?? "right"}
    />
  );
}
