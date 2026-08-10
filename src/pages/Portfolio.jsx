// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import HeroImage from "../assets/hero5.webp";

// ─── Bulk import ALL images ───────────────────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

// ─── Portfolio data ───────────────────────────────────────────────────────────
const weddings = [
  {
    slug:     "amruta-amey",
    couple:   "Amruta & Amey",
    location: "Pune, Maharashtra",
    date:     "December 2024",
    category: "Destination",
    cover:    img("portfolio/Amruta_Amey.webp"),
  },
  {
    slug:     "abhimanyu-manisha",
    couple:   "Manisha & Abhimanyu",
    location: "Pune, Maharashtra",
    date:     "November 2024",
    category: "Coastal",
    cover:    img("portfolio/Abhimanyu_Manisha.webp"),
  },
  {
    slug:     "Rohan-preksha",
    couple:   "Preksha & Rohan",
    location: "Pushkar, Rajasthan",
    date:     "January 2025",
    category: "Royal",
    cover:    img("portfolio/Rohan_Preksha.webp"),
  },
    {
    slug:     "bhakti-sourabh",
    couple:   "Bhakti & Sourabh",
    location: "Jodhpur, Rajasthan",
    date:     "October 2024",
    category: "City",
    cover:    img("portfolio/Bhakti_Saurabh.webp"),
  },
  {
    slug:     "Nina_Parth",
    couple:   "Nina & Parth",
    location: "Pushkar, Rajasthan",
    date:     "January 2025",
    category: "Royal",
    cover:    img("portfolio/Nina_Parth.webp"),
  },
  {
    slug:     "Atish_Shweta",
    couple:   "Atish & Shweta",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Atish_Shweta.webp"),
  },
   {
    slug:     "Gaurav_Chinmaee",
    couple:   "Gaurav & Chinmaee",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Gaurav_Chinmaee.webp"),
  },
  {
    slug:     "Raj_Suhasini",
    couple:   "Raj & Suhasini",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Raj_Suhasini.webp"),
  },
  {
    slug:     "Aishwarya_Sanmay",
    couple:   "Aishwarya & Sanmay",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Sanmay_Aishwarya.jpeg"),
  },
   {
    slug:     "Anuja_Shubhang",
    couple:   "Anuja & Shubhang",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Anuja_Shubhang.webp"),
  },
  {
    slug:     "Atharva_Haritha",
    couple:   "Atharva & Haritha",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Atharva_Harita.webp"),
  },
    {
    slug:     "Shruti_Harjot",
    couple:   "Shruti & Harjot",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Shruti_Harjot.webp"),
  },
  
  {
    slug:     "Chaitrali_Shubham",
    couple:   "Chaitrali & Shubham",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("portfolio/Chaitraly_Shubham.webp"),
  },
];

const categories = ["All", ...Array.from(new Set(weddings.map((w) => w.category)))];

// ─── Lazy image with shimmer ──────────────────────────────────────────────────
function LazyImg({ src, alt }) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLoad(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 bg-[#ede9e3]">
      {/* shimmer */}
      {!loaded && (
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#e8e3dd_25%,#f0ece6_50%,#e8e3dd_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      )}
      {load && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-opacity duration-700 ease-out"
          style={{ opacity: loaded ? 1 : 0 }}
        />
      )}
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function WeddingCard({ wedding, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer group"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/2] overflow-hidden mb-4 bg-[#ede9e3]">
        <LazyImg src={wedding.cover} alt={wedding.couple} />

        {/* Zoom effect layer */}
        <div
          className="absolute inset-0 bg-cover bg-[center_20%] transition-transform duration-[900ms] cubic-bezier(.22,1,.36,1) opacity-0 group-hover:opacity-100"
          style={{
            backgroundImage: `url(${wedding.cover})`,
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* Hover Overlay + "View Gallery" */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 transition-all duration-400 bg-black/0 group-hover:bg-black/22">
          <span className="font-jost text-[10px] font-medium tracking-[0.28em] uppercase text-white transition-all duration-300 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            View Gallery →
          </span>
        </div>
      </div>

      {/* Text Content */}
      <p className={`font-cormorant text-[1.15rem] font-normal text-[#1a1a1a] mb-1 leading-tight transition-colors duration-300 ${hovered ? "text-[#c9a84c]" : ""}`}>
        {wedding.couple}
      </p>
      <p className="font-jost text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[#999] mb-1">
        {wedding.location}
      </p>
      {/* <p className="font-jost text-[0.72rem] font-light text-[#bbb]">
        {wedding.date}
      </p> */}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const location = useLocation();

  const filtered = activeCategory === "All"
    ? weddings
    : weddings.filter((w) => w.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Portfolio · TILT SHIFT Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="description" content="Wedding photography portfolio — TILT SHIFT Films" />
        
        {/* Tailwind + Custom Animations */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap');

          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: none; }
          }

          .pf-card-anim {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards;
          }
        `}</style>
      </Helmet>
     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
             <div className="absolute inset-0 z-0 scale-105 animate-[kenburns_20s_ease_infinite]">
                <img
                  src={HeroImage}
                  alt="Wedding Cinematography"
                  className="w-full h-full object-cover opacity-60 brightness-75"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
              
              <div className="relative z-20 text-center px-6 transition-all duration-1000 transform translate-y-0 opacity-100">
                <h1 className="pf-hero-text font-cormorant text-[clamp(3rem,6vw,5rem)] font-light text-white">
                  Photography
                </h1>
                <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto mb-8 animate-[widthGrow_1.5s_ease-out]" />
 <p className="pf-hero-sub mt-8 mx-auto max-w-4xl px-6 text-center font-jost text-[0.95rem] md:text-[1.05rem] font-light text-white/90 leading-[1.9]">
  Our wedding photography gallery is a curated collection of
  <span className="font-medium text-white"> real stories</span>, capturing
  <span className="font-medium text-white"> genuine emotions</span>,
  <span className="font-medium text-white"> natural moments</span> and
  <span className="font-medium text-white"> refined portraits</span>. Blending
  <span className="font-medium text-white"> candid photography</span> with
  <span className="font-medium text-white"> thoughtful composition</span>, we create
  <span className="font-medium text-white"> elegant, timeless images</span> that
  reflect each celebration with
  <span className="font-medium text-white"> authenticity and creativity</span>.
</p>
              </div>
            </section>

  <div className="max-w-[1000px] mx-auto text-center mt-5">
  <p className="font-['Jost'] text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.35em] text-[#B99A4A] ">
    Our Stories
  </p>

  <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4.5vw,4rem)] font-light text-[#1a1a1a] leading-[1.15]">
    Take a look at some of the beautiful weddings we have had the pleasure of capturing.
  </h2>
</div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <div className="pt-8 pb-[clamp(80px,10vw,120px)] px-[clamp(24px,6vw,80px)] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[clamp(16px,2.5vw,32px)]">
          {filtered.map((wedding, i) => (
            <div
              key={wedding.slug}
              className="pf-card-anim"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <WeddingCard
                wedding={wedding}
                onClick={() =>
                  navigate(`/wedding/${wedding.slug}`, {
                    state: { from: location }
                  })
                }
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 font-jost text-[0.9rem] text-[#bbb]">
            No weddings in this category yet.
          </p>
        )}
      </div>

      {/* ── CTA Strip ───────────────────────────────────────────────────────── */}
      <div className="bg-[#1a1a1a] py-[clamp(52px,7vw,80px)] px-[clamp(24px,6vw,80px)] text-center">
        {/* <p className="font-jost text-[0.72rem] font-medium tracking-[0.3em] uppercase text-white/35 mb-5">
          Limited Availability · 2025–26
        </p> */}
        <h2 className="font-cormorant text-[clamp(2rem,4vw,3.4rem)] font-light text-white leading-tight mb-9">
          Your story deserves to be<br />
          <em className="italic">told beautifully</em>
        </h2>
        <a
          href="/contact"
          className="inline-block font-jost text-[0.78rem] font-medium tracking-[0.24em] uppercase text-white border border-white/40 px-10 py-[14px] transition-all duration-300 hover:bg-[#c9a84c] hover:border-[#c9a84c]"
        >
          Get In Touch →
        </a>
      </div>
    </>
  );
}