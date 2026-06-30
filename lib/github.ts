import { profile } from "@/data/profile.config";
import { reposConfig } from "@/data/repos.config";

export type Repo = {
  id: number;
  name: string;
  displayName: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  icon: string | null;
  featured: boolean;
  isFork: boolean;
};

type GitHubApiRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
};

// Roughly matches GitHub's own per-language colors for the little dot badge.
export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
};

async function fetchGitHubRepos(username: string): Promise<GitHubApiRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
    {
      headers,
      // Revalidate hourly so new/updated repos show up without a redeploy.
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error (${res.status}) for user "${username}"`);
  }

  return res.json();
}

export async function getRepos(): Promise<{ repos: Repo[]; error: string | null }> {
  const username = profile.githubUsername;

  if (!username || username === "your-github-username") {
    return {
      repos: [],
      error:
        'Set "githubUsername" in data/profile.config.ts to your GitHub username to sync your repos.',
    };
  }

  let raw: GitHubApiRepo[];
  try {
    raw = await fetchGitHubRepos(username);
  } catch {
    return { repos: [], error: "Couldn't reach GitHub right now. Try again shortly." };
  }

  const { pinned, hidden, excludeForks, sortBy, limit, overrides } = reposConfig;

  let repos: Repo[] = raw
    .filter((r) => !r.archived && !r.private)
    .filter((r) => !excludeForks || !r.fork)
    .filter((r) => !hidden.includes(r.name))
    .map((r) => {
      const override = overrides[r.name] ?? {};
      return {
        id: r.id,
        name: r.name,
        displayName: override.displayName ?? r.name,
        description: override.description ?? r.description ?? "No description yet.",
        url: r.html_url,
        homepage: r.homepage || null,
        language: r.language,
        stars: r.stargazers_count,
        forks: r.forks_count,
        updatedAt: r.updated_at,
        icon: override.icon ?? null,
        featured: override.featured ?? false,
        isFork: r.fork,
      };
    });

  repos.sort((a, b) => {
    if (sortBy === "stars") return b.stars - a.stars;
    if (sortBy === "name") return a.displayName.localeCompare(b.displayName);
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  // Pull pinned repos to the front, in the exact order given.
  if (pinned.length) {
    const byName = new Map(repos.map((r) => [r.name, r]));
    const pinnedRepos = pinned
      .map((name) => byName.get(name))
      .filter((r): r is Repo => Boolean(r));
    const rest = repos.filter((r) => !pinned.includes(r.name));
    repos = [...pinnedRepos, ...rest];
  }

  return { repos: repos.slice(0, limit), error: null };
}
