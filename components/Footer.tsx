import { profile } from "@/data/profile.config";

export default function Footer() {
  const firstName = profile.name.split(" ")[0];

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-xs text-[var(--muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>
          Built by {firstName} with Next.js & Tailwind ·{" "}
          <a href="#top" className="transition hover:text-[var(--accent)]">
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
