import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** Words rendered in the sage accent colour, matched case-insensitively. */
  accent?: string[];
  once?: boolean;
}

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const word: Variants = {
  hidden: { y: "110%", opacity: 0, rotateX: -40 },
  visible: {
    y: "0%",
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const flat: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

/** Headline that unrolls word by word from behind a clipping mask. */
export const TextReveal = ({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.055,
  accent = [],
  once = true,
}: TextRevealProps) => {
  const reduced = useReducedMotion();
  const accentSet = new Set(accent.map((a) => a.toLowerCase()));

  return (
    <motion.span
      className={cn("inline-block perspective", className)}
      variants={container(reduced ? 0 : delay, reduced ? 0 : stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          aria-hidden
        >
          <motion.span
            className={cn(
              "inline-block",
              accentSet.has(w.replace(/[^\w']/g, "").toLowerCase()) &&
                "text-sage-dark",
              wordClassName,
            )}
            variants={reduced ? flat : word}
          >
            {w}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
