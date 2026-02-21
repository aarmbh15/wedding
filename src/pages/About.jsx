// src/pages/About.jsx
import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

const team = [
  {
    name: "Anupam Maurya",
    role: "Creative Director & Co-Founder",
    bio: "Ex-engineer turned storyteller. Anupam sees poetry in shadows and finds the divine in unguarded moments.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    tag: "Photographer · Director",
  },
  {
    name: "Soumi Goswami",
    role: "Chief Storyteller & Co-Founder",
    bio: "A former architect who now designs emotional narratives. Soumi's eye for detail transforms frames into heirlooms.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    tag: "Photographer · Editor",
  },
  {
    name: "Rahul Mehta",
    role: "Lead Cinematographer",
    bio: "Rahul crafts cinematic wedding films that play like short Bollywood features — every cut intentional, every score perfect.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    tag: "Videographer · Colorist",
  },
  {
    name: "Priya Desai",
    role: "Second Photographer & Editor",
    bio: "Priya blends into the crowd, emerging only to seize the tears, laughter, and love no one else noticed.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80",
    tag: "Photographer · Retoucher",
  },
];

const awards = [
  { name: "WeddingSutra", year: "2023", award: "Best Wedding Photographer of the Year" },
  { name: "Vogue India", year: "2022", award: "Top 10 Wedding Studios in India" },
  { name: "Junebug Weddings", year: "2022", award: "World's Best Wedding Photography" },
  { name: "The Knot", year: "2021", award: "Best of Weddings — Photography" },
];

const values = [
  { icon: "◑", title: "Mastery of Light", desc: "We chase golden hour, sculpt shadows, and find beauty in every lighting condition — from sun-drenched mandaps to candlelit receptions." },
  { icon: "◎", title: "Documentary Soul", desc: "We don't pose your wedding; we witness it. Real chaos, real tears, real magic — preserved exactly as it happened." },
  { icon: "❖", title: "Cinematic Vision", desc: "Every wedding deserves a film score and a director's eye. We craft visual stories that feel timeless, not trendy." },
  { icon: "✦", title: "Absolute Discretion", desc: "Your day, your story, your privacy. We integrate seamlessly, never disrupting, always present when it matters." },
];

const About = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [storyRef, storyInView] = useInView(0.15);
  const [valRef, valInView] = useInView(0.1);
  const [teamRef, teamInView] = useInView(0.1);
  const [awardRef, awardInView] = useInView(0.15);
  const [ctaRef, ctaInView] = useInView(0.2);

  return (
    <div style={{ minHeight: "100vh", background: "#080b12", color: "#e8e0d0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .reveal { opacity: 0; transform: translateY(44px); transition: opacity 0.95s cubic-bezier(.22,1,.36,1), transform 0.95s cubic-bezier(.22,1,.36,1); }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
        .reveal-left.visible { opacity: 1; transform: none; }
        .reveal-right { opacity: 0; transform: translateX(50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
        .reveal-right.visible { opacity: 1; transform: none; }

        .d1 { transition-delay: 0.1s !important; }
        .d2 { transition-delay: 0.2s !important; }
        .d3 { transition-delay: 0.3s !important; }
        .d4 { transition-delay: 0.4s !important; }
        .d5 { transition-delay: 0.5s !important; }

        .team-card:hover .team-img { transform: scale(1.06); }
        .team-card:hover .team-overlay { opacity: 1; }
        .team-card:hover .team-tag { transform: translateY(0); opacity: 1; }

        @keyframes heroFade { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
        @keyframes heroText { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drawLine { from { width: 0; } to { width: 60px; } }
        @keyframes rotate360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.3); } 50% { box-shadow: 0 0 50px rgba(201,168,76,0.6); } }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, animation: "heroFade 1.6s ease-out forwards" }}>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1519741497674-281450b0d9be?auto=format&fit=crop&w=2000&q=80"
            alt="Timeless love"
            effect="blur"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.32) saturate(0.8)" }}
          />
          {/* Elegant vignette overlay */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(8,11,18,0.7) 100%)" }} />
        </div>

        {/* Rotating decorative ring */}
        <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.2)", animation: "rotate360 30s linear infinite", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div style={{ position: "absolute", width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)", animation: "rotate360 45s linear infinite reverse", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", animation: "heroText 1.2s 0.4s ease-out both" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem", opacity: 0.9 }}>
            Est. 2014 · Mumbai & Pune · 500+ Love Stories
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 300, color: "#fff", lineHeight: 1.05, marginBottom: "1rem" }}>
            About <span style={{ color: "#c9a84c", fontStyle: "italic" }}>Knots by Amp</span>
          </h1>
          <div style={{ width: 60, height: 1, background: "#c9a84c", margin: "1.5rem auto", animation: "drawLine 1s 1s ease-out both" }} />
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem,2.5vw,1.6rem)", fontWeight: 300, fontStyle: "italic", color: "rgba(232,224,208,0.85)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Through the Lens Since 2014 — Capturing Love, One Timeless Story at a Time
          </p>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>Scroll</span>
          <div style={{ width: 1, height: 50, background: "linear-gradient(to bottom, #c9a84c, transparent)", animation: "pulseGlow 2s infinite" }} />
        </div>
      </section>

      {/* ─── OUR STORY ────────────────────────────────────────────── */}
      <section ref={storyRef} style={{ padding: "clamp(80px,10vw,140px) 24px", background: "#080b12", position: "relative", overflow: "hidden" }}>
        {/* Large ghost text */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(6rem,15vw,16rem)", fontWeight: 300, color: "rgba(255,255,255,0.02)", whiteSpace: "nowrap", pointerEvents: "none", letterSpacing: "0.1em" }}>STORY</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(50px,8vw,100px)", alignItems: "center" }}>
          
          {/* Images */}
          <div className={`reveal-left ${storyInView ? "visible" : ""}`} style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", aspectRatio: "3/4", boxShadow: "0 30px 100px rgba(0,0,0,0.6)" }}>
              <LazyLoadImage
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
                alt="Our story"
                effect="blur"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, transparent 50%)" }} />
            </div>

            {/* Accent small image */}
            <div style={{ position: "absolute", bottom: -30, right: -30, width: 200, height: 240, borderRadius: 2, overflow: "hidden", boxShadow: "0 16px 60px rgba(0,0,0,0.5)", border: "3px solid #080b12" }}>
              <LazyLoadImage src="https://images.unsplash.com/photo-1511285560929-80b456503681?auto=format&fit=crop&w=400&q=80" alt="Wedding detail" effect="blur" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            {/* Year badge */}
            <div style={{ position: "absolute", top: 30, left: -20, background: "#c9a84c", color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", fontWeight: 300, padding: "16px 24px", lineHeight: 1, boxShadow: "8px 8px 40px rgba(201,168,76,0.3)" }}>
              <div>10+</div>
              <div style={{ fontSize: "0.65rem", fontFamily: "'Jost', sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>Years</div>
            </div>
          </div>

          {/* Text */}
          <div className={`reveal-right ${storyInView ? "visible" : ""}`}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Our Journey</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              From Passion Projects<br />to <em>500+ Love Stories</em>
            </h2>
            <div style={{ width: 50, height: 1, background: "#c9a84c", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(232,224,208,0.7)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              It all began when passion met purpose. Two friends from engineering and corporate worlds chose to chase light, emotion, and stories that matter. Knots by Amp was born in 2014 — evolving from candid street photography into a signature blend of documentary honesty, fine-art elegance, and cinematic romance.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(232,224,208,0.7)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              Today, we're among India's most awarded studios — documenting love stories across destinations worldwide, earning recognition from WeddingSutra, Vogue India, Junebug Weddings, and more. Every frame is real: raw, emotional, beautifully imperfect.
            </p>
            <div style={{ display: "flex", gap: 40 }}>
              {[{ n: "500+", l: "Weddings" }, { n: "12", l: "Countries" }, { n: "20+", l: "Awards" }].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 300, color: "#c9a84c" }}>{s.n}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,224,208,0.45)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────── */}
      <section ref={valRef} style={{ padding: "clamp(80px,10vw,130px) 24px", background: "#0d1019" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className={`reveal ${valInView ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "clamp(50px,7vw,90px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Our Philosophy</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 300, color: "#fff" }}>
              Why Choose <em>Knots by Amp?</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
            {values.map((v, i) => (
              <div key={i}
                className={`reveal ${valInView ? `visible d${i + 1}` : ""}`}
                style={{ padding: "clamp(40px,5vw,64px)", borderTop: "1px solid rgba(201,168,76,0.15)", borderLeft: i % 2 === 1 ? "1px solid rgba(201,168,76,0.15)" : "none", position: "relative", overflow: "hidden", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3.5rem", color: "rgba(201,168,76,0.25)", lineHeight: 1, marginBottom: "1.5rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 400, color: "#fff", marginBottom: "1rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(232,224,208,0.55)", lineHeight: 1.8 }}>{v.desc}</p>

                {/* Number watermark */}
                <div style={{ position: "absolute", bottom: 20, right: 24, fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem", fontWeight: 300, color: "rgba(255,255,255,0.03)", lineHeight: 1 }}>0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────── */}
      <section ref={teamRef} style={{ padding: "clamp(80px,10vw,130px) 24px", background: "#080b12" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <div className={`reveal ${teamInView ? "visible" : ""}`} style={{ marginBottom: "clamp(50px,7vw,90px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The Humans Behind the Lens</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 300, color: "#fff" }}>
                Dreamers <em>&amp; Doers</em>
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 300, color: "rgba(232,224,208,0.45)", maxWidth: 320, lineHeight: 1.7 }}>
                A tight-knit crew of artists who believe every love story deserves to be told beautifully.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {team.map((p, i) => (
              <div key={i}
                className={`team-card reveal ${teamInView ? `visible d${i + 1}` : ""}`}
                style={{ position: "relative", cursor: "pointer" }}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4", marginBottom: 0 }}>
                  <img
                    className="team-img"
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.7s cubic-bezier(.22,1,.36,1)", filter: "grayscale(20%)" }}
                  />
                  <div className="team-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,11,18,0.95) 0%, rgba(8,11,18,0.3) 50%, transparent 100%)", opacity: 0.6, transition: "opacity 0.5s" }} />
                  
                  {/* Tag pill */}
                  <div className="team-tag" style={{ position: "absolute", top: 16, left: 16, background: "rgba(201,168,76,0.9)", color: "#fff", fontFamily: "'Jost', sans-serif", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 14px", transform: "translateY(-10px)", opacity: 0, transition: "transform 0.4s 0.1s, opacity 0.4s 0.1s" }}>
                    {p.tag}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "20px 0 0" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "#fff", marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", marginBottom: 10 }}>{p.role}</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.83rem", fontWeight: 300, color: "rgba(232,224,208,0.45)", lineHeight: 1.7 }}>{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AWARDS ───────────────────────────────────────────────── */}
      <section ref={awardRef} style={{ padding: "clamp(70px,8vw,110px) 24px", background: "#0d1019", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className={`reveal ${awardInView ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "clamp(40px,6vw,70px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Recognition</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#fff" }}>
              Honoured by the <em>Best in the World</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(201,168,76,0.1)" }}>
            {awards.map((a, i) => (
              <div key={i}
                className={`reveal ${awardInView ? `visible d${i + 1}` : ""}`}
                style={{ background: "#0d1019", padding: "clamp(28px,4vw,48px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, transition: "background 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(201,168,76,0.05)"}
                onMouseLeave={e => e.currentTarget.style.background = "#0d1019"}
              >
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400, color: "#fff", marginBottom: 6 }}>{a.award}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c" }}>{a.name}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "rgba(201,168,76,0.3)", flexShrink: 0 }}>{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section ref={ctaRef} style={{ position: "relative", padding: "clamp(100px,12vw,160px) 24px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=80"
            alt="Wedding celebration"
            effect="blur"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.2) saturate(0.6)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(8,11,18,0.6) 0%, transparent 100%)" }} />
        </div>
        <div className={`reveal ${ctaInView ? "visible" : ""}`} style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>
            Only 24 Weddings Per Year
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Ready to Tell<br /><em>Your Story?</em>
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "1rem", fontWeight: 300, color: "rgba(232,224,208,0.6)", marginBottom: "3rem", lineHeight: 1.8 }}>
            Every love is unique. Let's create something you'll treasure for a hundred years.
          </p>
          <a href="/contact"
            style={{ display: "inline-block", padding: "16px 48px", background: "#c9a84c", color: "#080b12", fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.35s", animation: "pulseGlow 3s 2s infinite" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#080b12"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#080b12"; e.currentTarget.style.transform = "none"; }}>
            Let's Create Magic Together →
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;