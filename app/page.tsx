import { getRepos } from "@/lib/github";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StatsBar from "@/components/StatsBar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default async function Home() {
  const { repos, error } = await getRepos();

  return (
    <>
      <Hero />

      <div className="mx-auto -mt-6 max-w-3xl px-6">
        <StatsBar repos={repos} />
      </div>

      <Section id="projects" title="Featured Projects" subtitle="A selection of things I've built — synced live from GitHub.">
        <ProjectsGrid repos={repos} error={error} />
      </Section>

      <Section id="skills" title="Skills & Tools" subtitle="The stack I reach for.">
        <Skills />
      </Section>

      <Section id="about" title="About Me">
        <About />
      </Section>
    </>
  );
}
