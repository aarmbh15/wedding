import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Reuse the same image helper from Home.jsx
const allImages = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Udaipur, Rajasthan",
    date: "December 2024",
    images: [
        img("Amruta_Amey/img201.jpg"),
        img("Amruta_Amey/img202.jpg"),
        img("Amruta_Amey/img203.jpg"),
        img("Amruta_Amey/img204.jpg"),
        img("Amruta_Amey/img205.jpg"),
        img("Amruta_Amey/img206.jpg"),
        img("Amruta_Amey/img207.jpg"),
        img("Amruta_Amey/img208.jpg"),
        img("Amruta_Amey/img209.jpg"),
        img("Amruta_Amey/img210.jpg"),
        img("Amruta_Amey/img211.jpg"),
        img("Amruta_Amey/img212.jpg"),
      img("Amruta_Amey/img213.jpg"),
      img("Amruta_Amey/img214.jpg"),
      img("Amruta_Amey/img215.jpg"),
      img("Amruta_Amey/img216.jpg"),
      // Add more images of Amruta & Amey here
    ]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Goa",
    date: "November 2024",
    images: [
      img("Abhimanyu_Manisha/img601.jpg"),
      img("Abhimanyu_Manisha/img602.jpg"),
      img("Abhimanyu_Manisha/img603.jpg"),
      img("Abhimanyu_Manisha/img604.jpg"),
      img("Abhimanyu_Manisha/img605.jpg"),
      img("Abhimanyu_Manisha/img606.jpg"),
      img("Abhimanyu_Manisha/img607.jpg"),
      img("Abhimanyu_Manisha/img608.jpg"),
      img("Abhimanyu_Manisha/img609.jpg"),
      img("Abhimanyu_Manisha/img610.jpg"),
      img("Abhimanyu_Manisha/img611.jpg"),
      img("Abhimanyu_Manisha/img612.jpg"),
      img("Abhimanyu_Manisha/img613.jpg"),
      img("Abhimanyu_Manisha/img614.jpg"),
      img("Abhimanyu_Manisha/img615.jpg"),
      // Add more images here
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Mumbai, Maharashtra",
    date: "October 2024",
    images: [
      img("Bhakti_Sourabh/img301.jpg"),
      img("Bhakti_Sourabh/img302.jpg"),
      img("Bhakti_Sourabh/img303.jpg"),
      img("Bhakti_Sourabh/img304.jpg"),
      img("Bhakti_Sourabh/img305.jpg"),
      img("Bhakti_Sourabh/img306.jpg"),
      img("Bhakti_Sourabh/img307.jpg"),
      img("Bhakti_Sourabh/img308.jpg"),
      img("Bhakti_Sourabh/img309.jpg"),
      img("Bhakti_Sourabh/img310.jpg"),
      img("Bhakti_Sourabh/img311.jpg"),
      img("Bhakti_Sourabh/img312.jpg"),
      img("Bhakti_Sourabh/img313.jpg"),
      img("Bhakti_Sourabh/img314.jpg"),
      img("Bhakti_Sourabh/img315.jpg"),
      img("Bhakti_Sourabh/img316.jpg"),
      img("Bhakti_Sourabh/img317.jpg"),
      img("Bhakti_Sourabh/img318.jpg"),
      // Add more
    ]
  },
  "rohan-preksha": {
    couple: "Rohan & Preksha",
    location: "Jaipur, Rajasthan",
    date: "January 2025",
    images: [
      img("Rohan_Preksha/img501.jpg"),
      img("Rohan_Preksha/img502.jpg"),
      img("Rohan_Preksha/img503.jpg"),
      img("Rohan_Preksha/img504.jpg"),
      img("Rohan_Preksha/img505.jpg"),
      img("Rohan_Preksha/img506.jpg"),
      img("Rohan_Preksha/img507.jpg"),
      img("Rohan_Preksha/img508.jpg"),
      img("Rohan_Preksha/img504.jpg"),
      img("Rohan_Preksha/img550.jpg"),
      img("Rohan_Preksha/img543.jpg"),
      img("Rohan_Preksha/img504.jpg"),
      img("Rohan_Preksha/img550.jpg"),
      img("Rohan_Preksha/img543.jpg"),
      img("Rohan_Preksha/img504.jpg"),
      img("Rohan_Preksha/img550.jpg"),
      img("Rohan_Preksha/img543.jpg"),
      img("Rohan_Preksha/img504.jpg"),
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