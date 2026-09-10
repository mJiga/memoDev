import { FC } from "react";
import { FaGithub } from "react-icons/fa";

import { profile } from "../data/resume";

import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Magnetic } from "../components/ui/Magnetic";
import JarvShowcase from "../components/ui/JarvShowcase";
import ProjectCard from "../components/ui/ProjectCard";

const Projects: FC = () => (
  <section id="projects" className="relative w-full bg-paper">
    <div className="section-container">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        accent={["built"]}
      />

      <Reveal delay={0.12} className="mt-14">
        <JarvShowcase />
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <ProjectCard
          title="HIBRED"
          meta="Hunt Institute"
          description="Border economic indicator platform serving 1,000+ policymakers, with an AI assistant on a self-hosted Ollama model for natural-language access to live chart data."
          href="https://www.utep.edu/hunt-institute/"
          tech={["React", ".NET 8", "PostgreSQL"]}
          delay={0.05}
        />

        <ProjectCard
          title="Trada"
          meta="Personal project"
          description="Trading hub and social platform where users create and share stock predictions with AI assistance in real time."
          href="https://github.com/mJiga/trada_webApp"
          tech={["React", "Firebase", "TypeScript"]}
          delay={0.12}
        />
      </div>

      <Reveal delay={0.18} className="mt-10 flex justify-center">
        <Magnetic strength={10}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline group"
          >
            <FaGithub className="text-base transition-transform duration-500 group-hover:rotate-[14deg]" />
            More on GitHub
          </a>
        </Magnetic>
      </Reveal>
    </div>
  </section>
);

export default Projects;
