import { useReveal } from "@/hooks/use-reveal";

/** Small heading used at the top of each section. */
export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mb-12">
      <h2 className="text-sm font-mono text-primary flex items-center gap-4 tracking-widest uppercase">
        <span className="h-px w-12 bg-primary" /> {eyebrow}
      </h2>
      {title && (
        <p className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </p>
      )}
      {description && (
        <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
