// src/pages/Home.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import bgVideo from "../assets/bg.mp4";
import { Link, useLocation } from "react-router-dom";

// ─── Bulk import ALL images ───────────────────────────────────────────────────
const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
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
          decoding="async"
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
const heroImages = [img("Bhakti_Sourabh/img356.webp")];

const portfolioGrid = [
  { src: img("Abhimanyu_Manisha/img621.webp"), pos: "52% 88%" },
  { src: img("Bhakti_Sourabh/img331.webp"), pos: "50% 50%" },
  { src: img("Rohan_Preksha/img515.webp"), pos: "50% 50%" },
  { src: img("Amruta_Amey/img208.webp"), pos: "50% 50%" },
  { src: img("Chaitrali_Shubham/img407.webp"), pos: "50% 50%" },
  { src: img("Bhakti_Sourabh/img321.webp"), pos: "50% 50%" },
  { src: img("Chaitrali_Shubham/img423.webp"), pos: "50% 50%" },
  { src: img("Rohan_Preksha/img543.webp"), pos: "50% 50%" },
  { src: img("Abhimanyu_Manisha/img613.webp"), pos: "50% 50%" },
  { src: img("Amruta_Amey/img258.webp"), pos: "50% 50%" },
];

const featured = [
  { couple: "Amruta & Amey", slug: "amruta-amey", location: "Pune, Maharashtra", date: "December 2024", img: img("Amruta_Amey/img221.webp") },
  { couple: "Abhimanyu & Manisha", slug: "abhimanyu-manisha", location: "Pune, Maharashtra", date: "November 2024", img: img("Abhimanyu_Manisha/img605.webp") },
  { couple: "Bhakti & Sourabh", slug: "bhakti-sourabh", location: "Jodhpur, Rajasthan", date: "October 2024", img: img("Bhakti_Sourabh/img326.webp") },
  { couple: "Rohan & Preksha", slug: "Rohan-preksha", location: "Pushkar, Rajasthan", date: "January 2025", img: img("Rohan_Preksha/img504.webp") },
];

const aboutImg = img("Chaitrali_Shubham/img407.webp");
const leftImg = img("Abhimanyu_Manisha/img615.webp");
const premiumImg = img("Bhakti_Sourabh/img322.webp");

/* ─── Hero Slider ────────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState(new Set([0]));

  const advance = useCallback(() => {
    setCurrent((c) => {
      const next = (c + 1) % heroImages.length;
      setLoadedSlides((prev) => (prev.has(next) ? prev : new Set([...prev, next])));
      return next;
    });
  }, []);

  useEffect(() => {
    const t = setInterval(advance, 5000);
    return () => clearInterval(t);
  }, [advance]);

  const goTo = (i) => {
    setLoadedSlides((prev) => new Set([...prev, i]));
    setCurrent(i);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1600ms] cubic-bezier(.4,0,.2,1) ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {loadedSlides.has(i) && (
            <img
              src={src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              className="w-full h-full object-cover object-[center_30%]"
            />
          )}
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black/22 to-transparent z-20" />

      {/* Hero Text */}
      <div className="absolute bottom-[clamp(36px,6vw,72px)] left-[clamp(24px,6vw,80px)] z-30 text-white">
        <p className="font-jost text-[0.7rem] tracking-[0.35em] uppercase opacity-75 mb-2">
          Mumbai · Pune · Worldwide
        </p>
        <h1 className="font-cormorant text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.08]">
          TILT SHIFT Pictures
        </h1>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-[clamp(36px,6vw,72px)] right-[clamp(24px,6vw,80px)] z-30 flex gap-2.5 items-center">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
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
  const [filmRef, filmInView] = useInView(0.1);
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
                  Est. 2014
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className={`fade-up ${aboutInView ? "in" : ""}`}>
              <p className="font-jost text-[0.72rem] tracking-[0.32em] uppercase text-[#999] mb-8">
                About the Studio
              </p>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.4rem)] font-light leading-tight text-[#1a1a1a] mb-8">
                Considered the epitome of<br />
                <em className="italic">Modern Wedding Photography</em>
              </h2>

              <div className="w-10 h-px bg-[#1a1a1a] mb-8" />

              <p className="text-[#555] text-base leading-[1.9] mb-6">
                At TILT SHIFT Pictures, we have transformed the Indian wedding landscape for over a decade — creating photographs and films that are timeless, and etched in the memories of thousands of families forever.
              </p>
              <p className="text-[#555] text-base leading-[1.9] mb-12">
                Awarded Wedding Filmmaker of the Year for four consecutive years, we are the only Indian wedding studio listed on IMDB for our award-winning films. We accept only 24 weddings each year.
              </p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="/portfolio"
                  className="font-jost text-[0.75rem] tracking-[0.25em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  View Photography →
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
              <p className="font-jost text-[0.72rem] tracking-[0.32em] uppercase text-[#999] mb-3">
                Selected Work
              </p>
              <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#1a1a1a]">
                Photography
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-[3px] px-[3px]">
              {portfolioGrid.map((image, i) => (
                <div
                  key={i}
                  className={`fade-up ${gridInView ? "in" : ""}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <ProgressiveImg
                    src={image.src}
                    alt={`Gallery ${i}`}
                    shouldLoad={gridInView}
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-[clamp(32px,4vw,56px)]">
              <a
                href="/portfolio"
                className="font-jost text-[0.75rem] tracking-[0.3em] uppercase border-b border-[#1a1a1a] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
              >
                View Full Photography
              </a>
            </div>
          </section>
        )}
      </LazySection>

      {/* FEATURED WEDDINGS */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section ref={featRef} className="bg-white py-[clamp(80px,10vw,130px)] px-[clamp(24px,6vw,80px)]">
            <div className="max-w-[1320px] mx-auto">
              <div className="flex flex-wrap justify-between items-end gap-4 mb-[clamp(36px,5vw,60px)]">
                <div>
                  <p className="font-jost text-[0.72rem] tracking-[0.32em] uppercase text-[#999] mb-2">
                    Recent Work
                  </p>
                  <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.2rem)] font-light text-[#1a1a1a]">
                    Featured Weddings
                  </h2>
                </div>
                <a
                  href="/portfolio"
                  className="font-jost text-[0.72rem] tracking-[0.28em] uppercase border-b border-[#aaa] pb-0.5 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
                >
                  See All →
                </a>
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
                    <p className="font-jost text-[0.72rem] text-[#bbb] mt-0.5">
                      {f.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </LazySection>

      {/* FILMS SECTION */}
      {/* <LazySection rootMargin="300px">
        {(isNear) => (
          <section
            ref={filmRef}
            className="relative min-h-[90vh] overflow-hidden bg-white mb-24"
            style={{
              paddingTop: "clamp(100px,15vw,180px)",
              paddingBottom: "clamp(220px,22vw,300px)",
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden z-10"
              style={{
                clipPath: "polygon(0% 0%, 70% 10%, 100% 0%, 100% 100%, 85% 95%, 15% 100%, 0% 95%)",
              }}
            >
              {isNear && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={bgVideo} type="video/mp4" />
                </video>
              )}
            </div>

            <div className="relative z-20 max-w-[1200px] mx-auto text-center text-white px-5">
              <h2 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] font-light tracking-widest mb-8">
                Films
              </h2>
              <p className="font-jost text-[1.2rem] font-light max-w-[720px] mx-auto leading-[1.9] text-white/80">
                Every wedding has its own rhythm of emotions, laughter and unforgettable moments. Our cinematic wedding films capture this flow through candid moments, real emotions and creative storytelling.
              </p>
            </div>
          </section>
        )}
      </LazySection> */}

      {/* FILMS SECTION */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="bg-white py-[clamp(80px,10vw,140px)] overflow-hidden">
            <div className="text-center px-6 mb-16">
              <p className="font-jost text-[0.72rem] tracking-[0.35em] uppercase text-[#bbb] mb-4">
                Cinematic Stories
              </p>
              <h2 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#1a1a1a] mb-8">
                Films
              </h2>
              <p className="font-jost text-[1rem] md:text-[1.1rem] font-light max-w-[750px] mx-auto leading-relaxed text-[#666] px-4">
                Every wedding has its own rhythm of emotions, laughter and unforgettable moments. 
                Our cinematic wedding films capture this flow through candid moments, real emotions 
                and creative storytelling.
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
                  { couple: "Shubhang & Anuja", id: "6AlgoGp8SLg", url: "https://youtu.be/6AlgoGp8SLg", location: "Pune" },
                  { couple: "Abhimanyu & Manisha", id: "ppQtE_3sPcg", url: "https://youtu.be/ppQtE_3sPcg", location: "Goa" },
                  { couple: "Dhriti & Lakshya", id: "QV-GVZNHNDo", url: "https://youtu.be/QV-GVZNHNDo", location: "Jaipur" },
                  // Duplicated for seamless loop
                  { couple: "Shubhang & Anuja", id: "6AlgoGp8SLg", url: "https://youtu.be/6AlgoGp8SLg", location: "Pune" },
                  { couple: "Abhimanyu & Manisha", id: "ppQtE_3sPcg", url: "https://youtu.be/ppQtE_3sPcg", location: "Goa" },
                  { couple: "Dhriti & Lakshya", id: "QV-GVZNHNDo", url: "https://youtu.be/QV-GVZNHNDo", location: "Jaipur" }
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
                Explore All Films →
              </Link>
            </div>
          </section>
        )}
      </LazySection>

      {/* PHILOSOPHY SECTION */}
      <LazySection rootMargin="300px">
        {(isNear) => (
          <section className="relative z-10 min-h-[60vh] flex items-center justify-center mt-16 md:mt-52">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[60px] max-w-[1100px] w-full px-5 md:px-10 py-12 md:py-20">
              <div className="w-full md:w-[45%]">
                <img
                  src={leftImg}
                  alt="Couple"
                  className="w-full h-[300px] md:h-[500px] object-cover rounded-[10px]"
                />
              </div>

              <div className="w-full md:w-[55%] text-center md:text-left">
                <p className="font-jost text-[0.7rem] tracking-[0.35em] uppercase mb-5 text-[#888]">
                  Our Philosophy
                </p>
                <blockquote className="font-cormorant italic text-[1.4rem] sm:text-[2rem] leading-relaxed mb-8">
                  We capture weddings in their truest form—whether deeply traditional or beautifully modern. From soulful rituals to vibrant celebrations, our candid wedding photography and cinematic films focus on real emotions and timeless storytelling.
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
          <section className="premium-grid grid grid-cols-1 md:grid-cols-2 gap-[clamp(40px,8vw,120px)] items-center max-w-[1400px] mx-auto px-[clamp(24px,6vw,80px)] py-[clamp(80px,10vw,130px)] bg-white">
            <div>
              <p className="font-jost text-[0.72rem] tracking-[0.32em] uppercase text-[#999] mb-8">
                Signature Offering
              </p>
              <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight text-[#1a1a1a] mb-6">
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
        <p className="font-jost text-[0.72rem] tracking-[0.32em] uppercase text-[#999] mb-6">
          Limited Availability · 2025–26
        </p>
        <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-tight text-[#1a1a1a] max-w-[700px] mx-auto mb-9">
          Your Story Deserves<br />
          <em className="italic">To Be Told Beautifully</em>
        </h2>
        <p className="text-[#777] text-base max-w-[500px] mx-auto mb-12 leading-relaxed">
          We accept only 24 weddings per year — ensuring every couple receives our full creative devotion.
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