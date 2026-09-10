import { ReactNode, Children } from "react";
import { cn } from "../../utils/cn";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full pass. */
  speed?: number;
  reverse?: boolean;
  className?: string;
}

/**
 * Seamless horizontal ticker: the track is duplicated and translated -50%,
 * so the loop point is invisible. Pauses on hover.
 */
export const Marquee = ({
  children,
  speed = 38,
  reverse = false,
  className,
}: MarqueeProps) => {
  const items = Children.toArray(children);

  return (
    <div className={cn("group relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max animate-marquee items-center gap-3 group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-3" aria-hidden={copy === 1}>
            {items}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
