import type { Notice, Person, Praxis, Schwerpunkt } from "./types";

export const mockPraxis: Praxis = {
  name: "Naturheilpraxis Masel",
  shortName: "Praxis Masel",
  tagline: "Osteopathie & Naturheilkunde in Bad Aibling",
  metaDescription:
    "Naturheilpraxis Masel — ganzheitliche Osteopathie in Bad Aibling. Erfahrene Heilpraktiker für Erwachsene, Kinder und Säuglinge. Termin online buchen.",
  address: {
    street: "Bahnhofstr. 8",
    zip: "83043",
    city: "Bad Aibling",
    country: "Deutschland",
    lat: 47.864,
    lng: 12.011,
  },
  phone: "+4980619377020",
  phoneDisplay: "08061 9377020",
  email: "praxis@masel.info",
  openingHours: [
    { day: "Mo", from: "08:30", to: "18:00" },
    { day: "Di", from: "08:30", to: "18:00" },
    { day: "Mi", from: "08:30", to: "18:00" },
    { day: "Do", from: "08:30", to: "18:00" },
    { day: "Fr", from: "08:30", to: "18:00" },
  ],
  openingHoursNote: "Behandlung ausschließlich nach Terminvereinbarung.",
};

export const mockPersonen: Person[] = [
  {
    slug: "barbara-masel",
    firstName: "Barbara",
    lastName: "Masel",
    title: "Heilpraktikerin · Osteopathin D.O.",
    qualifications: [
      "Heilpraktikerin",
      "5-jährige Osteopathie-Ausbildung (D.O.)",
      "Schwerpunkt Säuglinge & Kinder",
    ],
    bio: "Barbara begleitet seit über 15 Jahren Patientinnen und Patienten jeden Alters. Ihr besonderes Augenmerk liegt auf der einfühlsamen Behandlung von Säuglingen und Kindern sowie auf Beschwerden rund um Schwangerschaft und Geburt.",
    photoUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop&crop=faces",
    photoAlt: "Portrait-Platzhalter Barbara Masel",
  },
  {
    slug: "martin-masel",
    firstName: "Martin",
    lastName: "Masel",
    title: "Heilpraktiker · Osteopath D.O.",
    qualifications: [
      "Heilpraktiker",
      "5-jährige Osteopathie-Ausbildung (D.O.)",
      "Physiotherapeut",
      "Schwerpunkt Bewegungsapparat & Sport",
    ],
    bio: "Martin verbindet seine langjährige Erfahrung als Physiotherapeut mit der ganzheitlichen Sichtweise der Osteopathie. Er begleitet sportlich aktive Menschen ebenso wie Patientinnen und Patienten mit chronischen Beschwerden des Bewegungsapparats.",
    photoUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop&crop=faces",
    photoAlt: "Portrait-Platzhalter Martin Masel",
  },
];

export const mockSchwerpunkte: Schwerpunkt[] = [
  {
    slug: "saeuglinge-kinder",
    title: "Säuglinge & Kinder",
    summary:
      "Sanfte Begleitung bei Schreikindern, KISS-Syndrom, Asymmetrien und Entwicklungsthemen — von den ersten Lebenswochen an.",
    icon: "baby",
  },
  {
    slug: "schwangerschaft",
    title: "Schwangerschaft & Rückbildung",
    summary:
      "Unterstützung in allen Phasen der Schwangerschaft sowie behutsame Behandlung in der Rückbildungszeit.",
    icon: "pregnant",
  },
  {
    slug: "bewegungsapparat",
    title: "Rücken & Bewegungsapparat",
    summary:
      "Bandscheiben­beschwerden, Nacken- und Schulterverspannungen, Gelenkprobleme und Sportverletzungen.",
    icon: "spine",
  },
  {
    slug: "kiefer-zaehne",
    title: "Kiefer & Zähne (CMD)",
    summary:
      "Kraniomandibuläre Dysfunktion, Knirschen, Kiefergelenks­beschwerden — in Abstimmung mit Zahnmedizin und Kieferorthopädie.",
    icon: "jaw",
  },
  {
    slug: "kopfschmerzen-migraene",
    title: "Kopfschmerzen & Migräne",
    summary:
      "Chronische Spannungskopfschmerzen, Migräne und Schwindel — ganzheitlich betrachtet.",
    icon: "head",
  },
  {
    slug: "innere-organe",
    title: "Viszerale Osteopathie",
    summary:
      "Funktionelle Beschwerden der inneren Organe, Verdauungsprobleme, Narbenbehandlung nach Operationen.",
    icon: "organ",
  },
];

export const mockKrankenkassen: string[] = [
  "AOK Bayern",
  "Barmer",
  "Techniker Krankenkasse",
  "DAK-Gesundheit",
  "IKK classic",
  "Knappschaft",
  "BKK Mobil Oil",
  "HEK",
  "hkk",
  "Mehrere weitere — eine aktuelle Liste senden wir Ihnen auf Anfrage gerne zu.",
];

export const mockNotice: Notice = {
  active: true,
  title: "Urlaubshinweis",
  text: "Die Praxis ist vom 05. bis 19. August geschlossen. In dringenden Fällen wenden Sie sich bitte an die kollegiale Vertretung.",
  validUntil: "2026-08-19",
};
