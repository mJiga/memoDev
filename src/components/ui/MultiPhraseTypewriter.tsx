import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

export const MultiPhraseTypewriter = ({
  phrases,
  className,
  cursorClassName,
}: {
  phrases: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex].text;
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        }, 100);
      } else {
        setIsPaused(true);
        timer = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, 2000);
      }
    } else if (!isPaused) {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isTyping, isPaused, currentPhraseIndex, phrases]);

  const renderText = () => {
    return (
      <div className="inline-block">
        {currentText.split("").map((char, index) => (
          <span
            key={`char-${index}`}
            className={cn(
              "text-primary",
              phrases[currentPhraseIndex].className
            )}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <div
        className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-serif"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        {renderText()}{" "}
      </div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-sage",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
