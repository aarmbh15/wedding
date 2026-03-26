import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Reuse the same image helper from Home.jsx
const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Udaipur, Rajasthan",
    date: "December 2024",
    images: [
        img("Amruta_Amey/img201.webp"),
        img("Amruta_Amey/img202.webp"),
        img("Amruta_Amey/img203.webp"),
        img("Amruta_Amey/img204.webp"),
        img("Amruta_Amey/img205.webp"),
        img("Amruta_Amey/img206.webp"),
        img("Amruta_Amey/img207.webp"),
        img("Amruta_Amey/img208.webp"),
        img("Amruta_Amey/img209.webp"),
        img("Amruta_Amey/img210.webp"),
        img("Amruta_Amey/img211.webp"),
        img("Amruta_Amey/img212.webp"),
      img("Amruta_Amey/img213.webp"),
      img("Amruta_Amey/img214.webp"),
      img("Amruta_Amey/img215.webp"),
      img("Amruta_Amey/img216.webp"),
      // Add more images of Amruta & Amey here
    ]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Goa",
    date: "November 2024",
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
      // Add more images here
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Mumbai, Maharashtra",
    date: "October 2024",
    images: [
      img("Bhakti_Sourabh/img301.webp"),
      img("Bhakti_Sourabh/img302.webp"),
      img("Bhakti_Sourabh/img303.webp"),
      img("Bhakti_Sourabh/img304.webp"),
      img("Bhakti_Sourabh/img305.webp"),
      img("Bhakti_Sourabh/img306.webp"),
      img("Bhakti_Sourabh/img307.webp"),
      img("Bhakti_Sourabh/img308.webp"),
      img("Bhakti_Sourabh/img309.webp"),
      img("Bhakti_Sourabh/img310.webp"),
      img("Bhakti_Sourabh/img311.webp"),
      img("Bhakti_Sourabh/img312.webp"),
      img("Bhakti_Sourabh/img313.webp"),
      img("Bhakti_Sourabh/img314.webp"),
      img("Bhakti_Sourabh/img315.webp"),
      img("Bhakti_Sourabh/img316.webp"),
      img("Bhakti_Sourabh/img317.webp"),
      img("Bhakti_Sourabh/img318.webp"),
      // Add more
    ]
  },
  "rohan-preksha": {
    couple: "Rohan & Preksha",
    location: "Jaipur, Rajasthan",
    date: "January 2025",
    images: [
      img("Rohan_Preksha/img501.webp"),
      img("Rohan_Preksha/img502.webp"),
      img("Rohan_Preksha/img503.webp"),
      img("Rohan_Preksha/img504.webp"),
      img("Rohan_Preksha/img505.webp"),
      img("Rohan_Preksha/img506.webp"),
      img("Rohan_Preksha/img507.webp"),
      img("Rohan_Preksha/img508.webp"),
      img("Rohan_Preksha/img504.webp"),
      img("Rohan_Preksha/img550.webp"),
      img("Rohan_Preksha/img543.webp"),
      img("Rohan_Preksha/img504.webp"),
      img("Rohan_Preksha/img550.webp"),
      img("Rohan_Preksha/img543.webp"),
      img("Rohan_Preksha/img504.webp"),
      img("Rohan_Preksha/img550.webp"),
      img("Rohan_Preksha/img543.webp"),
      img("Rohan_Preksha/img504.webp"),
      // Add more
    ]
  }
};

export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddingData[slug];

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

      <div style={{ padding: "clamp(80px, 8vw, 140px) 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          
          <Link 
            to="/" 
            style={{ 
              fontFamily: "'Jost', sans-serif", 
              fontSize: "0.85rem", 
              color: "#666", 
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "2rem"
            }}
          >
            ← Back to Home
          </Link>

          <h1 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(3rem, 7vw, 5.5rem)", 
            fontWeight: 300,
            marginBottom: "0.4rem"
          }}>
            {wedding.couple}
          </h1>
          <p style={{ fontSize: "1.15rem", color: "#777", marginBottom: "3rem" }}>
            {wedding.location} • {wedding.date}
          </p>

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
                  borderRadius: "4px"
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