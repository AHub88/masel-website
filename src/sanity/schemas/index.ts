import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { person } from "./person";
import { schwerpunkt } from "./schwerpunkt";
import { notice } from "./notice";

export const schemaTypes: SchemaTypeDefinition[] = [siteSettings, person, schwerpunkt, notice];
