import { profile } from "@/data/profile.config";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const firstName = profile.name.split(" ")[0];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          {firstName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] sm:inline">
            Projects
          </a>
          <a href="#skills" className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] sm:inline">
            Skills
          </a>
          <a href="#about" className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] sm:inline">
            About
          </a>
          <a href="#contact" className="hidden text-sm text-[var(--muted)] transition hover:text-[var(--foreground)] sm:inline">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
