import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX, Maximize, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import heroImg1 from "../assets/Lap/1.webp";
import heroImg2 from "../assets/Lap/2.webp";
import heroImg3 from "../assets/Lap/3.webp";
import heroImg5 from "../assets/Lap/5.webp";
import heroImg6 from "../assets/Lap/6.webp";
import heroImg7 from "../assets/Lap/7.webp";
import heroImg8 from "../assets/Lap/8.webp";
import heroImg10 from "../assets/Lap/10.webp";
import heroImg11 from "../assets/Lap/11.webp";
import heroImg12 from "../assets/Lap/12.webp";
import heroImg13 from "../assets/Lap/13.webp";
import heroImg14 from "../assets/Lap/14.webp";

import heroMobile1 from "../assets/Mobile/1.webp";
import heroMobile2 from "../assets/Mobile/2.webp";
import heroMobile3 from "../assets/Mobile/3.webp";
import heroMobile4 from "../assets/Mobile/4.webp";
import heroMobile5 from "../assets/Mobile/5.webp";
import heroMobile6 from "../assets/Mobile/6.webp";
import heroMobile7 from "../assets/Mobile/7.webp";
import heroMobile8 from "../assets/Mobile/8.webp";
import heroMobile9 from "../assets/Mobile/9.webp";
import heroMobile10 from "../assets/Mobile/10.webp";

import ThumbRahulEsha from "../assets/Filmsthumbnail/esha & rahul.webp";
import ThumbHarjotShruti from "../assets/Filmsthumbnail/harjot & shruti.webp";
import ThumbBhaktiSaurabh from "../assets/Filmsthumbnail/bhakti & saurabh.webp";

const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

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

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function ProgressiveImg({ src, alt = "", shouldLoad = true, isMasonry = false }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#f7f7f7] ${isMasonry ? "w-full h-auto group rounded-sm" : "w-full h-full"}`}>
      {shouldLoad && src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`block w-full ${isMasonry ? "h-auto object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]" : "h-full object-cover transition-all duration-1000 ease-out"} ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        />
      )}
    </div>
  );
}

function LazySection({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{children(isNear)}</div>;
}

const heroImages = [
  { src: heroImg1 }, { src: heroImg2 }, { src: heroImg3 }, { src: heroImg5 },
  { src: heroImg6 }, { src: heroImg7 }, { src: heroImg8 }, { src: heroImg10 },
  { src: heroImg11 }, { src: heroImg12 }, { src: heroImg13 }, { src: heroImg14 },
];

const heroImagesMobile = [
  { src: heroMobile1 }, { src: heroMobile2 }, { src: heroMobile3 }, { src: heroMobile4 },
  { src: heroMobile5 }, { src: heroMobile6 }, { src: heroMobile7 }, { src: heroMobile8 },
  { src: heroMobile9 }, { src: heroMobile10 },
];

const portfolioGrid = [
  { src: img("Web Gallery/img5001.webp") }, { src: img("Web Gallery/img5002.webp") },
  { src: img("Web Gallery/img5003.webp") }, { src: img("Web Gallery/img5004.webp") },
  { src: img("Web Gallery/img5005.webp") }, { src: img("Web Gallery/img5007.webp") },
  { src: img("Web Gallery/img5008.webp") }, { src: img("Web Gallery/img5009.webp") },
  { src: img("Web Gallery/img5010.webp") }, { src: img("Web Gallery/img5006.webp") },
  { src: img("Web Gallery/img5011.webp") }, { src: img("Web Gallery/img5012.webp") },
  { src: img("Web Gallery/img5013.webp") }, { src: img("Web Gallery/img5014.webp") },
  { src: img("Web Gallery/img5015.webp") }, { src: img("Web Gallery/img5016.webp") },
  { src: img("Web Gallery/img5017.webp") }, { src: img("Web Gallery/img5018.webp") },
  { src: img("Web Gallery/img5019.webp") }, { src: img("Web Gallery/port.jpeg") },
];

const featured = [
  { slug: "Anuja_Shubhang", couple: "Shubhang & Anuja", location: "Pune, Maharashtra", date: "Month Year", category: "Tag", cover: img("portfolio/Anuja_Shubhang.webp") },
  { slug: "Atharva_Haritha", couple: "Atharva & Harita", location: "Pune, Maharashtra", date: "Month Year", category: "Tag", cover: img("portfolio/Atharva_Harita.webp") },
  { slug: "Atish_Shweta", couple: "Atish & Shweta", location: "Pune, Maharashtra", date: "Month Year", category: "Tag", cover: img("portfolio/Atish_Shweta.webp") },
];

const testimonials = [
  { name: "Amey", text: "Nityanand and his amazing team deliver absolutely incredible photography! Over time, Nityanand has gone from being just a hired professional to our trusted family photographer and a genuine friend. We have trusted them to capture all of our family functions and the experience is always wonderful. I highly recommend them for any special occasion." },
  { name: "Sumeet", text: "We couldn't have asked for a better wedding photographer. From making us feel completely at ease to capturing every emotion and little detail so beautifully, the entire experience was wonderful. The photos truly let us relive our special day and we are so grateful for the memories they have given us. Highly recommended!" },
  { name: "Aishwarya", text: "We had a really lovely experience with them comfort and constant support. You can truly trust them for your big day! Their attention to small candid moments is what makes them unique." },
  { name: "John", text: "Nithyanad and team were very professional and easy to work with. Right from the start, they worked with us to ensure our requirements were understood and were very calm and patient throughout the 3 days of our wedding events. The turnaround they provided was excellent. Their teaser and 10 min wedding trailers were also absolutely amazing!" },
  { name: "Sanskruti", text: "We had a great experience with TiltShift Pictures for our wedding. We absolutely loved the photography, videography, editing and the team's guidance during the shoots. They captured our moments beautifully and the final output exceeded our expectations. Overall, we are happy with their work and would definitely recommend them!" }
];

const aboutImg = img("Chaitrali_Shubham/img407.webp");

function HeroSliderTrack({ images }) {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  const scrollToIndex = useCallback((i) => {
    const container = scrollRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    isProgrammaticScroll.current = true;
    container.scrollTo({ left: slideWidth * i, behavior: "smooth" });
    setCurrent(i);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 700);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((c) => {
      const next = (c + 1) % images.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex, images.length]);

  useEffect(() => {
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
  }, [goNext]);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = scrollRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    if (!slideWidth) return;
    const index = Math.round(container.scrollLeft / slideWidth);
    setCurrent((c) => (c !== index ? index : c));
  }, []);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="absolute inset-0 w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth hero-scroll"
    >
      {images.map((image, i) => (
        <div key={i} className="relative w-full h-full flex-shrink-0 snap-center snap-always">
          <img
            src={image.src}
            alt={`Tilt Shift Pictures wedding photography ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
            className="w-full h-full object-cover object-top sm:object-center select-none"
          />
        </div>
      ))}
    </div>
  );
}

function HeroSlider() {
  return (
    <div className="relative w-full h-[90vh] sm:h-[90vh] md:h-[85vh] lg:h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full block md:hidden">
        <HeroSliderTrack images={heroImagesMobile} />
      </div>

      <div className="absolute inset-0 w-full h-full hidden md:block">
        <HeroSliderTrack images={heroImages} />
      </div>

      <div className="absolute inset-0 bg-black/25 z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black/55 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-[clamp(16px,4vw,72px)] left-[clamp(14px,5vw,80px)] right-[clamp(50px,16vw,90px)] z-30 text-white">
        <p className="font-jost text-[0.52rem] sm:text-[0.7rem] tracking-[0.22em] sm:tracking-[0.35em] uppercase opacity-75 mb-2">
          Pune · Mumbai · India
        </p>

        <h1 className="font-cormorant text-[clamp(1.5rem,7vw,5.5rem)] font-light leading-[1.08]">
          TILT SHIFT PICTURES
        </h1>

        <p className="mt-2 sm:mt-3 max-w-[650px] font-jost text-[0.72rem] sm:text-[0.9rem] md:text-[1rem] font-light leading-relaxed tracking-[0.08em] text-white/80">
          Wedding Photography, Cinematic Wedding Films &amp; Destination Weddings Across India
        </p>
      </div>
    </div>
  );
}

const FilmCard = React.memo(function FilmCard({ film, onSelect }) {
  return (
    <div className="w-full cursor-pointer group" onClick={() => onSelect(film)}>
      <div className="relative aspect-video overflow-hidden rounded-sm bg-[#1a1a1a] mb-5 shadow-sm">
        <img
          src={film.thumbnail || `https://img.youtube.com/vi/${film.id}/maxresdefault.webp`}
          alt={film.couple}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-100 scale-100 md:opacity-0 md:group-hover:opacity-100 md:scale-90 md:group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none">
         <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/15 md:bg-white/10 flex items-center justify-center border border-white/20 md:border-white/20 shadow-lg">
           <Play className="w-5 h-5 text-white/90 fill-white/90 ml-1" />
         </div>
       </div>
      </div>
      <h3 className="font-cormorant text-[1.45rem] transition-colors duration-400 group-hover:text-[#c9a84c] text-[#1a1a1a]">
        {film.couple}
      </h3>
      <p className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-[#999] mt-0.5">
        {film.location}
      </p>
    </div>
  );
});

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
          <button onClick={onClose} aria-label="Close modal" className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-red-500 text-white transition-colors border border-white/10 backdrop-blur-md shadow-lg shrink-0">
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {!youtube && (
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-30 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <button onClick={handlePlayPause} aria-label="Play/Pause" className="p-2.5 sm:p-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md">
                {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />}
              </button>
              <button onClick={handleMuteToggle} aria-label="Mute" className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md">
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
            <button onClick={handleFullscreen} aria-label="Fullscreen" className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md">
              <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
});

function TestimonialsCarousel({ items }) {
  const containerRef = useRef(null);

  const scrollLeft = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: -380, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: 380, behavior: "smooth" });
  }, []);

  return (
    <div className="relative group/scroll w-full">
      <button
        type="button"
        onClick={scrollLeft}
        aria-label="Previous testimonial"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/95 border border-[#d8d2c8] text-[#1a1a1a] shadow-md transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </button>

      <button
        type="button"
        onClick={scrollRight}
        aria-label="Next testimonial"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/95 border border-[#d8d2c8] text-[#1a1a1a] shadow-md transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a]"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </button>

      <div
        ref={containerRef}
        className="testimonial-scroll flex gap-6 overflow-x-auto px-14 md:px-20 pb-4 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] md:w-[350px] min-h-[320px] snap-start flex flex-col bg-[#F4F1EA] p-8 md:p-10 shadow-sm border border-[#eaeaea] hover:border-[#c9a84c]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 rounded-sm"
          >
            <Quote className="w-8 h-8 text-[#c9a84c] opacity-20 mb-5" />
            <p className="font-cormorant italic text-[1.1rem] leading-[1.8] text-gray-600 mb-8 relative z-10 flex-grow">
              "{t.text}"
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-5 border-t border-[#e5e0d8]">
              <p className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-[#1a1a1a] font-medium">
                {t.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [aboutRef, aboutInView] = useInView(0.1);
  const [featRef, featInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);
  const location = useLocation();

  const [selectedFilm, setSelectedFilm] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [popupLoading, setPopupLoading] = useState(false);
  const [popupSubmitted, setPopupSubmitted] = useState(false);

  useEffect(() => {
    if (popupSubmitted) return;
    const openPopup = () => setShowEnquiry(true);
    const initialTimer = setTimeout(openPopup, 2000);
    const recurring = setInterval(openPopup, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(recurring);
    };
  }, [popupSubmitted]);

  useEffect(() => {
    document.body.style.overflow = (showEnquiry || selectedFilm) ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showEnquiry, selectedFilm]);

  const handlePopupSubmit = useCallback(async (e) => {
    e.preventDefault();
    setPopupLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setPopupLoading(false);
    setPopupSubmitted(true);
  }, []);

  const compactInputClasses = "w-full py-2 bg-transparent border-b border-black/10 text-gray-800 text-[0.85rem] font-light focus:border-[#c9a84c] outline-none transition-all placeholder:text-gray-300";

  return (
    <>
      <Helmet>
        <title>TILT SHIFT Pictures | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <style>{`
          .fade-up { opacity: 0; transform: translateY(32px); transition: all 1s cubic-bezier(.22,1,.36,1); }
          .fade-up.in { opacity: 1; transform: none; }
          .hover-zoom { overflow: hidden; }
          .hover-zoom img { transition: transform 0.9s cubic-bezier(.22,1,.36,1); }
          .hover-zoom:hover img { transform: scale(1.06); }
          .hero-scroll { -ms-overflow-style: none; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
          .hero-scroll::-webkit-scrollbar { display: none; height: 0; width: 0; }
          .testimonial-scroll::-webkit-scrollbar { display: none; height: 0; width: 0; }
        `}</style>
      </Helmet>

      <HeroSlider />

      <LazySection rootMargin="200px">
        {(isNear) => (
          <section ref={aboutRef} className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-center px-[clamp(24px,8vw,120px)] py-[clamp(80px,10vw,140px)] bg-white about-grid">
            <div className={`hover-zoom fade-up ${aboutInView ? "in" : ""} relative aspect-[3/4]`}>
              <ProgressiveImg src={aboutImg} alt="Wedding story" shouldLoad={isNear} />
              <div className="absolute bottom-[clamp(16px,2.5vw,28px)] right-[clamp(16px,2.5vw,28px)] bg-[#F4F1EA] px-5 py-3.5 shadow-sm">
                <p className="font-jost text-[0.68rem] tracking-[0.28em] uppercase text-[#888]">Est. 2019</p>
              </div>
            </div>
            <div className={`fade-up ${aboutInView ? "in" : ""}`}>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-tight text-[#1a1a1a] mb-8">
                Our Approach to Wedding Photography & Cinematic Films
              </h2>
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

      <LazySection rootMargin="400px">
        {(isNear) => (
          <section ref={gridRef} className="bg-[#F4F1EA] pb-[clamp(60px,8vw,100px)]">
            <div className="text-center px-6 pb-[clamp(32px,5vw,60px)]">
              <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1a1a1a] relative top-8">
                PORTFOLIO
              </h2>
              <p className="font-cormorant italic text-[clamp(1rem,1.5vw,1.25rem)] text-[#666] mt-10 max-w-[700px] mx-auto leading-relaxed">
                A collection of beautifully captured wedding moments, emotions and celebrations.
              </p>
              <div className="w-10 h-[1px] bg-[#c9a84c] mx-auto mt-6" />
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 px-3 md:px-5">
              {portfolioGrid
                .filter(image => image && image.src)
                .map((image, i) => (
                <div
                  key={i}
                  className={`fade-up ${gridInView ? "in" : ""} mb-3 md:mb-4 break-inside-avoid inline-block w-full relative`}
                  style={{ transitionDelay: `${(i % 5) * 0.1}s` }}
                >
                  <ProgressiveImg
                    src={image.src}
                    alt={`Gallery ${i}`}
                    shouldLoad={gridInView}
                    isMasonry={true}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-[clamp(32px,4vw,56px)]">
              <a href="/portfolio" className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors">
                View Full Portfolio
              </a>
            </div>
          </section>
        )}
      </LazySection>

      <LazySection rootMargin="300px">
        {(isNear) => (
          <section ref={featRef} className="bg-white py-[clamp(60px,10vw,80px)] px-[clamp(24px,5vw,60px)] border-y border-black/5">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center px-6 pb-[clamp(40px,5vw,60px)]">
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">
                  FEATURED WEDDINGS
                </h2>
                <div className="w-10 h-[1px] bg-[#c9a84c] mx-auto mt-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-16 featured-grid">
                {featured.map((f, i) => (
                  <Link
                    key={i}
                    to={`/wedding/${f.slug}`}
                    state={{ from: location }}
                    className={`group fade-up flex flex-col ${featInView ? `in d${i + 1}` : ""}`}
                  >
                    <div className="relative w-full aspect-[16/12] mb-5 overflow-hidden bg-white shadow-sm rounded-sm">
                      <img
                        src={f.img || f.cover}
                        alt={f.couple}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="text-left">
                      <h3 className="font-cormorant text-[clamp(1.5rem,2vw,2rem)] font-medium text-[#1a1a1a] mb-1.5 transition-colors group-hover:text-[#c9a84c]">
                        {f.couple}
                      </h3>
                      <p className="font-jost text-[0.65rem] tracking-[0.2em] uppercase text-gray-400">
                        {f.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-14 md:mt-20">
                <a
                  href="/portfolio"
                  className="font-jost text-[0.72rem] tracking-[0.28em] uppercase border-b border-[#aaa] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  See All Stories
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-[#F4F1EA] py-[clamp(60px,10vw,100px)] px-[clamp(24px,6vw,80px)] overflow-hidden">
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center px-6 mb-5">
                <h2 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#1a1a1a]">
                  FILMS
                </h2>
                <div className="w-10 h-[1px] bg-[#c9a84c] mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(24px,4vw,40px)]">
                {[
                  { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Pune, Maharashtra", thumbnail: ThumbRahulEsha },
                  { couple: "Harjot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Pune, Maharashtra", thumbnail: ThumbHarjotShruti },
                  { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur, Rajasthan", thumbnail: ThumbBhaktiSaurabh },
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

      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-white py-[clamp(60px,10vw,100px)] overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-[clamp(24px,6vw,80px)]">
              <div className="text-center pb-[clamp(40px,6vw,70px)]">
                <p className="font-jost text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
                  Kind Words
                </p>
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">
                  CLIENT TESTIMONIALS
                </h2>
                <div className="w-10 h-[1px] bg-[#c9a84c] mx-auto mt-6" />
              </div>
            </div>

            <TestimonialsCarousel items={testimonials} />
          </section>
        )}
      </LazySection>

      {showEnquiry && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 transition-opacity duration-300">
          <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FDFCF9] p-6 md:p-8 shadow-2xl animate-[fadeIn_0.3s_ease-out] rounded-sm custom-scrollbar">
            <div className="sticky top-0 bg-[#FDFCF9] z-20 flex justify-between items-center mb-6 border-b border-black/5 pb-4 pt-2 -mt-2">
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

      <AnimatePresence>
        {selectedFilm && <VideoModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </>
  );
}