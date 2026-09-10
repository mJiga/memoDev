import Hero from "../components/Hero";

const Home: React.FC = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-bone"
  >
    <div className="section-container pt-32 pb-20 md:pt-36">
      <Hero />
    </div>
  </section>
);

export default Home;
