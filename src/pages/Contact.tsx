import { MdOutlineEmail, MdPinDrop } from "react-icons/md";
import { ScrollReveal } from "../components/ui/ScrollReveal";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-bone">
      <div className="section-container">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Contact</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subheading">
              Let's break the ice! Hit me up!
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <hr className="w-24 mx-auto border-sage/30" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <ScrollReveal delay={0.2} direction="left">
            <div className="earthy-card p-8 flex flex-col items-center text-center">
              <div className="bg-sage/10 rounded-full p-4 mb-4 text-primary hover:text-sage transition-colors duration-300">
                <MdPinDrop className="text-3xl" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-1 text-primary">
                Location
              </h3>
              <span className="text-sm text-muted">El Paso, TX</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="earthy-card p-8 flex flex-col items-center text-center">
              <div className="bg-sage/10 rounded-full p-4 mb-4 text-primary hover:text-sage transition-colors duration-300">
                <MdOutlineEmail className="text-3xl" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-1 text-primary">
                Email
              </h3>
              <a
                href="mailto:guillermojiga10@gmail.com"
                className="text-sm text-muted hover:text-sage transition-colors duration-300"
              >
                guillermojiga10@gmail.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mt-10">
            <a href="mailto:guillermojiga10@gmail.com" className="btn-primary">
              Send Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
