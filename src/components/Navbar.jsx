// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <img src="/src/assets/logo.png" alt="Wedding Logo" className="h-10" loading="lazy" />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gold hover:text-green px-3 py-2">Home</Link>
            <Link to="/about" className="text-gold hover:text-green px-3 py-2">About</Link>
            <Link to="/contact" className="text-gold hover:text-green px-3 py-2">Contact</Link>
          </div>
          <div className="md:hidden">
            <FaBars onClick={() => setIsOpen(!isOpen)} className="text-gold cursor-pointer" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block text-gold hover:text-green px-3 py-2">Home</Link>
            <Link to="/about" className="block text-gold hover:text-green px-3 py-2">About</Link>
            <Link to="/contact" className="block text-gold hover:text-green px-3 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}