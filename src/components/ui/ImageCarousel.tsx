import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

export interface CarouselImage {
  src: string;
  alt: string;
  /** CSS object-position, for framing a crop. Defaults to center. */
  position?: string;
  /** Short label shown over the bottom of the frame. */
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export const ImageCarousel = ({
  images,
  autoPlay = true,
  interval = 5000,
  className = "",
}: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(((index % images.length) + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, images.length]);

  if (images.length === 0) return null;

  const active = images[current];
  const variants = {
    enter: (d: number) => ({ x: reduced ? 0 : d > 0 ? 70 : -70, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: reduced ? 0 : d > 0 ? -70 : 70, opacity: 0 }),
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl2 border border-border bg-paper",
        className,
      )}
    >
      <AnimatePresence custom={direction} mode="wait" initial={false}>
        <motion.img
          key={current}
          src={active.src}
          alt={active.alt}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: active.position ?? "center" }}
        />
      </AnimatePresence>

      {active.caption && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent px-4 pb-9 pt-10">
          <AnimatePresence mode="wait">
            <motion.p
              key={active.caption}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-bone/90"
            >
              {active.caption}
            </motion.p>
          </AnimatePresence>
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full bg-bone/80 p-1.5 text-ink opacity-0 backdrop-blur transition-all duration-300 hover:bg-bone focus-visible:opacity-100 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            onClick={next}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full bg-bone/80 p-1.5 text-ink opacity-0 backdrop-blur transition-all duration-300 hover:bg-bone focus-visible:opacity-100 group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight size={17} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ink/25 px-2.5 py-1.5 backdrop-blur">
            {images.map((image, i) => (
              <button
                key={image.src}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 ease-smooth",
                  i === current ? "w-5 bg-bone" : "w-1.5 bg-bone/45 hover:bg-bone/70",
                )}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === current}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
