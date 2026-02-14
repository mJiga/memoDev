import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import Experience from "./Experience";
import Footer from "../components/Footer";
import Interests from "./Interests";
import Projects from "./Projects";
import Contact from "./Contact";

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hashSelector = location.hash ? location.hash.substring(1) : "";
    const section = document.getElementById(hashSelector);

    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-bone">
      <Header />
      <main className="flex-grow">
        <Home />
        <Experience />
        <Interests />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
