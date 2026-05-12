import { Container } from "./container";
import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className="py-14 sm:py-20">
      <div
        className={cn(
          "mx-auto max-w-3xl space-y-5 text-foreground/80",
          "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-foreground",
          "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-foreground",
          "[&_p]:leading-relaxed",
          "[&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary-dark",
          "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5",
          "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5",
          className,
        )}
      >
        {children}
      </div>
    </Container>
  );
}
