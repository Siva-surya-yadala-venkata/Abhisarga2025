import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the page is scrolled

  // Effect to add/remove background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // If scrolled more than 50px
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
      className={`fixed top-0 left-0 w-full z-50 py-4 px-10 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-[#24222d] bg-opacity-60"
          : "bg-transparent"
      }`}
      style={{ zIndex: 9999 }} // Explicit z-index value to ensure navbar stays on top
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center text-[#F7E290] text-2xl font-bold ml-10 font-harrypotter"
        >
          <img
            src="/full_logo.png" // Replace with the correct path to your image
            alt="Logo"
            className="w-30 h-10 mr-2" // Adjust the size of the image and the margin to space out text and image
          />
        </Link>
        <div className="space-x-6">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
