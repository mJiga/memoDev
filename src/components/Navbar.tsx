import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("#home");
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.hash || "#home");
  }, [location]);

  return (
    <div>
      <ul className="flex gap-6">
        <li
          className={`font-bold transition-all ${
            currentPage === "#home"
              ? "text-green-700 hover:text-green-600"
              : "text-white hover:text-gray-300 "
          }`}
        >
          <Link to={"#home"}>Home</Link>
        </li>
        <li
          className={`font-bold transition-all ${
            currentPage === "#about"
              ? "text-green-700 hover:text-green-600"
              : "text-white hover:text-gray-300"
          }`}
        >
          <Link to={"#about"}>About</Link>
        </li>
        <li
          className={`font-bold transition-all ${
            currentPage === "#projects"
              ? "text-green-700 hover:text-green-600"
              : "text-white hover:text-gray-300"
          }`}
        >
          <Link to={"#projects"}>Projects</Link>
        </li>
        <li
          className={`font-bold transition-all ${
            currentPage === "#contact"
              ? "text-green-700 hover:text-green-600"
              : "text-white hover:text-gray-300"
          }`}
        >
          <Link to={"#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
