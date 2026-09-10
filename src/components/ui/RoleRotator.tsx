import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

interface RoleRotatorProps {
  roles: string[];
  interval?: number;
  className?: string;
}

/** Cycles through job descriptors with a masked vertical slide. */
export const RoleRotator = ({
  roles,
  interval = 2600,
  className,
}: RoleRotatorProps) => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || roles.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval,
    );
    return () => clearInterval(id);
  }, [roles.length, interval, reduced]);

  return (
    <span
      className={cn(
        "relative inline-flex h-[1.25em] items-center overflow-hidden align-bottom",
        className,
      )}
    >
      {/* popLayout: the outgoing word is pulled out of flow so the incoming
          one takes its place immediately — no empty frame between phrases. */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        aria-hidden
        className="ml-1 inline-block h-[0.9em] w-[3px] shrink-0 rounded-sm bg-sage animate-caret-blink"
      />
    </span>
  );
};

export default RoleRotator;
