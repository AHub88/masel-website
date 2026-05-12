"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type { Praxis } from "@/lib/types";

const SCRIPT_ID = "lemmyFlansch";
const SRC = "https://my.lemniscus.de/js/lemmyFlansch.js";

/**
 * Aktiviert LemmyFlansch site-weit und re-initialisiert bei jeder
 * Next.js Client-Navigation, damit die Platzhalter (`data-lemmy-flansch="..."`)
 * auf neu gerenderten Pages erkannt und gefüllt werden.
 *
 * Die IIFE im Lemmy-Script läuft nur beim Script-Laden — also entfernen wir
 * Script + Floating-Widget bei jedem Path-Wechsel und injizieren neu.
 */
export function LemniscusScript({ praxis }: { praxis: Praxis }) {
  const pathname = usePathname();
  const token = praxis.lemniscusToken;
  const floatingSide = praxis.lemniscusFloatingSide ?? "right";
  const debug = Boolean(praxis.lemniscusDebug);

  useEffect(() => {
    if (!token) return;

    document.getElementById(SCRIPT_ID)?.remove();
    document
      .querySelectorAll('[data-lemmyflansch-floating="1"]')
      .forEach((el) => el.remove());

    const script = document.createElement("script");
    script.async = true;
    script.id = SCRIPT_ID;
    script.dataset.token = token;
    script.dataset.floatingSide = floatingSide;
    if (debug) script.dataset.debug = "1";
    script.src = SRC;
    document.head.appendChild(script);
  }, [pathname, token, floatingSide, debug]);

  return null;
}
