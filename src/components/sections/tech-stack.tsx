import { SectionTitle } from "@/components/section-title";
import { useReveal } from "@/hooks/use-reveal";
import { technologies } from "@/lib/portfolio-data";

export function TechStack() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="stack" className="py-20 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="Core Stack" />
        <div
          ref={ref}
          className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 transition-all group"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {tech.category}
              </div>
              <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
