import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/resume";
import { Magnetic } from "./ui/Magnetic";

const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-ink text-bone">
    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-[120px]" aria-hidden />

    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-14 sm:px-8 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-serif text-3xl tracking-tight">
            memo<span className="text-sage">.dev</span>
          </p>
          <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-bone/55">
            {profile.title} in {profile.location}. {profile.status}.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: profile.github, Icon: FaGithub, label: "GitHub" },
            { href: profile.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, Icon: null, label: "Email" },
          ]
            .filter((s) => s.Icon)
            .map(({ href, Icon, label }) => (
              <Magnetic key={label} strength={8}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/12 text-bone/60 transition-all duration-300 hover:border-sage/50 hover:text-sage"
                >
                  {Icon && <Icon className="text-lg" />}
                </a>
              </Magnetic>
            ))}

          <Magnetic strength={8}>
            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-bone/12 text-bone/60 transition-all duration-300 hover:border-sage/50 hover:text-sage"
            >
              <ArrowUp
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-bone/10 pt-6 sm:flex-row sm:items-center">
        <span className="font-mono text-[11px] tracking-wide text-bone/40">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span className="font-mono text-[11px] tracking-wide text-bone/40">
          Built with React, Tailwind &amp; Framer Motion
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
