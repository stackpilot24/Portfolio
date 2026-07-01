import { profile } from "@/data/profile.config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
      <Reveal className="md:col-span-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">{profile.bio}</p>
          {profile.lookingFor && (
            <p className="mt-5 flex items-start gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 text-sm">
              <span>💼</span>
              <span className="text-[var(--foreground)]">{profile.lookingFor}</span>
            </p>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-2">
        <div className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Currently</p>
            <p className="mt-2 text-sm">
              Final-year CS student, building & shipping full-stack + AI products.
            </p>
          </div>
          {profile.location && (
            <div className="border-t border-[var(--border)] pt-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Based in</p>
              <p className="mt-1 text-sm">📍 {profile.location}</p>
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
