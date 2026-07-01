import { getRepos } from "@/lib/github";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StatsBar from "@/components/StatsBar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default async function Home() {
  const { repos, error } = await getRepos();

  return (
    <>
      <Hero />

      <Section id="about" title="About Me" index="01">
        <About />
      </Section>

      <Section id="education" title="Education" index="02">
        <Education />
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="A selection of what I've built — live-synced from GitHub. Deployed ones have an “Open live demo” link."
        index="03"
      >
        <div className="flex flex-col gap-10">
          <StatsBar repos={repos} />
          <ProjectsGrid repos={repos} error={error} />
        </div>
      </Section>

      <Section id="skills" title="Skills & Tools" subtitle="The stack I actually build with." index="04">
        <Skills />
      </Section>

      <Section id="contact" title="Contact" subtitle="Let's talk." index="05">
        <Contact />
      </Section>
    </>
  );
}
