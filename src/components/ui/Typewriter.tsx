import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../utils/cn";

interface TypewriterProps {
  phrases: string[];
  /** Milliseconds per character while typing. */
  typeSpeed?: number;
  /** Milliseconds per character while deleting. */
  deleteSpeed?: number;
  /** How long a completed phrase holds before it deletes. */
  holdMs?: number;
  className?: string;
}

/**
 * Types a phrase out, holds it, deletes it, moves to the next.
 * Under reduced motion it settles on the first phrase and stays there.
 */
export const Typewriter = ({
  phrases,
  typeSpeed = 100,
  deleteSpeed = 50,
  holdMs = 2000,
  className,
}: TypewriterProps) => {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">(
    "typing",
  );

  useEffect(() => {
    if (reduced) return;

    const phrase = phrases[index];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      timer = setTimeout(
        () =>
          text.length < phrase.length
            ? setText(phrase.slice(0, text.length + 1))
            : setPhase("holding"),
        typeSpeed,
      );
    } else if (phase === "holding") {
      timer = setTimeout(() => setPhase("deleting"), holdMs);
    } else {
      timer = setTimeout(() => {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIndex((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, phrases, reduced, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={cn("relative inline-block align-bottom", className)}>
      {/*
        The longest phrase sits in flow but invisible, reserving the box so
        the lines below never shift as characters come and go. The live text
        is layered over it, left-aligned.
      */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {phrases.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>

      <span className="absolute inset-y-0 left-0 flex items-center whitespace-nowrap">
        <span aria-live="polite">{reduced ? phrases[0] : text}</span>
        {!reduced && (
          <span
            aria-hidden
            className="ml-1.5 inline-block h-[0.85em] w-[3px] shrink-0 rounded-sm bg-sage animate-caret-blink"
          />
        )}
      </span>
    </span>
  );
};

export default Typewriter;
