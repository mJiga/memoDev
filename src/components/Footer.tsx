import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-sm font-medium text-muted tracking-tight text-bone"
          aria-label="Copyright notice"
        >
          All rights reserved &#169; Guillermo Jimenez{" "}
          {new Date().getFullYear()}
        </span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mJiga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-300 hover:text-sage"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/guillermojiga"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors duration-300 hover:text-accent-hover"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
