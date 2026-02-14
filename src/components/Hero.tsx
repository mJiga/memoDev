import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";
import { MultiPhraseTypewriter } from "./ui/MultiPhraseTypewriter";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaFlask,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiExpress,
  SiFirebase,
  SiCsharp,
  SiDocker,
  SiRedis,
  SiFastapi,
} from "react-icons/si";

import Jimenez_Guillermo_OfficialResume from "../assets/Jimenez_Guillermo_OfficialResume.pdf";
import { motion } from "framer-motion";
import { DiGoogleCloudPlatform } from "react-icons/di";

const techStack = [
  { icon: FaReact, title: "React" },
  { icon: SiFirebase, title: "Firebase" },
  { icon: SiExpress, title: "Express" },
  { icon: FaFlask, title: "Flask" },
  { icon: SiFastapi, title: "FastAPI" },
  { icon: FaNodeJs, title: "Node.js" },
  { icon: SiDocker, title: "Docker" },
  { icon: SiRedis, title: "Redis" },
  { icon: DiGoogleCloudPlatform, title: "GCP" },
  { icon: SiTypescript, title: "TypeScript" },
  { icon: SiJavascript, title: "JavaScript" },
  { icon: SiPython, title: "Python" },
  { icon: SiCsharp, title: "C#" },
  { icon: SiJavascript, title: "JavaScript" },
  { icon: FaGitAlt, title: "Git" },
];

function Hero() {
  const phrases = [
    {
      text: "Software Engineer",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
    {
      text: "Developer",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
    {
      text: "Pianist",
      className: "text-4xl md:text-5xl lg:text-6xl font-serif",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-2xl flex-grow"
        >
          <div className="relative flex flex-col h-[120px] md:h-[150px] mb-6">
            <div className="absolute inset-0 flex items-center">
              <MultiPhraseTypewriter
                phrases={phrases}
                className="text-4xl md:text-5xl lg:text-6xl font-serif"
                cursorClassName="my-cursor-class"
              />
            </div>
          </div>

          <h2 className="font-sans font-semibold text-lg md:text-xl mb-2 max-w-lg text-primary">
            Hey,{" "}
            <span className="text-sage">I'm Guillermo Jimenez (Memo) !</span>
          </h2>

          <p className="text-sm md:text-base mb-8 max-w-lg text-muted leading-relaxed">
            <span className="text-primary">
              Passionate Software Engineer and concert pianist.
            </span>
          </p>
          <p className="text-sm md:text-base mb-8 max-w-lg text-muted leading-relaxed">
            incoming swe Intern @microsoft | prev explorer intern @microsoft |
            software @utep hunt institute | cs @utep '27
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-card font-medium hover:bg-primary/85 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
            </Link>

            <a
              href={Jimenez_Guillermo_OfficialResume}
              download="Jimenez_Guillermo_OfficialResume"
            >
              <button
                type="button"
                className="btn-outline text-sm rounded-card inline-flex items-center justify-center px-8 py-3 font-medium hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Resume
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <img
            src={pfp}
            alt="Guillermo Jimenez portrait"
            className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover shadow-card object-[center_25%]"
          />
          <div className="absolute inset-0 rounded-full border-4 border-sage/30"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex md:flex-col gap-4"
        >
          <a
            href="https://github.com/mJiga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 transition-colors duration-300 hover:text-sage"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermojiga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/60 transition-colors duration-300 hover:text-accent-hover"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="mt-16"
      >
        <p className="text-sm font-medium text-muted mb-4 tracking-wider uppercase">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-3 max-w-md">
          <div
            className="bg-white/80 px-3 py-3 rounded-lg shadow-subtle text-primary/60 hover:text-sage hover:shadow-card transition-all duration-300 text-xs font-semibold uppercase tracking-wide flex items-center"
            title="Model Context Protocol"
          >
            MCP
          </div>
          {techStack.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-white/80 p-3 rounded-lg shadow-subtle text-primary/60 hover:text-sage hover:shadow-card transition-all duration-300"
              title={title}
            >
              <Icon className="text-xl" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
