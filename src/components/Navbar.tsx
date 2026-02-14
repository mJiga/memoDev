import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  isScrolled?: boolean;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const navLinks = [
  { hash: "#home", label: "Home" },
  { hash: "#experience", label: "Experience" },
  { hash: "#projects", label: "Projects" },
  { hash: "#interests", label: "Interests" },
  { hash: "#contact", label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ isMobile, onLinkClick }) => {
  const [currentPage, setCurrentPage] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.hash || "#home");
  }, [location]);

  return (
    <nav>
      <ul className={`flex ${isMobile ? "flex-col gap-4" : "gap-8"}`}>
        {navLinks.map(({ hash, label }) => (
          <li key={hash}>
            <Link
              to={hash}
              onClick={onLinkClick}
              className={`font-medium transition-all duration-300 ${
                currentPage === hash
                  ? "text-sage border-b-2 border-sage pb-1"
                  : "text-primary/70 hover:text-sage"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
