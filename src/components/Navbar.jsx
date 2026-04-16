// // src/components/Header.jsx
// import TSPLogo from "../assets/TSP_logo.png";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => setIsMenuOpen(false), [location.pathname]);

//   const navItems = [
//     { name: "HOME",      path: "/" },
//     { name: "PORTFOLIO", path: "/portfolio" },
//     { name: "ABOUT",     path: "/about" },
//   ];

//   const isActive = (path) =>
//     path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');

//         .ts-header {
//           position: fixed;
//           top: 0; left: 0; right: 0;
//           z-index: 9000;
//           transition: background 0.5s ease, box-shadow 0.4s ease;
//         }

//         /* Scrolled State */
//         .ts-header.scrolled {
//           background: rgba(255, 255, 255, 0.85);
//           backdrop-filter: blur(18px) saturate(160%);
//           -webkit-backdrop-filter: blur(18px) saturate(160%);
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
//           border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//         }

//         .ts-header.transparent {
//           background: transparent;
//         }

//         .ts-header-inner {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           max-width: 1400px;
//           margin: 0 auto;
//           padding: clamp(20px, 2.8vw, 32px) clamp(24px, 5vw, 72px);
//           transition: padding 0.4s ease;
//         }

//         .ts-header.scrolled .ts-header-inner {
//           padding-top: 16px;
//           padding-bottom: 16px;
//         }

//         /* ── Logo Fix ── */
//         .ts-logo {
//           display: flex;
//           align-items: center;
//           text-decoration: none;
//         }
//         .ts-logo img {
//           height: 54px;
//           width: auto;
//           object-fit: contain;
//           transition: opacity 0.3s, filter 0.4s;
//           /* Removed the invert(1) that was making the logo invisible */
//           filter: none; 
//         }
        
//         /* If your logo is dark and you are on a dark hero section, 
//            uncomment the line below to make it white only when transparent */
//         /* .ts-header.transparent .ts-logo img { filter: brightness(0) invert(1); } */

//         .ts-logo:hover img { opacity: 0.72; }

//         /* ── Desktop nav ── */
//         .ts-nav {
//           display: flex;
//           align-items: center;
//           gap: clamp(28px, 3.2vw, 52px);
//         }
//         @media (max-width: 768px) { .ts-nav { display: none; } }

//         .ts-nav-link {
//           font-family: 'Jost', sans-serif;
//           font-size: 0.85rem;
//           font-weight: 600;
//           letter-spacing: 0.26em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding-bottom: 3px;
//           border-bottom: 2px solid transparent;
//           transition: color 0.3s, border-color 0.3s;
//         }

//         /* Link colors - Transparent State */
//         .ts-header.transparent .ts-nav-link {
//           color: #1a1a1a; /* Changed to dark for visibility; change to #fff if using dark hero images */
//         }
        
//         /* Link colors - Scrolled State */
//         .ts-header.scrolled .ts-nav-link {
//           color: #1a1a1a;
//         }
        
//         .ts-nav-link:hover, .ts-nav-link.active {
//           color: #c9a84c !important;
//           border-bottom-color: #c9a84c;
//         }

//         /* ── CTA button ── */
//         .ts-cta {
//           font-family: 'Jost', sans-serif;
//           font-size: 0.8rem;
//           font-weight: 600;
//           letter-spacing: 0.24em;
//           text-transform: uppercase;
//           text-decoration: none;
//           padding: 13px 32px;
//           border: 2px solid #1a1a1a;
//           transition: all 0.3s ease;
//           white-space: nowrap;
//         }

//         .ts-header.transparent .ts-cta {
//           color: #1a1a1a;
//           background: transparent;
//         }

//         .ts-header.scrolled .ts-cta {
//           color: #fff;
//           background: #1a1a1a;
//           border-color: #1a1a1a;
//         }

//         .ts-cta:hover {
//           background: #c9a84c !important;
//           border-color: #c9a84c !important;
//           color: #fff !important;
//         }

//         /* ── Mobile hamburger ── */
//         .ts-hamburger {
//           display: none;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-end;
//           gap: 7px;
//           width: 36px;
//           height: 36px;
//           background: none;
//           border: none;
//           cursor: pointer;
//           color: #1a1a1a;
//         }
//         @media (max-width: 768px) { .ts-hamburger { display: flex; } }

//         .ts-hamburger span {
//           display: block;
//           height: 2px;
//           background: currentColor;
//           border-radius: 2px;
//           transition: all 0.32s ease;
//         }
//         .ts-hamburger span:nth-child(1) { width: 30px; }
//         .ts-hamburger span:nth-child(2) { width: 20px; }
//         .ts-hamburger span:nth-child(3) { width: 30px; }
//         .ts-hamburger.open span:nth-child(1) { transform: rotate(45deg) translateY(9px); width: 30px; }
//         .ts-hamburger.open span:nth-child(2) { opacity: 0; }
//         .ts-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translateY(-9px); width: 30px; }

//         /* ── Mobile drawer ── */
//         .ts-mobile-drawer {
//           overflow: hidden;
//           max-height: 0;
//           opacity: 0;
//           transition: max-height 0.42s cubic-bezier(.22,1,.36,1), opacity 0.3s ease;
//           background: white;
//           border-top: 1px solid #eee;
//         }
//         .ts-mobile-drawer.open {
//           max-height: 100vh;
//           opacity: 1;
//         }
//         .ts-mobile-drawer-inner {
//           padding: 20px 24px 40px;
//           display: flex;
//           flex-direction: column;
//         }
//         .ts-mobile-link {
//           font-family: 'Jost', sans-serif;
//           font-size: 1.1rem;
//           font-weight: 600;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: #1a1a1a;
//           text-decoration: none;
//           padding: 20px 0;
//           border-bottom: 1px solid #f5f5f5;
//           display: flex;
//           justify-content: space-between;
//         }
//         .ts-mobile-cta {
//           margin-top: 30px;
//           text-align: center;
//           background: #1a1a1a;
//           color: #fff;
//           padding: 18px;
//           text-decoration: none;
//           font-weight: 600;
//           letter-spacing: 0.2em;
//         }
//       `}</style>

//       <header className={`ts-header ${isScrolled || isMenuOpen ? "scrolled" : "transparent"}`}>
//         <div className="ts-header-inner">
//           <Link to="/" className="ts-logo">
//             <img src={TSPLogo} alt="TILT SHIFT Films" />
//           </Link>

//           <nav className="ts-nav">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`ts-nav-link ${isActive(item.path) ? "active" : ""}`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link to="/contact" className="ts-cta">Get In Touch</Link>
//           </nav>

//           <button
//             className={`ts-hamburger ${isMenuOpen ? "open" : ""}`}
//             onClick={() => setIsMenuOpen((v) => !v)}
//             aria-label="Toggle menu"
//           >
//             <span /><span /><span />
//           </button>
//         </div>

//         <div className={`ts-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
//           <div className="ts-mobile-drawer-inner">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`ts-mobile-link ${isActive(item.path) ? "active" : ""}`}
//               >
//                 {item.name}
//                 <span>→</span>
//               </Link>
//             ))}
//             <Link to="/contact" className="ts-mobile-cta">Get In Touch</Link>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

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
    { name: "HOME", path: "/" },
    { 
      name: "PORTFOLIO", 
      // path: "/portfolio",
      dropdown: [
        { name: "PHOTOGRAPHY", path: "/portfolio" },
        { name: "FILMS", path: "/films" }
      ]
    },
    { name: "ABOUT", path: "/about" },
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
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .ts-header.transparent { background: transparent; }

        .ts-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          padding: clamp(20px, 2.8vw, 32px) clamp(24px, 5vw, 72px);
          transition: padding 0.4s ease;
        }

        .ts-header.scrolled .ts-header-inner { padding-top: 16px; padding-bottom: 16px; }

        .ts-logo { display: flex; align-items: center; text-decoration: none; }
        .ts-logo img { height: 54px; width: auto; object-fit: contain; transition: opacity 0.3s, filter 0.4s; filter: none; }
        .ts-logo:hover img { opacity: 0.72; }

        .ts-nav { display: flex; align-items: center; gap: clamp(28px, 3.2vw, 52px); }
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

        .ts-header.transparent .ts-nav-link { color: #1a1a1a; }
        .ts-header.scrolled .ts-nav-link { color: #1a1a1a; }
        .ts-nav-link:hover, .ts-nav-link.active { color: #c9a84c !important; border-bottom-color: #c9a84c; }

        /* ── Dropdown Specific CSS ── */
        .ts-nav-item { position: relative; display: flex; align-items: center; height: 100%; }
        
        .ts-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          padding: 15px 0;
          min-width: 180px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .ts-nav-item:hover .ts-dropdown { opacity: 1; visibility: visible; margin-top: 0; }

        .ts-dropdown-link {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: #1a1a1a;
          text-decoration: none;
          padding: 10px 25px;
          transition: all 0.2s;
        }
        .ts-dropdown-link:hover { color: #c9a84c; background: #f9f9f9; }

        /* ── Mobile Dropdown ── */
        .ts-mobile-sub { padding: 0 0 10px 20px; display: flex; flex-direction: column; }
        .ts-mobile-sub-link { 
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          color: #666;
          text-decoration: none;
          padding: 12px 0;
        }

        .ts-cta {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 13px 32px;
          border: 2px solid #1a1a1a;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .ts-header.transparent .ts-cta { color: #1a1a1a; 
        // background: transparent;
        background: #c9a84c; 
        }
        .ts-header.scrolled .ts-cta { color: #fff; background: #1a1a1a; border-color: #1a1a1a; }
        .ts-cta:hover { background: #c9a84c !important; border-color: #c9a84c !important; color: #fff !important; }

        .ts-hamburger {
          display: none; flex-direction: column; justify-content: center; align-items: flex-end; gap: 7px;
          width: 36px; height: 36px; background: none; border: none; cursor: pointer; color: #1a1a1a;
        }
        @media (max-width: 768px) { .ts-hamburger { display: flex; } }
        .ts-hamburger span { display: block; height: 2px; background: currentColor; border-radius: 2px; transition: all 0.32s ease; }
        .ts-hamburger span:nth-child(1) { width: 30px; }
        .ts-hamburger span:nth-child(2) { width: 20px; }
        .ts-hamburger span:nth-child(3) { width: 30px; }
        .ts-hamburger.open span:nth-child(1) { transform: rotate(45deg) translateY(9px); width: 30px; }
        .ts-hamburger.open span:nth-child(2) { opacity: 0; }
        .ts-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translateY(-9px); width: 30px; }

        .ts-mobile-drawer { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.42s cubic-bezier(.22,1,.36,1), opacity 0.3s ease; background: white; border-top: 1px solid #eee; }
        .ts-mobile-drawer.open { max-height: 100vh; opacity: 1; }
        .ts-mobile-drawer-inner { padding: 20px 24px 40px; display: flex; flex-direction: column; }
        .ts-mobile-link { font-family: 'Jost', sans-serif; font-size: 1.1rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: #1a1a1a; text-decoration: none; padding: 20px 0; border-bottom: 1px solid #f5f5f5; display: flex; justify-content: space-between; }
        .ts-mobile-cta { margin-top: 30px; text-align: center; background: #1a1a1a; color: #fff; padding: 18px; text-decoration: none; font-weight: 600; letter-spacing: 0.2em; }
      `}</style>

      <header className={`ts-header ${isScrolled || isMenuOpen ? "scrolled" : "transparent"}`}>
        <div className="ts-header-inner">
          <Link to="/" className="ts-logo">
            <img src={TSPLogo} alt="TILT SHIFT Films" />
          </Link>

          <nav className="ts-nav">
            {navItems.map((item) => (
              <div key={item.name} className="ts-nav-item">
                <Link
                  to={item.path}
                  className={`ts-nav-link ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.name}
                </Link>
                
                {item.dropdown && (
                  <div className="ts-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="ts-dropdown-link">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="ts-cta">Get In Touch</Link>
          </nav>

          <button
            className={`ts-hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`ts-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
          <div className="ts-mobile-drawer-inner">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`ts-mobile-link ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.name}
                  <span>{item.dropdown ? "↓" : "→"}</span>
                </Link>
                {item.dropdown && (
                  <div className="ts-mobile-sub">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="ts-mobile-sub-link">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="ts-mobile-cta">Get In Touch</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;