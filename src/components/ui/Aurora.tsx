import { cn } from "../../utils/cn";

/** Soft drifting colour fields that sit behind a section. */
export const Aurora = ({ className }: { className?: string }) => (
  <div
    className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    aria-hidden
  >
    <div className="absolute -left-40 -top-32 h-[520px] w-[520px] animate-drift rounded-full bg-sage/25 blur-[130px]" />
    <div
      className="absolute -right-32 top-1/4 h-[440px] w-[440px] animate-drift rounded-full bg-clay/[0.14] blur-[130px]"
      style={{ animationDelay: "-6s", animationDuration: "22s" }}
    />
    <div
      className="absolute bottom-0 left-1/3 h-[380px] w-[380px] animate-drift rounded-full bg-accent-hover/[0.12] blur-[120px]"
      style={{ animationDelay: "-12s", animationDuration: "26s" }}
    />
  </div>
);

export default Aurora;
