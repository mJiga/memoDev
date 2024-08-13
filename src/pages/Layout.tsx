import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Footer from "../components/Footer";
import Projects from "./Projects";
import Contact from "./Contact";

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hashSelector = location.hash ? location.hash.substring(1) : "";
    const section = document.getElementById(hashSelector);

    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
