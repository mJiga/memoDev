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

const socials = [
  { href: profile.github, Icon: FaGithub, label: "GitHub" },
  { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
];

function Hero() {
  return (
    <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16">
      {/* ── Left: the information ── */}
      <div className="flex-1 lg:min-w-0">
        <motion.span {...rise(0.05)} className="eyebrow">
          <span className="h-px w-8 bg-sage/60" />
          {profile.status}
        </motion.span>

        <h1 className="mt-6 font-serif text-[clamp(2.6rem,5.6vw,4.1rem)] leading-[0.98] tracking-[-0.035em] text-ink">
          <TextReveal text="Guillermo" delay={0.12} />
          <span className="block text-sage-dark">
            <TextReveal text="Jimenez" delay={0.22} />
          </span>
        </h1>

        <motion.p
          {...rise(0.5)}
          className="mt-5 max-w-lg font-serif text-[19px] leading-snug text-primary md:text-[23px]"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          {...rise(0.6)}
          className="mt-4 max-w-lg text-[14.5px] font-light leading-[1.8] text-muted"
        >
          {profile.blurb}
        </motion.p>

        <motion.p
          {...rise(0.68)}
          className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft"
        >
          <span>CS @ UTEP &rsquo;27</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>prev. Microsoft &middot; Google</span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>{profile.location}</span>
        </motion.p>

        <motion.div {...rise(0.78)} className="mt-8 flex flex-wrap items-center gap-3">
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

          {/* Socials sit inline on phones, and move to the rail on desktop */}
          <div className="flex items-center gap-1 lg:hidden">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-muted-soft transition-colors duration-300 hover:text-sage-deep"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Right: the headshot ── */}
      <AnimatedFrame
        src={pfp}
        alt={`${profile.name}, software engineer`}
        delay={0.35}
        className="h-56 w-56 shrink-0 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      />

      {/* ── Social rail ── */}
      <motion.div
        {...rise(0.9)}
        className="hidden shrink-0 flex-col items-center gap-4 lg:flex"
      >
        {socials.map(({ href, Icon, label }) => (
          <Magnetic key={label} strength={8}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-muted-soft transition-colors duration-300 hover:text-sage-deep"
            >
              <Icon className="text-xl" />
            </a>
          </Magnetic>
        ))}
        <span className="h-14 w-px bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </div>
  );
}

export default Hero;
