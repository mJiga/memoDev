import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

const tech = ["MCP", "Python", "Notion API", "LLM agent"];

const JarvShowcase: FC = () => (
  <div className="relative overflow-hidden rounded-xl2 border border-border bg-card-bg shadow-subtle">
    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sage/10 blur-[100px]" />

    <div className="relative grid gap-8 p-7 md:grid-cols-2 md:items-center md:gap-10 md:p-10">
      {/* Copy */}
      <Reveal>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-sage-deep">
          Featured project
        </span>
        <h3 className="mt-3 font-serif text-3xl tracking-tight text-ink">Jarv</h3>
        <p className="mt-3 text-[14.5px] font-light leading-relaxed text-muted">
          A personal finance MCP server that turns plain English into live
          Notion operations — expenses, budgets, paycheck splits. Monthly
          review went from an afternoon to under a minute.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((label) => (
            <span key={label} className="pill">
              {label}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Magnetic strength={8}>
            <a
              href="https://github.com/mJiga/jarv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group py-3 text-[13px]"
            >
              <FaGithub className="text-sm" />
              Source
            </a>
          </Magnetic>
          <Magnetic strength={8}>
            <a
              href="https://www.notion.so/memoo0/jarv-template-2e54abe19ef5802fb3fcce0017006fc1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group py-3 text-[13px]"
            >
              <SiNotion className="text-sm" />
              Template
            </a>
          </Magnetic>
        </div>
      </Reveal>

      {/* What it does, in two lines */}
      <Reveal delay={0.15} direction="right">
        <div className="rounded-xl border border-border bg-bone/70 p-5 font-mono text-[12.5px] leading-relaxed">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-soft">
            You say
          </p>
          <p className="mt-1.5 text-primary">"spent $42 on groceries at HEB"</p>

          <motion.div
            className="my-4 flex items-center gap-3 text-sage"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-sage/50" />
            <ArrowDown size={14} className="shrink-0" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-sage/50" />
          </motion.div>

          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-soft">
            Notion gets
          </p>
          <p className="mt-1.5">
            <span className="text-accent-hover">amount</span>{" "}
            <span className="text-clay">42.00</span>
            <br />
            <span className="text-accent-hover">category</span>{" "}
            <span className="text-clay">groceries</span>
            <br />
            <span className="text-accent-hover">status</span>{" "}
            <span className="text-sage-dark">&#10003; recorded</span>
          </p>
        </div>
      </Reveal>
    </div>
  </div>
);

export default JarvShowcase;
