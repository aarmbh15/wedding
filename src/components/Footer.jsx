// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div>
            <h3 className="text-2xl font-serif font-medium text-white mb-6">
              Knots <span className="text-[#d4af37]">by Amp</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Capturing timeless love stories with elegance and artistry. Your wedding deserves cinematic memories that last forever.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-[#d4af37] hover:text-white transition">Instagram</a>
              <a href="#" className="text-[#d4af37] hover:text-white transition">Pinterest</a>
              <a href="#" className="text-[#d4af37] hover:text-white transition">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#d4af37] transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition">Contact</Link></li>
              <li><a href="#" className="hover:text-[#d4af37] transition">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#d4af37] transition">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition">Cinematic Films</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition">Engagement Sessions</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition">Destination Weddings</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <p className="text-gray-400">Mumbai, Maharashtra, India</p>
            <p className="text-gray-400 mt-2">hello@knotsbyamp.com</p>
            <p className="text-gray-400 mt-2">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Knots by Amp. All rights reserved. Crafted with love.</p>
      </div>
    </footer>
  );
};

export default Footer;