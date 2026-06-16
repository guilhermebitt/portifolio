import { Github } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { useReveal } from "@/hooks/use-reveal";
import { getGitHubStats } from "@/lib/data/githubData";
import { personal } from "@/lib/portfolio-data";
import type { GitHubStats } from "@/lib/types/githubTypes";

/**
 * GitHub overview — currently uses simulated data from portfolio-data.ts.
 * Replace the hardcoded `githubStats` with a fetch to the GitHub REST API
 * (e.g. https://api.github.com/users/{username}) and feed it into the same
 * shape to go live.
 */
export function GitHubSection() {
  const ref = useReveal<HTMLDivElement>();
  const [githubStats, setGitHubStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const username = new URL(personal.socials.github).pathname.replace(
      /^\//,
      ""
    );

    void getGitHubStats(username)
      .then(setGitHubStats)
      .catch((error) => {
        console.error("Failed to load GitHub stats", error);
      });
  }, []);

  return (
    <section id="github" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle eyebrow="GitHub Activity" />
        <div
          ref={ref}
          className="reveal grid md:grid-cols-5 gap-6 items-stretch"
        >
          <div className="md:col-span-2 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between">
            <div>
              <Github className="size-8 text-primary mb-4" />
              <p className="text-lg font-bold">
                @{githubStats?.username ?? "loading..."}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Snapshot of recent open-source activity.
              </p>
            </div>
            <a
              href="https://github.com/guilhermebitt"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono text-primary hover:underline"
            >
              VISIT_PROFILE →
            </a>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <Stat label="Repositories" value={githubStats?.publicRepos ?? 0} />
            <Stat label="Followers" value={githubStats?.followers ?? 0} />
            <Stat label="Stars Earned" value={githubStats?.stars ?? 0} />
            <Stat
              label="Contributions / Yr"
              value={githubStats?.contributionsLastYear ?? 0}
            />
            <div className="col-span-2 rounded-2xl border border-border bg-card p-6">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">
                Top Languages
              </p>
              <div className="space-y-3">
                {(githubStats?.topLanguages ?? []).map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">
                        {lang.name}
                      </span>
                      <span className="text-muted-foreground font-mono">
                        {lang.percent}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-primary to-primary-glow rounded-full"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <p className="text-3xl font-extrabold text-foreground">
        {value.toLocaleString()}
      </p>
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-2">
        {label}
      </p>
    </div>
  );
}
