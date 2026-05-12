import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const routes = [
  "",
  "/osteopathie",
  "/behandlungsschwerpunkte",
  "/praxis",
  "/termin",
  "/anfahrt",
  "/kontakt",
  "/krankenkassen",
  "/hygienekonzept",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
