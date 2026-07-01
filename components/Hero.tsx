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
      className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pb-20 pt-16 text-center sm:pt-24"
    >
      <div className="hero-glow" aria-hidden />

      <Reveal>
        <FlipAvatar front={profile.avatar.front} back={profile.avatar.back} name={profile.name} />
      </Reveal>

      <Reveal delay={0.1}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--muted)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </span>
      </Reveal>

      <Reveal delay={0.15}>
        <h1 className="gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg text-[var(--muted)]">
          {profile.title}
        </p>
        {profile.roles?.length > 0 && (
          <p className="mt-1 text-lg text-[var(--muted)]">
            <RotatingRole roles={profile.roles} />
          </p>
        )}
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mx-auto max-w-xl text-balance text-[var(--muted)]">{profile.tagline}</p>
      </Reveal>

      {education && (
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
              🎓 {education.degree}
            </span>
            <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[var(--muted)]">
              🏛️ {education.school} · Class of {education.graduationYear}
            </span>
          </div>
        </Reveal>
      )}

      <Reveal delay={0.35}>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
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

      <Reveal delay={0.4}>
        <SocialLinks />
      </Reveal>
    </section>
  );
}
