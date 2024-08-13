import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-black shadow-lg z-50 duration-300 transition-all ${
        isScroll ? "py-1" : "py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <span
          className={`flex ml-44 p-2 text-white font-bold tracking-tight duration-300 transition-all ${
            isScroll ? "text-2xl" : "text-5xl"
          }`}
        >
          <div>
            <Link to="#home">
              Memo
              <span className="text-green-600">.dev</span>
            </Link>
          </div>
        </span>
        <div className="flex-grow"></div>
        <span className="flex space-x-2 p-6">
          <Navbar />
        </span>
      </div>
    </header>
  );
};

export default Header;
