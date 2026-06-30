import { profile } from "@/data/profile.config";

const ICONS: Record<string, string> = {
  github: "🐙",
  linkedin: "💼",
  twitter: "🐦",
  email: "✉️",
  website: "🌐",
  resume: "📄",
};

export default function SocialLinks() {
  const { links } = profile;
  const entries = Object.entries(links).filter(([, value]) => Boolean(value));

  if (entries.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {entries.map(([key, value]) => {
        const href = key === "email" ? `mailto:${value}` : value;
        return (
          <a
            key={key}
            href={href}
            target={key === "email" ? undefined : "_blank"}
            rel={key === "email" ? undefined : "noopener noreferrer"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-base transition hover:scale-105 hover:border-[var(--accent)]"
            aria-label={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
          >
            {ICONS[key] ?? "🔗"}
          </a>
        );
      })}
    </div>
  );
}
