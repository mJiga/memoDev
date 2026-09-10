import { motion, useScroll, useSpring } from "framer-motion";

/** Hairline progress bar pinned under the header. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-sage via-sage-dark to-clay"
      aria-hidden
    />
  );
};

export default ScrollProgress;
