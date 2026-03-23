// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

// ─── Bulk import ALL images from assets (handles & spaces special chars) ──────
const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", { eager: true });

// Helper — pass the path relative to src/assets/
const img = (path) => allImages[`../assets/${path}`]?.default;

// ─── Debug: uncomment to see all available paths in browser console ───────────
// console.log("Available images:", Object.keys(allImages));

/* ─── Intersection Observer Hook ─────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Lazy Image Component ─────────────────────────────────────
   Uses native loading="lazy" + decoding="async" (best for Vite/React).
   Fades in once loaded to prevent layout shifts.
────────────────────────────────────────────────────────────── */
function LazyImg({ src, alt = "", style = {}, className = "" }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={className}
      // tells browser: use small src on mobile, full on desktop
      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}
    />
  );
}

/* ─── Data ──────────────────────────────────────────────────────
   Replace every img("...") path with your actual file path.
   Path is relative to src/assets/ — copy filenames exactly as-is
   including spaces, & and any special characters.

   HOW TO FIND YOUR EXACT PATHS:
   Uncomment the debug console.log line above, open browser DevTools,
   and copy-paste paths from the printed list.
────────────────────────────────────────────────────────────── */

// ── Hero slideshow (4 images, above the fold — loaded eagerly) ───────────────
const heroImages = [
  img("Abhimanyu&Manisha/Couple_118.jpg"),  // ← your image 1
  img("Amruta & Amey/ADM05783-2.jpg"),  // ← replace with image 2
  img("Bhakti & Sourabh/ADM03393.jpg"),  // ← replace with image 3
  img("Chaitrali & Shubham/Insta Post/DSC07664.jpg"),  // ← replace with image 4
];

// ── Portfolio mosaic (8 images) ───────────────────────────────────────────────
const portfolioGrid = [
  { src: img("Abhimanyu&Manisha/Couple_119.jpg"), span: "tall"   },
  { src: img("Aishwarya & Sanmay/Sanmay+Aishwarya-3.jpg"), span: "wide"   },
  { src: img("Rohan_Preksha/ampf-40 (49).jpg"), span: "normal" },
  { src: img("Rohan_Preksha/ampf(2).jpg"), span: "normal" },
  { src: img("Chaitrali & Shubham/ampf-11.jpg"), span: "tall"   },
  { src: img("Chaitrali & Shubham/ampf-24.jpg"), span: "wide"   },
  { src: img("Rohan_Preksha/ampf-40(45).jpg"), span: "normal" },
  { src: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"), span: "normal" },
];

// ── Featured couples (4 cards) ────────────────────────────────────────────────
const featured = [
  { couple: "Amruta & Amey",  location: "Udaipur · Rajasthan", date: "December 2024", img: img("Amruta & Amey/ADM05604-2.jpg") },
  { couple: "Aishwarya & Sanmay",  location: "Goa · Coastal",       date: "November 2024", img: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg") },
  { couple: "Rohan & Preksha",    location: "Mumbai · Maharashtra", date: "October 2024",  img: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg") },
  { couple: "Bhakti & Sourabh",  location: "Jaipur · Pink City",  date: "January 2025",  img: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg") },
];

// ── Films (2 cinematic stories) ───────────────────────────────────────────────
const films = [
  {
    title: "A Week in Udaipur",
    desc: "A multi-day royal celebration woven through palaces, lakes, and golden evenings. This film captures the quiet in-between moments that no one else thought to notice.",
    thumb: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"),
  },
  {
    title: "Monsoon Wedding, Goa",
    desc: "Rain doesn't stop love. It amplifies it. This coastal ceremony, drenched in petrichor and jasmine, became one of our most emotionally resonant films.",
    thumb: img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"),
  },
];

// ── Single section images ─────────────────────────────────────────────────────
const aboutImg      = img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"); // about section portrait
const philosophyImg = img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"); // full-bleed quote bg
const premiumImg    = img("Abhimanyu&Manisha/07 Saptapadhi_2580.jpg"); // fine-art editorial

/* ─── Hero Slider ──────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {heroImages.map((src, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.6s cubic-bezier(.4,0,.2,1)",
          zIndex: i === current ? 1 : 0,
        }}>
          {/* First slide eager, rest lazy */}
          <img
  src={src}
  alt=""
  loading={i === 0 ? "eager" : "lazy"}
  fetchpriority={i === 0 ? "high" : "auto"}   // ← add this
  decoding="async"
  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
/>
        </div>
      ))}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
        background: "linear-gradient(to top, rgba(0,0,0,0.22), transparent)",
        zIndex: 2,
      }} />
      <div style={{
        position: "absolute", bottom: "clamp(36px,6vw,72px)", left: "clamp(24px,6vw,80px)",
        zIndex: 3, color: "#fff",
      }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", opacity: 0.75, marginBottom: "0.6rem" }}>
          Mumbai · Pune · Worldwide
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
          fontWeight: 300, lineHeight: 1.08, margin: 0, color: "#fff",
        }}>
          TILT SHIFT Films
        </h1>
      </div>
      <div style={{
        position: "absolute", bottom: "clamp(36px,6vw,72px)", right: "clamp(24px,6vw,80px)",
        zIndex: 3, display: "flex", gap: "10px", alignItems: "center",
      }}>
        {heroImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? 28 : 8, height: 2,
            background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
            border: "none", padding: 0, cursor: "pointer",
            transition: "all 0.4s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main Export ──────────────────────────────────────────── */
export default function Home() {
  const [aboutRef, aboutInView] = useInView(0.1);
  const [featRef,  featInView]  = useInView(0.1);
  const [filmRef,  filmInView]  = useInView(0.1);
  const [gridRef,  gridInView]  = useInView(0.05);

  return (
    <>
      <Helmet>
        <title>TILT SHIFT Films | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="description" content="TILT SHIFT Films — India's finest cinematic wedding photography and films." />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          html { scroll-behavior: smooth; }
          body { background: #fff; color: #1a1a1a; }

          .fade-up {
            opacity: 0; transform: translateY(32px);
            transition: opacity 1s cubic-bezier(.22,1,.36,1), transform 1s cubic-bezier(.22,1,.36,1);
          }
          .fade-up.in { opacity: 1; transform: none; }
          .d1 { transition-delay: 0.08s !important; }
          .d2 { transition-delay: 0.18s !important; }
          .d3 { transition-delay: 0.28s !important; }
          .d4 { transition-delay: 0.38s !important; }

          .hover-zoom { overflow: hidden; }
          .hover-zoom img { transition: transform 0.9s cubic-bezier(.22,1,.36,1); }
          .hover-zoom:hover img { transform: scale(1.06); }

          .play-btn {
            position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
            background: rgba(0,0,0,0); transition: background 0.4s;
          }
          .play-btn:hover { background: rgba(0,0,0,0.12); }
          .play-btn span {
            width: 64px; height: 64px; border-radius: 50%;
            border: 1.5px solid rgba(255,255,255,0.85);
            display: flex; align-items: center; justify-content: center;
            transition: transform 0.3s, background 0.3s;
          }
          .play-btn:hover span { transform: scale(1.12); background: rgba(255,255,255,0.15); }
        `}</style>
      </Helmet>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ─── ABOUT ────────────────────────────────────────────── */}
      <section ref={aboutRef} style={{
        padding: "clamp(80px,10vw,140px) clamp(24px,8vw,120px)",
        background: "#fff",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px,8vw,120px)",
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }} className="about-grid">

        <div className={`hover-zoom fade-up ${aboutInView ? "in" : ""}`}
          style={{ position: "relative", aspectRatio: "3/4" }}>
          <LazyImg
            src={aboutImg}
            alt="Wedding story"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute", bottom: "clamp(16px,2.5vw,28px)", right: "clamp(16px,2.5vw,28px)",
            background: "#fff", padding: "14px 20px",
          }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#888" }}>Est. 2014</p>
          </div>
        </div>

        <div className={`fade-up d2 ${aboutInView ? "in" : ""}`}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "2rem" }}>
            About the Studio
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 3.5vw, 3.4rem)",
            fontWeight: 300, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "2rem",
          }}>
            Considered the epitome of<br />
            <em style={{ fontStyle: "italic" }}>Modern Wedding Photography</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "#1a1a1a", marginBottom: "2rem" }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#555", marginBottom: "1.6rem" }}>
            At TILT SHIFT Films, we have transformed the Indian wedding landscape for over a decade — creating photographs and films that are timeless, and etched in the memories of thousands of families forever.
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#555", marginBottom: "3rem" }}>
            Awarded Wedding Filmmaker of the Year for four consecutive years, we are the only Indian wedding studio listed on IMDB for our award-winning films. We accept only 24 weddings each year.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="/portfolio" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid #1a1a1a", paddingBottom: "2px", transition: "color 0.3s, border-color 0.3s",
            }}
              onMouseEnter={e => { e.target.style.color = "#c9a84c"; e.target.style.borderColor = "#c9a84c"; }}
              onMouseLeave={e => { e.target.style.color = "#1a1a1a"; e.target.style.borderColor = "#1a1a1a"; }}
            >View Photography →</a>
            <a href="/films" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid #1a1a1a", paddingBottom: "2px", transition: "color 0.3s, border-color 0.3s",
            }}
              onMouseEnter={e => { e.target.style.color = "#c9a84c"; e.target.style.borderColor = "#c9a84c"; }}
              onMouseLeave={e => { e.target.style.color = "#1a1a1a"; e.target.style.borderColor = "#1a1a1a"; }}
            >Watch Our Films →</a>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* ─── PORTFOLIO MOSAIC ─────────────────────────────────── */}
      <section ref={gridRef} style={{ background: "#fff", padding: "0 0 clamp(60px,8vw,100px)" }}>
        <div style={{ textAlign: "center", padding: "0 24px clamp(32px,5vw,60px)" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "1rem" }}>Selected Work</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#1a1a1a" }}>Portfolio</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "260px",
          gap: 3,
          padding: "0 3px",
        }} className="mosaic-grid">
          {portfolioGrid.map((image, i) => {
            const colSpan = image.span === "wide" ? 2 : 1;
            const rowSpan = image.span === "tall" ? 2 : 1;
            return (
              <div key={i}
                className={`hover-zoom fade-up ${gridInView ? `in d${(i % 4) + 1}` : ""}`}
                style={{
                  gridColumn: `span ${colSpan}`,
                  gridRow: `span ${rowSpan}`,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <LazyImg
                  src={image.src}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.5s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.12)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0)"}
                />
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(32px,4vw,56px)" }}>
          <a href="/portfolio" style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
            borderBottom: "1px solid #1a1a1a", paddingBottom: "3px",
          }}>View Full Portfolio</a>
        </div>

        <style>{`
          @media (max-width: 900px) { .mosaic-grid { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 220px !important; } }
          @media (max-width: 540px) { .mosaic-grid { grid-template-columns: 1fr 1fr !important; grid-auto-rows: 180px !important; } }
        `}</style>
      </section>

      {/* ─── FEATURED COUPLES ─────────────────────────────────── */}
      <section ref={featRef} style={{ background: "#f7f5f1", padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(36px,5vw,60px)", flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "0.8rem" }}>Recent Work</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 300, color: "#1a1a1a" }}>Featured Weddings</h2>
            </div>
            <a href="/portfolio" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.28em",
              textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid #aaa", paddingBottom: "2px",
            }}>See All →</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(12px,2vw,24px)" }} className="featured-grid">
            {featured.map((f, i) => (
              <div key={i}
                className={`hover-zoom fade-up ${featInView ? `in d${i + 1}` : ""}`}
                style={{ cursor: "pointer" }}
              >
                <div style={{ position: "relative", aspectRatio: "3/4", marginBottom: "1.1rem" }}>
                  <LazyImg
                    src={f.img}
                    alt={f.couple}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "0.3rem" }}>{f.couple}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>{f.location}</p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#bbb", marginTop: "0.2rem" }}>{f.date}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .featured-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 520px) { .featured-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── FILMS ────────────────────────────────────────────── */}
      <section ref={filmRef} style={{ background: "#fff", padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,72px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "1rem" }}>Cinematic Films</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,4.5rem)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1.1 }}>
              Soul Cinema
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "#777", maxWidth: 620, margin: "1.6rem auto 0", lineHeight: 1.85 }}>
              Every wedding is unique and so are our films. For over a decade TILT SHIFT has set new benchmarks of storytelling within the wedding realm and beyond — across 20+ countries.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(20px,3vw,40px)", marginBottom: "clamp(40px,5vw,70px)" }} className="films-grid">
            {films.map((film, i) => (
              <div key={i} className={`fade-up ${filmInView ? `in d${i + 1}` : ""}`}>
                <div style={{ position: "relative", aspectRatio: "16/10", marginBottom: "1.8rem", cursor: "pointer" }} className="hover-zoom">
                  <LazyImg
                    src={film.thumb}
                    alt={film.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05))" }} />
                  <div className="play-btn">
                    <span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#fff", lineHeight: 1.2 }}>{film.title}</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "#666", lineHeight: 1.85 }}>{film.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="/films" style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em",
              textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
              borderBottom: "1px solid #1a1a1a", paddingBottom: "3px",
            }}>Watch All Award-Winning Films</a>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .films-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── PHILOSOPHY FULL-BLEED ────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <LazyImg
          src={philosophyImg}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.48)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "clamp(60px,8vw,100px) clamp(24px,10vw,160px)", maxWidth: 1000 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>Our Philosophy</p>
          <blockquote style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
            fontWeight: 300, fontStyle: "italic",
            color: "#fff", lineHeight: 1.4, margin: "0 0 2.5rem",
          }}>
            "We celebrate the wild ones, the rule breakers, the travellers — the modern couple unafraid to experiment."
          </blockquote>
          <a href="/about" style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.75)", textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: "3px",
          }}>Our Story →</a>
        </div>
      </section>

      {/* ─── PREMIUM OFFERING ─────────────────────────────────── */}
      <section style={{
        background: "#fff",
        padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px,8vw,120px)",
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }} className="premium-grid">
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "2rem" }}>Signature Offering</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "1.5rem" }}>
            Fine-Art<br /><em style={{ fontStyle: "italic" }}>Editorial Photography</em>
          </h2>
          <div style={{ width: 40, height: 1, background: "#1a1a1a", marginBottom: "1.8rem" }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#555", marginBottom: "1.4rem" }}>
            Our finest offering — fine-art editorial style photography led by our founders. The essence is to create photographs that stand the test of time.
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, lineHeight: 1.9, color: "#555", marginBottom: "2.5rem" }}>
            The classic, non-intrusive approach of documenting the most important day of your life with bright, airy images. An exclusive package offered only to selected weddings.
          </p>
          <a href="/contact" style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
            borderBottom: "1px solid #1a1a1a", paddingBottom: "2px",
          }}>Enquire About This Package →</a>
        </div>

        <div className="hover-zoom" style={{ aspectRatio: "4/5" }}>
          <LazyImg
            src={premiumImg}
            alt="Fine Art Wedding"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <style>{`@media (max-width: 768px) { .premium-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "#f7f5f1", padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px)", textAlign: "center" }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#999", marginBottom: "1.5rem" }}>
          Limited Availability · 2025–26
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem,5vw,4.5rem)",
          fontWeight: 300, lineHeight: 1.15, color: "#1a1a1a",
          maxWidth: 700, margin: "0 auto 1.8rem",
        }}>
          Your Story Deserves<br /><em style={{ fontStyle: "italic" }}>To Be Told Beautifully</em>
        </h2>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "#777", maxWidth: 500, margin: "0 auto 3rem", lineHeight: 1.85 }}>
          We accept only 24 weddings per year — ensuring every couple receives our full creative devotion.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#fff", textDecoration: "none",
            background: "#1a1a1a", padding: "16px 44px", transition: "background 0.3s",
          }}
            onMouseEnter={e => e.target.style.background = "#c9a84c"}
            onMouseLeave={e => e.target.style.background = "#1a1a1a"}
          >Get In Touch</a>
          <a href="/portfolio" style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none",
            border: "1px solid #1a1a1a", padding: "16px 44px", transition: "background 0.3s, color 0.3s",
          }}
            onMouseEnter={e => { e.target.style.background = "#1a1a1a"; e.target.style.color = "#fff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#1a1a1a"; }}
          >View Portfolio</a>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer style={{
        background: "#fff",
        borderTop: "1px solid #eee",
        padding: "clamp(40px,6vw,72px) clamp(24px,6vw,80px)",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: 24,
      }} className="footer-inner">
        <div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>Mumbai · Pune · Worldwide</p>
          <a href="tel:+919964787383" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#1a1a1a", textDecoration: "none", display: "block", marginBottom: "0.3rem" }}>+91 99647 87383</a>
          <a href="mailto:hello@tiltshiftfilms.com" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "#1a1a1a", textDecoration: "none" }}>hello@tiltshiftfilms.com</a>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 300, letterSpacing: "0.12em", color: "#1a1a1a", textTransform: "uppercase" }}>TILT SHIFT</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginTop: "2px" }}>Films</p>
        </div>

        <div style={{ textAlign: "right" }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", display: "block", marginBottom: "0.5rem" }}>Instagram</a>
          <a href="/contact" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", display: "block" }}>Contact Us</a>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#bbb", marginTop: "1rem" }}>© 2025 TILT SHIFT Films</p>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .footer-inner { grid-template-columns: 1fr !important; text-align: center !important; }
            .footer-inner > div:last-child { text-align: center !important; }
          }
        `}</style>
      </footer>
    </>
  );
}