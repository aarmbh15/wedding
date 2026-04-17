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
      dropdown: [
        { name: "PHOTOGRAPHY", path: "/portfolio" },
        { name: "FILMS", path: "/films" },
      ],
    },
    { name: "ABOUT", path: "/about" },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&display=swap');
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? "bg-white/85 backdrop-blur-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-[clamp(24px,5vw,72px)] py-[clamp(20px,2.8vw,22px)] transition-all duration-400">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={TSPLogo}
              alt="TILT SHIFT Films"
              className="h-[54px] w-auto object-contain transition-all hover:opacity-75"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[clamp(28px,3.2vw,52px)]">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path || "#"}
                  className={`font-jost text-[0.85rem] font-semibold tracking-[0.26em] uppercase pb-[3px] border-b-2 border-transparent transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-[#c9a84c] border-[#c9a84c]"
                      : "text-[#1a1a1a] group-hover:text-[#c9a84c] group-hover:border-[#c9a84c]"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl min-w-[180px] py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-3">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-6 py-3 text-[0.75rem] font-semibold tracking-[0.15em] text-[#1a1a1a] hover:text-[#c9a84c] hover:bg-[#f9f9f9] transition-all"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              to="/contact"
              className={`font-jost text-[0.8rem] font-semibold tracking-[0.24em] uppercase px-8 py-[13px] border-2 transition-all duration-300 whitespace-nowrap ${
                isScrolled || isMenuOpen
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a] hover:bg-[#c9a84c] hover:border-[#c9a84c]"
                  : "bg-[#c9a84c] text-[#1a1a1a] border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
              }`}
            >
              Get In Touch
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[7px] w-9 h-9 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] bg-[#1a1a1a] rounded transition-all duration-300 ${
                isMenuOpen ? "w-[30px] rotate-45 translate-y-[9px]" : "w-[30px]"
              }`}
            />
            <span
              className={`block h-[2px] bg-[#1a1a1a] rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "w-[20px]"
              }`}
            />
            <span
              className={`block h-[2px] bg-[#1a1a1a] rounded transition-all duration-300 ${
                isMenuOpen ? "w-[30px] -rotate-45 -translate-y-[9px]" : "w-[30px]"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`overflow-hidden transition-all duration-500 bg-white border-t border-[#eee] ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-5 flex flex-col">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-[#f5f5f5]">
                <Link
                  to={item.path || "#"}
                  className="flex justify-between items-center py-5 font-jost text-[1.1rem] font-semibold tracking-[0.15em] uppercase text-[#1a1a1a]"
                  onClick={() => item.dropdown && setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="text-base">{item.dropdown ? "↓" : "→"}</span>
                </Link>

                {item.dropdown && isMenuOpen && (
                  <div className="pl-5 pb-4 flex flex-col gap-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="py-3 text-[0.85rem] tracking-[0.1em] text-[#666]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 text-center bg-[#1a1a1a] text-white py-[18px] font-semibold tracking-[0.2em] uppercase"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;


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