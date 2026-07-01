import { profile } from "@/data/profile.config";
import FlipAvatar from "./FlipAvatar";
import SocialLinks from "./SocialLinks";
import RotatingRole from "./RotatingRole";
import Reveal from "./Reveal";

export default function Hero() {
  const { education } = profile;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="accent-wash pointer-events-none absolute inset-0" aria-hidden />
      <div className="paper-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-16 sm:py-24 md:grid-cols-[1.4fr_1fr]">
        {/* Left: editorial intro */}
        <div className="flex flex-col items-start gap-5 text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600" />
              </span>
              Available for opportunities
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-index text-xs">PORTFOLIO — {new Date().getFullYear()}</p>
            <h1 className="gradient-text mt-2 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-xl font-medium" style={{ color: "var(--accent)" }}>
              {profile.title}
            </p>
            {profile.roles?.length > 0 && (
              <p className="mt-1 text-lg text-[var(--muted)]">
                <RotatingRole roles={profile.roles} />
              </p>
            )}
          </Reveal>

          <Reveal delay={0.26}>
            <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-[var(--muted)]">
              {profile.tagline}
            </p>
          </Reveal>

          {education && (
            <Reveal delay={0.32}>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[var(--muted)]">
                  🎓 {education.degree}
                </span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[var(--muted)]">
                  🏛️ {education.school} · Class of {education.graduationYear}
                </span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.38}>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                style={{ background: "var(--accent)" }}
              >
                View my work
              </a>
              {profile.links.resume && (
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
                >
                  Résumé ↗
                </a>
              )}
              <a
                href="#contact"
                className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition hover:border-[var(--accent)]"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.44}>
            <SocialLinks />
          </Reveal>
        </div>

        {/* Right: portrait */}
        <Reveal delay={0.2} className="mx-auto md:mx-0 md:justify-self-end">
          <FlipAvatar front={profile.avatar.front} back={profile.avatar.back} name={profile.name} />
        </Reveal>
      </div>
    </section>
  );
}
