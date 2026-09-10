import { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";
import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string[];
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  accent = [],
  children,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      align === "center" && "items-center text-center",
      className,
    )}
  >
    <Reveal direction="none" duration={0.6}>
      <span className="eyebrow">
        <span className="h-px w-8 bg-sage/60" />
        {eyebrow}
      </span>
    </Reveal>

    <h2 className="section-heading">
      <TextReveal text={title} accent={accent} delay={0.08} />
    </h2>

    {children && (
      <Reveal delay={0.18} className={cn(align === "center" && "flex justify-center")}>
        <p className="section-subheading">{children}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;
