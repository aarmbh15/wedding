import { memo } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import FooterLogo from "../assets/TSP_logo.png";

const FOOTER_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Films", path: "/films" },
  { name: "Photography", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tiltshift_pictures?igsh=Mm9zeXQ2bHQxaWk0&utm_source=qr",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/tiltshiftpicture",
    Icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@tiltshiftpictures1623",
    Icon: Youtube,
  },
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = memo(function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 px-[clamp(24px,6vw,80px)] font-jost">
      <div className="max-w-[1300px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Left: Brand, Tagline & Socials */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <Link to="/" className="inline-block">
              <img
                src={FooterLogo}
                alt="TILT SHIFT Pictures"
                width={200}
                height={80}
                loading="lazy"
                decoding="async"
                className="h-[80px] w-auto opacity-95"
              />
            </Link>

            <p className="text-[0.85rem] leading-loose text-white/50 font-light max-w-[300px]">
              Capturing genuine emotions and candid moments, turning every wedding into a story worth remembering.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-[#c9a84c] hover:text-black transition-colors duration-300"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle: Navigation Links */}
          <div className="md:col-span-3 md:col-start-6 flex flex-col items-center md:items-start">
            <h4 className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
              Explore
            </h4>
            <nav className="flex flex-col items-center md:items-start gap-4">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[0.9rem] font-medium text-white/70 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Contact */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[0.75rem] font-semibold tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
              Reach Us
            </h4>

            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#c9a84c] shrink-0">
                  <MapPin size={15} strokeWidth={1.5} />
                </span>
                <p className="text-[0.85rem] text-white/70 leading-relaxed max-w-[240px] text-left">
                  Bunglow no 6, Periwinkle Society, Near Yogi park Baner, Pune 411045
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#c9a84c] shrink-0">
                  <Mail size={15} strokeWidth={1.5} />
                </span>
                <a
                  href="mailto:hello@tiltshiftpictures.com"
                  className="text-[0.85rem] text-white/70 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  hello@tiltshiftpictures.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-[#c9a84c] shrink-0">
                  <Phone size={15} strokeWidth={1.5} />
                </span>
                <a
                  href="tel:+919579328262"
                  className="text-[0.85rem] text-white/70 hover:text-[#c9a84c] transition-colors duration-300"
                >
                  +91 95793 28262
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex justify-center">
          <p className="text-white/30 tracking-[0.1em] uppercase text-[0.75rem] text-center">
            © {CURRENT_YEAR} TILT SHIFT PICTURES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;