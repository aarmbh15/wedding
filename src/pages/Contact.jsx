// src/pages/Contact.jsx
import { useState, useRef, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const contactDetails = [
  { icon: "◎", label: "Studio Location", value: "Bandra West, Mumbai", sub: "Maharashtra, India" },
  { icon: "✉", label: "Email Us", value: "hello@knotsbyamp.com", sub: "We reply within 24 hours" },
  { icon: "☏", label: "Call / WhatsApp", value: "+91 98765 43210", sub: "Mon–Sat, 10am–7pm IST" },
  { icon: "◑", label: "Instagram", value: "@knotsbyamp", sub: "Follow our journey" },
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Pinterest", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Facebook", href: "#" },
];

const packageOptions = ["Elopement (₹45,000)", "Classic (₹95,000)", "Signature (₹1,65,000)", "Custom / Destination", "Not Sure Yet"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", partner: "", email: "", phone: "", date: "", venue: "", package: "", guests: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const [heroRef] = useInView(0.1);
  const [formRef, formInView] = useInView(0.1);
  const [infoRef, infoInView] = useInView(0.1);
  const [faqRef, faqInView] = useInView(0.1);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1800)); // simulate API
    setStatus("success");
    setLoading(false);
  };

  const inputStyle = (name) => ({
    width: "100%",
    padding: "16px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${activeField === name ? "#c9a84c" : "rgba(255,255,255,0.12)"}`,
    color: "#e8e0d0",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.3s",
    display: "block",
  });

  const labelStyle = {
    display: "block",
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.68rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#c9a84c",
    marginBottom: "4px",
  };

  const faqs = [
    { q: "How far in advance should we book?", a: "We recommend booking 12–18 months in advance, especially for peak season (Oct–Feb). We accept only 24 weddings per year, so slots fill quickly." },
    { q: "Do you travel for destination weddings?", a: "Absolutely. We've shot weddings across India and internationally. Travel costs are calculated transparently and added to your package." },
    { q: "When do we receive our photos/film?", a: "Edited galleries are delivered within 4–6 weeks. Wedding films take 8–10 weeks. Rush delivery is available on request." },
    { q: "Can we customise a package?", a: "Yes, every love story is unique. We create bespoke packages tailored to your events, duration, and budget. Just mention it in your inquiry." },
    { q: "Do you provide raw/unedited files?", a: "We don't deliver raw files as every image represents our artistic standard. However, we deliver a generous number of fully edited images." },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#080b12", color: "#e8e0d0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
        .reveal-left.visible { opacity: 1; transform: none; }
        .reveal-right { opacity: 0; transform: translateX(50px); transition: opacity 0.9s cubic-bezier(.22,1,.36,1), transform 0.9s cubic-bezier(.22,1,.36,1); }
        .reveal-right.visible { opacity: 1; transform: none; }

        .d1 { transition-delay: 0.1s !important; }
        .d2 { transition-delay: 0.2s !important; }
        .d3 { transition-delay: 0.3s !important; }
        .d4 { transition-delay: 0.4s !important; }

        input::placeholder, textarea::placeholder, select::placeholder { color: rgba(232,224,208,0.25) !important; }
        input:-webkit-autofill { -webkit-box-shadow: 0 0 0 1000px #080b12 inset !important; -webkit-text-fill-color: #e8e0d0 !important; }
        select option { background: #0d1019; color: #e8e0d0; }

        @keyframes heroFade { from { opacity: 0; transform: scale(1.03); } to { opacity: 1; transform: scale(1); } }
        @keyframes heroText { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes successPop { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes shimmer { 0% { background-position: -300% center; } 100% { background-position: 300% center; } }
        @keyframes pulseDot { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } }

        .contact-detail-card:hover .cd-icon { color: #c9a84c; transform: scale(1.15); }
        .faq-item:hover .faq-q { color: #c9a84c; }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{ position: "relative", height: "85vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, animation: "heroFade 1.4s ease-out forwards" }}>
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2000&q=80"
            alt="Contact us"
            effect="blur"
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.28) saturate(0.7)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", animation: "heroText 1.2s 0.3s ease-out both" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>
            We're Ready When You Are
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 300, color: "#fff", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            Let's Capture<br /><em style={{ color: "#c9a84c" }}>Your Love Story</em>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem,2.5vw,1.5rem)", fontWeight: 300, fontStyle: "italic", color: "rgba(232,224,208,0.7)", maxWidth: 550, margin: "0 auto 2.5rem" }}>
            Drop us a message — we'll craft a personalised proposal just for your big day.
          </p>
          <a href="#contact-form"
            style={{ display: "inline-block", padding: "14px 36px", border: "1px solid rgba(201,168,76,0.5)", color: "#c9a84c", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#c9a84c"; e.currentTarget.style.color = "#080b12"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c9a84c"; }}>
            Start Your Inquiry ↓
          </a>
        </div>
      </section>

      {/* ─── QUICK CONTACT STRIP ──────────────────────────────────── */}
      <div style={{ background: "#c9a84c", padding: "0 24px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {[
            { label: "📍 Studio", val: "Bandra West, Mumbai" },
            { label: "✉ Email", val: "hello@knotsbyamp.com" },
            { label: "📞 Phone", val: "+91 98765 43210" },
            { label: "⏰ Response", val: "Within 24 Hours" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "18px 0", display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(8,11,18,0.6)" }}>{item.label}</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", fontWeight: 500, color: "#080b12" }}>{item.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN FORM + INFO ─────────────────────────────────────── */}
      <section id="contact-form" style={{ padding: "clamp(80px,10vw,130px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: "clamp(50px,8vw,100px)", alignItems: "start" }}>

          {/* ── FORM ── */}
          <div ref={formRef} className={`reveal-left ${formInView ? "visible" : ""}`}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Book Your Date</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#fff", marginBottom: "0.75rem" }}>
              Tell Us About<br /><em>Your Wedding</em>
            </h2>
            <div style={{ width: 50, height: 1, background: "#c9a84c", marginBottom: "2.5rem" }} />

            {status === "success" ? (
              <div style={{ padding: "clamp(40px,6vw,80px) 40px", border: "1px solid rgba(201,168,76,0.3)", textAlign: "center", animation: "successPop 0.6s ease-out" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "4rem", color: "#c9a84c", marginBottom: "1.5rem" }}>✦</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 300, color: "#fff", marginBottom: "1rem" }}>We've Got Your Message!</h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.92rem", fontWeight: 300, color: "rgba(232,224,208,0.6)", lineHeight: 1.8 }}>
                  Thank you for reaching out. We're already excited about your love story.<br />
                  Expect a personalised reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Row 1: Names */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      onFocus={() => setActiveField("name")} onBlur={() => setActiveField(null)}
                      placeholder="e.g. Priya Sharma" style={inputStyle("name")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Partner's Name</label>
                    <input type="text" name="partner" value={form.partner} onChange={handleChange}
                      onFocus={() => setActiveField("partner")} onBlur={() => setActiveField(null)}
                      placeholder="e.g. Arjun Mehta" style={inputStyle("partner")} />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      onFocus={() => setActiveField("email")} onBlur={() => setActiveField(null)}
                      placeholder="your@email.com" style={inputStyle("email")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone / WhatsApp</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      onFocus={() => setActiveField("phone")} onBlur={() => setActiveField(null)}
                      placeholder="+91 XXXXX XXXXX" style={inputStyle("phone")} />
                  </div>
                </div>

                {/* Row 3: Date + Venue */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Wedding Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange}
                      onFocus={() => setActiveField("date")} onBlur={() => setActiveField(null)}
                      style={{ ...inputStyle("date"), colorScheme: "dark" }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Venue / City</label>
                    <input type="text" name="venue" value={form.venue} onChange={handleChange}
                      onFocus={() => setActiveField("venue")} onBlur={() => setActiveField(null)}
                      placeholder="e.g. The Leela, Mumbai" style={inputStyle("venue")} />
                  </div>
                </div>

                {/* Row 4: Package + Guests */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <label style={labelStyle}>Package Interested In</label>
                    <select name="package" value={form.package} onChange={handleChange}
                      onFocus={() => setActiveField("package")} onBlur={() => setActiveField(null)}
                      style={{ ...inputStyle("package"), cursor: "pointer" }}>
                      <option value="" style={{ color: "rgba(232,224,208,0.25)" }}>Select a package…</option>
                      {packageOptions.map((p, i) => <option key={i} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Expected Guests</label>
                    <input type="text" name="guests" value={form.guests} onChange={handleChange}
                      onFocus={() => setActiveField("guests")} onBlur={() => setActiveField(null)}
                      placeholder="e.g. 200–300" style={inputStyle("guests")} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Your Vision & Story *</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                    onFocus={() => setActiveField("message")} onBlur={() => setActiveField(null)}
                    placeholder="Tell us about your wedding — the vibe, style, special moments you want captured, or anything else on your mind…"
                    style={{ ...inputStyle("message"), resize: "vertical", lineHeight: 1.7 }} />
                </div>

                {/* Submit */}
                <div>
                  <button type="submit" disabled={loading}
                    style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "16px 48px", background: loading ? "rgba(201,168,76,0.5)" : "#c9a84c", color: "#080b12", fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", border: "none", cursor: loading ? "not-allowed" : "pointer", transition: "all 0.3s" }}
                    onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                    onMouseLeave={e => { e.currentTarget.style.background = loading ? "rgba(201,168,76,0.5)" : "#c9a84c"; e.currentTarget.style.transform = "none"; }}>
                    {loading ? (
                      <>
                        <div style={{ width: 16, height: 16, border: "2px solid rgba(8,11,18,0.4)", borderTopColor: "#080b12", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                        Sending…
                      </>
                    ) : "Send Your Story →"}
                  </button>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.72rem", color: "rgba(232,224,208,0.35)", marginTop: "1rem", letterSpacing: "0.05em" }}>
                    We'll reply with a personalised proposal within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* ── SIDEBAR INFO ── */}
          <div ref={infoRef} className={`reveal-right ${infoInView ? "visible" : ""}`}>

            {/* Contact details */}
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.5rem" }}>Reach Us</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {contactDetails.map((d, i) => (
                  <div key={i}
                    className="contact-detail-card"
                    style={{ display: "flex", gap: 20, padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", cursor: "default" }}>
                    <div className="cd-icon" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "rgba(201,168,76,0.5)", flexShrink: 0, transition: "color 0.3s, transform 0.3s", paddingTop: 2 }}>{d.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(232,224,208,0.4)", marginBottom: 4 }}>{d.label}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", color: "#e8e0d0", marginBottom: 2 }}>{d.value}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", color: "rgba(232,224,208,0.35)" }}>{d.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginBottom: "3rem" }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.2rem" }}>Follow Our Journey</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {socials.map((s, i) => (
                  <a key={i} href={s.href}
                    style={{ padding: "8px 20px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(232,224,208,0.6)", fontFamily: "'Jost', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", textDecoration: "none", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.color = "#c9a84c"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(232,224,208,0.6)"; }}>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability widget */}
            <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", padding: "28px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulseDot 1.8s infinite" }} />
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#22c55e" }}>Currently Accepting Bookings</span>
              </div>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 300, color: "#fff", lineHeight: 1.5, marginBottom: "0.75rem" }}>
                Limited dates available for 2025 & 2026 season
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.8rem", fontWeight: 300, color: "rgba(232,224,208,0.45)", lineHeight: 1.7 }}>
                We accept only 24 weddings per year — ensuring every couple receives our full creative devotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section ref={faqRef} style={{ padding: "clamp(70px,8vw,110px) 24px", background: "#0d1019", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className={`reveal ${faqInView ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,70px)" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Common Questions</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 300, color: "#fff" }}>
              Things You <em>Might Wonder</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i}
                className={`faq-item reveal ${faqInView ? `visible d${Math.min(i + 1, 4)}` : ""}`}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, textAlign: "left" }}>
                  <span className="faq-q" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400, color: openFaq === i ? "#c9a84c" : "#fff", transition: "color 0.3s", lineHeight: 1.3 }}>{faq.q}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#c9a84c", flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: openFaq === i ? 200 : 0, transition: "max-height 0.5s cubic-bezier(.22,1,.36,1)" }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", fontWeight: 300, color: "rgba(232,224,208,0.55)", lineHeight: 1.85, paddingBottom: 24 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAP / LOCATION STRIP ─────────────────────────────────── */}
      <section style={{ background: "#080b12", padding: "clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>Find Us</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#fff", marginBottom: "1.5rem" }}>
              Visit Our <em>Studio</em>
            </h2>
            <div style={{ width: 40, height: 1, background: "#c9a84c", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.95rem", fontWeight: 300, color: "rgba(232,224,208,0.6)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Our studio is nestled in the heart of Bandra West — a neighbourhood that inspires creativity at every turn. Book an in-person consultation to meet the team over coffee.
            </p>
            <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#e8e0d0" }}>Studio 4B, Carter Road</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#e8e0d0" }}>Bandra West, Mumbai 400050</span>
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.78rem", color: "rgba(232,224,208,0.4)", marginTop: 4 }}>By appointment only · Mon–Sat</span>
            </address>
          </div>

          {/* Stylised map placeholder with overlay */}
          <div style={{ position: "relative", borderRadius: 2, overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(201,168,76,0.15)" }}>
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1!2d72.827!3d19.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzMyLjQiTiA3MsKwNDknMzcuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4) brightness(0.85)" }}
              loading="lazy"
              allowFullScreen
            />
            <div style={{ position: "absolute", top: 16, left: 16, background: "#c9a84c", color: "#080b12", fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", padding: "8px 16px" }}>Bandra West · Mumbai</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;