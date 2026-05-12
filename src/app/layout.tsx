import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { getPraxis } from "@/lib/data";
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
  return {
    metadataBase: new URL("https://masel.info"),
    title: {
      default: `${praxis.name} — Osteopathie in ${praxis.address.city}`,
      template: `%s · ${praxis.name}`,
    },
    description: praxis.metaDescription,
    openGraph: {
      type: "website",
      locale: "de_DE",
      siteName: praxis.name,
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
