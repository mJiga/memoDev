import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: "div" | "span" | "li";
}

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

/**
 * Scroll-triggered entrance. Softens to a plain fade when the visitor
 * has asked for reduced motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  duration = 0.75,
  direction = "up",
  distance = 26,
  blur = true,
  once = true,
  amount = 0.2,
  className,
  as = "div",
}: RevealProps) => {
  const reduced = useReducedMotion();
  const sign = offset[direction];

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: (sign.x ?? 0) * distance,
          y: (sign.y ?? 0) * distance,
          filter: blur ? "blur(6px)" : "blur(0px)",
        },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: reduced ? 0.2 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
