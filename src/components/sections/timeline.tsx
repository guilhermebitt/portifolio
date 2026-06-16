import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { useReveal } from "@/hooks/use-reveal";
import { timeline, type TimelineItem } from "@/lib/portfolio-data";

const ICONS: Record<TimelineItem["kind"], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
  course: Sparkles,
};

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 bg-surface/40">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Chronology"
          title="A short timeline"
          description="Education, experience, and the certifications shaping where I'm headed."
        />
        <div className="relative max-w-3xl">
          <div
            aria-hidden
            className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-border"
          />
          <ul className="space-y-10">
            {timeline.map((item) => (
              <TimelineRow key={item.period + item.title} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ item }: { item: TimelineItem }) {
  const Icon = ICONS[item.kind];
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal relative pl-14 md:pl-16">
      <span className="absolute left-0 top-1 size-9 md:size-10 grid place-items-center rounded-full border border-border bg-card text-primary">
        <Icon className="size-4" />
      </span>
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        {item.period}
      </p>
      <h3 className="mt-1 text-lg font-bold text-foreground">{item.title}</h3>
      <p className="text-sm text-primary font-medium">{item.organization}</p>
      <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
    </li>
  );
}
