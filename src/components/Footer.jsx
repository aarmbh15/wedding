// src/components/Footer.jsx
import { Link } from "react-router-dom";
import FooterLogo from "../assets/TSP_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-12 pb-8 px-[clamp(24px,6vw,80px)] border-t border-white/5 font-jost">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-8 mb-10">
          
          {/* Left: Brand & Address */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block">
              <img 
                src={FooterLogo} 
                alt="TILT SHIFT Films" 
                className="h-[72px] w-auto opacity-95"
              />
            </Link>
            <p className="text-[0.88rem] leading-relaxed text-white/50 font-light max-w-[280px]">
              Bunglow no 6, Periwinkle Society,<br />
              Near Yogi park Baner, Pune 411045
            </p>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <h4 className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[#c9a84c] mb-1">
              Contact
            </h4>
            
            <a 
              href="mailto:hello@tiltshiftpictures.com" 
              className="text-[1rem] text-white hover:text-[#c9a84c] transition-colors duration-300"
            >
              hello@tiltshiftpictures.com
            </a>
            
            <a 
              href="tel:+919579328262" 
              className="text-[1rem] text-white hover:text-[#c9a84c] transition-colors duration-300"
            >
              +91 95793 28262
            </a>

            {/* Social Links */}
            <div className="flex gap-5 mt-4">
              <a 
                href="https://www.instagram.com/tiltshift_pictures?igsh=Mm9zeXQ2bHQxaWk0&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/tiltshiftpicture" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a 
                href="https://www.youtube.com/@tiltshiftpictures1623" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/40 hover:text-white transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-white/20 tracking-[0.08em]">
            © {new Date().getFullYear()} TILT SHIFT Films.
          </p>
          <p className="text-white/20 tracking-[0.08em]">
            Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;