import { profile } from "@/data/profile.config";
import { getRepos } from "@/lib/github";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StatsBar from "@/components/StatsBar";
import ProjectsGrid from "@/components/ProjectsGrid";

export default async function Home() {
  const { repos, error } = await getRepos();

  return (
    <>
      <Hero />

      <Section id="projects" title="Projects" subtitle="Synced live from GitHub.">
        <div className="flex flex-col gap-10">
          <StatsBar repos={repos} />
          <ProjectsGrid repos={repos} error={error} />
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="mx-auto max-w-2xl text-center text-[var(--muted)]">
          <p>{profile.bio}</p>
          {profile.location && <p className="mt-3 text-sm">📍 {profile.location}</p>}
        </div>
      </Section>
    </>
  );
}
