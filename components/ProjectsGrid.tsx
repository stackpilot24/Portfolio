"use client";

import { useMemo, useState } from "react";
import type { Repo } from "@/lib/github";
import { profile } from "@/data/profile.config";
import RepoCard from "./RepoCard";
import Reveal from "./Reveal";

const INITIAL_COUNT = 6;

export default function ProjectsGrid({ repos, error }: { repos: Repo[]; error: string | null }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return Array.from(set).sort();
  }, [repos]);

  const filtered = filter ? repos.filter((r) => r.language === filter) : repos;
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hiddenCount = filtered.length - visible.length;

  if (error) {
    return (
      <Reveal>
        <div className="mx-auto max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
          <div className="mb-3 text-3xl">⚠️</div>
          <p className="text-sm text-[var(--foreground)]">Couldn&apos;t load projects</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{error}</p>
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              Browse repos on GitHub ↗
            </a>
          )}
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
    <div className="flex flex-col gap-8">
      {languages.length > 1 && (
        <Reveal>
          <div className="flex flex-wrap justify-start gap-2">
            <button
              onClick={() => {
                setFilter(null);
                setExpanded(false);
              }}
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
                onClick={() => {
                  setFilter(lang);
                  setExpanded(false);
                }}
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

      <div className="flex flex-col items-start gap-3">
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(true)}
            className="rounded-full border border-[var(--accent)] px-5 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--accent)] hover:text-white"
          >
            Show {hiddenCount} more {hiddenCount === 1 ? "project" : "projects"}
          </button>
        )}
        {expanded && filtered.length > INITIAL_COUNT && (
          <button
            onClick={() => setExpanded(false)}
            className="text-xs text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            Show less
          </button>
        )}
        {profile.links.github && (
          <a
            href={`${profile.links.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[var(--muted)] transition hover:text-[var(--accent)]"
          >
            See everything on GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
}
