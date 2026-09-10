import { FC } from "react";
import { Users } from "lucide-react";

import msftInterns from "../assets/msft-interns.jpg";
import msftCampus from "../assets/msft-campus.jpg";
import msftDesk from "../assets/msft-desk.jpg";
import experience from "../assets/experience.jpeg";
import experience2 from "../assets/experience2.jpg";
import experience3 from "../assets/experience3.jpg";

import { experience as roles, leadership } from "../data/resume";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Timeline } from "../components/ui/Timeline";
import { Reveal } from "../components/ui/Reveal";
import {
  ImageCarousel,
  type CarouselImage,
} from "../components/ui/ImageCarousel";

/**
 * Photos from internships and events. Drop new images into src/assets,
 * import them above, and add an entry here — the carousel picks up the rest.
 */
const gallery: CarouselImage[] = [
  {
    src: msftInterns,
    alt: "Guillermo Jimenez with fellow interns at the Microsoft Plaza sign",
    caption: "Intern cohort — Microsoft Plaza, Redmond",
    position: "center 55%",
  },
  {
    src: msftCampus,
    alt: "The Microsoft sign on the Redmond campus",
    caption: "Redmond campus",
    position: "center 60%",
  },
  {
    src: msftDesk,
    alt: "A laptop on a balcony desk overlooking Pacific Northwest evergreens",
    caption: "Outdoor desk, Building 25",
    position: "center 68%",
  },
  {
    src: experience,
    alt: "Guillermo Jimenez at Microsoft",
    caption: "On campus",
  },
  {
    src: experience2,
    alt: "Guillermo Jimenez working on a project",
    caption: "Heads down",
  },
  {
    src: experience3,
    alt: "Guillermo Jimenez at a tech event",
    caption: "Tech event",
  },
];

const Experience: FC = () => (
  <section id="experience" className="relative w-full bg-paper">
    <div className="section-container">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped"
        accent={["shipped"]}
      >
        Three internships, one research platform and a Google program — each one
        measured by what it saved the people using it.
      </SectionHeading>

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12">
        <Timeline roles={roles} />

        {/* Sidebar: photos + leadership */}
        <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <Reveal direction="right" delay={0.15}>
            <ImageCarousel
              images={gallery}
              className="aspect-[4/3] w-full shadow-card"
              interval={6000}
            />
          </Reveal>

          <Reveal direction="right" delay={0.25}>
            <div className="surface p-6">
              <span className="eyebrow">
                <Users size={13} />
                Leadership
              </span>
              <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
                {leadership.org}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {leadership.role}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft">
                {leadership.period} &middot; {leadership.location}
              </p>
              <p className="mt-4 text-[13.5px] font-light leading-relaxed text-muted">
                {leadership.detail}
              </p>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  </section>
);

export default Experience;
