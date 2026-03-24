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
    { name: "HOME",      path: "/" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "FILMS",     path: "/films" },
    { name: "ABOUT",     path: "/about" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

        .ts-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 9000;
          transition: background 0.5s ease, box-shadow 0.4s ease;
        }
        .ts-header.scrolled {
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.1);
        }
        .ts-header.transparent {
          background: transparent;
        }

        .ts-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(20px, 2.8vw, 32px) clamp(24px, 5vw, 72px);
          transition: padding 0.4s ease;
        }
        .ts-header.scrolled .ts-header-inner {
          padding-top: 16px;
          padding-bottom: 16px;
        }

        /* ── Logo ── */
        .ts-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .ts-logo img {
          height: 54px;
          width: auto;
          object-fit: contain;
          transition: opacity 0.3s, filter 0.4s;
        }
        .ts-header.transparent .ts-logo img { filter: brightness(0) invert(1); }
        .ts-header.scrolled   .ts-logo img { filter: none; }
        .ts-logo:hover img { opacity: 0.72; }

        /* ── Desktop nav ── */
        .ts-nav {
          display: flex;
          align-items: center;
          gap: clamp(28px, 3.2vw, 52px);
        }
        @media (max-width: 768px) { .ts-nav { display: none; } }

        .ts-nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 3px;
          border-bottom: 2px solid transparent;
          transition: color 0.3s, border-color 0.3s;
        }
        /* over hero (transparent) */
        .ts-header.transparent .ts-nav-link {
          color: #ffffff;
          text-shadow: 0 1px 6px rgba(0,0,0,0.45);
        }
        .ts-header.transparent .ts-nav-link:hover,
        .ts-header.transparent .ts-nav-link.active {
          color: #fff;
          border-bottom-color: #c9a84c;
        }
        /* after scroll (white bg) */
        .ts-header.scrolled .ts-nav-link {
          color: #1a1a1a;
        }
        .ts-header.scrolled .ts-nav-link:hover,
        .ts-header.scrolled .ts-nav-link.active {
          color: #c9a84c;
          border-bottom-color: #c9a84c;
        }

        /* ── CTA button ── */
        .ts-cta {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 32px;
          border: 2px solid transparent;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          white-space: nowrap;
        }
        .ts-header.transparent .ts-cta {
          color: #fff;
          border-color: rgba(255,255,255,0.7);
          background: transparent;
        }
        .ts-header.transparent .ts-cta:hover {
          background: rgba(255,255,255,0.16);
          border-color: #fff;
        }
        .ts-header.scrolled .ts-cta {
          color: #fff;
          background: #1a1a1a;
          border-color: #1a1a1a;
        }
        .ts-header.scrolled .ts-cta:hover {
          background: #c9a84c;
          border-color: #c9a84c;
        }

        /* ── Mobile hamburger ── */
        .ts-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          gap: 7px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        @media (max-width: 768px) { .ts-hamburger { display: flex; } }

        .ts-hamburger span {
          display: block;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 0.32s ease, opacity 0.32s ease, width 0.32s ease;
        }
        .ts-hamburger span:nth-child(1) { width: 30px; }
        .ts-hamburger span:nth-child(2) { width: 20px; }
        .ts-hamburger span:nth-child(3) { width: 30px; }
        .ts-hamburger.open span:nth-child(1) { transform: rotate(45deg) translateY(6px);  width: 30px; }
        .ts-hamburger.open span:nth-child(2) { opacity: 0; }
        .ts-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translateY(-6px); width: 30px; }

        .ts-header.transparent .ts-hamburger { color: #fff; }
        .ts-header.scrolled   .ts-hamburger { color: #1a1a1a; }

        /* ── Mobile drawer ── */
        .ts-mobile-drawer {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.42s cubic-bezier(.22,1,.36,1), opacity 0.3s ease;
          background: rgba(255,255,255,0.99);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid #f0ece7;
        }
        .ts-mobile-drawer.open {
          max-height: 560px;
          opacity: 1;
        }
        .ts-mobile-drawer-inner {
          padding: 20px clamp(24px, 6vw, 48px) 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ts-mobile-link {
          font-family: 'Jost', sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1a1a1a;
          text-decoration: none;
          padding: 17px 0;
          border-bottom: 1px solid #f0ece7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.3s;
        }
        .ts-mobile-link.active { color: #c9a84c; }
        .ts-mobile-link:hover  { color: #c9a84c; }

        .ts-mobile-cta {
          margin-top: 24px;
          display: block;
          text-align: center;
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #fff;
          background: #1a1a1a;
          padding: 17px 32px;
          text-decoration: none;
          transition: background 0.3s;
        }
        .ts-mobile-cta:hover { background: #c9a84c; }
      `}</style>

      <header className={`ts-header ${isScrolled || isMenuOpen ? "scrolled" : "transparent"}`}>
        <div className="ts-header-inner">

          <Link to="/" className="ts-logo">
            <img src={TSPLogo} alt="TILT SHIFT Films" />
          </Link>

          <nav className="ts-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`ts-nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="ts-cta">Get In Touch</Link>
          </nav>

          <button
            className={`ts-hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`ts-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
          <div className="ts-mobile-drawer-inner">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`ts-mobile-link ${isActive(item.path) ? "active" : ""}`}
              >
                {item.name}
                <span style={{ fontSize: "0.9rem", opacity: 0.3, fontWeight: 400 }}>→</span>
              </Link>
            ))}
            <Link to="/contact" className="ts-mobile-cta">Get In Touch</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;