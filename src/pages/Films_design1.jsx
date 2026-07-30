import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import HeroImage from "../assets/hero3.webp";

// ─── Helpers for Video Modal ──────────────────────────────────
function toEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("drive.google.com")) {
    const match = url.match(/\/d\/([^/]+)/);
    if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  if (url.includes("youtube.com/embed/")) return url;
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?autoplay=1&mute=0`;
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&mute=0`;
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&mute=0`;
  return url;
}

function isYouTube(url) {
  return url && (url.includes("youtu.be") || url.includes("youtube.com") || url.includes("drive.google.com"));
}

// ─── Video Modal (Lightbox) ──────────────────────────────────
const VideoModal = React.memo(function VideoModal({ film, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const youtube = isYouTube(film.url);
  const embedUrl = useMemo(() => toEmbedUrl(film.url), [film.url]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (youtube) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {});
    setIsPlaying(true);
    setIsMuted(false);
  }, [film.url, youtube]);

  const handlePlayPause = useCallback((e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) { el.play().catch(() => {}); setIsPlaying(true); } 
    else { el.pause(); setIsPlaying(false); }
  }, []);

  const handleMuteToggle = useCallback((e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  }, []);

  const handleFullscreen = useCallback((e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-3 sm:p-6 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10 group shadow-2xl"
      >
        {youtube ? (
          <iframe
            src={embedUrl}
            className="w-full h-full absolute inset-0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={film.couple}
          />
        ) : (
          <video
            ref={videoRef}
            src={film.url}
            playsInline
            preload="auto"
            className="w-full h-full object-contain absolute inset-0"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        )}

        <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 flex justify-end items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30">
          <button onClick={onClose} className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-red-500 text-white transition-colors border border-white/10 backdrop-blur-md shadow-lg shrink-0">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {!youtube && (
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={handlePlayPause} className="p-2.5 sm:p-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md">
                {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
              </button>
              <button onClick={handleMuteToggle} className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md">
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
            <button onClick={handleFullscreen} className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
});

// ─── Data ───────────────────────────────────────────────────────────────────
const films = [
  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune, Maharashtra", category: "Destination" },
  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Pune, Maharashtra", category: "Coastal" },
  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Pune, Maharashtra", category: "Destination" },
  { couple: "Harjot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Pune, Maharashtra", category: "Royal" },
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

function FilmCard({ film, onSelect }) {
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
      onClick={() => onSelect(film)}
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
  
  const [selectedFilm, setSelectedFilm] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFilm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedFilm]);

  return (
    <div className="min-h-screen bg-[#f7f5f1]">
      <Helmet>
        <title>Films · TILT SHIFT Films</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
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
            Every wedding has its own rhythm of emotions, laughter and unforgettable moments.<br/> 
            Our cinematic wedding films and professional wedding videography capture this flow through candid moments, real emotions and creative storytelling. From traditional Indian weddings to modern destination weddings, we craft timeless wedding films that let you relive your celebration with authenticity, beauty and lasting memories.
          </p>
        </div>
      </section>

      <br/><br/><br/> 

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-6 pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {filtered.map((film) => (
            <FilmCard key={film.id} film={film} onSelect={setSelectedFilm} />
          ))}
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-[#1a1a1a] py-[clamp(52px,7vw,80px)] px-6 text-center">
        <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3.4rem)] font-light text-white leading-[1.2] mb-[2.2rem]">
          Your story deserves to be<br /><em className="italic">told beautifully</em>
        </h2>
        <a href="/contact" className="inline-block font-['Jost'] text-[0.78rem] font-medium tracking-[0.24em] uppercase text-white no-underline border border-white/40 px-10 py-[14px] transition-all duration-300 hover:bg-[#c9a84c] hover:border-[#c9a84c]">
          Get In Touch →
        </a>
      </div>

      {/* RENDER VIDEO MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedFilm && <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </div>
  );
}