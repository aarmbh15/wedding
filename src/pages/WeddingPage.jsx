import React, { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Pune, Maharashtra",
    caption: [
      "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
      "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
    ],
    images: [
      img("Amruta_Amey/img200.webp"),
      img("Amruta_Amey/img202.webp"),
      img("Amruta_Amey/img203.webp"),
      img("Amruta_Amey/img204.webp"),
      img("Amruta_Amey/img206.webp"),
      img("Amruta_Amey/img207.webp"),
      img("Amruta_Amey/img208.webp"),
      img("Amruta_Amey/img209.webp"),
      img("Amruta_Amey/img213.webp"),
      img("Amruta_Amey/img216.webp"),
      img("Amruta_Amey/img218.webp"),
      img("Amruta_Amey/img221.webp"),
      img("Amruta_Amey/img225.webp"),
      img("Amruta_Amey/img229.webp"),
      img("Amruta_Amey/img232.webp"),
      img("Amruta_Amey/img233.webp"),
      img("Amruta_Amey/img234.webp"),
      img("Amruta_Amey/img235.webp"),
      img("Amruta_Amey/img239.webp"),
      img("Amruta_Amey/img237.webp"),
      img("Amruta_Amey/img241.webp"),
      img("Amruta_Amey/img243.webp"),
      img("Amruta_Amey/img244.webp"),
      img("Amruta_Amey/img252.webp"),
      img("Amruta_Amey/img254.webp"),
      img("Amruta_Amey/img257.webp"),
      img("Amruta_Amey/img258.webp"),
      img("Amruta_Amey/img266.webp"),
      img("Amruta_Amey/img265.webp"),
      img("Amruta_Amey/img262.webp"),
      img("Amruta_Amey/img261.webp"),
      img("Amruta_Amey/img270.webp"),
    ]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Pune, Maharashtra",
    caption: [
      "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
      "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
    ],
    images: [
      img("Abhimanyu_Manisha/img601.webp"),
      img("Abhimanyu_Manisha/img602.webp"),
      img("Abhimanyu_Manisha/img603.webp"),
      img("Abhimanyu_Manisha/img604.webp"),
      img("Abhimanyu_Manisha/img605.webp"),
      img("Abhimanyu_Manisha/img606.webp"),
      img("Abhimanyu_Manisha/img607.webp"),
      img("Abhimanyu_Manisha/img608.webp"),
      img("Abhimanyu_Manisha/img609.webp"),
      img("Abhimanyu_Manisha/img610.webp"),
      img("Abhimanyu_Manisha/img611.webp"),
      img("Abhimanyu_Manisha/img612.webp"),
      img("Abhimanyu_Manisha/img613.webp"),
      img("Abhimanyu_Manisha/img614.webp"),
      img("Abhimanyu_Manisha/img615.webp"),
      img("Abhimanyu_Manisha/img616.webp"),
      img("Abhimanyu_Manisha/img617.webp"),
      img("Abhimanyu_Manisha/img618.webp"),
      img("Abhimanyu_Manisha/img624.webp"),
      img("Abhimanyu_Manisha/img620.webp"),
      img("Abhimanyu_Manisha/img621.webp"),
      img("Abhimanyu_Manisha/img622.webp"),
      img("Abhimanyu_Manisha/img623.webp"),
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Jodhpur, Rajasthan",
    caption: [
      "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
      "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
    ],
    images: [
      img("Bhakti_Sourabh/img304.webp"),
      img("Bhakti_Sourabh/img309.webp"),
      img("Bhakti_Sourabh/img310.webp"),
      img("Bhakti_Sourabh/img314.webp"),
      img("Bhakti_Sourabh/img316.webp"),
      img("Bhakti_Sourabh/img317.webp"),
      img("Bhakti_Sourabh/img318.webp"),
      img("Bhakti_Sourabh/img319.webp"),
      img("Bhakti_Sourabh/img321.webp"),
      img("Bhakti_Sourabh/img322.webp"),
      img("Bhakti_Sourabh/img323.webp"),
      img("Bhakti_Sourabh/img324.webp"),
      img("Bhakti_Sourabh/img327.webp"),
      img("Bhakti_Sourabh/img328.webp"),
      img("Bhakti_Sourabh/img330.webp"),
      img("Bhakti_Sourabh/img332.webp"),
      img("Bhakti_Sourabh/img333.webp"),
      img("Bhakti_Sourabh/img334.webp"),
      img("Bhakti_Sourabh/img335.webp"),
      img("Bhakti_Sourabh/img338.webp"),
      img("Bhakti_Sourabh/img339.webp"),
      img("Bhakti_Sourabh/img340.webp"),
      img("Bhakti_Sourabh/img342.webp"),
      img("Bhakti_Sourabh/img344.webp"),
      img("Bhakti_Sourabh/img345.webp"),
      img("Bhakti_Sourabh/img346.webp"),
      img("Bhakti_Sourabh/img349.webp"),
      img("Bhakti_Sourabh/img350.webp"),
      img("Bhakti_Sourabh/img351.webp"),
      img("Bhakti_Sourabh/img353.webp"),
      img("Bhakti_Sourabh/img357.webp"),
      img("Bhakti_Sourabh/img359.webp"),
    ]
  },
  "Rohan-preksha": {
    couple: "Rohan & Preksha",
    location: "Pushkar, Rajasthan",
    caption: [
      "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",
      "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
    ],
    images: [
      img("Rohan_Preksha/img501.webp"),
      img("Rohan_Preksha/img502.webp"),
      img("Rohan_Preksha/img503.webp"),
      img("Rohan_Preksha/img504.webp"),
      img("Rohan_Preksha/img505.webp"),
      img("Rohan_Preksha/img506.webp"),
      img("Rohan_Preksha/img507.webp"),
      img("Rohan_Preksha/img508.webp"),
      img("Rohan_Preksha/img509.webp"),
      img("Rohan_Preksha/img511.webp"),
      img("Rohan_Preksha/img514.webp"),
      img("Rohan_Preksha/img515.webp"),
      img("Rohan_Preksha/img517.webp"),
      img("Rohan_Preksha/img519.webp"),
      img("Rohan_Preksha/img520.webp"),
      img("Rohan_Preksha/img521.webp"),
      img("Rohan_Preksha/img534.webp"),
      img("Rohan_Preksha/img533.webp"),
      img("Rohan_Preksha/img536.webp"),
      img("Rohan_Preksha/img540.webp"),
      img("Rohan_Preksha/img543.webp"),
      img("Rohan_Preksha/img544.webp"),
      img("Rohan_Preksha/img545.webp"),
      img("Rohan_Preksha/img546.webp"),
    ]
  },
  "Chaitrali_Shubham": {
    couple: "Chaitrali & Shubham",
    location: "Pune, Maharashtra",
    caption: [
      "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
      "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
    ],
    images: [
      img("Chaitrali_Shubham/img401.webp"),
      img("Chaitrali_Shubham/img402.webp"),
      img("Chaitrali_Shubham/img403.webp"),
      img("Chaitrali_Shubham/img404.webp"),
      img("Chaitrali_Shubham/img405.webp"),
      img("Chaitrali_Shubham/img407.webp"),
      img("Chaitrali_Shubham/img408.webp"),
      img("Chaitrali_Shubham/img409.webp"),
      img("Chaitrali_Shubham/img411.webp"),
      img("Chaitrali_Shubham/img412.webp"),
      img("Chaitrali_Shubham/img415.webp"),
      img("Chaitrali_Shubham/img416.webp"),
      img("Chaitrali_Shubham/img418.webp"),
      img("Chaitrali_Shubham/img421.webp"),
      img("Chaitrali_Shubham/img422.webp"),
      img("Chaitrali_Shubham/img420.webp"),
      img("Chaitrali_Shubham/img423.webp"),
      img("Chaitrali_Shubham/img425.webp"),
      img("Chaitrali_Shubham/img427.webp"),
      img("Chaitrali_Shubham/img428.webp"),
      img("Chaitrali_Shubham/img432.webp"),
      img("Chaitrali_Shubham/img434.webp"),
      img("Chaitrali_Shubham/img436.webp"),
      img("Chaitrali_Shubham/img438.webp"),
    ]
  },
  "Aishwarya_Sanmay": {
    couple: "Aishwarya & Sanmay",
    location: "Pune, Maharashtra",
    caption: [
      "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
      "What stood out was how naturally they moved through it all. Whether it was laughter in the smaller moments or the quiet pauses they shared, everything felt real. It wasn't about the scale or the setup, but about how present they were with each other and everyone around them."
    ],
    images: [
      img("Aishwarya_Sanmay/img0.webp"),
      img("Aishwarya_Sanmay/img1.webp"),
      img("Aishwarya_Sanmay/img3.webp"),
      img("Aishwarya_Sanmay/img5.webp"),
      img("Aishwarya_Sanmay/img6.webp"),
      img("Aishwarya_Sanmay/img15.webp"),
      img("Aishwarya_Sanmay/img20.webp"),
      img("Aishwarya_Sanmay/img26.webp"),
      img("Aishwarya_Sanmay/img17.webp"),
      img("Aishwarya_Sanmay/img27.webp"),
      img("Aishwarya_Sanmay/img29.webp"),
      img("Aishwarya_Sanmay/img23.webp"),
      img("Aishwarya_Sanmay/img28.webp"),
      img("Aishwarya_Sanmay/img31.webp"),
      img("Aishwarya_Sanmay/img35.webp"),
      img("Aishwarya_Sanmay/img39.webp"),
      img("Aishwarya_Sanmay/img44.webp"),
      img("Aishwarya_Sanmay/img48.webp"),
      img("Aishwarya_Sanmay/img54.webp"),
      img("Aishwarya_Sanmay/img62.webp"),
      img("Aishwarya_Sanmay/img64.webp"),
      img("Aishwarya_Sanmay/img67.webp"),
      img("Aishwarya_Sanmay/img69.webp"),
      img("Aishwarya_Sanmay/img70.webp"),
      img("Aishwarya_Sanmay/img73.webp"),
      img("Aishwarya_Sanmay/img74.webp"),
      img("Aishwarya_Sanmay/img80.webp"),
      img("Aishwarya_Sanmay/img82.webp"),
    ]
  }
};

export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddingData[slug];
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  if (!wedding) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Wedding Not Found</h1>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{wedding.couple} | TILT SHIFT Films</title>
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap');

        .wedding-caption-block {
          position: relative;
          padding: 3rem 0 4rem;
          max-width: 780px;
        }

        .wedding-caption-block::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: #bba98a;
          margin-bottom: 2rem;
        }

        .caption-paragraph {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.05rem, 1.6vw, 1.22rem);
          font-weight: 300;
          line-height: 1.85;
          color: #4a4540;
          margin: 0 0 1.4rem;
          font-style: italic;
        }

        .caption-paragraph:last-child {
          margin-bottom: 0;
        }

        .divider-ornament {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 3.5rem 0;
        }

        .divider-ornament::before,
        .divider-ornament::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #d4c4a8);
        }

        .divider-ornament::after {
          background: linear-gradient(to left, transparent, #d4c4a8);
        }

        .ornament-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #bba98a;
        }

        .hover-zoom {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-zoom:hover img {
          transform: scale(1.04);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-zoom img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <div style={{ padding: "clamp(80px, 8vw, 140px) 24px", background: "#fdfcfa" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          <button
            onClick={handleBack}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#999",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: "2.5rem",
              padding: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "color 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.color = "#333"}
            onMouseOut={e => e.currentTarget.style.color = "#999"}
          >
            ← Back
          </button>

          {/* Header */}
          <div style={{ borderBottom: "1px solid #e8e0d5", paddingBottom: "2.5rem", marginBottom: "0" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#bba98a",
              marginBottom: "0.8rem"
            }}>
              Wedding Story
            </p>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.2rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: "0.6rem",
              color: "#1a1714",
              letterSpacing: "-0.01em"
            }}>
              {wedding.couple}
            </h1>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a89880"
            }}>
              {wedding.location}
            </p>
          </div>

          {/* Caption Block */}
          {wedding.caption && (
            <div className="wedding-caption-block">
              {wedding.caption.map((para, i) => (
                <p key={i} className="caption-paragraph">{para}</p>
              ))}
            </div>
          )}

          {/* Ornamental Divider */}
          <div className="divider-ornament">
            <div className="ornament-dot" />
            <div className="ornament-dot" style={{ opacity: 0.5 }} />
            <div className="ornament-dot" />
          </div>

          {/* Photo Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px"
          }}>
            {wedding.images.map((src, index) => (
              <div
                key={index}
                className="hover-zoom"
                style={{
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  borderRadius: "3px"
                }}
              >
                <img
                  src={src}
                  alt={`${wedding.couple} wedding photo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}