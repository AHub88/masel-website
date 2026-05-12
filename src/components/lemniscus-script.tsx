import Script from "next/script";
import type { Praxis } from "@/lib/types";

/**
 * Lädt das LemmyFlansch-Aktivierungs-Script einmalig site-weit.
 * next/script mit afterInteractive vermeidet Hydration-Mismatches.
 */
export function LemniscusScript({ praxis }: { praxis: Praxis }) {
  const token = praxis.lemniscusToken;
  if (!token) return null;

  const attrs: Record<string, string> = {
    "data-token": token,
    "data-floating-side": praxis.lemniscusFloatingSide ?? "right",
  };
  if (praxis.lemniscusDebug) attrs["data-debug"] = "1";

  return (
    <Script
      id="lemmyFlansch"
      src="https://my.lemniscus.de/js/lemmyFlansch.js"
      strategy="afterInteractive"
      {...attrs}
    />
  );
}
