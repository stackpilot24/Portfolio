import { profile } from "@/data/profile.config";
import Reveal from "./Reveal";

export default function Skills() {
  const { skills } = profile;
  if (!skills?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {skills.map((cat, i) => (
        <Reveal key={cat.group} delay={i * 0.06}>
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--accent)]">
            <h3 className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
              {cat.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
