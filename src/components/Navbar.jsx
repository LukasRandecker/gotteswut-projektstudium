import React, { useState } from "react";
import logo from "../assets/Gotteswut-eyes-weiss.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menü öffnen/schließen
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative h-[15vh] text-white flex justify-between items-center px-8 md:px-10 lg:px-20 py-4 md:py-8">
      {/* Logo und Titel */}
      <div>
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Gotteswut Logo" loading='lazy' className="h-10 md:h-20" />
          <span className="font-chelsea text-xl md:text-5xl">Gotteswut</span>
        </Link>
      </div>

      {/* Desktop Menü */}
      <ul className="hidden lg:flex gap-22 font-chelsea text-lg">
        <li className="hover:text-gray-400 cursor-pointer"><Link to="/team">Team</Link></li>
        <li className="hover:text-gray-400 cursor-pointer"><Link to="/dokumentation">Dokumentation</Link></li>
        <li className="hover:text-gray-400 cursor-pointer"><Link to="/kontakt">Kontakt</Link></li>
      </ul>

      {/* Hamburger Icon für Mobile */}
      <button
        className="lg:hidden z-50 text-2xl"
        onClick={toggleMenu}
        aria-label="Menü öffnen/schließen"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menü */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#0f0f0f] flex flex-col items-center gap-6 py-6 font-chelsea text-lg z-10">
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}><Link to="/team">Team</Link></li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}><Link to="/dokumentation">Dokumentation</Link></li>
          <li className="hover:text-gray-400 cursor-pointer" onClick={toggleMenu}><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
