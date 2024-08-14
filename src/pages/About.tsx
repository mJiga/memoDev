import { FC } from "react";
import pianohero from "../assets/pianohero.jpeg";
import innovationHub from "../assets/innovationHubLogo.png";
import gdscLogo from "../assets/gdscLogo.png";
import dellLogo from "../assets/dell.png";
import microsoftLogo from "../assets/microsoftLogo.png";
import { motion } from "framer-motion";

const About: FC = () => {
  return (
    <section
      id="about"
      className="w-full h-full min-h-screen bg-white flex items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl md:text-3xl mb-2 text-green-600"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs md:text-sm mb-2 text-gray-600"
        >
          A little bit about myself
        </motion.p>
        <motion.hr
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-12 border-gray-400 py-10"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/5"
          >
            <a>
              <img
                src={pianohero}
                alt="Web Developer"
                className="rounded-xl w-full h-auto object-cover shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-4 p-8 lg:w-3/5"
          >
            {/* <h2 className="text-base md:text-lg font-bold text-green-600">
              ABOUT ME
            </h2> */}
            <h1 className="font-bold text-2xl md:text-3xl">
              Full-Stack Developer
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              As a a Full-Stack Developer and the Vice President of the Google
              Developer Student Club @UTEP, I have gained a knack for leading
              people into creating innovative solutions. 🚀
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Beyond my college curriculum, I've built a strong foundation in
              diverse technologies such as the MERN Stack, Firebase, TypeScript,
              JavaScript, Python, and Java, alongside a solid understanding of
              Data Structures and Algorithms. I'm passionate about developing
              web applications that provide a great user experience. 🫡
            </p>
            <div className="flex flex-wrap mt-4 gap-6">
              <SkillCard
                image={microsoftLogo}
                title="EPCF Microsoft Innovation Hub"
                description="Lead TA Intern"
              />
              <SkillCard
                image={gdscLogo}
                title="Google Developer Student Club"
                description="Vice President of Operations"
              />
              <SkillCard
                image={dellLogo}
                title="Dell Technologies"
                description="Dell Tech Academy Cohort Participant"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  image: string;
  title: string;
  description: string;
}

const SkillCard: FC<SkillCardProps> = ({ image, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
  >
    <div className="flex text-green-500 mb-2">
      <img
        src={image}
        alt="Tech Company"
        className="w-10 h-auto object-contain"
      />
    </div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

export default About;
