import { FC } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles } from "lucide-react";

import { skills, education } from "../data/resume";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { SpotlightCard } from "../components/ui/SpotlightCard";

const Skills: FC = () => (
  <section id="skills" className="relative w-full overflow-hidden bg-bone">
    <div className="section-container">
      <SectionHeading
        eyebrow="Toolkit"
        title="What I build with"
        accent={["build"]}
      >
        The languages, platforms and agentic tooling I reach for — and the
        coursework behind them.
      </SectionHeading>

      <div className="mt-16 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        {/* ── Skill groups ── */}
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <SpotlightCard key={group.group} tilt={0} className="h-full">
              <Reveal delay={gi * 0.07} className="flex h-full flex-col p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-sage-deep">
                  {group.group}
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      className="pill hover:-translate-y-0.5 hover:border-sage/50 hover:text-sage-deep hover:shadow-subtle"
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.05 + i * 0.028,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </SpotlightCard>
          ))}
        </div>

        {/* ── Education ── */}
        <div className="flex flex-col gap-4">
          <SpotlightCard tilt={0}>
            <Reveal direction="right" className="p-7">
              <span className="eyebrow">
                <GraduationCap size={14} />
                Education
              </span>

              <h3 className="mt-4 font-serif text-2xl leading-snug text-ink">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-sm text-primary">{education.school}</p>

              <div className="mt-5 flex items-end gap-6 border-y border-border py-4">
                <div>
                  <p className="font-serif text-3xl text-ink">{education.gpa}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-soft">
                    {education.gpaLabel}
                  </p>
                </div>
                <div className="pb-1">
                  <p className="text-sm font-medium text-primary">
                    {education.graduation}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-soft">
                    Graduation
                  </p>
                </div>
              </div>

              <p className="mt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted-soft">
                Relevant coursework
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="pill">
                    {course}
                  </span>
                ))}
              </div>
            </Reveal>
          </SpotlightCard>

          <SpotlightCard tilt={0}>
            <Reveal direction="right" delay={0.1} className="p-7">
              <span className="eyebrow">
                <Sparkles size={14} />
                {education.exchange.name}
              </span>
              <p className="mt-3 text-[13.5px] font-light leading-relaxed text-muted">
                Selected for the {education.exchange.term} cohort —{" "}
                {education.exchange.topics.join(", ")}.
              </p>
            </Reveal>
          </SpotlightCard>

          <SpotlightCard tilt={0}>
            <Reveal direction="right" delay={0.16} className="p-7">
              <span className="eyebrow">
                <Award size={14} />
                Honors &amp; certifications
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {education.honors.map((honor) => (
                  <li
                    key={honor}
                    className="flex gap-3 text-[13.5px] font-light leading-relaxed text-muted"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-clay" />
                    {honor}
                  </li>
                ))}
              </ul>
            </Reveal>
          </SpotlightCard>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
