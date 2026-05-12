import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Naturheilpraxis Masel — Startseite" className={className}>
      <span className="font-serif text-2xl tracking-tight text-foreground sm:text-[1.6rem]">
        <span className="text-primary">Masel</span>
        <span className="ml-1 text-muted text-base">· Osteopathie</span>
      </span>
    </Link>
  );
}
