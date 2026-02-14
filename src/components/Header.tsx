import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScroll
          ? "bg-bone/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center">
        <Link
          to="#home"
          className={`font-serif tracking-tight transition-all duration-300 ${
            isScroll ? "text-2xl" : "text-3xl md:text-4xl"
          } ${isScroll ? "text-primary" : "text-primary"}`}
        >
          memo<span className="text-sage">.dev</span>
        </Link>

        <div className="hidden md:block">
          <Navbar isScrolled={isScroll} />
        </div>

        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <nav className="md:hidden bg-bone/95 backdrop-blur-md border-t border-border/50 px-6 py-4">
          <Navbar
            isScrolled={true}
            isMobile
            onLinkClick={() => setIsMobileOpen(false)}
          />
        </nav>
      )}
    </header>
  );
};

export default Header;
