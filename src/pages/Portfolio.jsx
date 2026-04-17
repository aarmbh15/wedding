// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";

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
    cover:    img("Amruta_Amey/img233.webp"),
  },
  {
    slug:     "abhimanyu-manisha",
    couple:   "Manisha & Abhimanyu",
    location: "Pune, Maharashtra",
    date:     "November 2024",
    category: "Coastal",
    cover:    img("Abhimanyu_Manisha/img603.webp"),
  },
  {
    slug:     "bhakti-sourabh",
    couple:   "Bhakti & Sourabh",
    location: "Jodhpur, Rajasthan",
    date:     "October 2024",
    category: "City",
    cover:    img("Bhakti_Sourabh/img319.webp"),
  },
  {
    slug:     "Rohan-preksha",
    couple:   "Preksha & Rohan",
    location: "Pushkar, Rajasthan",
    date:     "January 2025",
    category: "Royal",
    cover:    img("Rohan_Preksha/img538.webp"),
  },
  {
    slug:     "Aishwarya_Sanmay",
    couple:   "Aishwarya & Sanmay",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("Aishwarya_Sanmay/img33.webp"),
  },
  {
    slug:     "Chaitrali_Shubham",
    couple:   "Chaitrali & Shubham",
    location: "Pune, Maharashtra",
    date:     "Month Year",
    category: "Tag",
    cover:    img("Chaitrali_Shubham/img432.webp"),
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
      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#ede9e3]">
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
      <p className="font-jost text-[0.72rem] font-light text-[#bbb]">
        {wedding.date}
      </p>
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

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="bg-[#f7f5f1] pt-[clamp(110px,14vw,160px)] pb-[clamp(40px,5vw,64px)] px-[clamp(24px,6vw,80px)] border-b border-[#ede9e3]">
        <div className="max-w-[1400px] mx-auto">
          <p className="pf-hero-sub font-jost text-[0.72rem] font-medium tracking-[0.32em] uppercase text-[#bbb] mb-4">
            Selected Work
          </p>
          <h1 className="pf-hero-text font-cormorant text-[clamp(2.8rem,6vw,5rem)] font-light leading-[1.08] text-[#1a1a1a] mb-6">
            Portfolio
          </h1>
          <p className="pf-hero-sub font-jost text-[0.95rem] font-light text-[#888] leading-[1.85] max-w-[500px]">
            A curated selection of weddings we've had the privilege of photographing — across palaces, beaches, and intimate celebrations.
          </p>
        </div>
      </div>

      {/* ── Filter Pills ────────────────────────────────────────────────────── */}
      <div className="pt-[clamp(28px,4vw,48px)] px-[clamp(24px,6vw,80px)] pb-0 max-w-[1400px] mx-auto">
        <div className="pf-filters flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pf-pill font-jost text-[0.72rem] font-medium tracking-[0.22em] uppercase px-6 py-[9px] border border-[#d6d0c8] transition-all duration-250 cursor-pointer
                ${activeCategory === cat 
                  ? "bg-[#1a1a1a] border-[#1a1a1a] text-white" 
                  : "text-[#888] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <div className="pt-8 pb-[clamp(80px,10vw,120px)] px-[clamp(24px,6vw,80px)] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[clamp(16px,2.5vw,32px)]">
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
        <p className="font-jost text-[0.72rem] font-medium tracking-[0.3em] uppercase text-white/35 mb-5">
          Limited Availability · 2025–26
        </p>
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