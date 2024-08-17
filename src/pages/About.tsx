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
      className="w-full h-full min-h-screen bg-gradient-to-b from-white to-zinc-100 flex items-center justify-center py-16"
    >
      <div className="container flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl md:text-4xl mb-3 text-green-600"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base mb-3 text-gray-600"
        >
          A little bit about myself
        </motion.p>
        <motion.hr
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-1/4 border-green-300 mb-10"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl">
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
                className="rounded-xl w-full h-auto object-cover shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col gap-6 p-8 lg:w-3/5"
          >
            <h1 className="font-bold text-2xl md:text-3xl text-black">
              Full-Stack Developer
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              As a Full-Stack Developer and the Vice President of the Google
              Developer Student Club @UTEP, I have gained a knack for leading
              people into creating innovative solutions. 🚀
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Beyond my college curriculum, I've built a strong foundation in
              diverse technologies such as the MERN Stack, Firebase, TypeScript,
              JavaScript, Python, and Java, alongside a solid understanding of
              Data Structures and Algorithms. I'm passionate about developing
              web applications that provide a great user experience. 🫡
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <SkillCard
                image={microsoftLogo}
                image2={innovationHub}
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
  image2?: string;
  title: string;
  description: string;
}

const SkillCard: FC<SkillCardProps> = ({
  image,
  image2,
  title,
  description,
}) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
  >
    <div className="flex items-center justify-center h-16 mb-3">
      <img
        src={image}
        alt="Tech Company"
        className="h-10 w-auto object-contain"
      />
      {image2 && (
        <img
          src={image2}
          alt="Tech Company"
          className="h-14 w-auto object-contain ml-2"
        />
      )}
    </div>
    <h3 className="font-semibold text-lg mb-2 text-center text-black">
      {title}
    </h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </motion.div>
);

export default About;
