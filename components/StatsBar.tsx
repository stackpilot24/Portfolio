import type { Repo } from "@/lib/github";
import Reveal from "./Reveal";

export default function StatsBar({ repos }: { repos: Repo[] }) {
  if (repos.length === 0) return null;

  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);
  const languageCounts = new Map<string, number>();
  repos.forEach((r) => {
    if (r.language) languageCounts.set(r.language, (languageCounts.get(r.language) ?? 0) + 1);
  });
  const topLanguage = [...languageCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];

  const stats = [
    { label: "Public repos", value: repos.length },
    { label: "Total stars", value: totalStars },
    { label: "Top language", value: topLanguage ?? "—" },
  ];

  return (
    <Reveal>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-left"
          >
            <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
              {s.value}
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">{s.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
