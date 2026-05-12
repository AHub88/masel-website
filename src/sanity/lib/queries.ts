import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    name,
    tagline,
    metaDescription,
    phone,
    phoneDisplay,
    email,
    address,
    openingHours[]{day, from, to},
    openingHoursNote,
    lemniscusToken,
    lemniscusFloatingSide,
    lemniscusDebug
  }
`);

export const personenQuery = defineQuery(`
  *[_type == "person"] | order(order asc, lastName asc){
    "slug": slug.current,
    firstName,
    lastName,
    title,
    qualifications,
    bio,
    photo{..., "alt": alt}
  }
`);

export const schwerpunkteQuery = defineQuery(`
  *[_type == "schwerpunkt"] | order(order asc, title asc){
    "slug": slug.current,
    title,
    summary,
    icon,
    body
  }
`);

export const noticeQuery = defineQuery(`
  *[_type == "notice"][0]{
    active,
    title,
    text,
    validUntil
  }
`);
