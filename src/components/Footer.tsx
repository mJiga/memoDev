import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex grow"></div>
      <footer className="border border-zinc-200 py-6">
        <div className="container mx-auto flex justify-center">
          <span
            className="text-sm font-bold text-black tracking-tight"
            aria-label="Copyright notice"
          >
            All rights reserved &#169; Guillermo Jimenez 2024
          </span>
          <div className="flex items-center justify-center gap-4 ml-8">
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
      </footer>
    </>
  );
};

export default Footer;
