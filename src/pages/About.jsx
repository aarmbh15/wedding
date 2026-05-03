import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import HeroImage from '../assets/6.jpg';
import HeroImage from '../assets/Amruta_Amey/img251.webp';

// Hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const team = [
  { name: "Anupam Maurya", role: "Creative Director", bio: "Ex-engineer turned storyteller. Anupam sees poetry in shadows.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", tag: "Photographer" },
  { name: "Soumi Goswami", role: "Chief Storyteller", bio: "A former architect who designs emotional narratives.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", tag: "Editor" },
  { name: "Rahul Mehta", role: "Lead Cinematographer", bio: "Rahul crafts films that play like short cinema features.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80", tag: "Videographer" },
  { name: "Priya Desai", role: "Second Photographer", bio: "Priya seizes the tears and laughter no one else noticed.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&q=80", tag: "Retoucher" },
];

const About = () => {
  const [heroRef, heroInView] = useInView(0.1);
  const [storyRef, storyInView] = useInView(0.1);
  const [valRef, valInView] = useInView(0.1);
  const [teamRef, teamInView] = useInView(0.1);

  return (
    <div className="min-h-screen font-['Jost'] text-[#1a1a1a]">
      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
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
          <p className="text-[0.7rem] tracking-[0.4em] uppercase text-[#c9a84c] mb-6">Est. 2014 • Mumbai • Pune</p>
          <h1 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,8vw,6.5rem)] font-light text-white leading-[1.1] mb-8">
            About <span className="italic text-[#c9a84c]">TILT SHIFT</span>
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto mb-8 animate-[widthGrow_1.5s_ease-out]" />
          <p className="font-['Cormorant_Garamond'] text-[clamp(1.1rem,2vw,1.6rem)] italic text-white/90 max-w-2xl mx-auto leading-relaxed">
            "Capturing the quiet breaths between the big moments since 2014."
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a84c] to-transparent animate-bounce" />
        </div>
      </section>

      {/* ─── OUR STORY (WHITE) ────────────────────────────────────── */}
      <section ref={storyRef} className="bg-white py-[clamp(80px,10vw,140px)] px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${storyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[3/4] relative z-10 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80" alt="Our Story" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-6 w-1/2 aspect-square hidden md:block border-[12px] border-white shadow-xl z-20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80" alt="Detail" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 bg-[#c9a84c] text-white p-6 z-20">
              <span className="font-['Cormorant_Garamond'] text-4xl block">10+</span>
              <span className="text-[0.6rem] tracking-widest uppercase">Years</span>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="text-[0.7rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4 block">Our Legacy</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-tight mb-8">
              Documenting Love <br /><em>With Absolute Sincerity</em>
            </h2>
            <div className="space-y-6 text-[#4a4a4a] leading-relaxed text-[1.05rem]">
              {/* <p>Two friends left the corporate world in 2014 to pursue a simple dream: to see weddings differently. Not as events, but as living, breathing stories.</p>
              <p>Today, with over 500 weddings across 12 countries, Knots by Amp has become a synonym for cinematic honesty. We don't just take photos; we preserve emotions.</p> */}
              <p>I’m Nityananda Borkar, the founder of Tilt Shift Pictures. My journey into wedding photography wasn’t planned, it was built over time through passion and instinct. After spending over 15 years in the corporate world working in customer service and sales, I realized my true calling was always behind the camera. What began as a deep interest in wildlife photography slowly evolved into capturing people, emotions and stories. I started as a freelance wedding photographer and with every wedding, my connection to storytelling grew stronger. In October 2019, I took a leap of faith and founded Tilt Shift Pictures, turning passion into purpose.</p>
              <p>Over the past six years, we have had the privilege of capturing 400+ weddings across India, including Bangalore, Mysore, Pune, Mumbai, Goa, MP & Rajasthan, establishing ourselves as a trusted name in candid wedding photography and cinematic wedding films. From intimate ceremonies to grand destination weddings our focus has always been on telling real stories through natural, unscripted moments. As a wedding photographer in Pune and across major cities in India, we specialise in creating timeless memories through candid photography and storytelling videos that let you relive every emotion. At Tilt Shift Pictures, it’s never just about photos or films it’s about preserving your story in the most authentic way possible.</p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-8">
              {[{n: "500+", l: "Weddings"}, {n: "12", l: "Countries"}, {n: "20+", l: "Awards"}].map((s, i) => (
                <div key={i}>
                  <div className="font-['Cormorant_Garamond'] text-3xl text-[#c9a84c]">{s.n}</div>
                  <div className="text-[0.65rem] tracking-widest uppercase text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY (BEIGE) ─────────────────────────────────── */}
      <section ref={valRef} className="bg-[#F4F1EA] py-[clamp(80px,10vw,130px)] px-6">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <p className="text-[0.7rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">Our DNA</p>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2rem,4vw,3.5rem)] font-light">Why Choose Us?</h2>
        </div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {[
            { t: "Candid Wedding Photography", d: "Capturing real emotions, natural moments, and authentic stories through candid wedding photography." },
            { t: "Traditional Modern Weddings", d: "Blending traditional Indian rituals with modern aesthetics for timeless, elegant wedding storytelling." },
            { t: "Cinematic Wedding Films", d: "Creating cinematic wedding films that capture emotions, moments, and your complete love story beautifully." },
            { t: "Destination Wedding Experts", d: "Experienced in destination weddings across India, capturing every moment seamlessly in diverse locations." }
          ].map((v, i) => (
            <div key={i} className="bg-[#F4F1EA] p-10 md:p-16 transition-all hover:bg-white group">
              <span className="font-['Cormorant_Garamond'] text-5xl text-[#c9a84c]/20 block mb-6 group-hover:text-[#c9a84c]/50 transition-colors">0{i+1}</span>
              <h3 className="font-['Cormorant_Garamond'] text-2xl mb-4">{v.t}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM (WHITE) ────────────────────────────────────────── */}
      {/* <section ref={teamRef} className="bg-white py-[clamp(80px,10vw,130px)] px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.2rem,5vw,4rem)] font-light leading-none">
              The <em>Humans</em>
            </h2>
            <p className="max-w-xs text-gray-400 font-light text-[0.9rem]">A crew of artists who believe every love story is a masterpiece in waiting.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-4 left-4 bg-[#c9a84c] text-white text-[0.6rem] px-3 py-1 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.tag}
                  </div>
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-xl mb-1">{p.name}</h3>
                <p className="text-[#c9a84c] text-[0.7rem] uppercase tracking-widest mb-3">{p.role}</p>
                <p className="text-gray-400 text-[0.85rem] font-light leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-48 px-6 text-center overflow-hidden bg-black">
        <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1800&q=80" alt="CTA" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-tight mb-8">
            Ready to Create <br /><em>Your Heirloom?</em>
          </h2>
          <a href="/contact" className="inline-block px-12 py-5 bg-[#c9a84c] text-white uppercase tracking-[0.2em] text-[0.8rem] hover:bg-white hover:text-black transition-all">
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