import { FC } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../data/resume";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Magnetic } from "../components/ui/Magnetic";
import { Aurora } from "../components/ui/Aurora";

const Contact: FC = () => (
  <section id="contact" className="relative w-full overflow-hidden bg-bone">
    <Aurora className="opacity-50" />

    <div className="section-container relative flex flex-col items-center text-center">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        accent={["something"]}
        align="center"
      >
        {profile.status} — and always happy to talk shop.
      </SectionHeading>

      <Reveal delay={0.15} className="mt-10">
        <Magnetic strength={12}>
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary group px-8 py-4 text-[15px]"
          >
            <Mail
              size={16}
              className="transition-transform duration-300 group-hover:-rotate-12"
            />
            {profile.email}
          </a>
        </Magnetic>
      </Reveal>

      <Reveal delay={0.25} className="mt-8">
        <div className="flex items-center justify-center gap-6 font-mono text-[12px] tracking-wide text-muted">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep"
          >
            <FaGithub /> mJiga
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 transition-colors duration-300 hover:text-sage-deep"
          >
            <FaLinkedin /> guillermojiga
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.32} className="mt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-soft">
          {profile.location}
        </p>
      </Reveal>
    </div>
  </section>
);

export default Contact;
