import { ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { useReveal } from "@/hooks/use-reveal";
import { projects, type Project } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 gap-4">
          <SectionTitle eyebrow="Recent Work" />
          <a
            href="https://github.com/guilhermebitt?tab=repositories"
            className="text-xs sm:text-sm font-mono text-primary hover:underline whitespace-nowrap pb-1"
          >
            VIEW_ALL_REPOS →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article ref={ref} className="reveal group">
      <div className="w-full aspect-[16/10] bg-surface rounded-2xl outline-1 -outline-offset-1 outline-foreground/5 mb-6 overflow-hidden group-hover:outline-primary/30 transition-all">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          width={1280}
          height={800}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      <div className="flex gap-2 mb-3 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-mono uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.name}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="size-4" /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink className="size-4" /> Demo
          </a>
        )}
      </div>
    </article>
  );
}
