// src/pages/weddings/WeddingPage.jsx
import React from "react";
import { useParams, Link,useLocation, useNavigate  } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProgressiveImg from "../../components/ProgressiveImg"; // adjust path

// Import all images for each couple (you can expand this)
const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Udaipur, Rajasthan",
    date: "December 2024",
    images: [
      img("Amruta_Amey/img221.jpg"),
      img("Amruta_Amey/img216.jpg"),
      img("Amruta_Amey/img224.jpg"),
      img("Amruta_Amey/img258.jpg"),
      // Add ALL images for this couple here
    ]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Goa",
    date: "November 2024",
    images: [
      img("Abhimanyu_Manisha/img621.jpg"),
      img("Abhimanyu_Manisha/img605.jpg"),
      img("Abhimanyu_Manisha/img613.jpg"),
      // ... add more
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Mumbai, Maharashtra",
    date: "October 2024",
    images: [
      img("Bhakti_Sourabh/img331.jpg"),
      img("Bhakti_Sourabh/img321.jpg"),
      img("Bhakti_Sourabh/img326.jpg"),
      // ... add more
    ]
  },
  "rohan-preksha": {
    couple: "Rohan & Preksha",
    location: "Jaipur, Rajasthan",
    date: "January 2025",
    images: [
      img("Rohan_Preksha/img550.jpg"),
      img("Rohan_Preksha/img543.jpg"),
      img("Rohan_Preksha/img504.jpg"),
      // ... add more
    ]
  }
};



export default function WeddingPage() {
  const handleBack = () => {
  if (location.state?.from) {
    navigate(location.state.from);
  } else {
    navigate("/"); // fallback if opened directly
  }
};

  const { slug } = useParams();
  const wedding = weddingData[slug];
  const location = useLocation();
const navigate = useNavigate();

  if (!wedding) {
    return <h1>Wedding not found</h1>;
  }

  return (
    <>
      <Helmet>
        <title>{wedding.couple} | TILT SHIFT Films</title>
      </Helmet>

      <div style={{ padding: "clamp(80px, 8vw, 140px) 24px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* <Link to="/#featured" style={{ 
            fontFamily: "'Jost', sans-serif", 
            fontSize: "0.8rem", 
            letterSpacing: "0.1em",
            color: "#666", 
            textDecoration: "none",
            marginBottom: "2rem",
            display: "inline-block"
          }}>
            ← Back to Featured Weddings
          </Link> */}
          <button
  onClick={handleBack}
  style={{
    fontFamily: "'Jost', sans-serif",
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    color: "#666",
    background: "none",
    border: "none",
    cursor: "pointer",
    marginBottom: "2rem",
    padding: 0
  }}
>
  ← Back
</button>

          <h1 style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: "clamp(2.8rem, 6vw, 5rem)", 
            fontWeight: 300,
            marginBottom: "0.5rem"
          }}>
            {wedding.couple}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#777", marginBottom: "3rem" }}>
            {wedding.location} • {wedding.date}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "12px"
          }}>
            {wedding.images.map((src, index) => (
              <div key={index} className="hover-zoom" style={{ aspectRatio: "3/4", overflow: "hidden" }}>
                <ProgressiveImg
                  src={src}
                  alt={`${wedding.couple} wedding`}
                  shouldLoad={true}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}