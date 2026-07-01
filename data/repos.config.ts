// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to control which GitHub repos show up, their order, and
// how they're presented. The site still pulls live data (stars, language,
// description, last-updated) from GitHub — this file only overrides display.
// ─────────────────────────────────────────────────────────────────────────

export const reposConfig = {
  // Repos listed here always appear first, in this exact order.
  // Use the exact repo name as it appears on GitHub (case-sensitive).
  pinned: [
    "College-Scope",
    "CramCraft",
    "Finance-dashboard",
    "Student-Life-Ai-Dashboard-",
  ] as string[],

  // Repos listed here are completely hidden from the site.
  hidden: ["Portfolio"] as string[],

  // Hide forked repos automatically (recommended).
  excludeForks: true,

  // How to sort everything that isn't pinned: "updated" | "stars" | "name"
  sortBy: "updated" as "updated" | "stars" | "name",

  // Cap on how many repos to show in total (pinned repos count toward this).
  limit: 24,

  // Per-repo overrides, keyed by exact repo name. Every field is optional —
  // anything you don't set falls back to what GitHub returns.
  overrides: {
    "College-Scope": {
      displayName: "College Scope",
      icon: "🎓",
      featured: true,
    },
    CramCraft: {
      displayName: "CramCraft",
      icon: "🧠",
      featured: true,
    },
    "Finance-dashboard": {
      displayName: "Finance Dashboard",
      icon: "📊",
      featured: true,
    },
    "Student-Life-Ai-Dashboard-": {
      displayName: "Student Life AI",
      icon: "🤖",
      featured: true,
    },
    "Neural-Evolution-snake-AI": { displayName: "Neuro-Evolution Snake AI", icon: "🐍" },
    "smart-clock": { displayName: "Smart Clock Dashboard", icon: "⏰" },
    "snake-ladder": { displayName: "Snake & Ladder", icon: "🎲" },
    "Rock-Paper-Scissors": { displayName: "Rock Paper Scissors AI", icon: "✊" },
    "simple-calculator": { displayName: "Calculator", icon: "🧮" },
    "Real-Estate-Price-Prediction": { displayName: "Real-Estate Price ML", icon: "🏠" },
    "NEP-BASED-AI-SMART-TIMETABLE-GENERATOR": { displayName: "NEP Timetable AI", icon: "🗓️" },
    "Phishing-Websites-Detection-Using-Machine-learning-": {
      displayName: "Phishing Detection ML",
      icon: "🛡️",
      description:
        "Detects phishing websites from URL and page features using machine-learning classifiers.",
    },
  } as Record<
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
