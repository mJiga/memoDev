import Hero from "../components/Hero";
import { Aurora } from "../components/ui/Aurora";

const Home: React.FC = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-bone"
  >
    <Aurora className="opacity-55" />
    <div className="relative mx-auto w-full max-w-3xl px-6 pb-20 pt-32 sm:px-8 md:pt-36">
      <Hero />
    </div>
  </section>
);

export default Home;
