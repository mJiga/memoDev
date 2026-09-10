import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Navbar from "./Navbar";
import { useActiveSection } from "../hooks/useActiveSection";
import { sectionIds } from "../data/navigation";
import { cn } from "../utils/cn";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        isScrolled
          ? "border-b border-border/70 bg-bone/80 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          to="#home"
          className={cn(
            "font-serif tracking-tight text-ink transition-all duration-500 ease-smooth",
            isScrolled ? "text-2xl" : "text-[1.75rem] md:text-3xl",
          )}
        >
          memo<span className="text-sage-dark">.dev</span>
        </Link>

        <div className="hidden md:block">
          <Navbar active={active} />
        </div>

        <button
          className="-mr-2 p-2 text-ink md:hidden"
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/70 bg-bone/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-4">
              <Navbar
                active={active}
                isMobile
                onLinkClick={() => setIsMobileOpen(false)}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
