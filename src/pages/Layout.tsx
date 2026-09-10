import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ui/ScrollProgress";

import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Interests from "./Interests";
import Contact from "./Contact";

const HEADER_OFFSET = 88;

const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.slice(1);
    if (!id) return;

    const section = document.getElementById(id);
    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [location]);

  return (
    <div className="grain flex min-h-screen flex-col bg-bone">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Home />
        <Experience />
        <Projects />
        <Skills />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
