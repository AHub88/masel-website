"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { structure } from "./src/sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "masel-cms",
  title: "Praxis Masel — CMS",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
