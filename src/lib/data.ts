import { cache } from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  noticeQuery,
  personenQuery,
  schwerpunkteQuery,
  siteSettingsQuery,
} from "@/sanity/lib/queries";
import {
  mockKrankenkassen,
  mockNotice,
  mockPersonen,
  mockPraxis,
  mockSchwerpunkte,
} from "./mock-data";
import type { Notice, Person, Praxis, Schwerpunkt } from "./types";

type SanityPersonResult = {
  slug?: string;
  firstName?: string;
  lastName?: string;
  title?: string;
  qualifications?: string[];
  bio?: string;
  photo?: { alt?: string } | null;
};

type SanitySchwerpunktResult = {
  slug?: string;
  title?: string;
  summary?: string;
  icon?: string;
};

const REVALIDATE_SECONDS = 60;
const fetchOpts = { next: { revalidate: REVALIDATE_SECONDS } } as const;

export const getPraxis = cache(async (): Promise<Praxis> => {
  if (!client) return mockPraxis;
  try {
    const data = await client.fetch(siteSettingsQuery, {}, fetchOpts);
    if (!data) return mockPraxis;
    return {
      ...mockPraxis,
      name: data.name ?? mockPraxis.name,
      tagline: data.tagline ?? mockPraxis.tagline,
      metaDescription: data.metaDescription ?? mockPraxis.metaDescription,
      phone: data.phone ?? mockPraxis.phone,
      phoneDisplay: data.phoneDisplay ?? mockPraxis.phoneDisplay,
      email: data.email ?? mockPraxis.email,
      address: data.address
        ? { ...mockPraxis.address, ...data.address }
        : mockPraxis.address,
      openingHours: data.openingHours?.length
        ? (data.openingHours as Praxis["openingHours"])
        : mockPraxis.openingHours,
      openingHoursNote: data.openingHoursNote ?? mockPraxis.openingHoursNote,
      lemniscusEmbedCode: data.lemniscusEmbedCode ?? undefined,
      lemniscusEmbedUrl: data.lemniscusEmbedUrl ?? undefined,
    };
  } catch (e) {
    console.warn("[cms] getPraxis failed, falling back to mock:", e);
    return mockPraxis;
  }
});

export const getPersonen = cache(async (): Promise<Person[]> => {
  if (!client) return mockPersonen;
  try {
    const data = await client.fetch(personenQuery, {}, fetchOpts);
    if (!data?.length) return mockPersonen;
    return (data as SanityPersonResult[]).map((p) => ({
      slug: p.slug ?? "",
      firstName: p.firstName ?? "",
      lastName: p.lastName ?? "",
      title: p.title ?? "",
      qualifications: p.qualifications ?? [],
      bio: p.bio ?? "",
      photoUrl: p.photo ? (urlForImage(p.photo)?.width(800).url() ?? undefined) : undefined,
      photoAlt: p.photo?.alt,
    }));
  } catch (e) {
    console.warn("[cms] getPersonen failed, falling back to mock:", e);
    return mockPersonen;
  }
});

export const getSchwerpunkte = cache(async (): Promise<Schwerpunkt[]> => {
  if (!client) return mockSchwerpunkte;
  try {
    const data = await client.fetch(schwerpunkteQuery, {}, fetchOpts);
    if (!data?.length) return mockSchwerpunkte;
    return (data as SanitySchwerpunktResult[]).map((s) => ({
      slug: s.slug ?? "",
      title: s.title ?? "",
      summary: s.summary ?? "",
      icon: s.icon ?? "spine",
    }));
  } catch (e) {
    console.warn("[cms] getSchwerpunkte failed, falling back to mock:", e);
    return mockSchwerpunkte;
  }
});

export const getNotice = cache(async (): Promise<Notice> => {
  if (!client) return mockNotice;
  try {
    const data = await client.fetch(noticeQuery, {}, fetchOpts);
    if (!data) return { ...mockNotice, active: false };
    return {
      active: Boolean(data.active),
      title: data.title ?? "",
      text: data.text ?? "",
      validUntil: data.validUntil ?? undefined,
    };
  } catch (e) {
    console.warn("[cms] getNotice failed, falling back to mock:", e);
    return { ...mockNotice, active: false };
  }
});

export const getKrankenkassen = cache(async (): Promise<string[]> => {
  return mockKrankenkassen;
});

export const navigation = [
  { href: "/osteopathie", label: "Osteopathie" },
  { href: "/behandlungsschwerpunkte", label: "Behandlungsschwerpunkte" },
  { href: "/praxis", label: "Praxis" },
  { href: "/anfahrt", label: "Anfahrt" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNavigation = [
  { href: "/krankenkassen", label: "Krankenkassen" },
  { href: "/hygienekonzept", label: "Hygienekonzept" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
] as const;
