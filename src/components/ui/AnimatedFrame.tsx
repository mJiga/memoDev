import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

interface AnimatedFrameProps {
  src: string;
  alt: string;
  /** When the ring starts tracing itself, in seconds. */
  delay?: number;
  className?: string;
}

/**
 * Round portrait inside a ring that traces itself on mount, a slow
 * counter-rotating dashed ring, and a dot orbiting the edge.
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
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Solid ring, traced on mount */}
      <svg
        className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] -rotate-90"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <motion.circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-sage/70"
          initial={{ pathLength: reduced ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: reduced ? 0 : 1.8,
            delay: delay + 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </svg>

      {/* Dashed ring drifting the other way */}
      <motion.svg
        className="pointer-events-none absolute -inset-7 h-[calc(100%+3.5rem)] w-[calc(100%+3.5rem)]"
        viewBox="0 0 100 100"
        aria-hidden
        animate={reduced ? {} : { rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <circle
          cx="50"
          cy="50"
          r="49"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.3"
          strokeDasharray="1.5 3.5"
          className="text-sage/35"
        />
      </motion.svg>

      {/* Dot riding the inner ring */}
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute -inset-3"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage shadow-glow" />
        </motion.div>
      )}

      <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-paper shadow-card">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-[center_18%] transition-transform duration-[1.4s] ease-smooth hover:scale-[1.06]"
        />
      </div>
    </motion.div>
  );
};

export default AnimatedFrame;
