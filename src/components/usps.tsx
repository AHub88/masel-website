import { Container } from "./container";

const usps = [
  {
    title: "Persönlich & individuell",
    text: "Eine Behandlung — eine Person. Wir nehmen uns Zeit für Sie, ohne Stoppuhr im Hinterkopf.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ganzheitliche Sicht",
    text: "Wir suchen die Ursache, nicht nur das Symptom — vom Säugling bis zum Senior.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Erfahren seit 2008",
    text: "Zwei Osteopath:innen mit langer Praxis-Erfahrung und kontinuierlicher Weiterbildung.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function UspSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          {usps.map((u) => (
            <div key={u.title} className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-light text-primary-dark">
                {u.icon}
              </div>
              <h3 className="font-serif text-xl">{u.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{u.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
