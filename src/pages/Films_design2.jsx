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
          <button onClick={onClose} className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-[#c9a84c] text-white transition-colors border border-white/10 backdrop-blur-md shadow-lg shrink-0">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {!youtube && (
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={handlePlayPause} className="p-2.5 sm:p-3 rounded-xl bg-[#c9a84c] hover:bg-[#b08f3a] text-white transition-all shadow-md">
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

// ─── Elegant Film Card Component ──────────────────────────────────────────────
function FilmCard({ film, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(film)}
      className="cursor-pointer w-full group flex flex-col"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[#e0dbd1] rounded-sm shadow-md mb-6">
        {/* Thumbnail Image */}
        <img
          src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
          alt={film.couple}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
        
        {/* Sleek Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] transition-all duration-500 shadow-2xl">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-sm">
          <span className="font-jost text-[0.6rem] uppercase tracking-widest text-white/90">
            {film.category}
          </span>
        </div>
      </div>
      
      {/* Editorial Style Typography underneath */}
      <div className="text-center px-4">
        <h3 className="font-cormorant text-[1.6rem] font-medium text-[#1a1a1a] mb-1.5 group-hover:text-[#c9a84c] transition-colors duration-400">
          {film.couple}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-[1px] bg-[#c9a84c]"></div>
          <p className="font-jost text-[0.65rem] tracking-[0.25em] uppercase text-gray-500">
            {film.location}
          </p>
          <div className="w-4 h-[1px] bg-[#c9a84c]"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Films() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFilm, setSelectedFilm] = useState(null);

  const filtered = useMemo(() => {
    return activeCategory === "All" ? films : films.filter((f) => f.category === activeCategory);
  }, [activeCategory]);
  
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenburns_20s_ease_infinite]">
          <img
            src={HeroImage}
            alt="Wedding Cinematography"
            className="w-full h-full object-cover opacity-60 brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
        
        <div className="relative z-20 text-center px-6 mt-16 animate-[fadeIn_1.4s_ease-out]">
          <h1 className="font-cormorant text-[clamp(3.5rem,8vw,6rem)] font-light text-white drop-shadow-lg">
            Cinematic <span className="italic text-[#c9a84c]">Films</span>
          </h1>
          <div className="w-20 h-[1.5px] bg-[#c9a84c] mx-auto mt-6 shadow-sm" />
          <p className="mt-8 mx-auto max-w-3xl px-6 text-center font-jost text-[0.95rem] md:text-[1.05rem] font-light text-white/90 leading-[2] tracking-wide">
            Every wedding has its own rhythm of emotions, laughter, and unforgettable moments.<br className="hidden md:block"/> 
            Our cinematic wedding films capture this flow through candid interactions, real emotions, and creative storytelling. From traditional Indian rituals to modern destination celebrations, we craft timeless films that let you relive the magic beautifully.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="py-20 md:py-32 px-6">
        
        {/* Elegant Filter Menu */}
        <div className="max-w-[1200px] mx-auto mb-16 md:mb-24">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-jost text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.2em] pb-1.5 transition-all duration-300 relative ${
                  activeCategory === cat ? 'text-[#c9a84c] font-medium' : 'text-gray-400 hover:text-[#1a1a1a]'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a84c]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Cinematic Grid */}
        <div className="max-w-[1200px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            <AnimatePresence mode="popLayout">
              {filtered.map((film) => (
                <FilmCard key={film.id} film={film} onSelect={setSelectedFilm} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-jost uppercase tracking-widest text-sm">
              No films found for this category.
            </div>
          )}
        </div>
      </div>

      {/* Premium CTA Strip */}
      <div className="bg-[#1a1a1a] py-24 md:py-32 px-6 text-center border-t-4 border-[#c9a84c]">
        <h2 className="font-cormorant text-[clamp(2.2rem,5vw,4rem)] font-light text-white leading-[1.2] mb-10">
          Your story deserves to be<br /><em className="italic text-[#c9a84c]">told beautifully</em>
        </h2>
        <a 
          href="/contact" 
          className="inline-block font-jost text-[0.75rem] font-medium tracking-[0.3em] uppercase text-[#1a1a1a] bg-[#c9a84c] px-12 py-5 transition-all duration-400 hover:bg-white hover:scale-105 shadow-lg"
        >
          Enquire Now
        </a>
      </div>

      {/* RENDER VIDEO MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedFilm && <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </div>
  );
}