// src/pages/Home.jsx
import React from 'react';

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
const stats = [
    { target: 500, suffix: "+", label: "Weddings Shot", sub: "Weddings Shot" },
    { target: 10, suffix: "+", label: "Years Experience", sub: "Years Experience" },
    { target: 20000, suffix: "+", label: "Memories Created", sub: "Memories Created" },
    { target: 98, suffix: "%", label: "Clients Return", sub: "Client Satisfaction" },
  ];
  const steps = [
  { num: "01", title: "Initial Consultation", desc: "A relaxed conversation to understand your vision, preferences, and wedding details. We listen more than we talk." },
  { num: "02", title: "Customise Your Package", desc: "We craft a bespoke proposal tailored to your budget, wedding duration, and the moments that matter most." },
  { num: "03", title: "On Your Wedding Day", desc: "Our team arrives early, stays late, and moves invisibly — capturing every tear, laugh, and sacred ritual." },
  { num: "04", title: "Curated Delivery", desc: "Within 4–6 weeks, your gallery, film, and album arrive — each image colour-graded, each frame a work of art." }
];
const images = [
    "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=400&q=70",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=70",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=70",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=70",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&q=70",
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
        <title>TILT SHIFT  Films | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="description" content="TILT SHIFT  Films — India's finest cinematic wedding photography and films. Based in Mumbai & Pune." />
        <meta property="og:title" content="TILT SHIFT  Films | Cinematic Wedding Photography" />
        <meta property="og:description" content="We transform your wedding into an eternal cinematic story." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=1200" />
        <meta property="og:url" content="https://TILT SHIFT films.com" />
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
    <section 
      ref={aboutRef} 
      className="relative overflow-hidden bg-[#faf8f4] py-[clamp(60px,12vw,140px)] px-6"
    >
      {/* Decorative background line */}
      <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e8dcc8] to-transparent opacity-40" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-[clamp(40px,8vw,100px)]">
        
        {/* Image side */}
        <div className={`relative transition-all duration-1000 ease-out ${aboutInView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
          
          {/* Floating badge */}
          <div className="absolute -top-6 -right-5 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#111] shadow-xl animate-[floatBadge_3s_ease-in-out_infinite] md:h-[110px] md:w-[110px]">
            <span className="font-serif text-[1.4rem] leading-none text-[#c9a84c] md:text-[1.6rem]">10+</span>
            <span className="mt-1 font-sans text-[0.5rem] uppercase tracking-[0.15em] text-[#aaa] md:text-[0.58rem]">Years</span>
          </div>

          {/* Main image */}
          <div className="relative overflow-hidden rounded-[4px] shadow-[20px_24px_80px_rgba(0,0,0,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
              alt="Cinematic Wedding"
              className="h-[400px] w-full object-cover md:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/15 to-transparent" />
          </div>

          {/* Small offset accent image */}
          <div className="absolute -bottom-8 -left-8 h-40 w-36 overflow-hidden rounded-[4px] border-[4px] border-[#faf8f4] shadow-[12px_16px_40px_rgba(0,0,0,0.25)] md:h-[220px] md:w-[180px]">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" alt="Wedding detail" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Text side */}
        <div className={`transition-all duration-1000 ease-out ${aboutInView ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
          <p className="mb-4 font-sans text-[0.75rem] uppercase tracking-[0.3em] text-[#c9a84c]">Est. 2014 · Mumbai & Pune</p>
          <h2 className="mb-6 font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-[#1a1a1a]">
            We Tell Love Stories<br /><em className="not-italic text-[#c9a84c]">Through Light & Film</em>
          </h2>
          <div className="mb-8 h-[1px] w-[60px] bg-[#c9a84c]" />
          
          <div className="mb-10 space-y-6 font-sans text-[1.05rem] font-light leading-[1.85] text-[#555]">
            <p>At TILT SHIFT Films, we believe every wedding is a living poem — written in stolen glances, tearful blessings, and joyful chaos. Our role is simply to preserve it.</p>
            <p>From the quiet rituals of a morning haldi to the grandeur of a baraat, we chase light, emotion, and the moments no one else thinks to capture.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/portfolio" className="rounded-[2px] bg-[#111] px-8 py-3.5 font-sans text-[0.82rem] uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-1 hover:bg-[#c9a84c]">
              View Portfolio
            </a>
            <a href="/about" className="rounded-[2px] border border-[#c9a84c] px-8 py-3.5 font-sans text-[0.82rem] uppercase tracking-[0.15em] text-[#c9a84c] transition-all hover:bg-[#c9a84c] hover:text-white">
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS file for the animation to work */}
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
      `}</style>
    </section>


      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="bg-[#F4F1EA] px-6 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <AnimatedCounter target={s.target} suffix={s.suffix} label={s.label} 
              className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#2D2D2D]" />
            <p className="mt-2 font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#8C7A6B]">{s.sub}</p>
          </div>
        ))}
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
     <section ref={cerRef} className="px-6 py-[clamp(80px,10vw,130px)] bg-[#F4F1EA]">
  <div className="max-w-[1300px] mx-auto">
    <div className="text-center mb-[clamp(40px,6vw,70px)]">
      <p className="font-['Jost'] text-[0.75rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">What We Cover</p>
      <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,5vw,4rem)] font-light text-[#2b2b2b] leading-[1.1]">
        Every Ceremony, <br /> <em className="text-[#c9a84c] not-italic">Every Emotion</em>
      </h2>
    </div>

    {/* Responsive Grid: 1 col on mobile, 2 on sm/md, 3 on lg */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ceremonies.map((c, i) => (
        <div key={i}
          className={`group relative overflow-hidden rounded-[18px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] cursor-pointer transition-all reveal ${cerInView ? `visible delay-${i + 1}` : ""}`}
          style={{ aspectRatio: i === 0 || i === 5 ? "4/5" : "3/4" }}
        >
          <img src={c.img} alt={c.title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
            onError={e => e.target.src = `https://images.unsplash.com/photo-151974286699${i}-66d3cfef4bbd?w=600&q=60`} 
          />
          
          {/* Gradients & Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-100" />
          <div className="absolute inset-0 bg-[#c9a84c]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Labels */}
          <div className="absolute top-[18px] left-5 font-['Cormorant_Garamond'] text-[0.85rem] text-[#8a7d6b] tracking-wider">{c.tag}</div>
          <div className="absolute bottom-6 left-6">
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#2b2b2b] mb-1">{c.title}</h3>
            <p className="font-['Jost'] text-[0.72rem] tracking-[0.15em] uppercase text-[#9c8f80]">{c.sub}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ─── PROCESS TIMELINE ─────────────────────────────────────────── */}
  <section className="bg-white py-[clamp(70px,10vw,130px)] px-5">
      <div className="max-w-[1100px] mx-auto">
        
        <div className="text-center mb-[clamp(40px,6vw,80px)]">
          <p className="font-['Jost'] text-[0.75rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">How It Works</p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,5vw,3.5rem)] font-light text-[#1a1a1a] leading-tight">
            From Inquiry to <em className="text-[#c9a84c] not-italic">Heirloom</em>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line: Hidden on mobile, shown on md+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#e8dcc8] -translate-x-1/2 hidden md:block" />

          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center justify-between mb-[clamp(40px,6vw,80px)] relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-8 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#c9a84c] z-10 hidden md:block" />

              {/* Card Container */}
              <div className="w-full md:w-[45%] bg-white p-[clamp(24px,4vw,40px)] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-t-2 border-[#c9a84c] rounded-lg">
                <div className="flex gap-4">
                  <span className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,6vw,3rem)] font-light text-[#f0e8d5] leading-none shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] text-xl text-[#1a1a1a] mb-2">{step.title}</h3>
                    <p className="font-['Jost'] text-[0.95rem] font-light text-[#666] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side of the zigzag */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ─── PACKAGES ─────────────────────────────────────────────────── */}
      <section ref={pkgRef} className="px-5 py-[clamp(70px,10vw,130px)] bg-[#F4F1EA]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-[clamp(40px,6vw,80px)]">
          <p className="font-['Jost'] text-[0.75rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">Packages & Pricing</p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.3rem,5vw,4rem)] font-light text-[#2b2b2b]">
            Invest in <em className="text-[#c9a84c] not-italic">Forever</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {packages.map((pkg, i) => (
            <div key={i} 
              className={`group relative p-[clamp(30px,5vw,50px)_clamp(22px,4vw,40px)] rounded-[18px] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 reveal ${pkgInView ? 'visible delay-'+(i+1) : ''} 
              ${pkg.featured ? 'bg-white shadow-[0_25px_60px_rgba(201,168,76,0.12)] border-transparent' : 'bg-white/70 border border-[#c9a84c]/20 shadow-sm hover:bg-white'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-white font-['Jost'] text-[0.7rem] tracking-widest uppercase py-1.5 px-6 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <p className={`font-['Jost'] text-[0.75rem] tracking-[0.25em] uppercase mb-4 ${pkg.featured ? 'text-[#c9a84c]' : 'text-[#a8916a]'}`}>
                {pkg.name}
              </p>
              
              <h3 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3rem)] font-light text-[#2b2b2b] mb-2">{pkg.price}</h3>
              <p className="font-['Jost'] text-[0.92rem] text-[#6f6a63] leading-relaxed mb-8">{pkg.desc}</p>
              
              <div className="w-full h-px bg-[#c9a84c]/20 mb-8" />

              <ul className="space-y-3 mb-10">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-['Jost'] text-[0.9rem] text-[#5c5650] font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" className={`block text-center py-3.5 border border-[#c9a84c] font-['Jost'] text-[0.78rem] tracking-widest uppercase rounded transition-all duration-300 
                ${pkg.featured ? 'bg-[#c9a84c] text-white hover:bg-[#b8953f]' : 'text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white'}`}>
                Book This Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-['Jost'] text-[0.85rem] text-[#8d8377] mt-12 max-w-2xl mx-auto">
          All packages include travel within 100km. Custom packages available for destination weddings.
        </p>
      </div>
    </section>
      {/* ─── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section ref={tRef} className="bg-white py-[clamp(80px,10vw,130px)] px-6">
  <div className="max-w-[1200px] mx-auto">
    <div className="text-center mb-[clamp(40px,6vw,80px)]">
      <p className="font-['Jost'] text-[0.75rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">Love Letters</p>
      <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1a1a1a]">
        What Our <em className="italic text-[#c9a84c] not-italic">Couples Say</em>
      </h2>
    </div>

    {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className={`reveal ${tInView ? `visible delay-${i + 1}` : ""} bg-white p-[clamp(28px,4vw,48px)] border-b-[3px] border-[#c9a84c] shadow-[0_4px_30px_rgba(0,0,0,0.06)] relative`}>
          <div className="font-['Cormorant_Garamond'] text-8xl leading-[0.8] text-[#f0e8d5] -ml-2 mb-4">"</div>
          <p className="font-['Cormorant_Garamond'] text-[1.15rem] font-light italic text-[#333] border-[#333] leading-[1.8] mb-8">
            {t.quote}
          </p>
          <div className="flex gap-1 mb-6">
            {[...Array(t.rating)].map((_, j) => <span key={j} className="text-[#c9a84c] text-[0.85rem]">★</span>)}
          </div>
          <div className="flex items-center gap-3.5">
            <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <div className="font-['Jost'] text-[0.9rem] font-medium text-[#1a1a1a]">{t.name}</div>
              <div className="font-['Jost'] text-[0.75rem] text-[#aaa] tracking-widest uppercase">{t.place}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ─── INSTAGRAM / REEL STRIP ───────────────────────────────────── */}
      <section className="bg-[#F4F1EA] py-[clamp(60px,8vw,100px)] px-6">
      <div className="max-w-[1300px] mx-auto">
        {/* Header: Stacks on mobile, spreads on desktop */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-5 mb-[clamp(24px,4vw,48px)]">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3.2rem)] font-light text-[#1a1a1a] text-center sm:text-left">
            Follow Our <em className="italic text-[#c9a84c] not-italic">Journey</em>
          </h2>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" 
             className="font-['Jost'] text-[0.78rem] tracking-[0.2em] uppercase text-[#c9a84c] border-b border-[#c9a84c] pb-0.5 hover:text-[#b8953f] transition-colors">
            @TILT SHIFT films →
          </a>
        </div>

        {/* Responsive Grid: 2 cols (mobile), 3 cols (tablet), 5 cols (desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer bg-white">
              <img src={img} alt="Instagram feed" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-[#c9a84c]/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="drop-shadow-sm">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* ─── CTA BANNER ───────────────────────────────────────────────── */}
    <section ref={ctaRef} className="relative overflow-hidden min-h-[480px] flex items-center justify-center">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=80" 
      alt="Wedding celebration" 
      className="w-full h-full object-cover brightness-[0.38]" 
    />
  </div>

  <div className={`relative z-10 text-center px-6 py-[clamp(60px,8vw,100px)] max-w-4xl reveal ${ctaInView ? "visible" : ""}`}>
    <p className="font-['Jost'] text-[0.75rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
      Limited Dates Available 2025–26
    </p>
    
    <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[1.1] mb-6">
      Your Story Deserves<br /><em className="italic not-italic">To Be Told Beautifully</em>
    </h2>
    
    <p className="font-['Jost'] text-[1.05rem] font-light text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
      We accept only 24 weddings per year — ensuring every couple receives our full creative devotion.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a href="/contact" className="w-full sm:w-auto px-10 py-4 bg-[#c9a84c] text-white font-['Jost'] text-[0.82rem] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]">
        Check Availability →
      </a>
      <a href="/portfolio" className="w-full sm:w-auto px-10 py-4 border border-white/40 text-white font-['Jost'] text-[0.82rem] tracking-[0.18em] uppercase transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]">
        View Our Work
      </a>
    </div>
  </div>
</section>
</>
  );
}