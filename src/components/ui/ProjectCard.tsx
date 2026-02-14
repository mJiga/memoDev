import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface ProjectCardProps {
  title: string;
  description: ReactNode;
  image: string;
  href?: string;
  tech?: { icon: ReactNode; label: string }[];
  delay?: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  href,
  tech = [],
  delay = 0,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const Wrapper = href ? motion.a : motion.div;
  const linkProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      ref={ref}
      {...linkProps}
      className="relative group rounded-2xl overflow-hidden bg-white border border-border/60 hover:border-sage/30 hover:shadow-card-hover transition-all duration-500 flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {/* Subtle image accent — faded into top-right corner */}
      <div className="absolute top-0 right-0 w-[55%] h-full overflow-hidden pointer-events-none">
        <img
          src={image}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-[0.18] group-hover:opacity-[0.28] transition-opacity duration-700 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/60 to-white" />
      </div>

      {/* Ambient glow on hover */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-sage/[0.06] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Content */}
      <div className="relative z-[1] p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl text-primary tracking-tight">
            {title}
          </h3>
          {href && (
            <FaExternalLinkAlt className="text-xs text-muted mt-1.5 opacity-0 group-hover:opacity-60 transition-opacity duration-300 shrink-0" />
          )}
        </div>

        <div className="text-sm text-muted font-light leading-relaxed flex-1">
          {description}
        </div>

        {/* Tech pills */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tech.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-[11px] font-medium border border-border bg-bone text-muted transition-all duration-300 group-hover:border-sage/20 group-hover:text-sage-dark"
              >
                {icon}
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
