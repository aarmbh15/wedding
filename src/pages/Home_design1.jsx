// src/pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

// ─── Import Local Hero Videos ────────────────────────────────────────────────
import showreelVideo from "../assets/Website Showreel.mp4";
import shrutiVideo from "../assets/Shruti Bride.mp4";
import rohanPrekshaVideo from "../assets/Rohan & Preksha Prewedding.mp4";
import eshaRahulVideo from "../assets/Esha & Rahul Haldi.mp4";

// ─── Bulk import ALL images ───────────────────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

/* ─── Helpers for Video Modal ────────────────────────────────── */
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

/* ─── Intersection Observer Hook ─────────────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ─── Progressive Image Component ───────────────────────────── */
function ProgressiveImg({ src, alt = "", shouldLoad = true, isMasonry = false }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (shouldLoad && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }
  }, [src, shouldLoad]);

  if (isMasonry) {
    return (
      <div className="relative w-full h-auto bg-[#f7f7f7]">
        {shouldLoad && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`block w-full h-auto transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-[#f7f7f7] w-full h-full">
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`block w-full h-full object-cover transition-all duration-700 ease-out ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      )}
    </div>
  );
}

/* ─── Lazy Section Wrapper ───────────────────────────────────── */
function LazySection({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{children(isNear)}</div>;
}

/* ─── Data ───────────────────────────────────────────────────── */
const heroVideos = [
  { src: showreelVideo },
  { src: shrutiVideo },
  { src: rohanPrekshaVideo },
  { src: eshaRahulVideo }
];

const portfolioGrid = [
  { src: img("Web Gallery/img5001.webp") },
  { src: img("Web Gallery/img5002.webp") },
  { src: img("Web Gallery/img5003.webp") },
  { src: img("Web Gallery/img5004.webp") },
  { src: img("Web Gallery/img5005.webp") },
  { src: img("Web Gallery/img5006.webp") },
  { src: img("Web Gallery/img5007.webp") },
  { src: img("Web Gallery/img5008.webp") },
  { src: img("Web Gallery/img5009.webp") },
  { src: img("Web Gallery/img50010.webp") },
  { src: img("Web Gallery/img50011.webp") },
  { src: img("Web Gallery/img50012.webp") },
  { src: img("Web Gallery/img50013.webp") },
  { src: img("Web Gallery/img50014.webp") },
  { src: img("Web Gallery/img50015.webp") },
  { src: img("Web Gallery/img50016.webp") },
  { src: img("Web Gallery/img50017.webp") },
  { src: img("Web Gallery/img50018.webp") },
  { src: img("Web Gallery/img50019.webp") },
];

const featured = [
  { couple: "Amruta & Amey", slug: "amruta-amey", location: "Pune, Maharashtra", date: "December 2024", img: img("Amruta_Amey/img218.webp") },
  { couple: "Abhimanyu & Manisha", slug: "abhimanyu-manisha", location: "Pune, Maharashtra", date: "November 2024", img: img("portfolio/Abhimanyu_Manisha.webp") },
  { couple: "Bhakti & Sourabh", slug: "bhakti-sourabh", location: "Jodhpur, Rajasthan", date: "October 2024", img: img("Bhakti_Sourabh/img353.webp") },
  { couple: "Rohan & Preksha", slug: "Rohan-preksha", location: "Pushkar, Rajasthan", date: "January 2025", img: img("Rohan_Preksha/img550.webp") },
];

const testimonials = [
  { name: "Amey", text: "Nityanand and his amazing team deliver absolutely incredible photography! Over time, Nityanand has gone from being just a hired professional to our trusted family photographer and a genuine friend. We have trusted them to capture all of our family functions and the experience is always wonderful. I highly recommend them for any special occasion" },
  { name: "Sumeet", text: "We couldn’t have asked for a better wedding photographer. From making us feel completely at ease to capturing every emotion and little detail so beautifully, the entire experience was wonderful. The photos truly let us relive our special day and we are so grateful for the memories they have given us. Highly recommended!" },
  { name: "Aishwarya", text: "We had a really lovely experience with them comfort and constant support. You can truly trust them for your big day!" },
  { name: "John", text: "Nithyanad and team were very professional and easy to work with. Right from the start, they worked with us to ensure our requirements were understood and were very calm and patient throughout the 3 days of our wedding events. The turnaround they provided was excellent, having a select few photos edited immediately for us to be able to use for our reception following our wedding. Their teaser and 10 min wedding trailers were also absolutely amazing! Would highly recommend their services to anyone." },
  { name: "Sanskruti", text: "We had a great experience with TiltShift Pictures for our wedding. We absolutely loved the photography, videography, editing and the team's guidance during the shoots, they captured our moments beautifully and the final output exceeded our expectations. Overall, we are happy with their work and would definitely recommend them!" }
];

const aboutImg = img("Chaitrali_Shubham/img407.webp");
const leftImg = img("Abhimanyu_Manisha/img615.webp");

/* ─── Hero Video Slider ───────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState(new Set([0]));

  const advance = useCallback(() => {
    setCurrent((c) => {
      const next = (c + 1) % heroVideos.length;
      setLoadedSlides((prev) => (prev.has(next) ? prev : new Set([...prev, next])));
      return next;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(advance, 8000);
    return () => clearInterval(t);
  }, [advance]);

  const goTo = (i) => {
    setLoadedSlides((prev) => new Set([...prev, i]));
    setCurrent(i);
  };

  const goNext = () => goTo((current + 1) % heroVideos.length);
  const goPrev = () => goTo((current - 1 + heroVideos.length) % heroVideos.length);

  return (
    <div className="relative w-full h-[68vh] sm:h-[78vh] md:h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        {heroVideos.map((video, i) => (
          <div key={i} className={`absolute inset-0 w-full h-full transition-opacity duration-[1600ms] pointer-events-none ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            {loadedSlides.has(i) && (
              <video className="absolute inset-0 w-full h-full object-cover object-center" src={video.src} autoPlay loop muted playsInline />
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/25 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/40 to-transparent z-20" />
      <div className="absolute bottom-[clamp(24px,5vw,72px)] left-[clamp(16px,5vw,80px)] right-[clamp(60px,16vw,90px)] z-30 text-white mt-24">
        <p className="font-jost text-[0.58rem] sm:text-[0.7rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase opacity-75 mb-2">
          Mumbai · Pune · Worldwide
        </p>
        <h1 className="font-cormorant text-[clamp(1.7rem,7.5vw,5.5rem)] font-light leading-[1.08]">
          TILT SHIFT Pictures
        </h1>
      </div>
      <button type="button" onClick={goPrev} aria-label="Previous video" className="absolute left-2 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border border-white/35 text-white transition-colors duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button type="button" onClick={goNext} aria-label="Next video" className="absolute right-2 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border border-white/35 text-white transition-colors duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>
      <div className="absolute bottom-[clamp(24px,5vw,72px)] right-[clamp(16px,5vw,80px)] z-30 flex gap-2 items-center">
        {heroVideos.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i + 1}`} className={`h-[2px] transition-all duration-400 ${i === current ? "w-7 bg-white" : "w-2 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
}

/* ─── Static Film Card ────────────────────────────────────── */
function FilmCard({ film, onSelect }) {
  return (
    <div className="w-full transition-transform duration-500 group" onClick={() => onSelect(film)}>
      <div className="relative aspect-video overflow-hidden bg-[#ede9e3] mb-5 cursor-pointer">
        <iframe
          className="w-full h-full border-none pointer-events-none scale-[1.15] transition-transform duration-700 group-hover:scale-[1.20]"
          src={`https://www.youtube.com/embed/${film.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${film.id}&rel=0&modestbranding=1&vq=hd1080&start=20`}
          title={film.couple}
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <h3 className="font-cormorant text-[1.4rem] transition-colors duration-400 group-hover:text-[#c9a84c] text-[#1a1a1a] cursor-pointer">
        {film.couple}
      </h3>
      <p className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-[#999]">
        {film.location}
      </p>
    </div>
  );
}

/* ─── Video Modal (Lightbox) ────────────────────────────────── */
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

/* ─── Main Home Component ────────────────────────────────────── */
export default function Home() {
  const [aboutRef, aboutInView] = useInView(0.1);
  const [featRef, featInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);
  const location = useLocation();

  // Selected Film for Lightbox
  const [selectedFilm, setSelectedFilm] = useState(null);

  // Enquiry Popup State
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);

  // Auto-open popup on home page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when any popup is open
  useEffect(() => {
    if (showEnquiry || selectedFilm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [showEnquiry, selectedFilm]);

  const handlePopupSubmit = async (e) => {
    e.preventDefault();
    setPopupLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setPopupLoading(false);
    setPopupSubmitted(true);
  };

  const compactInputClasses = "w-full py-2 bg-transparent border-b border-black/10 text-gray-800 text-[0.85rem] font-light focus:border-[#c9a84c] outline-none transition-all placeholder:text-gray-300";

  return (
    <>
      <Helmet>
        <title>TILT SHIFT Pictures | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <style>{`
          @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
          .fade-up { opacity: 0; transform: translateY(32px); transition: all 1s cubic-bezier(.22,1,.36,1); }
          .fade-up.in { opacity: 1; transform: none; }
          .hover-zoom { overflow: hidden; }
          .hover-zoom img { transition: transform 0.9s cubic-bezier(.22,1,.36,1); }
          .hover-zoom:hover img { transform: scale(1.06); }
          @keyframes scroll-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scroll { display: flex; width: max-content; animation: scroll-marquee 40s linear infinite; }
          .group\\/scroll:hover .animate-scroll { animation-play-state: paused; }
        `}</style>
      </Helmet>

      <HeroSlider />

      {/* ABOUT SECTION */}
      <LazySection rootMargin="200px">
        {(isNear) => (
          <section ref={aboutRef} className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-center px-[clamp(24px,8vw,120px)] py-[clamp(80px,10vw,140px)] bg-white about-grid">
            <div className={`hover-zoom fade-up ${aboutInView ? "in" : ""} relative aspect-[3/4]`}>
              <ProgressiveImg src={aboutImg} alt="Wedding story" shouldLoad={isNear} />
              <div className="absolute bottom-[clamp(16px,2.5vw,28px)] right-[clamp(16px,2.5vw,28px)] bg-white px-5 py-3.5">
                <p className="font-jost text-[0.68rem] tracking-[0.28em] uppercase text-[#888]">Est. 2019</p>
              </div>
            </div>
            <div className={`fade-up ${aboutInView ? "in" : ""}`}>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-tight text-[#1a1a1a] mb-8">
                Candid Wedding Photography &<br /><em className="italic">Cinematic Wedding Films Across India</em>
              </h2>
              <div className="w-10 h-px bg-[#1a1a1a] mb-8" />
              <p className="text-[#555] text-base leading-[1.9] mb-6">
                At Tilt Shift Pictures, we believe every wedding deserves to be remembered through real emotions and meaningful storytelling. Through candid wedding photography and cinematic wedding films, we capture genuine moments, family bonds and celebrations exactly as they happen.
              </p>
              <p className="text-[#555] text-base leading-[1.9] mb-12">
                Having documented 400+ weddings across Pune, Mumbai, Goa, Bangalore and destination weddings across India, we focus on preserving memories in a way that lets every couple feel and relive their special day even after many years.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/portfolio" className="font-jost text-[0.75rem] tracking-[0.25em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors">
                  View Portfolio →
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* PORTFOLIO GRID */}
      <LazySection rootMargin="400px">
        {(isNear) => (
          <section ref={gridRef} className="bg-white pb-[clamp(60px,8vw,100px)]">
            <div className="text-center px-6 pb-[clamp(32px,5vw,60px)]">
              <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1a1a1a]">PORTFOLIO</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 px-3 auto-rows-[200px] md:auto-rows-[260px]">
              {portfolioGrid.map((image, i) => {
                let sizeClasses = "col-span-1 row-span-1";
                if (image.size === "landscape") sizeClasses = "col-span-2 row-span-1";
                if (image.size === "portrait") sizeClasses = "col-span-1 row-span-2";
                return (
                  <div key={i} className={`fade-up ${gridInView ? "in" : ""} ${sizeClasses} relative overflow-hidden rounded-sm`} style={{ transitionDelay: `${i * 0.1}s` }}>
                    <ProgressiveImg src={image.src} alt={`Gallery ${i}`} shouldLoad={gridInView} className="w-full h-full object-cover" style={{ objectPosition: image.pos || "50% 50%" }} />
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-[clamp(32px,4vw,56px)]">
              <a href="/portfolio" className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors">
                View Full Portfolio
              </a>
            </div>
          </section>
        )}
      </LazySection>

      {/* FEATURED WEDDINGS */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section ref={featRef} className="bg-white py-[clamp(40px,10vw,40px)] px-[clamp(24px,6vw,80px)]">
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center px-6 pb-[clamp(32px,5vw,60px)]">
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">Featured Weddings</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,32px)] featured-grid">
                {featured.map((f, i) => (
                  <Link key={i} to={`/wedding/${f.slug}`} state={{ from: location }} className={`hover-zoom fade-up ${featInView ? `in d${i + 1}` : ""} block`}>
                    <div className="relative w-full aspect-video mb-4 overflow-hidden">
                      <ProgressiveImg src={f.img} alt={f.couple} shouldLoad={isNear} isMasonry={false} />
                    </div>
                    <div className="text-left">
                      <h3 className="font-cormorant text-[1.4rem] text-[#1a1a1a] mb-1.5">{f.couple}</h3>
                      <p className="font-jost text-[0.65rem] tracking-[0.2em] uppercase text-[#a3a3a3]">{f.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-[clamp(32px,4vw,56px)]">
                <a href="/portfolio" className="font-jost text-[0.72rem] tracking-[0.28em] uppercase border-b border-[#aaa] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors">
                  See All 
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* FILMS SECTION (Now uses Lightbox via onSelect) */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-white py-[clamp(40px,10vw,80px)] px-[clamp(24px,6vw,80px)] overflow-hidden">
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center px-6 mb-16">
                <h2 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#1a1a1a]">Films</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,4vw,40px)]">
                {[
                  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune, Maharashtra"},
                  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Pune, Maharashtra" },
                  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Pune, Maharashtra" },
                ].map((film, i) => (
                  <FilmCard key={i} film={film} onSelect={setSelectedFilm} />
                ))}
              </div>
              <div className="text-center mt-16">
                <Link to="/films" className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-1 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all">
                  Explore All Films 
                </Link>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* PHILOSOPHY SECTION */}
      <LazySection rootMargin="100px">
        {(isNear) => (
          <section className="relative z-10 min-h-[60vh] flex items-center justify-center bg-white">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-[100px] max-w-[1300px] w-full ">
              <div className="w-full md:w-[45%]">
                <img src={leftImg} alt="Couple" className="w-full h-[300px] md:h-[700px] object-cover rounded-[10px]" />
              </div>
              <div className="w-full md:w-[55%] text-center md:text-left">
                <blockquote className="font-cormorant italic text-[1.4rem] sm:text-[2rem] leading-relaxed mb-8">
                   We capture weddings in their truest form-whether deeply traditional or beautifully modern. From soulful rituals to vibrant celebrations, our candid wedding photography and cinematic wedding films focus on real emotions, natural moments, and timeless storytelling. Be it an intimate ceremony or a grand destination wedding, we preserve every detail with authenticity, creativity, and a style that reflects your unique love story.
                </blockquote>
                <a href="/about" className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-black hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors">
                  Our Story →
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* CLIENT TESTIMONIALS */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-[#fcfcfc] py-[clamp(60px,10vw,100px)] overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-[clamp(24px,6vw,80px)]">
              <div className="text-center pb-[clamp(32px,5vw,60px)]">
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">Client Testimonials</h2>
                <div className="w-10 h-px bg-[#1a1a1a] mx-auto mt-6" />
              </div>
            </div>
            <div className="relative group/scroll w-full">
              <div className="animate-scroll">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[420px] mx-[clamp(12px,2vw,20px)] flex flex-col justify-between bg-white p-8 border border-[#eaeaea] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <p className="font-cormorant italic text-[1.2rem] leading-relaxed text-[#555] mb-8">"{t.text}"</p>
                    <p className="font-jost text-[0.72rem] tracking-[0.2em] uppercase text-[#999] mt-auto pt-4 border-t border-[#eaeaea]">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* ENQUIRY POPUP */}
      {showEnquiry && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300">
          <div className="relative w-full max-w-2xl bg-[#FDFCF9] p-6 md:p-8 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-light text-[#1a1a1a]">Enquire Now</h2>
              <button onClick={() => setShowEnquiry(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors" aria-label="Close popup">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            {popupSubmitted ? (
              <div className="py-12 text-center">
                <span className="text-4xl block mb-4">✨</span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl mb-2">Thank You</h3>
                <p className="text-gray-500 font-light text-sm mb-8">Your inquiry has reached us. We'll be in touch very soon.</p>
                <button onClick={() => setShowEnquiry(false)} className="px-8 py-3 bg-[#c9a84c] text-white text-[0.7rem] uppercase tracking-[0.2em] hover:bg-[#2D2D2D] transition-colors">Close</button>
              </div>
            ) : (
              <form onSubmit={handlePopupSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Your Name</label><input type="text" required className={compactInputClasses} placeholder="First & Last Name" /></div>
                  <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Email Address</label><input type="email" required className={compactInputClasses} placeholder="email@example.com" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Phone</label><input type="tel" required className={compactInputClasses} placeholder="+91" /></div>
                  <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Event Date</label><input type="date" className={compactInputClasses} /></div>
                  <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Venue & City</label><input type="text" className={compactInputClasses} placeholder="City, State" /></div>
                </div>
                <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Event Details</label><textarea className={compactInputClasses + " resize-none"} placeholder="Functions, Timings, guest count..." rows="1" /></div>
                <div className="group"><label className="text-[0.6rem] uppercase tracking-widest text-[#c9a84c]">Tell us your story</label><textarea className={compactInputClasses + " resize-none"} placeholder="Tell us about your vision..." rows="1" /></div>
                <div className="pt-2"><button type="submit" disabled={popupLoading} className="w-full sm:w-auto px-10 py-3 bg-[#c9a84c] text-white text-[0.7rem] uppercase tracking-[0.2em] hover:bg-[#2D2D2D] transition-colors disabled:opacity-50">{popupLoading ? "Sending..." : "Submit Inquiry"}</button></div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* RENDER VIDEO MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedFilm && <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </>
  );
}