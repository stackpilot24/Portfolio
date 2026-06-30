// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to control which GitHub repos show up, their order, and
// how they're presented. The site still pulls live data (stars, language,
// description, last-updated) from GitHub — this file only overrides display.
// ─────────────────────────────────────────────────────────────────────────

export const reposConfig = {
  // Repos listed here always appear first, in this exact order.
  // Use the exact repo name as it appears on GitHub (case-sensitive).
  pinned: [] as string[],

  // Repos listed here are completely hidden from the site.
  hidden: [] as string[],

  // Hide forked repos automatically (recommended).
  excludeForks: true,

  // How to sort everything that isn't pinned: "updated" | "stars" | "name"
  sortBy: "updated" as "updated" | "stars" | "name",

  // Cap on how many repos to show in total (pinned repos count toward this).
  limit: 12,

  // Per-repo overrides, keyed by exact repo name. Every field is optional —
  // anything you don't set falls back to what GitHub returns.
  overrides: {} as Record<
    string,
    {
      displayName?: string;
      description?: string;
      icon?: string; // emoji (e.g. "🚀") or a path under /public
      featured?: boolean;
    }
  >,
};

export type ReposConfig = typeof reposConfig;
