import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary-light/60 via-background to-accent-light/30 py-14 sm:py-20">
      <Container>
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-dark">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">{intro}</p>
        )}
      </Container>
    </section>
  );
}
