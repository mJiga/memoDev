import { FC } from "react";
import { GraduationCap } from "lucide-react";

import piano from "../assets/interests2.jpg";
import { education, leadership, stack } from "../data/resume";

import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { ParallaxImage } from "../components/ui/ParallaxImage";

const About: FC = () => (
  <section id="about" className="relative w-full overflow-hidden bg-bone">
    <div className="section-container">
      <SectionHeading
        eyebrow="About"
        title="Beyond the code"
        accent={["code"]}
      />

      <div className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-14">
        <ParallaxImage
          src={piano}
          alt="Guillermo Jimenez performing at a concert grand piano"
          caption="Community concert"
          position="center 40%"
          amount={8}
          className="aspect-[4/3] w-full shadow-card md:aspect-[4/5]"
        />

        <div className="flex flex-col gap-8">
          <Reveal direction="right">
            <p className="text-[15px] font-light leading-[1.85] text-primary/85 md:text-base">
              When I'm not writing code you'll find me at the piano — classical,
              jazz, reggaeton — performing in concerts around my community.
              Years of practice taught me the thing I lean on most in
              engineering: strict structure is what makes improvisation safe.
            </p>
          </Reveal>

          {/* Education */}
          <Reveal direction="right" delay={0.1}>
            <div className="border-t border-border pt-6">
              <span className="eyebrow">
                <GraduationCap size={14} />
                Education
              </span>
              <p className="mt-3 font-serif text-xl text-ink">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-primary">{education.school}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                {education.graduation}
                <span className="mx-2 text-border">/</span>
                Major GPA {education.gpa}
              </p>
              <p className="mt-3 text-[13px] font-light text-muted">
                {education.note}
              </p>
              <p className="mt-1 text-[13px] font-light text-muted">
                {leadership.role}, {leadership.org} &middot; {leadership.period}
              </p>
            </div>
          </Reveal>

          {/* Stack */}
          <Reveal direction="right" delay={0.18}>
            <div className="border-t border-border pt-6">
              <span className="eyebrow">Tools I reach for</span>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((tool) => (
                  <span
                    key={tool}
                    className="pill transition-all duration-300 hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage-deep"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
