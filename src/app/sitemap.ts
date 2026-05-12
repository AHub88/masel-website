import type { MetadataRoute } from "next";

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
  return routes.map((path) => ({
    url: `https://masel.info${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
