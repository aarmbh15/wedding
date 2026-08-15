import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import HeroImage from "../assets/hero3.webp";
import CtaBgImage from "../assets/5.webp";

// Thumbnails
import ThumbShubhangAnuja from "../assets/Filmsthumbnail/shubhang & anuja.webp";
import ThumbAbhimanyuManisha from "../assets/Filmsthumbnail/abhimanyu & manisha.webp";
import ThumbAmeyAmruta from "../assets/Filmsthumbnail/amey & amruta.webp";
import ThumbHarjotShruti from "../assets/Filmsthumbnail/harjot & shruti.webp";
import ThumbPradyumnaDrushti from "../assets/Filmsthumbnail/pradyumna & drushti.webp";
import ThumbDhritiLakshya from "../assets/Filmsthumbnail/dhriti & lakshya.webp";
import ThumbRahulEsha from "../assets/Filmsthumbnail/esha & rahul.webp";
import ThumbChandraAnmol from "../assets/Filmsthumbnail/chandra & anmol.webp";
import ThumbNidhiKunal from "../assets/Filmsthumbnail/kunal & nidhi.webp";
import ThumbOmkarApurva from "../assets/Filmsthumbnail/omkar & apurva.webp";
import ThumbBhaktiSaurabh from "../assets/Filmsthumbnail/bhakti & saurabh.webp";
import ThumbUtsavDyuthi from "../assets/Filmsthumbnail/utsav & dyuthi.webp";
import Thumbsakshi from "../assets/Filmsthumbnail/Indrajeet & Sakshi.png";

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

const VideoModal = React.memo(function VideoModal({ film, onClose }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const youtube = isYouTube(film.url);
  const embedUrl = useMemo(() => toEmbedUrl(film.url), [film.url]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler, { passive: true });
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
        className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl"
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

        <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 flex justify-end items-center gap-2 z-30">
          <button onClick={onClose} aria-label="Close modal" className="p-2 sm:p-2.5 rounded-xl bg-black/40 hover:bg-[#c9a84c] text-white transition-colors border border-white/10 backdrop-blur-md shadow-lg shrink-0">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {!youtube && (
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between z-30 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={handlePlayPause} aria-label={isPlaying ? "Pause" : "Play"} className="p-2.5 sm:p-3 rounded-xl bg-[#c9a84c] hover:bg-[#b08f3a] text-white transition-all shadow-md">
                {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
              </button>
              <button onClick={handleMuteToggle} aria-label="Mute" className="p-2.5 sm:p-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all backdrop-blur-md">
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
            <button onClick={handleFullscreen} aria-label="Fullscreen" className="p-2.5 sm:p-3 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all backdrop-blur-md">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
});

const films = [
  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune, Maharashtra", category: "Destination", thumbnail: ThumbShubhangAnuja },
  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Pune, Maharashtra", category: "Coastal", thumbnail: ThumbAbhimanyuManisha },
  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Pune, Maharashtra", category: "Destination", thumbnail: ThumbAmeyAmruta },
  { couple: "Harjot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Pune, Maharashtra", category: "Royal", thumbnail: ThumbHarjotShruti },
  { couple: "Pradyumna & Drushti", url: "https://youtu.be/ER4o6k5L3J0", id: "ER4o6k5L3J0", location: "Pune, Maharashtra", category: "City", thumbnail: ThumbPradyumnaDrushti },
  { couple: "Dhriti & Lakshya", url: "https://youtu.be/QV-GVZNHNDo", id: "QV-GVZNHNDo", location: "Pune, Maharashtra", category: "Royal", thumbnail: ThumbDhritiLakshya },
  { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Pune, Maharashtra", category: "City", thumbnail: ThumbRahulEsha },
  { couple: "Chandra & Anmol", url: "https://youtu.be/8UMiPZMhUE4", id: "8UMiPZMhUE4", location: "Pune, Maharashtra", category: "Destination", thumbnail: ThumbChandraAnmol },
  { couple: "Indrajeet & Sakshi", url: "https://youtu.be/R0F2tWN8oLc", id: "R0F2tWN8oLc", location: "Pune, Maharashtra", category: "City", thumbnail: Thumbsakshi },
  { couple: "Nidhi & Kunal", url: "https://youtu.be/ex_Fs-BiUC0", id: "ex_Fs-BiUC0", location: "Bangalore, Karnataka", category: "Coastal", thumbnail: ThumbNidhiKunal },
  { couple: "Omkar & Apurva", url: "https://youtu.be/DCCGOXaPCHQ", id: "DCCGOXaPCHQ", location: "Pune, Maharashtra", category: "City", thumbnail: ThumbOmkarApurva },
  { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur, Rajasthan", category: "Royal", thumbnail: ThumbBhaktiSaurabh },
  { couple: "Utsav & Dyuthi", url: "https://youtu.be/nHDxp0WJqaE", id: "nHDxp0WJqaE", location: "Bangalore, Karnataka", category: "Destination", thumbnail: ThumbUtsavDyuthi },
];

const FilmCard = React.memo(function FilmCard({ film, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(film)}
      className="cursor-pointer w-full group flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e6e2da]">
        <img
          src={film.thumbnail || `https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
          alt={film.couple}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl">
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          </div>
        </div>
      </div>
      
      <div className="text-left mt-6">
        <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-[1.75rem] font-light text-[#1a1a1a] mb-2 group-hover:text-[#c9a84c] transition-colors duration-400">
          {film.couple}
        </h3>
        <div className="flex items-center gap-3 mt-3">
          <span className="font-['Jost'] text-[0.65rem] tracking-[0.2em] uppercase text-[#999]">
            {film.location}
          </span>
          <div className="w-6 h-[1px] bg-[#c9a84c]/40" />
        </div>
      </div>
    </motion.div>
  );
});

export default function Films() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedFilm ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedFilm]);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Helmet>
        <title>Films · TILT SHIFT Films</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Helmet>

      <section className="relative h-screen md:h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenburns_20s_ease_infinite]">
          <img
            src={HeroImage}
            alt="Wedding Cinematography"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60 brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center px-6 mt-16 animate-[fadeIn_1.4s_ease-out]">
          <p className="font-['Jost'] text-[0.65rem] md:text-[0.75rem] tracking-[0.4em] uppercase text-white/80 mb-6">
            Cinematic Storytelling
          </p>
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(4rem,10vw,8rem)] leading-none font-light text-white drop-shadow-lg tracking-wide uppercase">
            Films
          </h1>
          <p className="pf-hero-sub mt-8 mx-auto max-w-4xl px-6 text-center font-jost text-[0.95rem] md:text-[1.05rem] font-light text-white/90 leading-[1.9]">
            Every wedding has its own rhythm of emotions, laughter and unforgettable moments.<br/> 
            Our cinematic wedding films and professional wedding videography capture this flow through candid moments, real emotions and creative storytelling. From traditional Indian weddings to modern destination weddings, we craft timeless wedding films that let you relive your celebration with authenticity, beauty and lasting memories.
          </p>
          <div className="w-16 h-[1.5px] bg-[#c9a84c] mx-auto mt-10 shadow-sm" />
        </div>
      </section>

      <div className="max-w-[720px] mx-auto text-center mt-16 px-6">
        <p className="font-['Jost'] text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.35em] text-[#B99A4A] mb-3">
          Our Films
        </p>

        <h2 className="font-['Cormorant_Garamond'] text-[clamp(1.4rem,2.4vw,1.9rem)] font-light text-[#1a1a1a] leading-[1.4]">
          Explore our beautifully captured wedding films and romantic love stories brought to life.
        </h2>
      </div>

      <div className="pt-10 md:pt-12 pb-24 md:pb-32 px-[clamp(24px,6vw,80px)] mb-0">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[clamp(20px,2.5vw,40px)] gap-y-[clamp(48px,5vw,72px)]"
          >
            <AnimatePresence mode="popLayout">
              {films.map((film) => (
                <FilmCard
                  key={film.id}
                  film={film}
                  onSelect={setSelectedFilm}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div
        className="relative py-28 md:py-36 px-6 text-center bg-[#1a1a1a] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${CtaBgImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <p className="font-['Jost'] text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">Let's Create Together</p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,5vw,4rem)] font-light text-white leading-[1.1] mb-12">
            Your story deserves to be<br /><em className="italic text-[#c9a84c]">told beautifully</em>
          </h2>
          <a 
            href="/contact" 
            className="inline-block font-['Jost'] text-[0.7rem] font-medium tracking-[0.3em] uppercase text-white border border-white/20 px-12 py-5 transition-all duration-500 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#1a1a1a]"
          >
            Enquire Now
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedFilm && <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </div>
  );
}