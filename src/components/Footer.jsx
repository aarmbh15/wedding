// src/components/Footer.jsx
import { Link } from "react-router-dom";
import FooterLogo from "../assets/TSP_logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "FILMS", path: "/films" },
    { name: "PHOTOGRAPHY", path: "/portfolio" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-[clamp(24px,6vw,80px)] font-jost">
      <div className="max-w-[1300px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Left: Brand & Address (Takes 4 cols on desktop) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <Link to="/" className="inline-block">
              <img 
                src={FooterLogo} 
                alt="TILT SHIFT Pictures" 
                className="h-[80px] w-auto opacity-95"
              />
            </Link>
            <p className="text-[0.85rem] leading-loose text-white/50 font-light max-w-[260px]">
              Bunglow no 6, Periwinkle Society,<br />
              Near Yogi park Baner, Pune 411045
            </p>
          </div>

          {/* Middle: Navigation Links (Takes 4 cols on desktop) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-center">
            <div className="w-fit">
              <h4 className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-6 text-center md:text-left">
                Explore
              </h4>
              {/* 2-Column Grid for Links */}
              <nav className="grid grid-cols-2 gap-x-12 gap-y-5 text-center md:text-left">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-[0.8rem] tracking-[0.15em] font-medium uppercase text-white/70 hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right: Contact (Takes 4 cols on desktop) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
              Contact
            </h4>
            
            <div className="flex flex-col gap-2 mb-8 items-center md:items-end">
              <a 
                href="mailto:hello@tiltshiftpictures.com" 
                className="font-cormorant text-[1.35rem] tracking-wide text-white hover:text-[#c9a84c] transition-colors duration-300"
              >
                hello@tiltshiftpictures.com
              </a>
              
              <a 
                href="tel:+919579328262" 
                className="font-cormorant text-[1.35rem] tracking-wide text-white hover:text-[#c9a84c] transition-colors duration-300"
              >
                +91 95793 28262
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/tiltshift_pictures?igsh=Mm9zeXQ2bHQxaWk0&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/tiltshiftpicture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a 
                href="https://www.youtube.com/@tiltshiftpictures1623" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem]">
          <p className="text-white/30 tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} TILT SHIFT PICTURES.
          </p>
          <p className="text-white/30 tracking-[0.1em] uppercase">
            Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;