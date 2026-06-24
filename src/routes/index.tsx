import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Timeline } from "@/components/sections/timeline";
import { GitHubSection } from "@/components/sections/github-section";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { personal } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${personal.name} — ${personal.role}` },
      {
        name: "description",
        content: personal.shortBio,
      },
      { property: "og:title", content: `${personal.name} — ${personal.role}` },
      { property: "og:description", content: personal.shortBio },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: personal.name,
          jobTitle: personal.role,
          email: personal.email,
          address: personal.location,
          url: "/",
          sameAs: [
            personal.socials.github,
            personal.socials.linkedin,
            personal.socials.instagram,
          ],
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Timeline />
        <GitHubSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
