import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "../../utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  caption?: string;
  /** CSS object-position, for framing the crop. */
  position?: string;
  /** Vertical drift in percent as the image crosses the viewport. */
  amount?: number;
  className?: string;
}

/**
 * A single photo that drifts gently against the scroll. Replaces the old
 * carousel — one well-framed image, no cross-fading between crops.
 */
export const ParallaxImage = ({
  src,
  alt,
  caption,
  position = "center",
  amount = 10,
  className,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]),
    { stiffness: 80, damping: 26, restDelta: 0.001 },
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-xl2 border border-border bg-paper",
        className,
      )}
    >
      {/* Oversized so the parallax drift never exposes an edge. */}
      <motion.img
        src={src}
        alt={alt}
        style={{
          objectPosition: position,
          y: reduced ? 0 : y,
          height: `${100 + amount * 2.4}%`,
          top: `-${amount * 1.2}%`,
        }}
        decoding="async"
        className="absolute inset-x-0 w-full object-cover"
      />

      {caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 pb-4 pt-12">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-bone/85">
            {caption}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ParallaxImage;
