"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  // Read the real theme only after mount so server and client markup match.
  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-sm transition hover:scale-105 hover:border-[var(--accent)]"
    >
      {/* Empty until mounted to avoid a hydration mismatch, then shows the icon. */}
      <span suppressHydrationWarning>{theme === null ? "" : theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
