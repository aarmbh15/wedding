// src/components/Header.jsx
import TSPLogo from "../assets/TSP_logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const navItems = [
    { name: "HOME", path: "/" },
    {
    //   name: "PHOTOGRAPHY",
      name: "PORTFOLIO",
      dropdown: [
        { name: "FILMS", path: "/films" },
        { name: "PHOTOGRAPHY", path: "/portfolio" },
      ],
    },
    { name: "ABOUT", path: "/about" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  // Helper variable to check if the header has a solid white background
  const isSolidHeader = isScrolled || isMenuOpen;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isSolidHeader
            ? "bg-white/85 backdrop-blur-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-[clamp(24px,5vw,72px)] py-[clamp(20px,2.8vw,22px)] transition-all duration-400">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={TSPLogo}
              alt="TILT SHIFT Films"
              className="h-[54px] w-auto object-contain transition-all hover:opacity-75"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[clamp(28px,3.2vw,52px)]">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path || "#"}
                  className={`font-jost text-[0.85rem] font-semibold tracking-[0.26em] uppercase pb-[3px] border-b-2 border-transparent transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#c9a84c] border-[#c9a84c]"
                      : isSolidHeader
                      ? "text-[#1a1a1a] group-hover:text-[#c9a84c] group-hover:border-[#c9a84c]"
                      : "text-white group-hover:text-[#c9a84c] group-hover:border-[#c9a84c]"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl min-w-[180px] py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-3">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-[0.75rem] font-semibold tracking-[0.15em] text-[#1a1a1a] hover:text-[#c9a84c] hover:bg-[#f9f9f9] transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`font-jost text-[0.8rem] font-semibold tracking-[0.24em] uppercase px-8 py-[13px] border-2 transition-all duration-300 whitespace-nowrap ${
                isSolidHeader
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#c9a84c] hover:border-[#c9a84c]"
                  : "bg-[#c9a84c] text-[#1a1a1a] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              Get In Touch
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[7px] w-9 h-9 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                isSolidHeader ? "bg-[#1a1a1a]" : "bg-white"
              } ${
                isMenuOpen ? "w-[30px] rotate-45 translate-y-[9px]" : "w-[30px]"
              }`}
            />
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                isSolidHeader ? "bg-[#1a1a1a]" : "bg-white"
              } ${
                isMenuOpen ? "opacity-0" : "w-[20px]"
              }`}
            />
            <span
              className={`block h-[2px] rounded transition-all duration-300 ${
                isSolidHeader ? "bg-[#1a1a1a]" : "bg-white"
              } ${
                isMenuOpen ? "w-[30px] -rotate-45 -translate-y-[9px]" : "w-[30px]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`overflow-hidden transition-all duration-500 bg-white border-t border-[#eee] ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-5 flex flex-col">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-[#f5f5f5]">
                <Link
                  to={item.path || "#"}
                  className="flex justify-between items-center py-5 font-jost text-[1.1rem] font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]"
                  onClick={() => item.dropdown && setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="text-base">{item.dropdown ? "↓" : "→"}</span>
                </Link>

                {item.dropdown && isMenuOpen && (
                  <div className="pl-5 pb-4 flex flex-col gap-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="py-3 text-[0.85rem] tracking-[0.1em] text-[#666]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 text-center bg-[#1a1a1a] text-white py-[18px] font-semibold tracking-[0.2em] uppercase"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;