import React from "react";
import { motion } from "framer-motion";

interface IconConfig {
  icon: React.FC<{ className?: string }>;
  label: string;
  size?: "sm" | "md" | "lg";
}

interface AnimatedIconDisplayProps {
  icons: IconConfig[];
}

const AnimatedIconDisplay: React.FC<AnimatedIconDisplayProps> = ({ icons }) => {
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {icons.map((iconConfig, index) => (
          <motion.div
            key={index}
            className={`circle-${index + 1} ${getSizeClass(iconConfig.size)}`}
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            }}
          >
            <Container>
              <iconConfig.icon className={getIconSizeClass(iconConfig.size)} />
            </Container>
          </motion.div>
        ))}
      </div>
      <Sparkles />
    </div>
  );
};

const Container: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        ${className}`}
    >
      {children}
    </div>
  );
};

const Sparkles: React.FC = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  );
};

function getSizeClass(size?: "sm" | "md" | "lg"): string {
  switch (size) {
    case "sm":
      return "h-8 w-8";
    case "md":
      return "h-12 w-12";
    case "lg":
      return "h-16 w-16";
    default:
      return "h-12 w-12";
  }
}

function getIconSizeClass(size?: "sm" | "md" | "lg"): string {
  switch (size) {
    case "sm":
      return "h-4 w-4";
    case "md":
      return "h-6 w-6";
    case "lg":
      return "h-8 w-8";
    default:
      return "h-6 w-6";
  }
}

export default AnimatedIconDisplay;
