import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { personal } from "@/lib/portfolio-data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono font-bold text-lg tracking-tighter text-foreground"
        >
          {personal.name.split(" ")[0].toUpperCase()}
          <span className="text-primary">_</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personal.resumeUrl}
            className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-bold tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            RESUME
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden size-9 grid place-items-center rounded-full border border-border text-muted-foreground"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
