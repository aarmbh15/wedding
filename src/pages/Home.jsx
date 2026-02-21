// src/pages/Home.jsx
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import HeroVideoSlider from '../components/HeroVideoSlider.jsx';
import ImageSlider from '../components/ImageSlider.jsx';

// Custom hook for intersection observer animations
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Stats counter animation
function AnimatedCounter({ target, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 24);
    return () => clearInterval(timer);
  }, [inView, target]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "#c9a84c", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginTop: "0.5rem" }}>{label}</div>
    </div>
  );
}

const ceremonies = [
  { img: "/src/assets/img1.webp", title: "Haldi Ceremony", sub: "Vibrant • Joyful • Traditional", tag: "01" },
  { img: "/src/assets/img2.webp", title: "Mehendi Night", sub: "Intimate • Colourful • Festive", tag: "02" },
  { img: "/src/assets/img3.webp", title: "Baraat Procession", sub: "Grand • Energetic • Celebratory", tag: "03" },
  { img: "/src/assets/img4.webp", title: "Wedding Pheras", sub: "Sacred • Eternal • Emotional", tag: "04" },
  { img: "/src/assets/img5.webp", title: "Pre-Wedding Shoot", sub: "Romantic • Cinematic • Artistic", tag: "05" },
  { img: "/src/assets/img6.webp", title: "Reception Gala", sub: "Glamorous • Magical • Joyful", tag: "06" },
];

const packages = [
  {
    name: "Elopement",
    price: "₹45,000",
    desc: "For intimate, minimal celebrations.",
    features: ["4 Hours Coverage", "1 Photographer", "300 Edited Photos", "Online Gallery", "USB Delivery"],
    accent: "#c9a84c",
  },
  {
    name: "Classic",
    price: "₹95,000",
    desc: "Our most popular all-day package.",
    features: ["Full Day (12 hrs)", "2 Photographers", "700 Edited Photos", "Cinematic Reel", "Premium Album", "Online Gallery"],
    accent: "#8b5cf6",
    featured: true,
  },
  {
    name: "Signature",
    price: "₹1,65,000",
    desc: "The complete cinematic experience.",
    features: ["Multi-Day Coverage", "3 Photographers + 1 Videographer", "1200+ Edited Photos", "Wedding Film (15 min)", "Drone Shots", "2 Premium Albums", "Same-day Edits"],
    accent: "#e11d48",
  },
];

const testimonials = [
  { name: "Priya & Arjun", place: "Mumbai", quote: "They didn't just capture our wedding — they captured our souls. Every frame is a masterpiece we'll treasure forever.", rating: 5, img: "https://images.unsplash.com/photo-1494790108755-2616b612b1e3?w=80&q=80" },
  { name: "Kavya & Rohit", place: "Pune", quote: "The cinematic wedding film left our entire family in tears. Absolute professionals with an artist's eye.", rating: 5, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=80&q=80" },
  { name: "Sneha & Dev", place: "Goa", quote: "Booked them 18 months in advance and it was worth every second. Our photos look straight out of a Bollywood film!", rating: 5, img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80" },
];

export default function Home() {
  const [heroRef, heroInView] = useInView(0.1);
  const [aboutRef, aboutInView] = useInView(0.15);
  const [statsRef, statsInView] = useInView(0.2);
  const [cerRef, cerInView] = useInView(0.1);
  const [pkgRef, pkgInView] = useInView(0.1);
  const [tRef, tInView] = useInView(0.1);
  const [ctaRef, ctaInView] = useInView(0.2);

  return (
    <>
      <Helmet>
        <title>Paramveer Films | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="description" content="Paramveer Films — India's finest cinematic wedding photography and films. Based in Mumbai & Pune." />
        <meta property="og:title" content="Paramveer Films | Cinematic Wedding Photography" />
        <meta property="og:description" content="We transform your wedding into an eternal cinematic story." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=1200" />
        <meta property="og:url" content="https://paramveerfilms.com" />
        <meta property="og:type" content="website" />
        <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          html { scroll-behavior: smooth; }

          /* Fade & slide utility */
          .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
          .reveal.visible { opacity: 1; transform: none; }
          .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
          .reveal-left.visible { opacity: 1; transform: none; }
          .reveal-right { opacity: 0; transform: translateX(50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
          .reveal-right.visible { opacity: 1; transform: none; }

          .delay-1 { transition-delay: 0.1s !important; }
          .delay-2 { transition-delay: 0.2s !important; }
          .delay-3 { transition-delay: 0.3s !important; }
          .delay-4 { transition-delay: 0.4s !important; }
          .delay-5 { transition-delay: 0.5s !important; }
          .delay-6 { transition-delay: 0.6s !important; }

          @keyframes floatBadge {
            0%, 100% { transform: translateY(0) rotate(-6deg); }
            50% { transform: translateY(-8px) rotate(-6deg); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes pulseRing {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </Helmet>

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <HeroVideoSlider />

      {/* ─── SCROLLING TICKER ─────────────────────────────────────────── */}
      <div style={{ background: "#111", padding: "14px 0", overflow: "hidden", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div style={{ display: "flex", animation: "marquee 22s linear infinite", width: "max-content" }}>
          {["Haldi", "Mehendi", "Baraat", "Pheras", "Reception", "Pre-Wedding", "Engagement", "Sangeet", "Candid", "Cinematic Films"].concat(
           ["Haldi", "Mehendi", "Baraat", "Pheras", "Reception", "Pre-Wedding", "Engagement", "Sangeet", "Candid", "Cinematic Films"]
          ).map((t, i) => (
            <span key={i} style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.25em", textTransform: "uppercase", color: i % 2 === 0 ? "#c9a84c" : "#fff", padding: "0 2.5rem", whiteSpace: "nowrap" }}>
              {t} {i % 2 === 0 ? "✦" : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* ─── ABOUT / INTRO ────────────────────────────────────────────── */}
      <section ref={aboutRef} style={{ background: "#faf8f4", padding: "clamp(80px,10vw,140px) 24px", position: "relative", overflow: "hidden" }}>
        {/* Decorative lines */}
        <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "100%", background: "linear-gradient(to bottom, transparent, #e8dcc8 30%, #e8dcc8 70%, transparent)", opacity: 0.6, transform: "translateX(-50%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,8vw,100px)", alignItems: "center" }}>
          
          {/* Image side */}
          <div className={`reveal-left ${aboutInView ? "visible" : ""}`} style={{ position: "relative" }}>
            {/* Floating badge */}
            <div style={{ position: "absolute", top: -24, right: -20, zIndex: 10, width: 110, height: 110, borderRadius: "50%", background: "#111", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "floatBadge 3s ease-in-out infinite", boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300, color: "#c9a84c", lineHeight: 1 }}>10+</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#aaa", marginTop: 4 }}>Years</span>
            </div>

            {/* Main image */}
            <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", boxShadow: "20px 24px 80px rgba(0,0,0,0.18)" }}>
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
                alt="Cinematic Wedding"
                style={{ width: "100%", height: 560, objectFit: "cover", display: "block", filter: "saturate(1.05)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, transparent 60%)" }} />
            </div>

            {/* Small offset accent image */}
            <div style={{ position: "absolute", bottom: -32, left: -32, width: 180, height: 220, borderRadius: 4, overflow: "hidden", boxShadow: "12px 16px 40px rgba(0,0,0,0.25)", border: "4px solid #faf8f4" }}>
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" alt="Wedding detail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

          {/* Text side */}
          <div className={`reveal-right ${aboutInView ? "visible" : ""}`}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Est. 2014 · Mumbai & Pune</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              We Tell Love Stories<br /><em>Through Light & Film</em>
            </h2>
            <div style={{ width: 60, height: 1, background: "#c9a84c", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, color: "#555", lineHeight: 1.85, marginBottom: "1.5rem" }}>
              At Paramveer Films, we believe every wedding is a living poem — written in stolen glances, tearful blessings, and joyful chaos. Our role is simply to preserve it.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, color: "#555", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              From the quiet rituals of a morning haldi to the grandeur of a baraat illuminated by midnight fireworks, we chase light, emotion, and the moments no one else thinks to capture.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/portfolio" style={{ padding: "14px 32px", background: "#111", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, transition: "background 0.3s, transform 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.transform = "none"; }}>
                View Portfolio
              </a>
              <a href="/about" style={{ padding: "14px 32px", border: "1px solid #c9a84c", color: "#c9a84c", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c9a84c"; }}>
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section ref={statsRef} style={{ background: "#111", padding: "clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          <AnimatedCounter target={500} suffix="+" label="Weddings Shot" />
          <AnimatedCounter target={10} suffix="+" label="Years Experience" />
          <AnimatedCounter target={20000} suffix="+" label="Memories Created" />
          <AnimatedCounter target={98} suffix="%" label="Clients Return" />
        </div>
      </section>

      {/* ─── IMAGE SLIDER ─────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(80px,10vw,130px) 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Portfolio Highlights</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1.1 }}>
              Beautiful Moments,<br /><em>Eternal Memories</em>
            </h2>
          </div>
          <ImageSlider />
        </div>
      </section>

      {/* ─── CEREMONY GRID ────────────────────────────────────────────── */}
      <section ref={cerRef} style={{ background: "#0d0d0d", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,70px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>What We Cover</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1 }}>
              Every Ceremony,<br /><em>Every Emotion</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: 3 }}>
            {ceremonies.map((c, i) => (
              <div key={i}
                className={`reveal ${cerInView ? "visible delay-${i + 1}" : ""}`}
                style={{ position: "relative", overflow: "hidden", aspectRatio: i === 0 || i === 5 ? "4/5" : "3/4", cursor: "pointer" }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                  e.currentTarget.querySelector(".overlay").style.opacity = 1;
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
                  e.currentTarget.querySelector(".overlay").style.opacity = 0;
                }}
              >
                <img src={c.img} alt={c.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(.22,1,.36,1)", display: "block" }}
                  onError={e => { e.target.src = `https://images.unsplash.com/photo-151974286699${i}-66d3cfef4bbd?w=600&q=60`; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
                <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(201,168,76,0.18)", opacity: 0, transition: "opacity 0.5s" }} />
                <div style={{ position: "absolute", top: 18, left: 20 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em" }}>{c.tag}</span>
                </div>
                <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 400, color: "#fff", marginBottom: 4 }}>{c.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE ─────────────────────────────────────────── */}
      <section style={{ background: "#faf8f4", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>How It Works</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#1a1a1a" }}>
              From Inquiry to <em>Heirloom</em>
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "#e8dcc8", transform: "translateX(-50%)" }} />

            {[
              { num: "01", title: "Initial Consultation", desc: "A relaxed conversation to understand your vision, preferences, and wedding details. We listen more than we talk.", icon: "☎" },
              { num: "02", title: "Customise Your Package", desc: "We craft a bespoke proposal tailored to your budget, wedding duration, and the moments that matter most to you.", icon: "✦" },
              { num: "03", title: "On Your Wedding Day", desc: "Our team arrives early, stays late, and moves invisibly — capturing every tear, laugh, and sacred ritual.", icon: "◎" },
              { num: "04", title: "Curated Delivery", desc: "Within 4–6 weeks, your gallery, film, and album arrive — each image colour-graded, each frame a work of art.", icon: "✉" },
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-end" : "flex-start", marginBottom: "clamp(40px,6vw,80px)", position: "relative" }}>
                {/* Dot on the line */}
                <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 14, height: 14, borderRadius: "50%", background: "#c9a84c", zIndex: 2 }} />

                <div style={{ width: "42%", background: "#fff", padding: "clamp(24px,4vw,40px)", boxShadow: "0 4px 40px rgba(0,0,0,0.07)", borderTop: "2px solid #c9a84c", position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 300, color: "#f0e8d5", lineHeight: 1, flexShrink: 0 }}>{step.num}</div>
                    <div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#1a1a1a", marginBottom: 8 }}>{step.title}</h3>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "#666", lineHeight: 1.7 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PACKAGES ─────────────────────────────────────────────────── */}
      <section ref={pkgRef} style={{ background: "#111", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Packages & Pricing</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "#fff" }}>
              Invest in <em>Forever</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {packages.map((pkg, i) => (
              <div key={i}
                className={`reveal ${pkgInView ? `visible delay-${i + 1}` : ""}`}
                style={{ position: "relative", background: pkg.featured ? "#fff" : "rgba(255,255,255,0.04)", border: pkg.featured ? "none" : "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "clamp(32px,5vw,52px) clamp(24px,4vw,40px)", transition: "transform 0.4s, box-shadow 0.4s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 24px 60px rgba(201,168,76,0.2)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {pkg.featured && <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#c9a84c", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", padding: "6px 20px", borderRadius: 99 }}>Most Popular</div>}
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", color: pkg.featured ? pkg.accent : "rgba(255,255,255,0.5)", marginBottom: "1rem" }}>{pkg.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: pkg.featured ? "#1a1a1a" : "#fff", marginBottom: "0.5rem" }}>{pkg.price}</div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: pkg.featured ? "#777" : "rgba(255,255,255,0.45)", marginBottom: "2rem", lineHeight: 1.6 }}>{pkg.desc}</p>
                <div style={{ width: "100%", height: 1, background: pkg.featured ? "#f0ece4" : "rgba(255,255,255,0.1)", marginBottom: "2rem" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem 0", display: "flex", flexDirection: "column", gap: 12 }}>
                  {pkg.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: pkg.featured ? "#444" : "rgba(255,255,255,0.6)", fontWeight: 300 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: pkg.accent, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact"
                  style={{ display: "block", textAlign: "center", padding: "14px 0", background: pkg.featured ? "#111" : "transparent", color: pkg.featured ? "#fff" : "#c9a84c", border: pkg.featured ? "none" : `1px solid ${pkg.accent}`, fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#c9a84c"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = pkg.featured ? "#111" : "transparent"; e.currentTarget.style.color = pkg.featured ? "#fff" : "#c9a84c"; e.currentTarget.style.borderColor = pkg.accent; }}>
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginTop: "2rem" }}>
            All packages include travel within 100km. Custom packages available for destination weddings.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section ref={tRef} style={{ background: "#faf8f4", padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,80px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Love Letters</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#1a1a1a" }}>
              What Our <em>Couples Say</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <div key={i}
                className={`reveal ${tInView ? `visible delay-${i + 1}` : ""}`}
                style={{ background: "#fff", padding: "clamp(28px,4vw,48px)", borderBottom: "3px solid #c9a84c", boxShadow: "0 4px 30px rgba(0,0,0,0.06)", position: "relative" }}
              >
                {/* Quote mark */}
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "6rem", lineHeight: 0.8, color: "#f0e8d5", marginBottom: "1.5rem", marginLeft: -8 }}>"</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 300, fontStyle: "italic", color: "#333", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {t.quote}
                </p>
                {/* Stars */}
                <div style={{ display: "flex", gap: 4, marginBottom: "1.5rem" }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: "#c9a84c", fontSize: "0.85rem" }}>★</span>)}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <img src={t.img} alt={t.name} style={{ width: 48, height: 48, borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#1a1a1a" }}>{t.name}</div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.1em" }}>{t.place}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTAGRAM / REEL STRIP ───────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(24px,4vw,48px)", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#1a1a1a" }}>
              Follow Our <em>Journey</em>
            </h2>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none", borderBottom: "1px solid #c9a84c", paddingBottom: 2 }}>@paramveerfilms →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
            {[
              "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=400&q=70",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=70",
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=70",
              "https://images.unsplash.com/photo-1511285560929-80b456503681?w=400&q=70",
              "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=70",
            ].map((img, i) => (
              <div key={i} style={{ position: "relative", aspectRatio: "1", overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.querySelector("img").style.transform = "scale(1.08)"; e.currentTarget.querySelector(".ig-overlay").style.opacity = 1; }}
                onMouseLeave={e => { e.currentTarget.querySelector("img").style.transform = "scale(1)"; e.currentTarget.querySelector(".ig-overlay").style.opacity = 0; }}
              >
                <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }} />
                <div className="ig-overlay" style={{ position: "absolute", inset: 0, background: "rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.4s" }}>
                  <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────────── */}
      <section ref={ctaRef} style={{ position: "relative", overflow: "hidden", minHeight: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=80"
          alt="Wedding celebration"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.38)" }}
        />
        <div className={`reveal ${ctaInView ? "visible" : ""}`} style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(60px,8vw,100px) 24px", maxWidth: 800 }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Limited Dates Available 2025–26</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Your Story Deserves<br /><em>To Be Told Beautifully</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.7 }}>
            We accept only 24 weddings per year — ensuring every couple receives our full creative devotion.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact"
              style={{ padding: "16px 40px", background: "#c9a84c", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1a1a1a"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#fff"; }}>
              Check Availability →
            </a>
            <a href="/portfolio"
              style={{ padding: "16px 40px", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.82rem", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", borderRadius: 2, transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}>
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}