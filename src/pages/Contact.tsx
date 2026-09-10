import { FC } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../data/resume";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { Magnetic } from "../components/ui/Magnetic";
import { Aurora } from "../components/ui/Aurora";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
  },
  { icon: MapPin, label: "Based in", value: profile.location },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: profile.github, handle: "@mJiga" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: profile.linkedin,
    handle: "in/guillermojiga",
  },
];

const Contact: FC = () => (
  <section id="contact" className="relative w-full overflow-hidden bg-paper">
    <Aurora className="opacity-60" />

    <div className="section-container relative">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        accent={["something"]}
        align="center"
        className="mx-auto"
      >
        {profile.status} — but always happy to talk shop, trade notes on
        telemetry, or hear about what you're building.
      </SectionHeading>

      <Reveal delay={0.15} className="mt-12 flex justify-center">
        <Magnetic strength={12}>
          <a href={`mailto:${profile.email}`} className="btn-primary group px-9 py-4 text-base">
            <Mail size={17} className="transition-transform duration-300 group-hover:-rotate-12" />
            {profile.email}
          </a>
        </Magnetic>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-xl2 border border-border bg-border sm:grid-cols-3">
        {channels.map(({ icon: Icon, label, value, href }, i) => {
          const inner = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 text-sage-deep transition-transform duration-500 group-hover:scale-110">
                <Icon size={17} />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-soft">
                  {label}
                </p>
                <p className="mt-1 break-words text-[13.5px] leading-snug text-primary transition-colors duration-300 group-hover:text-sage-deep">
                  {value}
                </p>
              </div>
            </>
          );

          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card-bg"
            >
              {href ? (
                <a href={href} className="group flex items-center gap-4 p-6 transition-colors duration-500 hover:bg-bone/60">
                  {inner}
                </a>
              ) : (
                <div className="group flex items-center gap-4 p-6">{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mx-auto mt-5 grid max-w-4xl gap-5 sm:grid-cols-2">
        {socials.map(({ icon: Icon, label, href, handle }, i) => (
          <Reveal key={label} delay={0.15 + i * 0.1}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl2 border border-border bg-card-bg p-6 transition-all duration-500 ease-smooth hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-card"
            >
              <span className="flex items-center gap-4">
                <Icon className="text-2xl text-muted transition-colors duration-300 group-hover:text-sage-deep" />
                <span>
                  <span className="block text-sm font-medium text-primary">{label}</span>
                  <span className="block font-mono text-[11px] text-muted-soft">{handle}</span>
                </span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-muted-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sage-dark"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
