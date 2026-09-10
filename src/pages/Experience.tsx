import { FC } from "react";

import msftInterns from "../assets/msft-interns.jpg";
import { experience as companies } from "../data/resume";

import { SectionHeading } from "../components/ui/SectionHeading";
import { Timeline } from "../components/ui/Timeline";
import { ParallaxImage } from "../components/ui/ParallaxImage";

const Experience: FC = () => (
  <section id="experience" className="relative w-full bg-paper">
    <div className="section-container">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've shipped"
        accent={["shipped"]}
      />

      {/* Landscape banner — the group shot needs the width to read. */}
      <ParallaxImage
        src={msftInterns}
        alt="Guillermo Jimenez with fellow interns at the Microsoft Plaza sign in Redmond"
        caption="Intern cohort · Microsoft, Redmond"
        position="center 42%"
        amount={7}
        className="mt-12 h-52 w-full shadow-card sm:h-64 md:h-80"
      />

      <div className="mt-16 max-w-3xl">
        <Timeline companies={companies} />
      </div>
    </div>
  </section>
);

export default Experience;
