import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import pfp from "../assets/pfp.jpg";
import resumePdf from "../assets/Guillermo_Jimenez_Resume.pdf";
import { profile, metrics } from "../data/resume";

import { TextReveal } from "./ui/TextReveal";
import { RoleRotator } from "./ui/RoleRotator";
import { Magnetic } from "./ui/Magnetic";
import { Counter } from "./ui/Counter";
import { Aurora } from "./ui/Aurora";
import TechMarquee from "./ui/TechMarquee";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
});

function Hero() {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full">
      <Aurora className="opacity-70" />

      <div className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        {/* ── Copy ── */}
        <div className="flex flex-col items-start">
          <motion.span
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-sage/30 bg-sage/[0.07] px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-sage-deep"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-sage animate-pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-dark" />
            </span>
            {profile.status}
          </motion.span>

          <h1 className="mt-7 font-serif text-[clamp(2.9rem,8.5vw,5.4rem)] leading-[0.94] tracking-[-0.035em] text-ink">
            <TextReveal text="Guillermo" delay={0.15} />
            <span className="block">
              <TextReveal text="Jimenez" delay={0.28} />
              <span className="ml-3 align-middle font-sans text-[0.24em] font-medium uppercase tracking-[0.28em] text-muted-soft">
                ({profile.short})
              </span>
            </span>
          </h1>

          <motion.p
            {...fadeUp(0.55)}
            className="mt-6 flex flex-wrap items-center gap-x-2 font-serif text-2xl text-primary md:text-[1.9rem]"
          >
            <RoleRotator roles={profile.roles} className="text-sage-dark" />
          </motion.p>

          <motion.p
            {...fadeUp(0.66)}
            className="mt-6 max-w-xl text-[15px] font-light leading-[1.75] text-muted md:text-base"
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            {...fadeUp(0.76)}
            className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={12} className="text-sage" />
              {profile.location}
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>CS @ UTEP &rsquo;27</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span>prev. Microsoft &middot; Google</span>
          </motion.div>

          {/* CTAs */}
          <motion.div {...fadeUp(0.86)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={10}>
              <Link to="#contact" className="btn-primary group">
                <Mail size={15} className="transition-transform duration-300 group-hover:-rotate-12" />
                Get in touch
              </Link>
            </Magnetic>

            <Magnetic strength={10}>
              <a
                href={resumePdf}
                download="Guillermo_Jimenez_Resume.pdf"
                className="btn-outline group"
              >
                <Download size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Resume
              </a>
            </Magnetic>

            <div className="ml-1 flex items-center gap-1">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-300 hover:border-border hover:bg-paper hover:text-sage-deep"
                  >
                    <Icon className="text-lg" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Offset frame */}
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[28px] border border-sage/35" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-border bg-paper shadow-card">
              <img
                src={pfp}
                alt={`${profile.name}, software engineer`}
                className="h-full w-full object-cover object-[center_22%] transition-transform duration-[1.4s] ease-smooth hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            </div>

            {/* Floating credential chips */}
            {!reduced && (
              <>
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-2 top-[18%] rounded-xl border border-border bg-paper/95 px-3.5 py-2 shadow-card backdrop-blur sm:-left-4"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                    Major GPA
                  </p>
                  <p className="font-serif text-xl text-ink">3.96</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 9, 0] }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute bottom-[16%] right-2 rounded-xl border border-border bg-paper/95 px-3.5 py-2 shadow-card backdrop-blur sm:-right-3"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-soft">
                    Internships
                  </p>
                  <p className="font-serif text-xl text-ink">
                    Microsoft &times;2
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Metrics strip ── */}
      <motion.dl
        {...fadeUp(1)}
        className="relative mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-border bg-border md:grid-cols-4"
      >
        {metrics.map(({ value, prefix, suffix, label }) => (
          <div key={label} className="group bg-bone px-5 py-6 transition-colors duration-500 hover:bg-paper">
            <dt className="font-serif text-3xl text-ink md:text-4xl">
              <Counter value={value} prefix={prefix} suffix={suffix} />
            </dt>
            <dd className="mt-1.5 text-[12.5px] font-light leading-snug text-muted">
              {label}
            </dd>
          </div>
        ))}
      </motion.dl>

      {/* ── Tech marquee ── */}
      <motion.div {...fadeUp(1.1)} className="relative mt-10">
        <TechMarquee />
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.a
        href="#experience"
        {...fadeUp(1.25)}
        className="mt-12 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-soft transition-colors duration-300 hover:text-sage-deep md:inline-flex"
      >
        <motion.span
          animate={reduced ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.span>
        Scroll
      </motion.a>
    </div>
  );
}

export default Hero;
