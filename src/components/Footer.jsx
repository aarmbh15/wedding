// src/components/Footer.jsx
import { Link } from "react-router-dom";
import FooterLogo from "../assets/TSP_logo.png";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        .ts-footer {
          background: #1a1a1a;
          padding: 48px clamp(24px, 6vw, 80px);
          font-family: 'Jost', sans-serif;
        }

        .ts-footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        /* Logo */
        .ts-footer-logo img {
          height: 44px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.3s;
          display: block;
        }
        .ts-footer-logo:hover img { opacity: 1; }

        /* Nav links */
        .ts-footer-nav {
          display: flex;
          align-items: center;
          gap: clamp(20px, 3vw, 40px);
          flex-wrap: wrap;
        }
        .ts-footer-nav a {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.3s;
        }
        .ts-footer-nav a:hover { color: #c9a84c; }

        /* Right: socials + copyright */
        .ts-footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }
        .ts-footer-socials {
          display: flex;
          gap: 20px;
        }
        .ts-footer-socials a {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.3s;
        }
        .ts-footer-socials a:hover { color: #c9a84c; }

        .ts-footer-copy {
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.25);
        }

        /* Mobile: stack everything */
        @media (max-width: 640px) {
          .ts-footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 28px;
          }
          .ts-footer-nav { justify-content: center; }
          .ts-footer-right { align-items: center; }
        }
      `}</style>

      <footer className="ts-footer">
        <div className="ts-footer-inner">

          {/* Logo */}
          <Link to="/" className="ts-footer-logo">
            <img src={FooterLogo} alt="TILT SHIFT Films" />
          </Link>

          {/* Nav */}
          <nav className="ts-footer-nav">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/films">Films</Link> */}
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Right side */}
          <div className="ts-footer-right">
            <div className="ts-footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://youtube.com"   target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            <p className="ts-footer-copy">
              © {new Date().getFullYear()} TILT SHIFT Films. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;