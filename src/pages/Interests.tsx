import { FC } from "react";
import { Music, Braces } from "lucide-react";

import interests from "../assets/interests.jpg";
import interests2 from "../assets/interests2.jpg";

import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { ImageCarousel } from "../components/ui/ImageCarousel";

const gallery = [
  {
    src: interests,
    alt: "Guillermo Jimenez at the piano",
    caption: "At the keys",
  },
  {
    src: interests2,
    alt: "Guillermo Jimenez performing in concert",
    caption: "Community concert",
  },
];

const parallels = [
  {
    icon: Music,
    title: "Practice compounds",
    body: "Hours at the keyboard taught me that the boring reps are the ones that make the hard passage effortless later. Same with debugging.",
  },
  {
    icon: Braces,
    title: "Structure sets you free",
    body: "A fugue and a well-factored codebase run on the same idea: strict structure is what makes improvisation safe.",
  },
];

const Interests: FC = () => (
  <section id="interests" className="relative w-full overflow-hidden bg-bone">
    <div className="section-container">
      <SectionHeading
        eyebrow="Beyond the code"
        title="Concert pianist"
        accent={["pianist"]}
      >
        Classical, jazz and reggaeton — and the habits performing built that I
        carry straight into engineering.
      </SectionHeading>

      <div className="mt-16 grid items-center gap-12 md:grid-cols-2 md:gap-14">
        <Reveal direction="left" delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl2 border border-sage/35" />
            <ImageCarousel
              images={gallery}
              className="relative aspect-[4/3] w-full shadow-card"
              interval={6500}
            />
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.18} className="flex flex-col gap-6">
          <p className="text-[15px] font-light leading-[1.8] text-primary/85 md:text-base">
            When I'm not writing code you'll find me at the piano. I love all of
            it — classical, jazz, reggaeton — and I've had the privilege of
            performing in concerts around my community.
          </p>

          <div className="flex flex-col gap-4">
            {parallels.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={0.26 + i * 0.1}>
                <div className="group flex gap-4 rounded-xl2 border border-transparent p-4 transition-colors duration-500 hover:border-border hover:bg-paper">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/12 text-sage-deep transition-transform duration-500 group-hover:scale-110">
                    <Icon size={16} />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-ink">{title}</h3>
                    <p className="mt-1 text-[13.5px] font-light leading-relaxed text-muted">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Interests;
