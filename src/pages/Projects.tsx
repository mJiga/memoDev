import { FC } from "react";
import trada from "../assets/trada.jpg";
import asegurados from "../assets/asegurados.jpg";
import {
  SiReact,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiFastapi,
  SiDocker,
  SiRedis,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import JarvShowcase from "../components/ui/JarvShowcase";
import ProjectCard from "../components/ui/ProjectCard";

/* ── Projects page ── */
const Projects: FC = () => {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Projects</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">Let me show you my work</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        {/* Jarv — featured showcase */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mb-8">
            <JarvShowcase />
          </div>
        </ScrollReveal>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <ProjectCard
            title="Asegurados Data Pipeline"
            description={
              <>
                Automated wage data ETL pipeline for the Hunt Institute.
                Published in the{" "}
                <span
                  role="link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      "https://www.utep.edu/hunt-institute/newsletter/",
                      "_blank",
                    );
                  }}
                  className="text-sage underline underline-offset-2 hover:text-sage-dark cursor-pointer"
                >
                  Newsletter
                </span>{" "}
                &{" "}
                <span
                  role="link"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(
                      "https://www.utep.edu/hunt-institute/researchpapers/white-papers-doc/files/employmentshiftsincdj-hi-2025.pdf",
                      "_blank",
                    );
                  }}
                  className="text-sage underline underline-offset-2 hover:text-sage-dark cursor-pointer"
                >
                  White Paper
                </span>
                .
              </>
            }
            image={asegurados}
            href="https://www.utep.edu/hunt-institute/"
            tech={[
              { icon: <SiPython className="text-xs" />, label: "Python" },
              { icon: <SiFastapi className="text-xs" />, label: "FastAPI" },
              { icon: <SiDocker className="text-xs" />, label: "Docker" },
              { icon: <SiRedis className="text-xs" />, label: "Redis" },
              { icon: <SiReact className="text-xs" />, label: "React" },
              {
                icon: <SiTypescript className="text-xs" />,
                label: "TypeScript",
              },
            ]}
            delay={0.1}
          />

          <ProjectCard
            title="Trada"
            description="Trading hub social media platform — create & share stock predictions with AI in real-time."
            image={trada}
            href="https://github.com/mJiga/trada_webApp"
            tech={[
              { icon: <SiReact className="text-xs" />, label: "React" },
              { icon: <SiFirebase className="text-xs" />, label: "Firebase" },
              {
                icon: <SiTypescript className="text-xs" />,
                label: "TypeScript",
              },
              {
                icon: <SiTailwindcss className="text-xs" />,
                label: "Tailwind",
              },
            ]}
            delay={0.2}
          />
        </div>

        <ScrollReveal delay={0.5}>
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/mJiga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              More Projects
              <FaGithub className="text-lg" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
