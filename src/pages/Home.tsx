import Hero from "../components/Hero";

const Home: React.FC = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-white"></div>
      <div className="relative w-full h-full min-h-screen pb-20 flex items-center justify-center text-white z-10">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
