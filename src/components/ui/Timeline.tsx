import { useRef } from "react";
import { motion, useInView, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Company, Role } from "../../data/resume";
import { Reveal } from "./Reveal";

/** One position, nested under its company. */
const RoleBlock = ({
  role,
  index,
  companyIndex,
}: {
  role: Role;
  index: number;
  companyIndex: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isFirstOverall = companyIndex === 0 && index === 0;

  return (
    <div
      ref={ref}
      className={
        index > 0 ? "mt-8 border-t border-border/70 pt-8" : "mt-5"
      }
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="font-medium text-primary">{role.title}</p>
        {isFirstOverall && (
          <span className="rounded-full bg-sage/12 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-sage-deep">
            Most recent
          </span>
        )}
      </div>

      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
        {role.period}
        {role.team && (
          <>
            <span className="mx-2 text-border">/</span>
            {role.team}
          </>
        )}
      </p>

      <p className="mt-3 max-w-2xl text-[15px] font-light leading-relaxed text-muted">
        {role.summary}
      </p>

      <ul className="mt-4 flex max-w-2xl flex-col gap-3">
        {role.highlights.map((highlight, i) => (
          <motion.li
            key={highlight}
            className="flex gap-3 text-[14.5px] leading-relaxed text-primary/85"
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15 + i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-sage" />
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {role.stack.map((tech, i) => (
          <motion.span
            key={tech}
            className="pill hover:border-sage/50 hover:text-sage-deep"
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.35 + i * 0.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const CompanyEntry = ({
  company,
  index,
}: {
  company: Company;
  index: number;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <li ref={ref} className="relative pb-16 pl-12 last:pb-0 sm:pl-16">
      {/* Node on the rail */}
      <motion.span
        className="absolute left-[10px] top-1.5 flex h-4 w-4 items-center justify-center sm:left-[18px]"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-sage/35" />
        <span className="relative h-2 w-2 rounded-full bg-sage-dark ring-4 ring-paper" />
        {index === 0 && (
          <span className="absolute h-2 w-2 rounded-full bg-sage animate-pulse-ring" />
        )}
      </motion.span>

      <Reveal delay={0.05} direction="left" distance={18}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-2xl leading-tight text-ink md:text-[1.75rem]">
            {company.name}
          </h3>
          {company.href && (
            <a
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-soft transition-colors duration-300 hover:text-sage-dark"
              aria-label={`${company.name} website`}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
            {company.location}
          </span>
          {company.roles.length > 1 && (
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sage-deep">
              {company.roles.length} roles
            </span>
          )}
        </div>
      </Reveal>

      {company.roles.map((role, i) => (
        <RoleBlock
          key={role.title}
          role={role}
          index={i}
          companyIndex={index}
        />
      ))}
    </li>
  );
};

export const Timeline = ({ companies }: { companies: Company[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute left-[17px] top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-[25px]"
        aria-hidden
      />
      <motion.div
        style={{ scaleY }}
        className="absolute left-[17px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-sage via-sage-dark to-clay sm:left-[25px]"
        aria-hidden
      />

      <ol className="relative">
        {companies.map((company, i) => (
          <CompanyEntry key={company.id} company={company} index={i} />
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
