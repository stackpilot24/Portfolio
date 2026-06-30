"use client";

import { useMemo, useState } from "react";
import type { Repo } from "@/lib/github";
import RepoCard from "./RepoCard";
import Reveal from "./Reveal";

export default function ProjectsGrid({ repos, error }: { repos: Repo[]; error: string | null }) {
  const [filter, setFilter] = useState<string | null>(null);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return Array.from(set).sort();
  }, [repos]);

  const visible = filter ? repos.filter((r) => r.language === filter) : repos;

  if (error) {
    return (
      <Reveal>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center text-sm text-[var(--muted)]">
          {error}
        </div>
      </Reveal>
    );
  }

  if (repos.length === 0) {
    return (
      <Reveal>
        <p className="text-center text-sm text-[var(--muted)]">No public repos to show yet.</p>
      </Reveal>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {languages.length > 1 && (
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                filter === null
                  ? "border-[var(--accent)] text-[var(--foreground)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]"
              }`}
            >
              All
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setFilter(lang)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  filter === lang
                    ? "border-[var(--accent)] text-[var(--foreground)]"
                    : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((repo, i) => (
          <RepoCard key={repo.id} repo={repo} delay={Math.min(i, 6) * 0.05} />
        ))}
      </div>
    </div>
  );
}
