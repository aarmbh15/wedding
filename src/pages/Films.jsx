// // src/pages/Films.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { Helmet } from "react-helmet-async";

// // ─── Data with your YouTube Links ──────────────────────────────────────────
// const films = [
//   { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune", category: "Destination" },
//   { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Goa", category: "Coastal" },
//   { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Mahabaleshwar", category: "Destination" },
//   { couple: "Harjyot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Royal Palace", category: "Royal" },
//   { couple: "Pradyumna & Drushti", url: "https://youtu.be/ER4o6k5L3J0", id: "ER4o6k5L3J0", location: "Pune", category: "City" },
//   { couple: "Dhriti & Lakshya", url: "https://youtu.be/QV-GVZNHNDo", id: "QV-GVZNHNDo", location: "Jaipur", category: "Royal" },
//   { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Mumbai", category: "City" },
//   { couple: "Cp & Amol", url: "https://youtu.be/8UMiPZMhUE4", id: "8UMiPZMhUE4", location: "Pune", category: "Destination" },
//   { couple: "Indrajeet & Sakshi", url: "https://youtu.be/R0F2tWN8oLc", id: "R0F2tWN8oLc", location: "Nashik", category: "City" },
//   { couple: "Nidhi & Kunal", url: "https://youtu.be/ex_Fs-BiUC0", id: "ex_Fs-BiUC0", location: "Mumbai", category: "Coastal" },
//   { couple: "Omkar & Apoorva", url: "https://youtu.be/DCCGOXaPCHQ", id: "DCCGOXaPCHQ", location: "Pune", category: "City" },
//   { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur", category: "Royal" },
//   { couple: "Utsav & Dyuthi", url: "https://youtu.be/nHDxp0WJqaE", id: "nHDxp0WJqaE", location: "Bangalore", category: "Destination" },
// ];

// const categories = ["All", "Destination", "Royal", "Coastal", "City"];

// // ─── Individual Film Card Component ──────────────────────────────────────────
// function FilmCard({ film }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const openVideo = () => {
//     window.open(film.url, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div
//       onClick={openVideo}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ cursor: "pointer", width: "100%" }}
//     >
//       <div style={{
//         position: "relative",
//         aspectRatio: "16/9", // Cinematic widescreen ratio
//         overflow: "hidden",
//         background: "#ede9e3",
//         marginBottom: "1.2rem",
//       }}>
//         {/* Static Thumbnail (High Res) */}
//         <img
//           src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
//           alt={film.couple}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: isHovered ? "none" : "block", // Hide image on hover
//           }}
//         />

//         {/* Video Preview on Hover */}
//         {isHovered && (
//           <iframe
//             style={{
//               width: "100%",
//               height: "100%",
//               border: "none",
//               pointerEvents: "none", // Clicks pass through to the parent div
//               transform: "scale(1.15)", // Slight zoom to hide YouTube UI edges
//             }}
//             src={`https://www.youtube.com/embed/${film.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${film.id}&rel=0&modestbranding=1&start=10`}
//             title={film.couple}
//             allow="autoplay; encrypted-media"
//           />
//         )}

//         {/* Overlay Label */}
//         <div style={{
//           position: "absolute",
//           inset: 0,
//           background: isHovered ? "rgba(0,0,0,0.15)" : "transparent",
//           transition: "background 0.4s ease",
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "center",
//           paddingBottom: 20
//         }}>
//           <span style={{
//             fontFamily: "'Jost', sans-serif",
//             fontSize: "0.68rem",
//             fontWeight: 500,
//             letterSpacing: "0.28em",
//             textTransform: "uppercase",
//             color: "#fff",
//             opacity: isHovered ? 1 : 0,
//             transform: isHovered ? "translateY(0)" : "translateY(10px)",
//             transition: "all 0.35s ease",
//           }}>
//             Watch Full Film →
//           </span>
//         </div>
//       </div>

//       {/* Info */}
//       <h3 style={{
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: "1.3rem",
//         fontWeight: 400,
//         color: "#1a1a1a",
//         marginBottom: "0.2rem",
//         transition: "color 0.3s",
//         color: isHovered ? "#c9a84c" : "#1a1a1a"
//       }}>
//         {film.couple}
//       </h3>
//       <p style={{
//         fontFamily: "'Jost', sans-serif",
//         fontSize: "0.72rem",
//         letterSpacing: "0.15em",
//         textTransform: "uppercase",
//         color: "#999"
//       }}>
//         {film.location}
//       </p>
//     </div>
//   );
// }

// // ─── Main Page ───────────────────────────────────────────────────────────────
// export default function Films() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filtered = activeCategory === "All"
//     ? films
//     : films.filter((f) => f.category === activeCategory);

//   return (
//     <>
//         <Helmet>
//             <title>Films · TILT SHIFT Films</title>
//             <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
//             <style>{`
//             body { background: #f7f5f1; margin: 0; }
//             .film-grid {
//                 display: grid;
//                 grid-template-columns: repeat(2, 1fr);
//                 gap: 40px;
//                 padding: 40px 0;
//             }
//             @media (max-width: 768px) {
//                 .film-grid { grid-template-columns: 1fr; gap: 32px; }
//             }
//             .pf-pill {
//                 font-family: 'Jost', sans-serif;
//                 font-size: 0.72rem;
//                 letter-spacing: 0.22em;
//                 text-transform: uppercase;
//                 background: none;
//                 border: 1px solid #d6d0c8;
//                 padding: 9px 22px;
//                 cursor: pointer;
//                 transition: all 0.25s;
//                 color: #888;
//             }
//             .pf-pill.active { background: #1a1a1a; border-color: #1a1a1a; color: #fff; }
//             `}</style>
//         </Helmet>

//       {/* Hero */}
//       <div style={{ paddingTop: "140px", paddingBottom: "60px", textAlign: "center" }}>
//         <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb", marginBottom: "1rem" }}>
//           Cinematic Storytelling
//         </p>
//         <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300, color: "#1a1a1a" }}>
//           Films
//         </h1>
//       </div>

//       {/* Filters */}
//       <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: "40px" }}>
//         {categories.map(cat => (
//           <button 
//             key={cat} 
//             className={`pf-pill ${activeCategory === cat ? "active" : ""}`}
//             onClick={() => setActiveCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 100px" }}>
//         <div className="film-grid">
//           {filtered.map((film, index) => (
//             <FilmCard key={index} film={film} />
//           ))}
//         </div>
//       </div>

//       {/* ── CTA strip ───────────────────────────────────────────────────────── */}
//       <div style={{
//         background: "#1a1a1a",
//         padding: "clamp(52px,7vw,80px) clamp(24px,6vw,80px)",
//         textAlign: "center",
//       }}>
//         <p style={{
//           fontFamily: "'Jost', sans-serif",
//           fontSize: "0.72rem", fontWeight: 500,
//           letterSpacing: "0.3em", textTransform: "uppercase",
//           color: "rgba(255,255,255,0.35)", marginBottom: "1.2rem",
//         }}>
//           Limited Availability · 2025–26
//         </p>
//         <h2 style={{
//           fontFamily: "'Cormorant Garamond', serif",
//           fontSize: "clamp(2rem, 4vw, 3.4rem)",
//           fontWeight: 300, color: "#fff",
//           lineHeight: 1.2, marginBottom: "2.2rem",
//         }}>
//           Your story deserves to be<br />
//           <em style={{ fontStyle: "italic" }}>told beautifully</em>
//         </h2>
//         <a
//           href="/contact"
//           style={{
//             display: "inline-block",
//             fontFamily: "'Jost', sans-serif",
//             fontSize: "0.78rem", fontWeight: 500,
//             letterSpacing: "0.24em", textTransform: "uppercase",
//             color: "#fff", textDecoration: "none",
//             border: "1px solid rgba(255,255,255,0.4)",
//             padding: "14px 40px",
//             transition: "background 0.3s, border-color 0.3s",
//           }}
//           onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.borderColor = "#c9a84c"; }}
//           onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
//         >
//           Get In Touch →
//         </a>
//       </div>
//     </>
//   );
// }

// src/pages/Films.jsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

// ─── Data ───────────────────────────────────────────────────────────────────
const films = [
  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune", category: "Destination" },
  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Goa", category: "Coastal" },
  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Mahabaleshwar", category: "Destination" },
  { couple: "Harjyot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Royal Palace", category: "Royal" },
  { couple: "Pradyumna & Drushti", url: "https://youtu.be/ER4o6k5L3J0", id: "ER4o6k5L3J0", location: "Pune", category: "City" },
  { couple: "Dhriti & Lakshya", url: "https://youtu.be/QV-GVZNHNDo", id: "QV-GVZNHNDo", location: "Jaipur", category: "Royal" },
  { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Mumbai", category: "City" },
  { couple: "Cp & Amol", url: "https://youtu.be/8UMiPZMhUE4", id: "8UMiPZMhUE4", location: "Pune", category: "Destination" },
  { couple: "Indrajeet & Sakshi", url: "https://youtu.be/R0F2tWN8oLc", id: "R0F2tWN8oLc", location: "Nashik", category: "City" },
  { couple: "Nidhi & Kunal", url: "https://youtu.be/ex_Fs-BiUC0", id: "ex_Fs-BiUC0", location: "Mumbai", category: "Coastal" },
  { couple: "Omkar & Apoorva", url: "https://youtu.be/DCCGOXaPCHQ", id: "DCCGOXaPCHQ", location: "Pune", category: "City" },
  { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur", category: "Royal" },
  { couple: "Utsav & Dyuthi", url: "https://youtu.be/nHDxp0WJqaE", id: "nHDxp0WJqaE", location: "Bangalore", category: "Destination" },
];

const categories = ["All", "Destination", "Royal", "Coastal", "City"];

function FilmCard({ film }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      },
      { threshold: 0.6 } 
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => window.open(film.url, "_blank")}
      className="cursor-pointer w-full relative group"
    >
      <div className="relative aspect-video overflow-hidden bg-[#ede9e3] mb-[1.2rem]">
        {!isPlaying && (
          <img
            src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
            alt={film.couple}
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}
        {isPlaying && (
          <iframe
            className="w-full h-full border-none pointer-events-none scale-[1.15]"
            src={`https://www.youtube.com/embed/${film.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${film.id}&rel=0&modestbranding=1vq=hd1080&start=20`}
            title={film.couple}
            allow="autoplay; encrypted-media"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none" />
      </div>
      <h3 className={`font-['Cormorant_Garamond'] text-[1.3rem] font-normal mb-1 transition-colors duration-400 ${isPlaying ? 'text-[#c9a84c]' : 'text-[#1a1a1a]'}`}>
        {film.couple}
      </h3>
      <p className="font-['Jost'] text-[0.72rem] tracking-[0.15em] uppercase text-[#999]">
        {film.location}
      </p>
    </div>
  );
}

export default function Films() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? films : films.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <Helmet>
        <title>Films · TILT SHIFT Films</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <style>{`
          .pf-pill {
            font-family: 'Jost', sans-serif;
            font-size: 0.72rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            background: none;
            border: 1px solid #d6d0c8;
            padding: 9px 22px;
            cursor: pointer;
            transition: all 0.25s;
            color: #888;
          }
          .pf-pill.active { background: #1a1a1a; border-color: #1a1a1a; color: #fff; }
        `}</style>
      </Helmet>

      {/* Hero Section - ensure padding-top is enough for the fixed navbar */}
      <div className="pt-[160px] pb-[60px] text-center px-6">
        <p className="font-['Jost'] text-[0.75rem] tracking-[0.4em] uppercase text-[#bbb] mb-4">
          Cinematic Storytelling
        </p>
        <h1 className="font-['Cormorant_Garamond'] text-[clamp(3rem,6vw,5rem)] font-light text-[#1a1a1a]">
          Films
        </h1>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-[10px] flex-wrap mb-10 px-6">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`pf-pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-6 pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {filtered.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-[#1a1a1a] py-[clamp(52px,7vw,80px)] px-6 text-center">
        <p className="font-['Jost'] text-[0.72rem] font-medium tracking-[0.3em] uppercase text-white/35 mb-[1.2rem]">
          Limited Availability · 2025–26
        </p>
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3.4rem)] font-light text-white leading-[1.2] mb-[2.2rem]">
          Your story deserves to be<br /><em className="italic">told beautifully</em>
        </h2>
        <a href="/contact" 
           className="inline-block font-['Jost'] text-[0.78rem] font-medium tracking-[0.24em] uppercase text-white no-underline border border-white/40 px-10 py-[14px] transition-all duration-300 hover:bg-[#c9a84c] hover:border-[#c9a84c]">
          Get In Touch →
        </a>
      </div>
    </div>
  );
}