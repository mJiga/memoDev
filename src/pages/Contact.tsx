import { motion } from "framer-motion";
import { MdOutlineEmail, MdPinDrop } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="w-full h-full bg-gradient-to-b from-white to-zinc-100 flex items-center justify-center p-[8rem]">
        <div className="container flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl md:text-4xl mb-3 text-green-600"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base mb-3 text-gray-600"
          >
            Let's break the ice! Hit me up! 👇
          </motion.p>
          <motion.hr
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-1/4 border-green-300 mb-10"
          />
          <div className="flex gap-2 items-center justify-center">
            <motion.div className="bg-gray-100 rounded-full p-4 ml-8 text-black shadow-md hover:shadow-lg hover:text-green-600 hover:scale-105 duration-300 ease-in-out transition-all relative">
              <MdPinDrop className="text-3xl" />
            </motion.div>
            <div className="flex flex-col items-center justify-start">
              <span className="font-bold text-xl">Location</span>
              <span className="text-sm m-auto">El Paso, Tx</span>
            </div>

            <motion.div className="bg-gray-100 rounded-full p-4 ml-8 text-black shadow-md hover:shadow-lg hover:text-green-600 hover:scale-105 duration-300 ease-in-out transition-all relative">
              <MdOutlineEmail className="text-3xl" />
            </motion.div>
            <div className="flex flex-col items-center justify-start">
              <span className="font-bold text-xl">Email</span>
              <a
                href={"mailto:guillermojiga10@gmail.com?,"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cursor-pointer text-sm m-auto text-black hover:text-green-600 duration-300s transition-all">
                  guillermojiga10@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
