// src/components/ImageSlider.jsx
import img1 from '../assets/img8.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';
import { useState } from 'react';

const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3, img4];

// Split into two rows with offset
const row1 = images;
const row2 = [...images.slice(4), ...images.slice(0, 4)];

// Labels to overlay on hover
const labels = [
  "Golden Hour", "Haldi Rituals", "Bridal Portraits", "Baraat Magic",
  "Sacred Pheras", "Reception Night", "Candid Joy", "Mehendi Art",
  "First Look", "Love Stories",
];

export default function ImageSlider() {
  const [paused1, setPaused1] = useState(false);
  const [paused2, setPaused2] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden", padding: "0 0 4px" }}>
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes lbFade {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes lbBg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .slide-track-ltr {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-ltr 40s linear infinite;
        }
        .slide-track-ltr.paused { animation-play-state: paused; }

        .slide-track-rtl {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee-rtl 44s linear infinite;
          margin-top: 20px;
        }
        .slide-track-rtl.paused { animation-play-state: paused; }

        .slide-card {
          position: relative;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 8px 40px rgba(0,0,0,0.22);
          transition: box-shadow 0.4s;
        }
        .slide-card:hover {
          box-shadow: 0 16px 60px rgba(0,0,0,0.45);
        }
        .slide-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(.22,1,.36,1);
          display: block;
        }
        .slide-card:hover img {
          transform: scale(1.07);
        }
        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,11,18,0.85) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.45s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 22px;
        }
        .slide-card:hover .slide-overlay { opacity: 1; }

        .slide-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          font-style: italic;
          color: #fff;
          letter-spacing: 0.04em;
          transform: translateY(6px);
          transition: transform 0.4s cubic-bezier(.22,1,.36,1);
        }
        .slide-card:hover .slide-label { transform: translateY(0); }

        .slide-tag {
          font-family: 'Jost', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 6px;
          opacity: 0;
          transition: opacity 0.4s 0.05s;
        }
        .slide-card:hover .slide-tag { opacity: 1; }

        /* Gold corner accent */
        .slide-corner {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 28px;
          height: 28px;
          border-top: 1.5px solid rgba(201,168,76,0.7);
          border-right: 1.5px solid rgba(201,168,76,0.7);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .slide-corner-bl {
          position: absolute;
          bottom: 14px;
          left: 14px;
          width: 28px;
          height: 28px;
          border-bottom: 1.5px solid rgba(201,168,76,0.7);
          border-left: 1.5px solid rgba(201,168,76,0.7);
          opacity: 0;
          transition: opacity 0.4s 0.05s;
        }
        .slide-card:hover .slide-corner,
        .slide-card:hover .slide-corner-bl { opacity: 1; }

        /* Lightbox */
        .lightbox-bg {
          position: fixed;
          inset: 0;
          background: rgba(8,11,18,0.96);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lbBg 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 88vh;
          object-fit: contain;
          border-radius: 2px;
          animation: lbFade 0.35s cubic-bezier(.22,1,.36,1);
          box-shadow: 0 30px 100px rgba(0,0,0,0.7);
        }
        .lightbox-close {
          position: absolute;
          top: 28px;
          right: 36px;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(232,224,208,0.6);
          cursor: pointer;
          background: none;
          border: none;
          transition: color 0.3s;
        }
        .lightbox-close:hover { color: #c9a84c; }

        /* Edge fades */
        .fade-left {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: clamp(60px, 8vw, 120px);
          background: linear-gradient(to right, var(--fade-color, #fff) 0%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }
        .fade-right {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: clamp(60px, 8vw, 120px);
          background: linear-gradient(to left, var(--fade-color, #fff) 0%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }
      `}</style>

      {/* Edge fades — set --fade-color via inline style to match your bg */}
      <div className="fade-left" style={{ '--fade-color': '#ffffff' }} />
      <div className="fade-right" style={{ '--fade-color': '#ffffff' }} />

      {/* ── ROW 1 — left to right ── */}
      <div
        className={`slide-track-ltr ${paused1 ? 'paused' : ''}`}
        onMouseEnter={() => setPaused1(true)}
        onMouseLeave={() => setPaused1(false)}
      >
        {[...row1, ...row1].map((img, i) => (
          <div
            key={i}
            className="slide-card"
            style={{ width: "clamp(220px,20vw,300px)", height: "clamp(280px,28vw,400px)" }}
            onClick={() => setLightbox(img)}
          >
            <img src={img} alt={`Wedding moment ${(i % labels.length) + 1}`} loading="lazy" />
            <div className="slide-corner" />
            <div className="slide-corner-bl" />
            <div className="slide-overlay">
              <div className="slide-tag">Knots by Amp</div>
              <div className="slide-label">{labels[i % labels.length]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── ROW 2 — right to left ── */}
      <div
        className={`slide-track-rtl ${paused2 ? 'paused' : ''}`}
        onMouseEnter={() => setPaused2(true)}
        onMouseLeave={() => setPaused2(false)}
      >
        {[...row2, ...row2].map((img, i) => (
          <div
            key={i}
            className="slide-card"
            style={{ width: "clamp(240px,22vw,340px)", height: "clamp(260px,25vw,360px)" }}
            onClick={() => setLightbox(img)}
          >
            <img src={img} alt={`Wedding moment ${(i % labels.length) + 1}`} loading="lazy" />
            <div className="slide-corner" />
            <div className="slide-corner-bl" />
            <div className="slide-overlay">
              <div className="slide-tag">Paramveer Films</div>
              <div className="slide-label">{labels[(i + 5) % labels.length]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div className="lightbox-bg" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕ Close</button>
          <img
            className="lightbox-img"
            src={lightbox}
            alt="Full view"
            onClick={e => e.stopPropagation()}
          />
          {/* Gold corner accents on lightbox */}
          <div style={{ position: "absolute", top: "5%", left: "5%", width: 40, height: 40, borderTop: "1px solid rgba(201,168,76,0.5)", borderLeft: "1px solid rgba(201,168,76,0.5)" }} />
          <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 40, height: 40, borderBottom: "1px solid rgba(201,168,76,0.5)", borderRight: "1px solid rgba(201,168,76,0.5)" }} />
        </div>
      )}
    </div>
  );
}