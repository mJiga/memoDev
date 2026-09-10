import { ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { cn } from "../../utils/cn";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees; 0 disables the 3D effect. */
  tilt?: number;
  spotlight?: boolean;
}

/**
 * Card that tilts toward the pointer and carries a cursor-following
 * highlight. Both effects are skipped under reduced-motion.
 */
export const SpotlightCard = ({
  children,
  className,
  tilt = 6,
  spotlight = true,
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { stiffness: 200, damping: 20, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [tilt, -tilt]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-tilt, tilt]),
    spring,
  );

  const glow = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, rgba(129,178,154,0.16), transparent 70%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className={cn("perspective", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={
          reduced || tilt === 0
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group/spot relative h-full rounded-xl2 border border-border bg-card-bg shadow-subtle transition-shadow duration-500 ease-smooth hover:border-sage/40 hover:shadow-card-hover"
      >
        {spotlight && !reduced && (
          <motion.div
            aria-hidden
            style={{ background: glow }}
            className="pointer-events-none absolute inset-0 rounded-xl2 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
          />
        )}
        <div className="relative h-full">{children}</div>
      </motion.div>
    </div>
  );
};

export default SpotlightCard;
