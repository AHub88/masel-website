"use client";

import { useEffect, useRef } from "react";

/**
 * Rendert den von lemniscus generierten Einbettungscode (Lemmy-Flansch).
 * React rendert <script>-Tags aus dangerouslySetInnerHTML nicht aus — daher
 * wird der Inhalt nach Mount manuell in den Container injiziert und alle
 * Script-Tags neu erzeugt, damit der Browser sie ausführt.
 *
 * Lemniscus benötigt mindestens 400 px Container-Breite für korrekte Darstellung.
 */
export function LemniscusEmbed({ code }: { code: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = code;

    container.querySelectorAll("script").forEach((oldScript) => {
      const newScript = document.createElement("script");
      for (const attr of Array.from(oldScript.attributes)) {
        newScript.setAttribute(attr.name, attr.value);
      }
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [code]);

  return (
    <div
      ref={containerRef}
      className="lemniscus-host min-w-[400px] [&_*]:max-w-full"
      aria-label="Online-Terminvergabe"
    />
  );
}
