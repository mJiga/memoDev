import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import pfp from "../assets/pfp.jpg";
import resumePdf from "../assets/Guillermo_Jimenez_Resume.pdf";
import { profile } from "../data/resume";

import { TextReveal } from "./ui/TextReveal";
import { Magnetic } from "./ui/Magnetic";
import { AnimatedFrame } from "./ui/AnimatedFrame";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function Hero() {
  return (
    <div className="w-full">
      <motion.span {...rise(0.05)} className="eyebrow">
        <span className="h-px w-8 bg-sage/60" />
        {profile.status}
      </motion.span>

      <h1 className="mt-8 font-serif text-[clamp(2.8rem,9vw,6.2rem)] leading-[0.9] tracking-[-0.04em] text-ink">
        <TextReveal text="Guillermo" delay={0.12} />
        <span className="block text-sage-dark">
          <TextReveal text="Jimenez" delay={0.24} />
        </span>
      </h1>

      <motion.div
        {...rise(0.6)}
        className="mt-9 flex flex-col gap-9 border-t border-border pt-8 md:flex-row md:items-start md:justify-between md:gap-14"
      >
        {/* Copy */}
        <div className="max-w-xl">
          <p className="font-serif text-[21px] leading-snug text-primary md:text-[27px]">
            {profile.tagline}
          </p>
          <p className="mt-4 text-[14.5px] font-light leading-[1.8] text-muted">
            {profile.blurb}
          </p>
        </div>

        {/* Portrait above the controls */}
        <div className="flex shrink-0 flex-col items-start gap-5 md:items-end">
          <AnimatedFrame
            src={pfp}
            alt={`${profile.name}, software engineer`}
            delay={0.75}
            className="aspect-[4/5] w-36 sm:w-40 md:w-44"
          />

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={10}>
              <Link to="#contact" className="btn-primary group">
                <Mail
                  size={15}
                  className="transition-transform duration-300 group-hover:-rotate-12"
                />
                Get in touch
              </Link>
            </Magnetic>
            <Magnetic strength={10}>
              <a
                href={resumePdf}
                download="Guillermo_Jimenez_Resume.pdf"
                className="btn-outline group"
              >
                <Download
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Resume
              </a>
            </Magnetic>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-soft">
            {[
              { href: profile.github, Icon: FaGithub, label: "GitHub" },
              { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-300 hover:text-sage-deep"
              >
                <Icon className="text-base" />
              </a>
            ))}
            <span className="ml-1">{profile.location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
