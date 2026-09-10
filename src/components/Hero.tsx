import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import pfp from "../assets/pfp.jpg";
import resumePdf from "../assets/Guillermo_Jimenez_Resume.pdf";
import { profile } from "../data/resume";

import { TextReveal } from "./ui/TextReveal";
import { Magnetic } from "./ui/Magnetic";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center text-center">
      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <span className="absolute -inset-2 rounded-full border border-sage/30" />
        <img
          src={pfp}
          alt={`${profile.name}, software engineer`}
          className="relative h-28 w-28 rounded-full border border-border object-cover object-[center_20%] shadow-card md:h-32 md:w-32"
        />
      </motion.div>

      {/* Status */}
      <motion.span
        {...rise(0.15)}
        className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-sage-deep"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-sage animate-pulse-ring" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-dark" />
        </span>
        {profile.status}
      </motion.span>

      {/* Name */}
      <h1 className="mt-4 font-serif text-[clamp(2.6rem,9vw,4.5rem)] leading-[1.02] tracking-[-0.035em] text-ink">
        <TextReveal text="Guillermo Jimenez" delay={0.25} />
      </h1>

      {/* The one-liner */}
      <p className="mt-6 max-w-2xl text-[15px] font-light leading-[1.8] text-muted md:text-[17px]">
        <TextReveal text={profile.blurb} delay={0.5} stagger={0.018} />
      </p>

      {/* CTAs */}
      <motion.div
        {...rise(0.9)}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
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
      </motion.div>

      {/* Socials */}
      <motion.div {...rise(1)} className="mt-6 flex items-center gap-1">
        {[
          { href: profile.github, Icon: FaGithub, label: "GitHub" },
          { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
        ].map(({ href, Icon, label }) => (
          <Magnetic key={label} strength={8}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-soft transition-colors duration-300 hover:text-sage-deep"
            >
              <Icon className="text-lg" />
            </a>
          </Magnetic>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#experience"
        {...rise(1.15)}
        aria-label="Scroll to experience"
        className="mt-14 hidden text-muted-soft transition-colors duration-300 hover:text-sage-deep md:block"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </div>
  );
}

export default Hero;
