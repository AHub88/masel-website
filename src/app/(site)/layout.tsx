import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LemniscusScript } from "@/components/lemniscus-script";
import { getPraxis } from "@/lib/data";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const praxis = await getPraxis();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header praxis={praxis} />
      <main className="flex-1">{children}</main>
      <Footer praxis={praxis} />
      <LemniscusScript praxis={praxis} />
    </div>
  );
}
