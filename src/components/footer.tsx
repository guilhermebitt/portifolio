import { personal } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
        <p>© {year} {personal.name} — Built with React + TS</p>
        <p>Based in — {personal.location}</p>
      </div>
    </footer>
  );
}
