import { Link } from "react-router-dom";
import pfp from "../assets/pfp.jpg";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { MultiPhraseTypewriter } from "./ui/MultiPhraseTypewriter";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

import Jimenez_Guillermo_OfficialResume from "../assets/Jimenez_Guillermo_OfficialResume.pdf";
import { motion } from "framer-motion";

function Hero() {
  const phrases = [
    {
      text: "Full-Stack 💻",
      className: "text-5xl md:text-6xl font-bold",
    },
    {
      text: "React Frontend 🌐",
      className: "text-5xl md:text-6xl font-bold",
    },
    {
      text: "UI / UX 🎨",
      className: "text-5xl md:text-6xl font-bold",
    },
    {
      text: "Enthusiastic 😎",
      className: "text-5xl md:text-6xl font-bold",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-start max-w-5xl flex-grow"
          >
            <div className="relative flex flex-col h-[150px] md:h-[180px] mb-6">
              <div className="absolute inset-0 flex items-center">
                <MultiPhraseTypewriter
                  phrases={phrases}
                  className="text-5xl md:text-6xl font-bold"
                  cursorClassName="my-cursor-class"
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold absolute bottom-0">
                Developer
              </h1>
            </div>
            <h2 className="font-bold text-lg md:text-xl mb-2 max-w-lg">
              Hey,{" "}
              <span className="text-green-600">
                I'm Guillermo Jimenez - Memo!
              </span>
            </h2>
            <h3 className="text-sm md:text-base mb-6 max-w-lg">
              Passionate Full-Stack Developer Student by night and concert
              pianist by day | Based in El Paso, Texas. 📍
            </h3>
            <div className="flex justify-center items-center ml-20 gap-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as={Link}
                to="#contact"
                className="flex items-center justify-center px-12 py-4 rounded-full text-sm"
                duration={0.3}
              >
                Hire Me
              </HoverBorderGradient>

              <a
                href={Jimenez_Guillermo_OfficialResume}
                download="Jimenez_Guillermo_OfficialResume"
              >
                <button
                  type="submit"
                  className="flex items-center justify-center px-10 py-4 font-bold text-sm rounded-full bg-green-700 hover:bg-green-800 hover:text-gray-300 duration-300 ease-in-out"
                >
                  Get Resume
                </button>
              </a>
            </div>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex-shrink-0 ml-8"
          >
            <img
              src={pfp}
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white"></div>
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col gap-4 mt-4"
          >
            <a
              href="https://github.com/mJiga"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-gray-500"
            >
              <FaGithub className="text-3xl mb-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/guillermojiga"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            >
              <FaLinkedin className="text-3xl mb-2" />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="flex gap-2 mt-4 text-4xl "
        title="MERN stack"
      >
        <span className="mt-3 text-lg">Tech Stack |</span>
        <SiMongodb className="mt-2" title="MongoDB" />
        <SiExpress className="mt-2" title="Express" />
        <FaReact className="mt-2" title="React" />
        <FaNodeJs className="mt-2" title="Node.js" />
        <SiFirebase className="mt-2" title="Firebase.js" />

        <SiTypescript className="ml-6 mt-2" title="TypeScript" />
        <SiJavascript className="mt-2" title="JavaScript" />
        <SiTailwindcss className="mr-6 mt-2" title="Tailwind CSS" />

        <SiPython className="mt-2" title="Python" />
        <FaJava className="mr-6 mt-2" title="Java" />
        <FaGitAlt className="mt-2" title="Git" />
      </motion.div>
    </div>
  );
}

export default Hero;
