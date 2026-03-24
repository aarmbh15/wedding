// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// ─── Bulk import ALL images ───────────────────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

// ─── Portfolio data ───────────────────────────────────────────────────────────
const weddings = [
  {
    slug:     "amruta-amey",
    couple:   "Amruta & Amey",
    location: "Udaipur · Rajasthan",
    date:     "December 2024",
    category: "Destination",
    cover:    img("Amruta_Amey/img221.jpg"),
  },
  {
    slug:     "abhimanyu-manisha",
    couple:   "Abhimanyu & Manisha",
    location: "Goa · Coastal",
    date:     "November 2024",
    category: "Coastal",
    cover:    img("Abhimanyu_Manisha/img621.jpg"),
  },
  {
    slug:     "bhakti-sourabh",
    couple:   "Bhakti & Sourabh",
    location: "Mumbai · Maharashtra",
    date:     "October 2024",
    category: "City",
    cover:    img("Bhakti_Sourabh/img326.jpg"),
  },
  {
    slug:     "rohan-preksha",
    couple:   "Rohan & Preksha",
    location: "Jaipur · Pink City",
    date:     "January 2025",
    category: "Royal",
    cover:    img("Rohan_Preksha/img504.jpg"),
  },
  // ── Add more weddings here by duplicating a block above ──
  // {
  //   slug:     "name-name",
  //   couple:   "Name & Name",
  //   location: "City · State",
  //   date:     "Month Year",
  //   category: "Tag",
  //   cover:    img("FolderName/cover.jpg"),
  // },
];

const categories = ["All", ...Array.from(new Set(weddings.map((w) => w.category)))];

// ─── Lazy image with shimmer ──────────────────────────────────────────────────
function LazyImg({ src, alt }) {
  const ref = useRef(null);
  const [load,   setLoad]   = useState(false);
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
    <div ref={ref} style={{ position: "absolute", inset: 0, background: "#ede9e3" }}>
      {/* shimmer */}
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg,#e8e3dd 25%,#f0ece6 50%,#e8e3dd 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.6s infinite",
        }} />
      )}
      {load && (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.55s ease",
          }}
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
      style={{ cursor: "pointer" }}
    >
      {/* Image */}
      <div style={{
        position: "relative",
        aspectRatio: "3/4",
        overflow: "hidden",
        marginBottom: "1rem",
        background: "#ede9e3",
      }}>
        <LazyImg src={wedding.cover} alt={wedding.couple} />

        {/* zoom on hover */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${wedding.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.9s cubic-bezier(.22,1,.36,1)",
          opacity: 0, // actual image above handles display; this just drives zoom
        }} />

        {/* "View Gallery" overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: hovered ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0)",
          transition: "background 0.4s ease",
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          paddingBottom: 22,
        }}>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#fff",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}>
            View Gallery →
          </span>
        </div>
      </div>

      {/* Text */}
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.15rem",
        fontWeight: 400,
        color: "#1a1a1a",
        marginBottom: "0.3rem",
        lineHeight: 1.3,
        transition: "color 0.3s",
        ...(hovered ? { color: "#c9a84c" } : {}),
      }}>
        {wedding.couple}
      </p>
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: "0.7rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#999",
        marginBottom: "0.25rem",
      }}>
        {wedding.location}
      </p>
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: "0.72rem",
        fontWeight: 300,
        color: "#bbb",
      }}>
        {wedding.date}
      </p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

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
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body { background: #f7f5f1; color: #1a1a1a; }

          @keyframes shimmer {
            0%   { background-position:  200% 0; }
            100% { background-position: -200% 0; }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: none; }
          }

          .pf-hero-text { animation: fadeUp 1s cubic-bezier(.22,1,.36,1) both; }
          .pf-hero-sub  { animation: fadeUp 1s cubic-bezier(.22,1,.36,1) 0.12s both; }
          .pf-filters   { animation: fadeUp 1s cubic-bezier(.22,1,.36,1) 0.22s both; }

          .pf-card-anim {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards;
          }

          /* 4-col → 2-col → 1-col */
          .pf-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: clamp(16px, 2.5vw, 32px);
          }
          @media (max-width: 1024px) { .pf-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width:  720px) { .pf-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width:  440px) { .pf-grid { grid-template-columns: 1fr; } }

          /* filter pill */
          .pf-pill {
            font-family: 'Jost', sans-serif;
            font-size: 0.72rem;
            font-weight: 500;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            background: none;
            border: 1px solid #d6d0c8;
            padding: 9px 22px;
            cursor: pointer;
            transition: background 0.25s, border-color 0.25s, color 0.25s;
            color: #888;
          }
          .pf-pill:hover        { border-color: #1a1a1a; color: #1a1a1a; }
          .pf-pill.active       { background: #1a1a1a; border-color: #1a1a1a; color: #fff; }
        `}</style>
      </Helmet>

      {/* ── Hero banner ─────────────────────────────────────────────────────── */}
      <div style={{
        background: "#f7f5f1",
        paddingTop:  "clamp(110px, 14vw, 160px)",
        paddingBottom: "clamp(40px, 5vw, 64px)",
        paddingLeft:  "clamp(24px, 6vw, 80px)",
        paddingRight: "clamp(24px, 6vw, 80px)",
        borderBottom: "1px solid #ede9e3",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <p className="pf-hero-sub" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.72rem", fontWeight: 500,
            letterSpacing: "0.32em", textTransform: "uppercase",
            color: "#bbb", marginBottom: "1rem",
          }}>
            Selected Work
          </p>
          <h1 className="pf-hero-text" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 300, lineHeight: 1.08,
            color: "#1a1a1a", marginBottom: "1.4rem",
          }}>
            Portfolio
          </h1>
          <p className="pf-hero-sub" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.95rem", fontWeight: 300,
            color: "#888", lineHeight: 1.85,
            maxWidth: 500,
          }}>
            A curated selection of weddings we've had the privilege of photographing — across palaces, beaches, and intimate celebrations.
          </p>
        </div>
      </div>

      {/* ── Filter pills ────────────────────────────────────────────────────── */}
      <div style={{
        padding: "clamp(28px,4vw,48px) clamp(24px,6vw,80px) 0",
        maxWidth: 1400, margin: "0 auto",
      }}>
        <div className="pf-filters" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pf-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      <div style={{
        padding: "clamp(32px,4vw,52px) clamp(24px,6vw,80px) clamp(80px,10vw,120px)",
        maxWidth: 1400, margin: "0 auto",
      }}>
        <div className="pf-grid">
          {filtered.map((wedding, i) => (
            <div
              key={wedding.slug}
              className="pf-card-anim"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <WeddingCard
                wedding={wedding}
                onClick={() => navigate(`/wedding/${wedding.slug}`)}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{
            textAlign: "center", padding: "80px 0",
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.9rem", color: "#bbb",
          }}>
            No weddings in this category yet.
          </p>
        )}
      </div>

      {/* ── CTA strip ───────────────────────────────────────────────────────── */}
      <div style={{
        background: "#1a1a1a",
        padding: "clamp(52px,7vw,80px) clamp(24px,6vw,80px)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.72rem", fontWeight: 500,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: "1.2rem",
        }}>
          Limited Availability · 2025–26
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 4vw, 3.4rem)",
          fontWeight: 300, color: "#fff",
          lineHeight: 1.2, marginBottom: "2.2rem",
        }}>
          Your story deserves to be<br />
          <em style={{ fontStyle: "italic" }}>told beautifully</em>
        </h2>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.78rem", fontWeight: 500,
            letterSpacing: "0.24em", textTransform: "uppercase",
            color: "#fff", textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "14px 40px",
            transition: "background 0.3s, border-color 0.3s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.borderColor = "#c9a84c"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
        >
          Get In Touch →
        </a>
      </div>
    </>
  );
}