import { useEffect, useRef, useState, useMemo } from 'react';
import HeroImage from '../assets/Amruta_Amey/img251.webp';
import AboutImage from '../assets/about.png';
import BannerImage from '../assets/banner.webp';

// Optimized hook for one-time scroll trigger
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const philosophyItems = [
  { t: "Candid Wedding Photography", d: "Capturing genuine emotions and natural moments that beautifully tell the story of your wedding day." },
  { t: "Cinematic & Traditional Films", d: "Blending cinematic storytelling with traditional coverage to preserve every meaningful moment of your wedding." },
  { t: "Destination Wedding Experts", d: "Experienced in capturing weddings across India, ensuring seamless coverage wherever your celebration takes place." },
  { t: "On-Time Delivery", d: "Your photos and films are delivered within the promised timeline, without compromising on quality or attention to detail." }
];

const About = () => {
  const [storyRef, storyInView] = useInView(0.1);
  const [valRef] = useInView(0.1);

  return (
    <div className="min-h-screen font-['Jost'] text-[#1a1a1a]">
      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 scale-105 animate-[kenburns_20s_ease_infinite]">
          <img
            src={HeroImage}
            alt="Wedding Cinematography"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover opacity-60 brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        
        <div className="relative z-20 text-center px-6 transition-all duration-1000 transform translate-y-0 opacity-100">
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-6">Est. 2019 • Pune • India</p>
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,8vw,6.5rem)] font-light text-white leading-[1.1] mb-8">
            About <span className="italic text-[#c9a84c]">TILT SHIFT</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto mb-8 animate-[widthGrow_1.5s_ease-out]" />
          <p className="font-['Cormorant_Garamond'] text-[clamp(1.1rem,2vw,1.6rem)] italic text-white/90 max-w-2xl mx-auto leading-relaxed">
            "Capturing the quiet breaths between the big moments since 2019."
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a84c] to-transparent animate-bounce" />
        </div>
      </section>

      {/* ─── OUR STORY ────────────────────────────────────────────── */}
      <section ref={storyRef} className="bg-white py-[clamp(80px,10vw,140px)] px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img
                src={AboutImage}
                alt="Wedding Cinematography"
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#c9a84c] text-white p-6 z-20">
              <span className="font-['Cormorant_Garamond'] text-4xl block">6+</span>
              <span className="text-[0.6rem] tracking-widest uppercase">Years</span>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-[0.7rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Our Legacy</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight mb-8">
              Documenting Love <br /><em>With Absolute Sincerity</em>
            </h2>
            <div className="space-y-6 text-[#4a4a4a] leading-relaxed text-[1.05rem]">
              <p>I'm Nityananda Borkar, the founder of Tilt Shift Pictures. My journey into wedding photography wasn't planned, it was built over time through passion and instinct. After spending over 15 years in the corporate world working in customer service and sales, I realized my true calling was always behind the camera. What began as a deep interest in wildlife photography slowly evolved into capturing people, emotions and stories. I started as a freelance wedding photographer and with every wedding, my connection to storytelling grew stronger. In October 2019, I took a leap of faith and founded Tilt Shift Pictures, turning passion into purpose.</p>
              <p>Over the past six years, we have had the privilege of capturing 400+ weddings across India, including Bangalore, Mysore, Pune, Mumbai, Goa, MP & Rajasthan, establishing ourselves as a trusted name in candid wedding photography and cinematic wedding films. From intimate ceremonies to grand destination weddings our focus has always been on telling real stories through natural, unscripted moments. As a wedding photographer in Pune and across major cities in India, we specialise in creating timeless memories through candid photography and storytelling videos that let you relive every emotion. At Tilt Shift Pictures, it's never just about photos or films it's about preserving your story in the most authentic way possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ───────────────────────────────────────────── */}
      <section ref={valRef} className="bg-white pt-[clamp(24px,3vw,48px)] pb-[clamp(80px,10vw,130px)] px-6">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3.5rem)] font-light">Why Choose Us?</h2>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {philosophyItems.map((v, i) => (
            <div key={i} className="bg-[#F4F1EA] p-8 sm:p-10 md:p-16 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
              <span className="font-['Cormorant_Garamond'] text-5xl text-[#c9a84c]/20 block mb-6 group-hover:text-[#c9a84c]/50 transition-colors">0{i+1}</span>
              <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">{v.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative py-[clamp(52px,7vw,80px)] px-[clamp(24px,6vw,80px)] text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight mb-8">
            Ready to Create <br /><em className="italic text-[#c9a84c]">Your Heirloom?</em>
          </h2>
          <a href="/contact" className="inline-block font-['Jost'] text-[0.7rem] font-medium tracking-[0.3em] uppercase text-white border border-white/20 px-12 py-5 transition-all duration-500 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#1a1a1a]">
            Inquire Now →
          </a>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes kenburns {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes widthGrow {
          from { width: 0; }
          to { width: 64px; }
        }
      `}} />
    </div>
  );
};

export default About;