import { FC } from "react";
import { FaGithub } from "react-icons/fa";

import trada from "../assets/trada.jpg";
import asegurados from "../assets/asegurados.jpg";
import hunt from "../assets/hunt.jpg";

import { profile } from "../data/resume";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Magnetic } from "../components/ui/Magnetic";
import JarvShowcase from "../components/ui/JarvShowcase";
import ProjectCard from "../components/ui/ProjectCard";

/** Opens a URL without triggering the parent card's own link. */
const InlineLink = ({ href, children }: { href: string; children: string }) => (
  <span
    role="link"
    tabIndex={0}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(href, "_blank", "noopener,noreferrer");
    }}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }}
    className="cursor-pointer text-sage-dark underline underline-offset-2 transition-colors hover:text-sage-deep"
  >
    {children}
  </span>
);

const Projects: FC = () => (
  <section id="projects" className="relative w-full bg-paper">
    <div className="section-container">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        accent={["built"]}
      >
        Side projects and platform work — the places I get to pick the
        architecture myself.
      </SectionHeading>

      <Reveal delay={0.15} className="mt-14">
        <JarvShowcase />
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <ProjectCard
          title="HIBRED"
          meta="Hunt Institute · Team lead"
          description="Border economic indicator platform serving 1,000+ policymakers across 10+ modules, with an AI chat assistant running on a self-hosted 7B Ollama model for natural-language access to live chart data."
          image={hunt}
          href="https://www.utep.edu/hunt-institute/"
          tech={["React", "TypeScript", ".NET 8", "PostgreSQL", "Ollama"]}
          delay={0.05}
        />

        <ProjectCard
          title="Asegurados Data Pipeline"
          meta="Hunt Institute · Research"
          description={
            <>
              Python/pandas ETL pipeline automating wage data collection — 95%
              less processing time, 30% fewer inconsistencies. Published in the{" "}
              <InlineLink href="https://www.utep.edu/hunt-institute/newsletter/">
                Newsletter
              </InlineLink>{" "}
              and{" "}
              <InlineLink href="https://www.utep.edu/hunt-institute/researchpapers/white-papers-doc/files/employmentshiftsincdj-hi-2025.pdf">
                White Paper
              </InlineLink>
              .
            </>
          }
          image={asegurados}
          href="https://www.utep.edu/hunt-institute/"
          tech={["Python", "pandas", "FastAPI", "Docker", "Redis"]}
          delay={0.12}
        />

        <ProjectCard
          title="Fitness Tracker on Cloud Run"
          meta="Google Tech Exchange"
          description="Streamlit UI over BigQuery, shipped to Google Cloud Run with Docker and GitHub Actions CI/CD. Partitioning and clustering cut query time 40%; Gemini API powers personalized recommendations."
          href="https://buildyourfuture.withgoogle.com/programs/tech-exchange"
          tech={["Python", "BigQuery", "Cloud Run", "Docker", "Gemini API"]}
          delay={0.19}
        />

        <ProjectCard
          title="Trada"
          meta="Personal project"
          description="Trading hub and social platform where users create and share stock predictions with AI assistance in real time."
          image={trada}
          href="https://github.com/mJiga/trada_webApp"
          tech={["React", "Firebase", "TypeScript", "Tailwind"]}
          delay={0.26}
        />
      </div>

      <Reveal delay={0.2} className="mt-12 flex justify-center">
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
