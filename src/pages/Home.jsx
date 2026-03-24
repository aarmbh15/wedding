// src/pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";

// ─── Bulk import ALL images from assets ──────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

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

/* ─── Progressive Image Component ─────────────────────────────
   - Only starts loading when `shouldLoad` is true
   - Shows a lightweight shimmer placeholder until loaded
   - Fades in smoothly on load
────────────────────────────────────────────────────────────── */
function ProgressiveImg({ src, alt = "", style = {}, className = "", shouldLoad = true, eager = false }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(eager ? src : null);

  useEffect(() => {
    if (!eager && shouldLoad && src && !currentSrc) {
      setCurrentSrc(src);
    }
  }, [src, shouldLoad, eager, currentSrc]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...(!loaded ? { background: "#e8e4df" } : {}) }}>
      {/* Shimmer skeleton shown while loading */}
      {!loaded && (
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, #e8e4df 25%, #f0ece7 50%, #e8e4df 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.6s infinite",
        }} />
      )}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={className}
          style={{
            ...style,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />
      )}
    </div>
  );
}

/* ─── Lazy Section Wrapper ─────────────────────────────────────
   Wraps a section and only tells children to load images
   once the section is close to the viewport.
────────────────────────────────────────────────────────────── */
function LazySection({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsNear(true); obs.disconnect(); } },
      { rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{children(isNear)}</div>;
}

/* ─── Data ───────────────────────────────────────────────────── */

// Hero: only 4 paths — loaded one-by-one as slides advance
const heroImages = [
  img("Abhimanyu_Manisha/img621.jpg"),
  img("Aishwarya_Sanmay/img33.jpg"),
  img("Amruta_Amey/img216.jpg"),
  img("Chaitrali_Shubham/img405.jpg"),
];

const portfolioGrid = [
  { src: img("Abhimanyu_Manisha/img621.jpg"), span: "tall"   },
  { src: img("Bhakti_Sourabh/img331.jpg"),   span: "wide"   },
  { src: img("Rohan_Preksha/img550.jpg"),      span: "normal" },
  { src: img("Amruta_Amey/img224.jpg"),        span: "normal" },
  { src: img("Chaitrali_Shubham/img407.jpg"),  span: "tall"   },
  { src: img("Bhakti_Sourabh/img321.jpg"),     span: "normal" },
  { src: img("Chaitrali_Shubham/img423.jpg"),  span: "wide"   },
  { src: img("Rohan_Preksha/img543.jpg"),      span: "tall"   },
  { src: img("Abhimanyu_Manisha/img613.jpg"),  span: "normal" },
  { src: img("Amruta_Amey/img258.jpg"),        span: "wide"   },
];

const featured = [
  { 
    couple: "Amruta & Amey",        
    slug: "amruta-amey",
    location: "Udaipur · Rajasthan",   
    date: "December 2024", 
    img: img("Amruta_Amey/img221.jpg") 
  },
  { 
    couple: "Abhimanyu & Manisha",  
    slug: "abhimanyu-manisha",
    location: "Goa · Coastal",         
    date: "November 2024", 
    img: img("Abhimanyu_Manisha/img605.jpg") 
  },
  { 
    couple: "Bhakti & Sourabh",     
    slug: "bhakti-sourabh",
    location: "Mumbai · Maharashtra",  
    date: "October 2024",  
    img: img("Bhakti_Sourabh/img326.jpg") 
  },
  { 
    couple: "Rohan & Preksha",      
    slug: "rohan-preksha",
    location: "Jaipur · Pink City",    
    date: "January 2025",  
    img: img("Rohan_Preksha/img504.jpg") 
  },
];

const films = [
  {
    title: "A Week in Udaipur",
    desc: "A multi-day royal celebration woven through palaces, lakes, and golden evenings. This film captures the quiet in-between moments that no one else thought to notice.",
    thumb: img("Rohan_Preksha/img550.jpg"),
  },
  {
    title: "Monsoon Wedding, Goa",
    desc: "Rain doesn't stop love. It amplifies it. This coastal ceremony, drenched in petrichor and jasmine, became one of our most emotionally resonant films.",
    thumb: img("Bhakti_Sourabh/img321.jpg"),
  },
];

const aboutImg      = img("Chaitrali_Shubham/img407.jpg");
const philosophyImg = img("Chaitrali_Shubham/img407.jpg");
const premiumImg    = img("Chaitrali_Shubham/img407.jpg");

/* ─── Hero Slider ──────────────────────────────────────────────
   KEY FIX: `loadedSlides` tracks which slide indices have been
   loaded. We only add the NEXT slide to loadedSlides when the
   current slide changes — so images load one at a time.
────────────────────────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  // Start with only slide 0 pre-loaded (eager)
  const [loadedSlides, setLoadedSlides] = useState(new Set([0]));

  const advance = useCallback(() => {
    setCurrent(c => {
      const next = (c + 1) % heroImages.length;
      // Preload the NEXT slide only when we're about to show it
      setLoadedSlides(prev => {
        if (prev.has(next)) return prev;
        return new Set([...prev, next]);
      });
      return next;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(advance, 5000);
    return () => clearInterval(t);
  }, [advance]);

  const goTo = (i) => {
    setLoadedSlides(prev => new Set([...prev, i]));
    setCurrent(i);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {heroImages.map((src, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.6s cubic-bezier(.4,0,.2,1)",
          zIndex: i === current ? 1 : 0,
        }}>
          {/* Only render <img> if this slide has been queued to load */}
          {loadedSlides.has(i) && (
            <img
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              fetchpriority={i === 0 ? "high" : "auto"}
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
            />
          )}
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
          <button key={i} onClick={() => goTo(i)} style={{
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

          /* Shimmer animation for loading placeholders */
          @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }

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
      {/* LazySection defers image loading until section is 200px from viewport */}
      <LazySection rootMargin="200px">
        {(isNear) => (
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
              <ProgressiveImg
                src={aboutImg}
                alt="Wedding story"
                shouldLoad={isNear}
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
        )}
      </LazySection>

      {/* ─── PORTFOLIO MOSAIC ─────────────────────────────────── */}
      {/* rootMargin="400px" starts loading when grid is 400px below viewport */}
      <LazySection rootMargin="400px">
        {(isNear) => (
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
                    {/* Each mosaic image loads only when the section is near */}
                    <ProgressiveImg
                      src={image.src}
                      shouldLoad={isNear}
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
        )}
      </LazySection>

      {/* ─── FEATURED COUPLES ─────────────────────────────────── */}
      {/* ─── FEATURED COUPLES ─────────────────────────────────── */}
{/* ─── FEATURED COUPLES ─────────────────────────────────── */}
{/* ─── FEATURED COUPLES ─────────────────────────────────── */}
<LazySection rootMargin="300px">
        {(isNear) => (
          <section 
            ref={featRef} 
            style={{ background: "#f7f5f1", padding: "clamp(80px,10vw,130px) clamp(24px,6vw,80px)" }}
          >
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
                  <a 
                    key={i}
                    href={`/wedding/${f.slug}`}
                    className={`hover-zoom fade-up ${featInView ? `in d${i + 1}` : ""}`}
                    style={{ 
                      cursor: "pointer", 
                      textDecoration: "none", 
                      color: "inherit",
                      display: "block"
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "3/4", marginBottom: "1.1rem" }}>
                      <ProgressiveImg
                        src={f.img}
                        alt={f.couple}
                        shouldLoad={isNear}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "0.3rem" }}>
                      {f.couple}
                    </p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>
                      {f.location}
                    </p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "#bbb", marginTop: "0.2rem" }}>
                      {f.date}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <style>{`
              @media (max-width: 900px) { .featured-grid { grid-template-columns: 1fr 1fr !important; } }
              @media (max-width: 520px) { .featured-grid { grid-template-columns: 1fr !important; } }
            `}</style>
          </section>
        )}
      </LazySection>
      {/* ─── FILMS ────────────────────────────────────────────── */}
      <LazySection rootMargin="300px">
        {(isNear) => (
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
                      <ProgressiveImg
                        src={film.thumb}
                        alt={film.title}
                        shouldLoad={isNear}
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
        )}
      </LazySection>

      {/* ─── PHILOSOPHY FULL-BLEED ────────────────────────────── */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <ProgressiveImg
              src={philosophyImg}
              shouldLoad={isNear}
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
        )}
      </LazySection>

      {/* ─── PREMIUM OFFERING ─────────────────────────────────── */}
      <LazySection rootMargin="300px">
        {(isNear) => (
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
              <ProgressiveImg
                src={premiumImg}
                alt="Fine Art Wedding"
                shouldLoad={isNear}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <style>{`@media (max-width: 768px) { .premium-grid { grid-template-columns: 1fr !important; } }`}</style>
          </section>
        )}
      </LazySection>

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

    </>
  );
}