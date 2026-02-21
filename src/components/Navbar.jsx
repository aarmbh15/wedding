import TSPLogo from "../assets/TSP_logo.png";

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

// Animated Hamburger Component from Navigation.jsx logic
const AnimatedHamburger = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="flex flex-col justify-center items-end w-8 h-8 text-white hover:text-[#d4af37] focus:outline-none transition-colors"
    aria-expanded={isMenuOpen}
    aria-label="Toggle menu"
  >
    <span
      className={`block h-0.5 w-8 bg-current rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'rotate-45 translate-y-2' : ''
      }`}
    ></span>
    <span
      className={`block h-0.5 w-8 bg-current rounded-full transition-all duration-300 ease-in-out my-1.5 ${
        isMenuOpen ? 'opacity-0' : 'w-6'
      }`}
    ></span>
    <span
      className={`block h-0.5 w-8 bg-current rounded-full transition-all duration-300 ease-in-out ${
        isMenuOpen ? '-rotate-45 -translate-y-2' : ''
      }`}
    ></span>
  </button>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/', icon: <FaHome /> },
    { name: 'ABOUT', path: '/about', icon: <FaInfoCircle /> },
    // { name: 'CONTACT', path: '/contact', icon: <FaEnvelope /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
  to="/" 
  className="flex items-center space-x-3 group" 
  onClick={() => setIsMenuOpen(false)}
>
  {/* Logo Image */}
  <img 
    src={TSPLogo}
    alt="Knots by Amp Logo"
    className="w-20 h-20 object-contain shadow-md group-hover:scale-110 transition-transform duration-300"
  />

</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 text-lg font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#d4af37]'
                    : 'text-white hover:text-[#d4af37]'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                {item.name}
              </Link>
            ))}
           <Link
  to="/contact"
  className="px-6 py-4 bg-[#d4af37] text-[#0f172a] font-semibold rounded-xl hover:bg-[#c9a96e] transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
>
  CONTACT US
  <FaPhoneAlt size={14} />
</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <AnimatedHamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>

        {/* Mobile Menu Content (Integrated from Navigation.jsx style) */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pt-4 pb-8 space-y-2 bg-[#0f172a]/98 backdrop-blur-xl border-t border-white/10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center w-full px-4 py-4 rounded-xl text-left text-lg font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#d4af37] bg-white/10'
                    : 'text-gray-300 hover:text-[#d4af37] hover:bg-white/5'
                }`}
              >
                <span className="mr-4 text-[#d4af37]">{item.icon}</span>
                {item.name}
              </button>
            ))}

            {/* Mobile CTA Button */}
           <Link
  to="/contact"
  className="px-6 py-4 bg-[#d4af37] text-[#0f172a] font-semibold rounded-xl hover:bg-[#c9a96e] transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
>
  CONTACT US
  <FaPhoneAlt size={14} />
</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;