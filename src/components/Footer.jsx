// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const services = [
  "Wedding Photography",
  "Cinematic Films",
  "Engagement Sessions",
  "Pre-Wedding Shoots",
  "Destination Weddings",
  "Haldi & Mehendi",
];

const socials = [
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "Pinterest", href: "#", icon: "PT" },
  { name: "YouTube", href: "#", icon: "YT" },
  { name: "Facebook", href: "#", icon: "FB" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer style={{ background: "#080b12", color: "rgba(232,224,208,0.6)", fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400;500&display=swap');

        .footer-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(232,224,208,0.5);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.3s, gap 0.3s;
          letter-spacing: 0.03em;
        }
        .footer-link::before {
          content: '—';
          font-size: 0.6rem;
          color: #c9a84c;
          opacity: 0;
          transition: opacity 0.3s;
          flex-shrink: 0;
        }
        .footer-link:hover { color: #e8e0d0; gap: 12px; }
        .footer-link:hover::before { opacity: 1; }

        .social-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(201,168,76,0.2);
          color: rgba(201,168,76,0.7);
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(.22,1,.36,1);
        }
        .social-pill:hover {
          background: #c9a84c;
          border-color: #c9a84c;
          color: #080b12;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.3);
        }

        .newsletter-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.12);
          color: #e8e0d0;
          font-family: 'Jost', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          padding: 10px 0;
          outline: none;
          flex: 1;
          transition: border-color 0.3s;
        }
        .newsletter-input:focus { border-bottom-color: #c9a84c; }
        .newsletter-input::placeholder { color: rgba(232,224,208,0.25); }

        .newsletter-btn {
          background: none;
          border: none;
          color: #c9a84c;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 10px 0 10px 20px;
          transition: color 0.3s, letter-spacing 0.3s;
          flex-shrink: 0;
        }
        .newsletter-btn:hover { color: #fff; letter-spacing: 0.3em; }

        .footer-col-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 1.5rem;
          display: block;
        }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .sub-success { animation: fadeUp 0.4s ease; }

        @keyframes marqueeFooter {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .footer-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeFooter 20s linear infinite;
        }
        .footer-marquee-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── TOP MARQUEE ───────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(201,168,76,0.12)", overflow: "hidden", padding: "14px 0" }}>
        <div className="footer-marquee-track">
          {["Wedding Photography", "Cinematic Films", "Destination Weddings", "Pre-Wedding Shoots", "Engagement Sessions", "Haldi Ceremonies", "Baraat Coverage", "Reception Galas",
            "Wedding Photography", "Cinematic Films", "Destination Weddings", "Pre-Wedding Shoots", "Engagement Sessions", "Haldi Ceremonies", "Baraat Coverage", "Reception Galas",
          ].map((t, i) => (
            <span key={i} style={{ fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.25em", textTransform: "uppercase", color: i % 2 === 0 ? "rgba(201,168,76,0.6)" : "rgba(232,224,208,0.2)", padding: "0 2.5rem", whiteSpace: "nowrap" }}>
              {t} {i % 2 === 0 ? "✦" : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO BRAND BLOCK ──────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "clamp(60px,8vw,100px) clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>
          <div>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Est. 2014 · Mumbai &amp; Pune</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 300, color: "#fff", lineHeight: 1, marginBottom: "1.5rem" }}>
              Knots <em style={{ color: "#c9a84c" }}>by Amp</em>
            </h2>
            <p style={{ fontSize: "0.92rem", fontWeight: 300, maxWidth: 480, lineHeight: 1.85, color: "rgba(232,224,208,0.45)" }}>
              Capturing timeless love stories with elegance, artistry, and an eye that finds the divine in every unguarded moment.
            </p>
          </div>
          {/* CTA Block */}
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(232,224,208,0.35)", marginBottom: "1rem" }}>Only 24 weddings / year</p>
            <Link to="/contact"
              style={{ display: "inline-block", padding: "16px 40px", background: "#c9a84c", color: "#080b12", fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.35s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#c9a84c"; }}>
              Book Your Date →
            </Link>
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────── */}
      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(50px,7vw,90px) clamp(24px,6vw,80px)", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: "clamp(32px,5vw,60px)" }}>

        {/* Col 1 — About + Social */}
        <div>
          <span className="footer-col-label">About the Studio</span>
          <p style={{ fontSize: "0.85rem", fontWeight: 300, lineHeight: 1.9, color: "rgba(232,224,208,0.45)", marginBottom: "2rem", maxWidth: 320 }}>
            From the quiet intimacy of morning rituals to the grandeur of candlelit receptions — we chase light, emotion, and the moments no one else thinks to capture.
          </p>

          {/* Social pills */}
          <div style={{ display: "flex", gap: 10, marginBottom: "2.5rem" }}>
            {socials.map((s, i) => (
              <a key={i} href={s.href} className="social-pill" title={s.name}>{s.icon}</a>
            ))}
          </div>

          {/* Awards strip */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["WeddingSutra", "Vogue India", "Junebug"].map((a, i) => (
              <div key={i} style={{ padding: "6px 14px", border: "1px solid rgba(201,168,76,0.15)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>{a}</div>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <span className="footer-col-label">Navigate</span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {navLinks.map((l, i) => (
              <li key={i}><Link to={l.to} className="footer-link">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <span className="footer-col-label">Services</span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {services.map((s, i) => (
              <li key={i}><a href="#" className="footer-link">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact + Newsletter */}
        <div>
          <span className="footer-col-label">Get in Touch</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              { icon: "◎", val: "Bandra West, Mumbai" },
              { icon: "✉", val: "hello@knotsbyamp.com" },
              { icon: "☏", val: "+91 98765 43210" },
              { icon: "⏰", val: "Mon–Sat, 10am–7pm IST" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span style={{ color: "rgba(201,168,76,0.5)", fontSize: "0.8rem", marginTop: 1, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ fontSize: "0.82rem", fontWeight: 300, color: "rgba(232,224,208,0.45)", lineHeight: 1.5 }}>{c.val}</span>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem" }}>
            <span className="footer-col-label" style={{ marginBottom: "0.75rem" }}>Stay Inspired</span>
            {subscribed ? (
              <p className="sub-success" style={{ fontSize: "0.82rem", fontWeight: 300, color: "#c9a84c", lineHeight: 1.7 }}>✦ Thank you! Beautiful stories coming your way.</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">Join →</button>
              </form>
            )}
            <p style={{ fontSize: "0.67rem", color: "rgba(232,224,208,0.2)", marginTop: "0.75rem", letterSpacing: "0.05em" }}>No spam. Just love stories &amp; inspiration.</p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "20px clamp(24px,6vw,80px)" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 300, color: "rgba(232,224,208,0.25)", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Knots by Amp. All rights reserved. Crafted with love in Mumbai.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l, i) => (
              <a key={i} href="#" style={{ fontSize: "0.68rem", fontWeight: 300, color: "rgba(232,224,208,0.2)", textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c9a84c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(232,224,208,0.2)"}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;