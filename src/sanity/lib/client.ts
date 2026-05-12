import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "../env";

export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: "published",
    })
  : null;
