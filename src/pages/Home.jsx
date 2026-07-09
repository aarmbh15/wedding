// src/pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";

// ─── Import Local Hero Videos ────────────────────────────────────────────────
import showreelVideo from "../assets/Website Showreel.mp4";
import shrutiVideo from "../assets/Shruti Bride.mp4";
import rohanPrekshaVideo from "../assets/Rohan & Preksha Prewedding.mp4";
import eshaRahulVideo from "../assets/Esha & Rahul Haldi.mp4";

// ─── Bulk import ALL images ───────────────────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

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
function ProgressiveImg({ src, alt = "", shouldLoad = true }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (shouldLoad && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    }
  }, [src, shouldLoad]);

  return (
    <div className="relative overflow-hidden bg-[#f7f7f7] w-full h-full">
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          disabled-decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
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
// Hero section configured with local imported video paths
const heroVideos = [
  { src: showreelVideo },
  { src: shrutiVideo },
  { src: rohanPrekshaVideo },
  { src: eshaRahulVideo }
];

const portfolioGrid = [
  { src: img("Abhimanyu_Manisha/img621.webp"), pos: "52% 88%", size: "portrait" },   // Tall
  { src: img("Bhakti_Sourabh/img331.webp"), pos: "50% 50%", size: "normal" },       // Square
  { src: img("Rohan_Preksha/img515.webp"), pos: "50% 50%", size: "normal" },       // Square
  { src: img("Amruta_Amey/img208.webp"), pos: "50% 50%", size: "landscape" },    // Wide
  { src: img("Chaitrali_Shubham/img407.webp"), pos: "50% 50%", size: "normal" },    // Square
  { src: img("Bhakti_Sourabh/img343.webp"), pos: "50% 50%", size: "portrait" },   // Tall
  { src: img("Chaitrali_Shubham/img439.webp"), pos: "50% 50%", size: "landscape" }, // Wide
  { src: img("Rohan_Preksha/img549.webp"), pos: "50% 50%", size: "normal" },       // Square
  { src: img("Abhimanyu_Manisha/img613.webp"), pos: "50% 50%", size: "normal" },    // Square
  { src: img("Amruta_Amey/img258.webp"), pos: "50% 50%", size: "normal" },       // Square
];

const featured = [
  { couple: "Amruta & Amey", slug: "amruta-amey", location: "Pune, Maharashtra", date: "December 2024", img: img("Amruta_Amey/img218.webp") },
  { couple: "Abhimanyu & Manisha", slug: "abhimanyu-manisha", location: "Pune, Maharashtra", date: "November 2024", img: img("Abhimanyu_Manisha/img620.webp") },
  { couple: "Bhakti & Sourabh", slug: "bhakti-sourabh", location: "Jodhpur, Rajasthan", date: "October 2024", img: img("Bhakti_Sourabh/img353.webp") },
  { couple: "Rohan & Preksha", slug: "Rohan-preksha", location: "Pushkar, Rajasthan", date: "January 2025", img: img("Rohan_Preksha/img550.webp") },
];

const aboutImg = img("Chaitrali_Shubham/img407.webp");
const leftImg = img("Abhimanyu_Manisha/img615.webp");
const premiumImg = img("Bhakti_Sourabh/img322.webp");

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

  // Switches video automatically every 8 seconds
  useEffect(() => {
    const t = setInterval(advance, 8000);
    return () => clearInterval(t);
  }, [advance]);

  const goTo = (i) => {
    setLoadedSlides((prev) => new Set([...prev, i]));
    setCurrent(i);
  };

  const goNext = () => {
    goTo((current + 1) % heroVideos.length);
  };

  const goPrev = () => {
    goTo((current - 1 + heroVideos.length) % heroVideos.length);
  };

  return (
    <div className="relative w-full h-[68vh] sm:h-[78vh] md:h-[100dvh] overflow-hidden bg-black">
      {/* Video layer: full-bleed cover on BOTH mobile and desktop — no letterboxing */}
      <div className="absolute inset-0 w-full h-full">
        {heroVideos.map((video, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1600ms] pointer-events-none ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {loadedSlides.has(i) && (
              <video
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay for better typography contrast */}
      <div className="absolute inset-0 bg-black/25 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/40 to-transparent z-20" />

      {/* Hero Text — responsive right-inset so it never crowds the dots/arrows on mobile */}
      <div className="absolute bottom-[clamp(24px,5vw,72px)] left-[clamp(16px,5vw,80px)] right-[clamp(60px,16vw,90px)] z-30 text-white">
        <p className="font-jost text-[0.58rem] sm:text-[0.7rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase opacity-75 mb-2">
          Mumbai · Pune · Worldwide
        </p>
        <h1 className="font-cormorant text-[clamp(1.7rem,7.5vw,5.5rem)] font-light leading-[1.08]">
          TILT SHIFT Pictures
        </h1>
      </div>

      {/* Manual Left / Right Scroll Buttons — slightly smaller base size on mobile */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous video"
        className="absolute left-2 sm:left-5 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border border-white/35 text-white transition-colors duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next video"
        className="absolute right-2 sm:right-5 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:bg-white/30 backdrop-blur-sm border border-white/35 text-white transition-colors duration-300"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slider Dots — pulled in slightly on mobile so they don't sit flush against the edge */}
      <div className="absolute bottom-[clamp(24px,5vw,72px)] right-[clamp(16px,5vw,80px)] z-30 flex gap-2 items-center">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[2px] transition-all duration-400 ${
              i === current ? "w-7 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Scrolling Film Card ────────────────────────────────────── */
function ScrollingFilmCard({ film }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-[320px] md:w-[480px] px-4 transition-transform duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(film.url, "_blank")}
    >
      <div className="relative aspect-video overflow-hidden bg-[#ede9e3] mb-5 cursor-pointer group">
        {!isHovered && (
          <img
            src={`https://img.youtube.com/vi/${film.id}/maxresdefault.jpg`}
            alt={film.couple}
            className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {isHovered && (
          <iframe
            className="w-full h-full border-none pointer-events-none scale-[1.15]"
            src={`https://www.youtube.com/embed/${film.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${film.id}&rel=0&modestbranding=1&vq=hd1080&start=20`}
            title={film.couple}
            allow="autoplay; encrypted-media"
          />
        )}
        <div className="absolute inset-0 bg-black/5 z-20 pointer-events-none" />
      </div>
      <h3 className={`font-cormorant text-[1.4rem] transition-colors duration-400 ${isHovered ? 'text-[#c9a84c]' : 'text-[#1a1a1a]'}`}>
        {film.couple}
      </h3>
      <p className="font-jost text-[0.7rem] tracking-[0.2em] uppercase text-[#999]">
        {film.location}
      </p>
    </div>
  );
}

/* ─── Main Home Component ────────────────────────────────────── */
export default function Home() {
  const [aboutRef, aboutInView] = useInView(0.1);
  const [featRef, featInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>TILT SHIFT Pictures | Cinematic Wedding Photography & Films</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <meta name="description" content="TILT SHIFT Pictures — India's finest cinematic wedding photography and films." />

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .fade-up {
            opacity: 0;
            transform: translateY(32px);
            transition: all 1s cubic-bezier(.22,1,.36,1);
          }
          .fade-up.in {
            opacity: 1;
            transform: none;
          }
          .hover-zoom { overflow: hidden; }
          .hover-zoom img { transition: transform 0.9s cubic-bezier(.22,1,.36,1); }
          .hover-zoom:hover img { transform: scale(1.06); }
        `}</style>
      </Helmet>

      {/* HERO */}
      <HeroSlider />

      {/* ABOUT SECTION */}
      <LazySection rootMargin="200px">
        {(isNear) => (
          <section
            ref={aboutRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-center px-[clamp(24px,8vw,120px)] py-[clamp(80px,10vw,140px)] bg-white about-grid"
          >
            {/* Left Image */}
            <div className={`hover-zoom fade-up ${aboutInView ? "in" : ""} relative aspect-[3/4]`}>
              <ProgressiveImg
                src={aboutImg}
                alt="Wedding story"
                shouldLoad={isNear}
              />
              <div className="absolute bottom-[clamp(16px,2.5vw,28px)] right-[clamp(16px,2.5vw,28px)] bg-white px-5 py-3.5">
                <p className="font-jost text-[0.68rem] tracking-[0.28em] uppercase text-[#888]">
                  Est. 2019
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className={`fade-up ${aboutInView ? "in" : ""}`}>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-tight text-[#1a1a1a] mb-8">
                Candid Wedding Photography &<br />
                <em className="italic">Cinematic Wedding Films Across India</em>
              </h2>

              <div className="w-10 h-px bg-[#1a1a1a] mb-8" />

              <p className="text-[#555] text-base leading-[1.9] mb-6">
                At Tilt Shift Pictures, we believe every wedding deserves to be remembered through real emotions and meaningful storytelling. Through candid wedding photography and cinematic wedding films, we capture genuine moments, family bonds and celebrations exactly as they happen.
              </p>
              <p className="text-[#555] text-base leading-[1.9] mb-12">
                Having documented 400+ weddings across Pune, Mumbai, Goa, Bangalore and destination weddings across India, we focus on preserving memories in a way that lets every couple feel and relive their special day even after many years.
              </p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="/portfolio"
                  className="font-jost text-[0.75rem] tracking-[0.25em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  View Portfolio →
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* PORTFOLIO MOSAIC */}
      <LazySection rootMargin="400px">
        {(isNear) => (
          <section ref={gridRef} className="bg-white pb-[clamp(60px,8vw,100px)]">
            <div className="text-center px-6 pb-[clamp(32px,5vw,60px)]">
              <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1a1a1a]">
                PORTFOLIO
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 px-3 auto-rows-[200px] md:auto-rows-[260px]">
              {portfolioGrid.map((image, i) => {
                let sizeClasses = "col-span-1 row-span-1";
                if (image.size === "landscape") sizeClasses = "col-span-2 row-span-1";
                if (image.size === "portrait") sizeClasses = "col-span-1 row-span-2";

                return (
                  <div
                    key={i}
                    className={`fade-up ${gridInView ? "in" : ""} ${sizeClasses} relative overflow-hidden rounded-sm`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <ProgressiveImg
                      src={image.src}
                      alt={`Gallery ${i}`}
                      shouldLoad={gridInView}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: image.pos || "50% 50%" }} 
                    />
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-[clamp(32px,4vw,56px)]">
              <a
                href="/portfolio"
                className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
              >
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
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">
                  Featured Weddings
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(12px,2vw,24px)] featured-grid">
                {featured.map((f, i) => (
                  <Link
                    key={i}
                    to={`/wedding/${f.slug}`}
                    state={{ from: location }}
                    className={`hover-zoom fade-up ${featInView ? `in d${i + 1}` : ""} block`}
                  >
                    <div className="relative aspect-[3/4] mb-4">
                      <ProgressiveImg src={f.img} alt={f.couple} shouldLoad={isNear} />
                    </div>
                    <p className="font-cormorant text-[1.15rem] text-[#1a1a1a] mb-1">
                      {f.couple}
                    </p>
                    <p className="font-jost text-[0.72rem] tracking-[0.15em] uppercase text-[#999]">
                      {f.location}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-[clamp(32px,4vw,536px)]">
                <a
                  href="/portfolio"
                  className="font-jost text-[0.72rem] tracking-[0.28em] uppercase border-b border-[#aaa] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  See All 
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* FILMS SECTION */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-white py-[clamp(0px,10vw,40px)] overflow-hidden mb-26">
            <div className="text-center px-6 mb-16">
              <h2 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#1a1a1a] mb-8">
                Films
              </h2>
              <p className="font-jost text-[1rem] md:text-[1.1rem] font-light max-w-[750px] mx-auto leading-relaxed text-[#666] px-4">
               Every wedding has its own rhythm of emotions, laughter and unforgettable moments. Our cinematic wedding films and professional wedding videography capture this flow through candid moments, 
               real emotions and creative storytelling. From traditional Indian weddings to modern destination weddings, we craft timeless wedding films that let you relive your celebration with authenticity, 
               beauty and lasting memories.
              </p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative group/scroll">
              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                  display: flex;
                  width: max-content;
                  animation: scroll 35s linear infinite;
                }
                .group\/scroll:hover .animate-infinite-scroll {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="animate-infinite-scroll">
                {[
                  { couple: "Shubhang & Anuja", url: "https://youtu.be/6AlgoGp8SLg", id: "6AlgoGp8SLg", location: "Pune, Maharashtra"},
                  { couple: "Abhimanyu & Manisha", url: "https://youtu.be/ppQtE_3sPcg", id: "ppQtE_3sPcg", location: "Pune, Maharashtra" },
                  { couple: "Amey & Amruta", url: "https://youtu.be/yUpQjeTuSbA", id: "yUpQjeTuSbA", location: "Pune, Maharashtra" },
                  { couple: "Harjyot & Shruti", url: "https://youtu.be/DaO8vn9w7zo", id: "DaO8vn9w7zo", location: "Pune, Maharashtra" },
                  { couple: "Pradyumna & Drashti", url: "https://youtu.be/ER4o6k5L3J0", id: "ER4o6k5L3J0", location: "Pune, Maharashtra" },
                  { couple: "Dhriti & Lakshya", url: "https://youtu.be/QV-GVZNHNDo", id: "QV-GVZNHNDo", location: "Pune, Maharashtra" },
                  { couple: "Rahul & Esha", url: "https://youtu.be/6-2JG29kYxU", id: "6-2JG29kYxU", location: "Pune, Maharashtra" },
                  { couple: "Chandra and Anmol", url: "https://youtu.be/8UMiPZMhUE4", id: "8UMiPZMhUE4", location: "Pune, Maharashtra" },
                  { couple: "Indrajeet & Sakshi", url: "https://youtu.be/R0F2tWN8oLc", id: "R0F2tWN8oLc", location: "Pune, Maharashtra" },
                  { couple: "Nidhi & Kunal", url: "https://youtu.be/ex_Fs-BiUC0", id: "ex_Fs-BiUC0", location: "Bangalore, Karnataka" },
                  { couple: "Omkar & Apurva", url: "https://youtu.be/DCCGOXaPCHQ", id: "DCCGOXaPCHQ", location: "Pune, Maharashtra" },
                  { couple: "Bhakti & Saurabh", url: "https://youtu.be/tHZ2RwYCdpQ", id: "tHZ2RwYCdpQ", location: "Jodhpur, Rajasthan" },
                  { couple: "Utsav & Dyuthi", url: "https://youtu.be/nHDxp0WJqaE", id: "nHDxp0WJqaE", location: "Bangalore, Karnataka" },
                ].map((film, i) => (
                  <ScrollingFilmCard key={i} film={film} />
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <Link
                to="/films"
                className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-1 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all"
              >
                Explore All Films 
              </Link>
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
                <img
                  src={leftImg}
                  alt="Couple"
                  className="w-full h-[300px] md:h-[700px] object-cover rounded-[10px]"
                />
              </div>

              <div className="w-full md:w-[55%] text-center md:text-left">
                <blockquote className="font-cormorant italic text-[1.4rem] sm:text-[2rem] leading-relaxed mb-8">
                   We capture weddings in their truest form-whether deeply traditional or beautifully modern. From soulful rituals to vibrant celebrations, our candid wedding photography and cinematic wedding films focus on real emotions, natural moments, and timeless storytelling. Be it an intimate ceremony or a grand destination wedding, we preserve every detail with authenticity, creativity, and a style that reflects your unique love story.
                </blockquote>
                <a
                  href="/about"
                  className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-black hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  Our Story →
                </a>
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* PREMIUM OFFERING */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="premium-grid grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-center max-w-[1300px] mx-auto  bg-white">
            <div>
              <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-[#1a1a1a] mb-16">
                Fine-Art<br />
                <em className="italic">Editorial Photography</em>
              </h2>
              <div className="w-10 h-px bg-[#1a1a1a] mb-8" />
              <p className="text-[#555] text-base leading-[1.9] mb-6">
                Our finest offering — fine-art editorial style photography led by our founders. The essence is to create photographs that stand the test of time.
              </p>
              <p className="text-[#555] text-base leading-[1.9] mb-10">
                The classic, non-intrusive approach of documenting the most important day of your life with bright, airy images. An exclusive package offered only to selected weddings.
              </p>
              <a
                href="/contact"
                className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
              >
                Enquire About This Package →
              </a>
            </div>

            <div className="hover-zoom aspect-[4/5]">
              <ProgressiveImg
                src={premiumImg}
                alt="Fine Art Wedding"
                shouldLoad={isNear}
              />
            </div>
          </section>
        )}
      </LazySection>

      {/* FINAL CTA */}
      <section className="bg-white py-[clamp(80px,10vw,130px)] px-[clamp(24px,6vw,80px)] text-center">
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-[#1a1a1a] max-w-[700px] mx-auto mb-9">
          Your story deserves<br />
          <em className="italic">to be told beautifully.</em>
        </h2>
        <p className="text-[#777] text-base max-w-[500px] mx-auto mb-12 leading-relaxed">
         
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="font-jost text-[0.78rem] tracking-[0.22em] uppercase bg-[#1a1a1a] text-white px-11 py-4 hover:bg-[#c9a84c] transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="/portfolio"
            className="font-jost text-[0.78rem] tracking-[0.22em] uppercase border border-[#1a1a1a] px-11 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            View Portfolio
          </a>
        </div>
      </section>
    </>
  );
}