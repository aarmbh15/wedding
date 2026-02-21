import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="bg-[#080b12] text-[#e8e0d0]/60 font-['Jost']">
      {/* ── TOP MARQUEE ───────────────────────────────────────── */}
      <div className="border-b border-[#c9a84c]/10 overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex">
              {["Wedding Photography", "Cinematic Films", "Destination Weddings", "Pre-Wedding Shoots", "Engagement Sessions", "Haldi Ceremonies"].map((t, i) => (
                <span key={i} className={`text-[0.7rem] tracking-[0.25em] uppercase px-10 ${i % 2 === 0 ? "text-[#c9a84c]/60" : "text-[#e8e0d0]/20"}`}>
                  {t} {i % 2 === 0 ? "✦" : "·"}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO BRAND BLOCK ──────────────────────────────────── */}
      <div className="border-b border-white/5 px-6 lg:px-20 py-[60px] lg:py-[100px]">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="max-w-xl">
            <p className="text-[0.7rem] tracking-[0.35em] uppercase text-[#c9a84c] mb-6">Est. 2014 · Mumbai & Pune</p>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(3rem,8vw,7rem)] font-light text-white leading-none mb-6">
              Knots <em className="text-[#c9a84c] not-italic">by Amp</em>
            </h2>
            <p className="text-[0.92rem] font-light leading-relaxed text-[#e8e0d0]/40">
              Capturing timeless love stories with elegance, artistry, and an eye that finds the divine in every unguarded moment.
            </p>
          </div>
          <div className="w-full lg:w-auto text-left lg:text-right">
            <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[#e8e0d0]/30 mb-4">Only 24 weddings / year</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-[#c9a84c] text-[#080b12] text-[0.78rem] tracking-[0.2em] uppercase font-medium transition-all hover:bg-white">
              Book Your Date →
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-20 py-[50px] lg:py-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Col 1 — About */}
          <div className="space-y-6">
            <span className="text-[0.65rem] font-medium tracking-[0.35em] uppercase text-[#c9a84c] block">About the Studio</span>
            <p className="text-[0.85rem] font-light leading-loose text-[#e8e0d0]/40">
              From the quiet intimacy of morning rituals to the grandeur of candlelit receptions.
            </p>
            <div className="flex gap-3">
              {["IG", "PT", "YT", "FB"].map((s) => (
                <a key={s} href="#" className="w-10 h-10 border border-[#c9a84c]/20 flex items-center justify-center text-[0.6rem] text-[#c9a84c]/70 transition-all hover:bg-[#c9a84c] hover:text-[#080b12] hover:-translate-y-1">{s}</a>
              ))}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div className="space-y-6">
            <span className="text-[0.65rem] font-medium tracking-[0.35em] uppercase text-[#c9a84c] block">Navigate</span>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Contact"].map((l) => (
                <li key={l}><Link to={`/${l.toLowerCase()}`} className="text-[0.85rem] font-light text-[#e8e0d0]/40 hover:text-white transition-all hover:pl-2">/ {l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="space-y-6">
            <span className="text-[0.65rem] font-medium tracking-[0.35em] uppercase text-[#c9a84c] block">Services</span>
            <ul className="space-y-3">
              {["Photography", "Films", "Destination", "Pre-Wedding"].map((s) => (
                <li key={s}><a href="#" className="text-[0.85rem] font-light text-[#e8e0d0]/40 hover:text-white transition-all hover:pl-2">/ {s}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="space-y-6">
            <span className="text-[0.65rem] font-medium tracking-[0.35em] uppercase text-[#c9a84c] block">Stay Inspired</span>
            {subscribed ? (
              <p className="text-[0.82rem] text-[#c9a84c] italic">✦ Welcome to the story.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex border-b border-white/10">
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-transparent py-2 text-[0.88rem] outline-none flex-1 placeholder:text-white/20"
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button className="text-[#c9a84c] text-[0.7rem] tracking-widest uppercase pl-4 hover:text-white transition-colors">Join</button>
              </form>
            )}
            <div className="pt-4 space-y-2">
              <p className="text-[0.75rem] text-[#e8e0d0]/40 flex gap-2"><span>◎</span> Mumbai & Pune</p>
              <p className="text-[0.75rem] text-[#e8e0d0]/40 flex gap-2"><span>✉</span> hello@knotsbyamp.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────── */}
      <div className="border-t border-white/5 px-6 lg:px-20 py-8">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[0.7rem] text-[#e8e0d0]/20 tracking-wider">
          <p>© {new Date().getFullYear()} Knots by Amp. Crafted in Mumbai.</p>
          <div className="flex gap-8 uppercase">
            {["Privacy", "Terms", "Sitemap"].map(link => (
              <a key={link} href="#" className="hover:text-[#c9a84c] transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </footer>
  );
};

export default Footer;