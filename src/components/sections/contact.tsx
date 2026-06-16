import { useState, type FormEvent } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/portfolio-data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // Stub submit handler — wire up to an API route or form provider later.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance">
              Let's build the{" "}
              <span className="text-muted-foreground">next vision.</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Open for collaboration, internships, and junior roles. Reach out
              and I'll get back within a day.
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href={personal.socials.github} label="GitHub">
                <Github className="size-4" />
              </SocialIcon>
              <SocialIcon href={personal.socials.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialIcon>
              <SocialIcon href={personal.socials.email} label="Email">
                <Mail className="size-4" />
              </SocialIcon>
              <SocialIcon href={personal.socials.instagram} label="Instagram">
                <Instagram className="size-4" />
              </SocialIcon>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card p-8 rounded-2xl border border-border space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field name="name" type="text" placeholder="Full Name" required />
              <Field
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Project Details"
              rows={5}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-foreground text-background font-bold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors tracking-wide"
            >
              {status === "sent" ? "MESSAGE SENT ✓" : "SUBMIT INQUIRY"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
    />
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="size-10 grid place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
    >
      {children}
    </a>
  );
}
