import portrait from "@/assets/portrait.jpg";
import { personal } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="flex flex-col gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <p className="font-mono text-primary text-sm uppercase tracking-widest font-semibold">
              {personal.name} / {personal.role}
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-balance">
            Building software,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              learning endlessly.
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            {personal.shortBio}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-border-strong text-foreground font-semibold hover:bg-surface transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
          <div className="relative w-full aspect-square bg-surface rounded-2xl outline-1 -outline-offset-1 outline-foreground/10 overflow-hidden">
            <img
              src={portrait}
              alt={`${personal.name} portrait`}
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
