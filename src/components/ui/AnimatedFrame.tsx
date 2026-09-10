import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

interface AnimatedFrameProps {
  src: string;
  alt: string;
  /** When the frame starts drawing itself, in seconds. */
  delay?: number;
  className?: string;
}

/**
 * Portrait wrapped in an offset outline that traces itself on mount, then
 * drifts slowly. The corner ticks draw in behind it.
 */
export const AnimatedFrame = ({
  src,
  alt,
  delay = 0,
  className,
}: AnimatedFrameProps) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Outline that traces itself, offset behind the photo */}
      <motion.svg
        className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        animate={reduced ? {} : { x: [0, 5, 0], y: [0, -4, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          vectorEffect="non-scaling-stroke"
          className="text-sage/60"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: reduced ? 0 : 1.8,
            delay: delay + 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.svg>

      {/* Corner ticks */}
      {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(
        (pos, i) => (
          <motion.span
            key={pos}
            className={cn("absolute h-1.5 w-1.5 rounded-full bg-sage", pos)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + 1.5 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        ),
      )}

      <div className="relative overflow-hidden rounded-2xl border border-border bg-paper shadow-card">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-[center_18%] transition-transform duration-[1.4s] ease-smooth hover:scale-[1.05]"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedFrame;
