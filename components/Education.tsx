import { profile } from "@/data/profile.config";
import Reveal from "./Reveal";

export default function Education() {
  const { education } = profile;
  if (!education) return null;

  const years = [education.startYear, education.graduationYear].filter(Boolean).join(" — ");

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      <Reveal className="md:col-span-3">
        <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] text-2xl">
              🎓
            </span>
            <div>
              <h3 className="text-lg font-semibold">{education.school}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{education.degree}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                {years && (
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1">
                    📅 {years}
                  </span>
                )}
                {education.detail && (
                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1">
                    📍 {education.detail}
                  </span>
                )}
              </div>
            </div>
          </div>

          {education.focus && (
            <p className="mt-5 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
              <span className="font-medium text-[var(--foreground)]">Focus: </span>
              {education.focus}
            </p>
          )}
        </div>
      </Reveal>

      {education.highlights?.length > 0 && (
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Highlights</p>
            <ul className="mt-4 flex flex-col gap-3">
              {education.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="mt-0.5" style={{ color: "var(--accent)" }}>
                    ▹
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}
    </div>
  );
}
