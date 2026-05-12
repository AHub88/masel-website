import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { getPraxis } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const praxis = await getPraxis();
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${praxis.name} — Osteopathie in ${praxis.address.city}`,
      template: `%s · ${praxis.name}`,
    },
    description: praxis.metaDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: praxis.name,
      url: siteUrl,
      title: `${praxis.name} — Osteopathie in ${praxis.address.city}`,
      description: praxis.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${praxis.name} — Osteopathie in ${praxis.address.city}`,
      description: praxis.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
