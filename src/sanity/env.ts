const DEFAULT_API_VERSION = "2025-01-01";

function pickApiVersion(): string {
  const raw = process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim();
  if (raw && /^(1|\d{4}-\d{2}-\d{2})$/.test(raw)) return raw;
  return DEFAULT_API_VERSION;
}

export const apiVersion = pickApiVersion();
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";
export const useCdn = false;

export const isSanityConfigured = Boolean(projectId && dataset);
