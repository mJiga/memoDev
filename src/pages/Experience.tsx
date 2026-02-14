import { FC } from "react";
import msft from "../assets/msft.png";
import hunt from "../assets/hunt.jpg";
import experience from "../assets/experience.jpeg";
import experience2 from "../assets/experience2.jpg";
import experience3 from "../assets/experience3.jpg";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ImageCarousel } from "../components/ui/ImageCarousel";
import ProjectCard from "../components/ui/ProjectCard";

const experienceImages = [
  { src: experience, alt: "Guillermo Jimenez at Microsoft" },
  { src: experience2, alt: "Guillermo Jimenez working on projects" },
  { src: experience3, alt: "Guillermo Jimenez at a tech event" },
];

const Experience: FC = () => {
  return (
    <section id="experience" className="w-full bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="section-heading">Experience</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">My work Experience</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2} className="md:w-1/2">
            <ImageCarousel
              images={experienceImages}
              className="w-full aspect-square shadow-card"
              interval={7000}
            />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={0.3}
            className="flex flex-col gap-4 md:w-3/5"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-primary">
              Software Engineer
            </h2>
            <p className="text-sm md:text-base text-primary/80 leading-relaxed">
              So early in my professional career, I've had the privilege of
              interning at Microsoft as an explorer intern and now as software
              engineering intern. Additionally, I interned at the UTEP Hunt
              Institute. These experiences have allowed me to work on impactful
              projects, collaborate with talented teams, and grow my skills as a
              software engineer. I'm excited to continue building my career and
              making a positive impact in the tech industry through my work and
              contributions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <ProjectCard
                title="Incoming SWE Intern"
                description="Microsoft"
                image={msft}
                delay={0.1}
              />
              <ProjectCard
                title="Prev Explorer Intern"
                description="Microsoft"
                image={msft}
                delay={0.2}
              />
              <ProjectCard
                title="SWE Intern"
                description="UTEP Hunt Institute"
                image={hunt}
                href="https://www.utep.edu/hunt-institute/"
                delay={0.3}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
