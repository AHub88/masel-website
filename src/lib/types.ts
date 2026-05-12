export type Weekday = "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa" | "So";

export type OpeningHour = {
  day: Weekday;
  from: string;
  to: string;
};

export type Address = {
  street: string;
  zip: string;
  city: string;
  country?: string;
  lat: number;
  lng: number;
};

export type Praxis = {
  name: string;
  shortName: string;
  tagline: string;
  metaDescription: string;
  address: Address;
  phone: string;
  phoneDisplay: string;
  email: string;
  openingHours: OpeningHour[];
  openingHoursNote: string;
  lemniscusEmbedUrl?: string;
};

export type Person = {
  slug: string;
  firstName: string;
  lastName: string;
  title: string;
  qualifications: string[];
  bio: string;
  photoUrl?: string;
  photoAlt?: string;
};

export type Schwerpunkt = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
};

export type Notice = {
  active: boolean;
  title: string;
  text: string;
  validUntil?: string;
};
