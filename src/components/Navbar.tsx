import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { navLinks } from "../data/navigation";

interface NavbarProps {
  active: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ active, isMobile, onLinkClick }) => (
  <nav aria-label="Section navigation">
    <ul className={cn("flex", isMobile ? "flex-col gap-1" : "items-center gap-1")}>
      {navLinks.map(({ id, label }, i) => {
        const isActive = active === id;

        return (
          <motion.li
            key={id}
            initial={isMobile ? { opacity: 0, x: -12 } : false}
            animate={isMobile ? { opacity: 1, x: 0 } : undefined}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Link
              to={`#${id}`}
              onClick={onLinkClick}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative block rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300",
                isMobile && "px-4 py-2.5 text-[15px]",
                isActive ? "text-sage-deep" : "text-primary/65 hover:text-ink",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId={isMobile ? "nav-pill-mobile" : "nav-pill"}
                  className="absolute inset-0 -z-[1] rounded-full bg-sage/12 ring-1 ring-inset ring-sage/25"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {label}
            </Link>
          </motion.li>
        );
      })}
    </ul>
  </nav>
);

export default Navbar;
