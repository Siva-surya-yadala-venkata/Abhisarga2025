import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the hamburger menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-[#24222d] bg-opacity-60"
          : "bg-transparent"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-[#F7E290] text-2xl font-bold font-harrypotter"
        >
          <img
            src="/full_logo.png"
            alt="Logo"
            className="w-30 h-10 mr-2"
          />
        </Link>

        {/* Hamburger for small screens */}
        <div className="md:hidden text-[#F7E290] text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter hover:border-b-2 hover:border-[#F7E290] pb-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter hover:border-b-2 hover:border-[#F7E290] pb-1"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter hover:border-b-2 hover:border-[#F7E290] pb-1"
          >
            Event
          </Link>
          <Link
            to="/contact"
            className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter hover:border-b-2 hover:border-[#F7E290] pb-1"
          >
            Contact
          </Link>
          <Link
            to="/acomodation"
            className="text-[#F7E290] hover:text-[#F7E290] transition duration-300 font-harrypotter hover:border-b-2 hover:border-[#F7E290] pb-1"
          >
            Acomodation
          </Link>
        </div>

        {/* Links for small screens */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#24222d] bg-opacity-90 text-center space-y-4 py-4 flex flex-col md:hidden">
            <Link
              to="/"
              className="text-[#F7E290] text-lg hover:text-[#F7E290] transition duration-300 font-harrypotter"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#F7E290] text-lg hover:text-[#F7E290] transition duration-300 font-harrypotter"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-[#F7E290] text-lg hover:text-[#F7E290] transition duration-300 font-harrypotter"
              onClick={() => setIsMenuOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/contact"
              className="text-[#F7E290] text-lg hover:text-[#F7E290] transition duration-300 font-harrypotter"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/acomodation"
              className="text-[#F7E290] text-lg hover:text-[#F7E290] transition duration-300 font-harrypotter"
              onClick={() => setIsMenuOpen(false)}
            >
              Acomodation
            </Link>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
