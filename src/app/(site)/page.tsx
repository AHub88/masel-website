import { NoticeBanner } from "@/components/notice-banner";
import { Hero } from "@/components/hero";
import { UspSection } from "@/components/usps";
import { SchwerpunkteGrid } from "@/components/schwerpunkte-grid";
import { PersonenTeaser } from "@/components/personen";
import { InfoSection } from "@/components/info-section";
import { CtaSection } from "@/components/cta-section";
import { getPersonen, getPraxis, getSchwerpunkte } from "@/lib/data";
import type { Praxis } from "@/lib/types";

export default async function HomePage() {
  const [praxis, personen, schwerpunkte] = await Promise.all([
    getPraxis(),
    getPersonen(),
    getSchwerpunkte(),
  ]);

  return (
    <>
      <NoticeBanner />
      <Hero praxis={praxis} />
      <UspSection />
      <SchwerpunkteGrid schwerpunkte={schwerpunkte} />
      <PersonenTeaser personen={personen} />
      <InfoSection praxis={praxis} />
      <CtaSection />
      <LocalBusinessSchema praxis={praxis} />
    </>
  );
}

function LocalBusinessSchema({ praxis }: { praxis: Praxis }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: praxis.name,
    description: praxis.metaDescription,
    url: "https://masel.info",
    telephone: praxis.phone,
    email: praxis.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: praxis.address.street,
      postalCode: praxis.address.zip,
      addressLocality: praxis.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: praxis.address.lat,
      longitude: praxis.address.lng,
    },
    openingHoursSpecification: praxis.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${weekdayMap[h.day]}`,
      opens: h.from,
      closes: h.to,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const weekdayMap: Record<string, string> = {
  Mo: "Monday",
  Di: "Tuesday",
  Mi: "Wednesday",
  Do: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  So: "Sunday",
};
