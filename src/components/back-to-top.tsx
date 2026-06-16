import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 size-12 rounded-full bg-card border border-border text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all animate-fade-in grid place-items-center shadow-lg z-40"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
