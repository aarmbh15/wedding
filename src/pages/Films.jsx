import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import HeroImage from "../assets/hero3.webp";

// ─── Data ───────────────────────────────────────────────────────────────────
const films = [
  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune, Maharashtra", category: "Destination" },
  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Pune, Maharashtra", category: "Coastal" },
  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Pune, Maharashtra", category: "Destination" },
  { couple: "Harjyot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Pune, Maharashtra", category: "Royal" },
  { couple: "Pradyumna & Drushti", url: "https://youtu.be/ER4o6k5L3J0", id: "ER4o6k5L3J0", location: "Pune, Maharashtra", category: "City" },
  { couple: "Dhriti & Lakshya", url: "https://youtu.be/QV-GVZNHNDo", id: "QV-GVZNHNDo", location: "Pune, Maharashtra", category: "Royal" },
  { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Pune, Maharashtra", category: "City" },
  { couple: "Chandra & Anmol", url: "https://youtu.be/8UMiPZMhUE4", id: "8UMiPZMhUE4", location: "Pune, Maharashtra", category: "Destination" },
  { couple: "Indrajeet & Sakshi", url: "https://youtu.be/R0F2tWN8oLc", id: "R0F2tWN8oLc", location: "Pune, Maharashtra", category: "City" },
  { couple: "Nidhi & Kunal", url: "https://youtu.be/ex_Fs-BiUC0", id: "ex_Fs-BiUC0", location: "Bangalore, Karnataka", category: "Coastal" },
  { couple: "Omkar & Apoorva", url: "https://youtu.be/DCCGOXaPCHQ", id: "DCCGOXaPCHQ", location: "Pune, Maharashtra", category: "City" },
  { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur, Rajasthan", category: "Royal" },
  { couple: "Utsav & Dyuthi", url: "https://youtu.be/nHDxp0WJqaE", id: "nHDxp0WJqaE", location: "Bangalore, Karnataka", category: "Destination" },
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
                        Films
                      </h1>
                      <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto mb-8 animate-[widthGrow_1.5s_ease-out]" />
                   <p className="pf-hero-sub mt-8 mx-auto max-w-4xl px-6 text-center font-jost text-[0.95rem] md:text-[1.05rem] font-light text-white/90 leading-[1.9]">
  These wedding films are shaped around
  <span className="font-medium text-white"> real moments</span> and
  <span className="font-medium text-white"> natural emotions</span>, brought together
  through a
  <span className="font-medium text-white"> cinematic lens</span>. With
  <span className="font-medium text-white"> careful capture</span> and
  <span className="font-medium text-white"> intentional editing</span>, each film
  becomes a
  <span className="font-medium text-white"> seamless narrative</span> that preserves
  the essence of the celebration in an
  <span className="font-medium text-white"> authentic and enduring</span> way.
</p>
                    </div>
                  </section>

      {/* Filters */}
      <div className="flex justify-center gap-[10px] flex-wrap mb-10 px-6 pt-[clamp(28px,4vw,48px)]">
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