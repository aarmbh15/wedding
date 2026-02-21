// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // assuming react-router-dom

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f172a]/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c9a96e] flex items-center justify-center text-[#0f172a] font-serif text-2xl font-bold shadow-md group-hover:scale-110 transition-transform">
            K
          </div>
          <span className="text-2xl font-serif font-medium tracking-wider text-white">
            Knots <span className="text-[#d4af37]">by Amp</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? 'text-[#d4af37]'
                  : 'text-white hover:text-[#d4af37]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          {/* Optional CTA Button */}
          <a
            href="mailto:hello@knotsbyamp.com"
            className="px-6 py-3 bg-[#d4af37] text-[#0f172a] font-semibold rounded-full hover:bg-[#c9a96e] transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button (add later if needed) */}
        <button className="md:hidden text-white text-3xl">☰</button>
      </div>
    </header>
  );
};

export default Header;