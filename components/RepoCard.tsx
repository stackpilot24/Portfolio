import type { Repo } from "@/lib/github";
import { LANGUAGE_COLORS } from "@/lib/github";
import Reveal from "./Reveal";

function timeAgo(dateString: string) {
  const days = Math.floor((Date.now() - new Date(dateString).getTime()) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function RepoCard({ repo, delay = 0 }: { repo: Repo; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl leading-none">{repo.icon ?? "📦"}</span>
            <h3 className="font-semibold leading-tight transition group-hover:text-[var(--accent)]">
              {repo.displayName}
            </h3>
          </div>
          {repo.featured && (
            <span className="rounded-full px-2 py-0.5 text-[10px] font-medium" style={{ background: "var(--accent)", color: "white" }}>
              Featured
            </span>
          )}
        </div>

        <p className="line-clamp-3 flex-1 text-sm text-[var(--muted)]">{repo.description}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: LANGUAGE_COLORS[repo.language] ?? "#888" }}
              />
              {repo.language}
            </span>
          )}
          <span>⭐ {repo.stars}</span>
          <span>🍴 {repo.forks}</span>
          <span className="ml-auto">{timeAgo(repo.updatedAt)}</span>
        </div>
      </a>
    </Reveal>
  );
}
