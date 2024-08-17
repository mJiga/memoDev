import { CardDemo } from "@/components/ui/CardDemo";
import { FC } from "react";
import trada from "../assets/trada.jpg";
import boarddev from "../assets/devboard.png";
import moodMiner from "../assets/moodMiner.png";
import { motion } from "framer-motion";
import AnimatedIconDisplay from "@/components/ui/PinDemo";
import {
  SiReact,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";
import { FaFlask, FaGithub, FaLinkedin } from "react-icons/fa";

const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="w-full h-full min-h-screen bg-gradient-to-b from-black via-black to-white flex flex-col items-center text-white"
    >
      <div className="w-full max-w-2xl text-center m-28">
        <h1 className="font-bold text-2xl md:text-3xl text-white">Projects</h1>
        <p className="text-xs md:text-base  mt-2 mb-4">
          Let me show you my work
        </p>
        <motion.hr
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border rounded-full"
        />
        <div className="flex items-center justify-center mt-4 gap-4">
          <a
            href="https://github.com/mJiga"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-gray-500"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermojiga"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-8 max-w-7xl">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
          className="relative w-full sm:w-3/4 md:w-1/3 lg:w-1/2 h-auto"
        >
          <CardDemo
            url={trada}
            title="Trada Webapp ⭐"
            description="A trading hub social media platform that allows users to create & share stock predictions with AI in real-time"
            ext={"https://github.com/mJiga/trada_webApp"}
          />
          <AnimatedIconDisplay
            icons={[
              { icon: SiReact, label: "React.js", size: "sm" },
              { icon: SiFirebase, label: "Firebase.js", size: "sm" },
              { icon: SiTypescript, label: "Typescript.ts", size: "sm" },
              { icon: SiTailwindcss, label: "Tailwind.css", size: "sm" },
            ]}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
          className="relative w-full sm:w-3/4 md:w-1/3 lg:w-1/2 h-auto"
        >
          <CardDemo
            url={moodMiner}
            title="Moodminer"
            description="An application that uses a pre-trained model to do Sentimental analysis AI on text input"
            ext={"https://github.com/mJiga/MoodMiner-borderland-Hackathon"}
          />
          <AnimatedIconDisplay
            icons={[
              { icon: SiReact, label: "React.js", size: "sm" },
              { icon: SiPython, label: "Python.py", size: "sm" },
              { icon: FaFlask, label: "Flask.py", size: "sm" },
              { icon: SiJavascript, label: "Javascript.js", size: "sm" },
            ]}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
          className="relative w-full sm:w-3/4 md:w-1/3 lg:w-1/2 h-auto"
        >
          <CardDemo
            url={boarddev}
            title="dev.board"
            description="A course registration and Task Manager webApp with a seamless user design and experience"
            ext={"https://github.com/mJiga/CodingxDesign_MERN-frontend"}
          />
          <AnimatedIconDisplay
            icons={[
              { icon: SiMongodb, label: "MongoDB.js", size: "sm" },
              { icon: SiExpress, label: "Express", size: "sm" },
              { icon: SiReact, label: "React.js", size: "sm" },
              { icon: SiNodedotjs, label: "Node.js", size: "sm" },
              { icon: SiTypescript, label: "Typescript.ts", size: "sm" },
              { icon: SiTailwindcss, label: "Tailwind.css", size: "sm" },
            ]}
          />
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.95 }}
        className="flex items-end justify-end mt-4"
      >
        <motion.a
          href={"https://github.com/mJiga"}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex items-center font-bold text-white transition-transform duration-300 ease-in-out transform bg-black hover:scale-110 hover:bg-zinc-800 border border-black px-4 py-2 rounded-lg"
        >
          More Projects
          <FaGithub className="text-white m-1" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Projects;
