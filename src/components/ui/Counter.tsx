import { useEffect, useRef, useState } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/** Counts up to `value` the first time it scrolls into view. */
export const Counter = ({
  value,
  prefix = "",
  suffix = "",
  decimals,
  className,
}: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 22 });
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    if (reduced) return;
    return spring.on("change", (latest) => setDisplay(latest));
  }, [spring, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(places)}
      {suffix}
    </span>
  );
};

export default Counter;
