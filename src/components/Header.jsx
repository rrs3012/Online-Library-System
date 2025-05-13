import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-4 sm:px-10 py-4 bg-purple-200 bg-opacity-90 backdrop-blur-lg shadow-lg border-b border-purple-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" 
          alt="Library Logo"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border-2 border-purple-400 shadow-md transition-transform duration-300 hover:rotate-12 hover:scale-110"
        />
        <h1 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 tracking-wide">
          Lavender Library
        </h1>
      </div>

      {/* Hamburger Button */}
      <button
        className="sm:hidden text-purple-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`w-full sm:w-auto ${
          isOpen ? "block" : "hidden"
        } sm:flex flex-col sm:flex-row gap-4 sm:gap-8 text-base sm:text-lg font-semibold mt-4 sm:mt-0`}
      >
        <Link 
          to="/" 
          className="text-purple-700 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-300 px-4 py-2 rounded-lg shadow-md hover:shadow-purple-300/50"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/browsebook" 
          className="text-purple-700 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-300 px-4 py-2 rounded-lg shadow-md hover:shadow-purple-300/50"
          onClick={() => setIsOpen(false)}
        >
          Explore Stories
        </Link>
        <Link 
          to="/addbook" 
          className="text-purple-700 hover:text-purple-600 transition-colors duration-300 hover:bg-purple-300 px-4 py-2 rounded-lg shadow-md hover:shadow-purple-300/50"
          onClick={() => setIsOpen(false)}
        >
          Share a Story
        </Link>
      </nav>
    </header>
  );
}

export default Header;