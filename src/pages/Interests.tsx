import { FC } from "react";
import interests from "../assets/interests.jpg";
import interests2 from "../assets/interests2.png";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { ImageCarousel } from "../components/ui/ImageCarousel";

const interestImages = [
  { src: interests, alt: "Guillermo Jimenez at the piano" },
  { src: interests2, alt: "Guillermo Jimenez performing" },
];

const Interests: FC = () => {
  return (
    <section id="interests" className="w-full bg-bone">
      <div className="section-container">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="section-heading">Beyond the Code</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">
              What drives me outside of software
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
          <ScrollReveal direction="left" delay={0.2} className="md:w-1/2">
            <ImageCarousel
              images={interestImages}
              className="w-full aspect-square shadow-card"
              interval={7000}
            />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={0.3}
            className="flex flex-col gap-4 md:w-3/5"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-primary">
              Concert Pianist
            </h2>
            <p className="text-sm md:text-base text-primary/80 leading-relaxed">
              When I'm not writing code, you'll find me at the piano. I love all
              kinds of music, from classical and jazz to reggaeton, it's my
              passion! I've had the privilege of performing in concerts in my
              community, sharing my music with the world {":) "}
            </p>
            <p className="text-sm md:text-base text-primary/80 leading-relaxed">
              Both piano and computer science demand a LOT of patience,
              precision, and creativity. The habits and skills I've developed
              through years of practice motivates my approach to problem solving
              and building elegant solutions in code.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Interests;
