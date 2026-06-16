import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

/** Accessible dark/light theme toggle. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="size-9 grid place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
