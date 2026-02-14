import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <section id="home" className="bg-bone">
      <div className="section-container min-h-screen flex items-center justify-center pt-24">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
