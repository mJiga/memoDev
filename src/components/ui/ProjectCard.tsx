import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export interface ProjectCardProps {
  title: string;
  description: ReactNode;
  href?: string;
  meta?: string;
  tech?: string[];
  delay?: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  href,
  meta,
  tech = [],
  delay = 0,
}) => {
  const body = (
    <div className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl2 p-6">
      <div className="relative flex items-start justify-between gap-3">
        <div>
          {meta && (
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-soft">
              {meta}
            </p>
          )}
          <h3 className="font-serif text-xl leading-snug tracking-tight text-ink">
            {title}
          </h3>
        </div>
        {href && (
          <ArrowUpRight
            size={17}
            className="mt-1 shrink-0 text-muted-soft transition-all duration-300 group-hover/spot:-translate-y-0.5 group-hover/spot:translate-x-0.5 group-hover/spot:text-sage-dark"
          />
        )}
      </div>

      <div className="relative flex-1 text-[13.5px] font-light leading-relaxed text-muted">
        {description}
      </div>

      {tech.length > 0 && (
        <div className="relative flex flex-wrap gap-1.5">
          {tech.map((label) => (
            <span
              key={label}
              className="pill text-[10.5px] group-hover/spot:border-sage/35 group-hover/spot:text-sage-deep"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <SpotlightCard tilt={4} className="h-full">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            {body}
          </a>
        ) : (
          body
        )}
      </SpotlightCard>
    </motion.div>
  );
};

export default ProjectCard;
