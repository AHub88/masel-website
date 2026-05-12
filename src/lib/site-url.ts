/**
 * Liefert die kanonische Site-URL für Metadaten, Sitemap, Robots etc.
 *
 * Priorisierung:
 *   1. NEXT_PUBLIC_SITE_URL  → manuell gesetzt (z. B. https://masel.info)
 *   2. VERCEL_PROJECT_PRODUCTION_URL → Vercel-Production
 *   3. VERCEL_URL → Preview/Branch-Deployments
 *   4. http://localhost:3000 → lokale Dev
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProd) return `https://${vercelProd}`;

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}
