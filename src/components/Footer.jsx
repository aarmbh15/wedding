// src/components/Footer.jsx
import { Link } from "react-router-dom";
import FooterLogo from "../assets/TSP_logo.png";

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap');

        .ts-footer {
          background: #111111;
          /* Reduced top/bottom padding for less empty space */
          padding: 50px clamp(24px, 6vw, 80px) 30px;
          font-family: 'Jost', sans-serif;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .ts-footer-inner {
          max-width: 1200px; /* Narrowed container to bring content closer */
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 30px;
          margin-bottom: 40px; /* Reduced space before bottom bar */
        }

        /* ── Left: Brand & Address ── */
        .ts-footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px; /* Reduced gap between logo and address */
        }
        .ts-footer-logo img {
          height: 42px; /* Slightly smaller logo for better proportions */
          width: auto;
          filter: none;
          opacity: 0.95;
        }

        .ts-footer-address {
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.5);
          max-width: 280px;
          font-weight: 300;
          margin: 0;
        }

        /* ── Right: Contact ── */
        .ts-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 8px; /* Tighter spacing between contact links */
          align-items: flex-end;
          text-align: right;
        }
        .ts-footer-title {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 4px;
        }
        .ts-contact-link {
          font-size: 1rem;
          color: #ffffff;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.3s;
        }
        .ts-contact-link:hover { color: #c9a84c; }
        
        .ts-social-links {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }
        .ts-social-links a {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.3s;
        }
        .ts-social-links a:hover { color: #ffffff; }

        /* ── Bottom Bar ── */
        .ts-footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ts-footer-copy {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.2);
          letter-spacing: 0.08em;
          margin: 0;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          .ts-footer { padding: 40px 24px 20px; }
          .ts-footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 30px;
          }
          .ts-footer-contact { align-items: center; text-align: center; }
          .ts-footer-bottom { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <footer className="ts-footer">
        <div className="ts-footer-inner">
          
          <div className="ts-footer-brand">
            <Link to="/" className="ts-footer-logo">
              <img src={FooterLogo} alt="TILT SHIFT Films" />
            </Link>
            <p className="ts-footer-address">
              Bunglow no 6, Periwinkle Society,<br />
              Near Yogi park Baner, Pune 411045
            </p>
          </div>

          <div className="ts-footer-contact">
            <h4 className="ts-footer-title">Contact</h4>
            <a href="mailto:hello@tiltshiftpictures.com" className="ts-contact-link">
              hello@tiltshiftpictures.com
            </a>
            <a href="tel:+919579328262" className="ts-contact-link">
              +91 95793 28262
            </a>
            <div className="ts-social-links">
              <a href="https://www.instagram.com/tiltshift_pictures?igsh=Mm9zeXQ2bHQxaWk0&utm_source=qr" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/tiltshiftpicture" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.youtube.com/@tiltshiftpictures1623" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>

        <div className="ts-footer-bottom">
          <p className="ts-footer-copy">
            © {new Date().getFullYear()} TILT SHIFT Films.
          </p>
          <p className="ts-footer-copy">
            Pune, India
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;