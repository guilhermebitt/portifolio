import { SectionTitle } from "@/components/section-title";
import { useReveal } from "@/hooks/use-reveal";
import { personal } from "@/lib/portfolio-data";

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="About" />
        <div ref={ref} className="reveal grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>{personal.longBio}</p>
            <p>
              My goal is to grow as a product-minded engineer — shipping
              things that are reliable, fast, and genuinely useful for the
              people who use them.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <InfoBlock label="Education" value="B.Sc. in Information Systems — In Progress" />
            <InfoBlock label="Currently" value="Software Developer & IT Student" />
            <InfoBlock label="Based in" value={personal.location} />
            <InfoBlock label="Goal" value="Junior Software Engineer" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-border pl-4">
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-foreground font-medium">{value}</p>
    </div>
  );
}
