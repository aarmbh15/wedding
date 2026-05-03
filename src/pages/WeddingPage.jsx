// import React, { useState } from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img200.webp"),
//       img("Amruta_Amey/img202.webp"),
//       img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"),
//       img("Amruta_Amey/img206.webp"),
//       img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"),
//       img("Amruta_Amey/img209.webp"),
//       img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"),
//       img("Amruta_Amey/img218.webp"),
//       img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"),
//       img("Amruta_Amey/img229.webp"),
//       img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"),
//       img("Amruta_Amey/img234.webp"),
//       img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"),
//       img("Amruta_Amey/img237.webp"),
//       img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"),
//       img("Amruta_Amey/img244.webp"),
//       img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"),
//       img("Amruta_Amey/img257.webp"),
//       img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"),
//       img("Amruta_Amey/img265.webp"),
//       img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"),
//       img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"),
//       img("Abhimanyu_Manisha/img602.webp"),
//       img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"),
//       img("Abhimanyu_Manisha/img605.webp"),
//       img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"),
//       img("Abhimanyu_Manisha/img608.webp"),
//       img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"),
//       img("Abhimanyu_Manisha/img611.webp"),
//       img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"),
//       img("Abhimanyu_Manisha/img614.webp"),
//       img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"),
//       img("Abhimanyu_Manisha/img617.webp"),
//       img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"),
//       img("Abhimanyu_Manisha/img620.webp"),
//       img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"),
//       img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"),
//       img("Bhakti_Sourabh/img309.webp"),
//       img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"),
//       img("Bhakti_Sourabh/img316.webp"),
//       img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"),
//       img("Bhakti_Sourabh/img319.webp"),
//       img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"),
//       img("Bhakti_Sourabh/img323.webp"),
//       img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"),
//       img("Bhakti_Sourabh/img328.webp"),
//       img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"),
//       img("Bhakti_Sourabh/img333.webp"),
//       img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"),
//       img("Bhakti_Sourabh/img338.webp"),
//       img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"),
//       img("Bhakti_Sourabh/img342.webp"),
//       img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"),
//       img("Bhakti_Sourabh/img346.webp"),
//       img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"),
//       img("Bhakti_Sourabh/img351.webp"),
//       img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"),
//       img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"),
//       img("Rohan_Preksha/img502.webp"),
//       img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"),
//       img("Rohan_Preksha/img505.webp"),
//       img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"),
//       img("Rohan_Preksha/img508.webp"),
//       img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"),
//       img("Rohan_Preksha/img514.webp"),
//       img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"),
//       img("Rohan_Preksha/img519.webp"),
//       img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"),
//       img("Rohan_Preksha/img534.webp"),
//       img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"),
//       img("Rohan_Preksha/img540.webp"),
//       img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"),
//       img("Rohan_Preksha/img545.webp"),
//       img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
//       "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"),
//       img("Chaitrali_Shubham/img402.webp"),
//       img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"),
//       img("Chaitrali_Shubham/img405.webp"),
//       img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"),
//       img("Chaitrali_Shubham/img409.webp"),
//       img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"),
//       img("Chaitrali_Shubham/img415.webp"),
//       img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"),
//       img("Chaitrali_Shubham/img421.webp"),
//       img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"),
//       img("Chaitrali_Shubham/img423.webp"),
//       img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"),
//       img("Chaitrali_Shubham/img428.webp"),
//       img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"),
//       img("Chaitrali_Shubham/img436.webp"),
//       img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
//       "What stood out was how naturally they moved through it all. Whether it was laughter in the smaller moments or the quiet pauses they shared, everything felt real. It wasn't about the scale or the setup, but about how present they were with each other and everyone around them."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"),
//       img("Aishwarya_Sanmay/img1.webp"),
//       img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"),
//       img("Aishwarya_Sanmay/img6.webp"),
//       img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"),
//       img("Aishwarya_Sanmay/img26.webp"),
//       img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"),
//       img("Aishwarya_Sanmay/img29.webp"),
//       img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"),
//       img("Aishwarya_Sanmay/img31.webp"),
//       img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"),
//       img("Aishwarya_Sanmay/img44.webp"),
//       img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"),
//       img("Aishwarya_Sanmay/img62.webp"),
//       img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"),
//       img("Aishwarya_Sanmay/img69.webp"),
//       img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"),
//       img("Aishwarya_Sanmay/img74.webp"),
//       img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };

// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (location.state?.from) {
//       navigate(location.state.from);
//     } else {
//       navigate("/");
//     }
//   };

//   if (!wedding) {
//     return (
//       <div style={{ padding: "100px 20px", textAlign: "center" }}>
//         <h1>Wedding Not Found</h1>
//         <Link to="/">← Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{wedding.couple} | TILT SHIFT Films</title>
//       </Helmet>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap');

//         .wedding-caption-block {
//           position: relative;
//           padding: 3rem 0 4rem;
//           max-width: 780px;
//         }

//         .wedding-caption-block::before {
//           content: '';
//           display: block;
//           width: 40px;
//           height: 1px;
//           background: #bba98a;
//           margin-bottom: 2rem;
//         }

//         .caption-paragraph {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(1.05rem, 1.6vw, 1.22rem);
//           font-weight: 300;
//           line-height: 1.85;
//           color: #4a4540;
//           margin: 0 0 1.4rem;
//           font-style: italic;
//         }

//         .caption-paragraph:last-child {
//           margin-bottom: 0;
//         }

//         .divider-ornament {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin: 3.5rem 0;
//         }

//         .divider-ornament::before,
//         .divider-ornament::after {
//           content: '';
//           flex: 1;
//           height: 1px;
//           background: linear-gradient(to right, transparent, #d4c4a8);
//         }

//         .divider-ornament::after {
//           background: linear-gradient(to left, transparent, #d4c4a8);
//         }

//         .ornament-dot {
//           width: 5px;
//           height: 5px;
//           border-radius: 50%;
//           background: #bba98a;
//         }

//         .hover-zoom {
//           transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .hover-zoom:hover img {
//           transform: scale(1.04);
//           transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .hover-zoom img {
//           transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
//       `}</style>

//       <div style={{ padding: "clamp(80px, 8vw, 140px) 24px", background: "#fdfcfa" }}>
//         <div style={{ maxWidth: 1400, margin: "0 auto" }}>

//           <button
//             onClick={handleBack}
//             style={{
//               fontFamily: "'Jost', sans-serif",
//               fontSize: "0.75rem",
//               letterSpacing: "0.18em",
//               textTransform: "uppercase",
//               color: "#999",
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               marginBottom: "2.5rem",
//               padding: 0,
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "8px",
//               transition: "color 0.2s"
//             }}
//             onMouseOver={e => e.currentTarget.style.color = "#333"}
//             onMouseOut={e => e.currentTarget.style.color = "#999"}
//           >
//             ← Back
//           </button>

//           {/* Header */}
//           <div style={{ borderBottom: "1px solid #e8e0d5", paddingBottom: "2.5rem", marginBottom: "0" }}>
//             <p style={{
//               fontFamily: "'Jost', sans-serif",
//               fontSize: "0.7rem",
//               letterSpacing: "0.22em",
//               textTransform: "uppercase",
//               color: "#bba98a",
//               marginBottom: "0.8rem"
//             }}>
//               Wedding Story
//             </p>
//             <h1 style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(3.2rem, 7vw, 6rem)",
//               fontWeight: 300,
//               lineHeight: 1.05,
//               marginBottom: "0.6rem",
//               color: "#1a1714",
//               letterSpacing: "-0.01em"
//             }}>
//               {wedding.couple}
//             </h1>
//             <p style={{
//               fontFamily: "'Jost', sans-serif",
//               fontSize: "0.8rem",
//               letterSpacing: "0.15em",
//               textTransform: "uppercase",
//               color: "#a89880"
//             }}>
//               {wedding.location}
//             </p>
//           </div>

//           {/* Caption Block */}
//           {wedding.caption && (
//             <div className="wedding-caption-block">
//               {wedding.caption.map((para, i) => (
//                 <p key={i} className="caption-paragraph">{para}</p>
//               ))}
//             </div>
//           )}

//           {/* Ornamental Divider */}
//           <div className="divider-ornament">
//             <div className="ornament-dot" />
//             <div className="ornament-dot" style={{ opacity: 0.5 }} />
//             <div className="ornament-dot" />
//           </div>

//           {/* Photo Grid */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "16px"
//           }}>
//             {wedding.images.map((src, index) => (
//               <div
//                 key={index}
//                 className="hover-zoom"
//                 style={{
//                   aspectRatio: "3/4",
//                   overflow: "hidden",
//                   borderRadius: "3px"
//                 }}
//               >
//                 <img
//                   src={src}
//                   alt={`${wedding.couple} wedding photo ${index + 1}`}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     display: "block"
//                   }}
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

//below one is hero bg,content, and than images

// import React from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// // Image loading logic
// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// // weddingData remains same...
// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img1.webp"),
//       img("Amruta_Amey/img200.webp"),
//       img("Amruta_Amey/img202.webp"),
//       img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"),
//       img("Amruta_Amey/img206.webp"),
//       img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"),
//       img("Amruta_Amey/img209.webp"),
//       img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"),
//       img("Amruta_Amey/img218.webp"),
//       img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"),
//       img("Amruta_Amey/img229.webp"),
//       img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"),
//       img("Amruta_Amey/img234.webp"),
//       img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"),
//       img("Amruta_Amey/img237.webp"),
//       img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"),
//       img("Amruta_Amey/img244.webp"),
//       img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"),
//       img("Amruta_Amey/img257.webp"),
//       img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"),
//       img("Amruta_Amey/img265.webp"),
//       img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"),
//       img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"),
//       img("Abhimanyu_Manisha/img602.webp"),
//       img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"),
//       img("Abhimanyu_Manisha/img605.webp"),
//       img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"),
//       img("Abhimanyu_Manisha/img608.webp"),
//       img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"),
//       img("Abhimanyu_Manisha/img611.webp"),
//       img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"),
//       img("Abhimanyu_Manisha/img614.webp"),
//       img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"),
//       img("Abhimanyu_Manisha/img617.webp"),
//       img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"),
//       img("Abhimanyu_Manisha/img620.webp"),
//       img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"),
//       img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"),
//       img("Bhakti_Sourabh/img309.webp"),
//       img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"),
//       img("Bhakti_Sourabh/img316.webp"),
//       img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"),
//       img("Bhakti_Sourabh/img319.webp"),
//       img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"),
//       img("Bhakti_Sourabh/img323.webp"),
//       img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"),
//       img("Bhakti_Sourabh/img328.webp"),
//       img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"),
//       img("Bhakti_Sourabh/img333.webp"),
//       img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"),
//       img("Bhakti_Sourabh/img338.webp"),
//       img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"),
//       img("Bhakti_Sourabh/img342.webp"),
//       img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"),
//       img("Bhakti_Sourabh/img346.webp"),
//       img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"),
//       img("Bhakti_Sourabh/img351.webp"),
//       img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"),
//       img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"),
//       img("Rohan_Preksha/img502.webp"),
//       img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"),
//       img("Rohan_Preksha/img505.webp"),
//       img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"),
//       img("Rohan_Preksha/img508.webp"),
//       img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"),
//       img("Rohan_Preksha/img514.webp"),
//       img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"),
//       img("Rohan_Preksha/img519.webp"),
//       img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"),
//       img("Rohan_Preksha/img534.webp"),
//       img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"),
//       img("Rohan_Preksha/img540.webp"),
//       img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"),
//       img("Rohan_Preksha/img545.webp"),
//       img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
//       "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"),
//       img("Chaitrali_Shubham/img402.webp"),
//       img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"),
//       img("Chaitrali_Shubham/img405.webp"),
//       img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"),
//       img("Chaitrali_Shubham/img409.webp"),
//       img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"),
//       img("Chaitrali_Shubham/img415.webp"),
//       img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"),
//       img("Chaitrali_Shubham/img421.webp"),
//       img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"),
//       img("Chaitrali_Shubham/img423.webp"),
//       img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"),
//       img("Chaitrali_Shubham/img428.webp"),
//       img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"),
//       img("Chaitrali_Shubham/img436.webp"),
//       img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
//       "What stood out was how naturally they moved through it all. Whether it was laughter in the smaller moments or the quiet pauses they shared, everything felt real. It wasn't about the scale or the setup, but about how present they were with each other and everyone around them."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"),
//       img("Aishwarya_Sanmay/img1.webp"),
//       img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"),
//       img("Aishwarya_Sanmay/img6.webp"),
//       img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"),
//       img("Aishwarya_Sanmay/img26.webp"),
//       img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"),
//       img("Aishwarya_Sanmay/img29.webp"),
//       img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"),
//       img("Aishwarya_Sanmay/img31.webp"),
//       img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"),
//       img("Aishwarya_Sanmay/img44.webp"),
//       img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"),
//       img("Aishwarya_Sanmay/img62.webp"),
//       img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"),
//       img("Aishwarya_Sanmay/img69.webp"),
//       img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"),
//       img("Aishwarya_Sanmay/img74.webp"),
//       img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };

// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (location.state?.from) {
//       navigate(location.state.from);
//     } else {
//       navigate("/");
//     }
//   };

//   if (!wedding) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcfa] px-6 text-center">
//         <h1 className="font-serif text-4xl text-neutral-800 mb-6">Story Not Found</h1>
//         <Link to="/" className="font-sans uppercase tracking-[0.2em] text-xs text-neutral-500 border-b border-neutral-300 pb-1">
//           Back to Stories
//         </Link>
//       </div>
//     );
//   }

//   // Set the first image as the hero
//   const heroImage = wedding.images[0];

//   return (
//     <div className="bg-white min-h-screen selection:bg-[#bba98a]/20">
//       <Helmet>
//         <title>{wedding.couple} | TILT SHIFT Films</title>
//       </Helmet>

//       {/* Floating Navigation */}
//       {/* Floating Navigation */}
//       <button 
//         onClick={handleBack}
//         className="fixed top-28 left-16 z-50 mix-blend-difference text-white font-sans text-[10px] tracking-[0.4em] uppercase hover:opacity-60 transition-opacity"
//       >
//         ← Back
//       </button>

//       {/* 1. HERO SECTION */}
//       <section 
//         className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for text */}
//         <div className="relative z-10 text-center px-6">
//           <p className="font-sans text-[11px] tracking-[0.5em] uppercase text-white/90 mb-4 animate-fade-in">
//             Wedding Story
//           </p>
//           <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight">
//             {wedding.couple}
//           </h1>
//         </div>
//       </section>

//       {/* 2. STORY DETAILS SECTION */}
//       <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
//         <span className="inline-block font-sans text-[10px] tracking-[0.4em] uppercase text-[#bba98a] mb-8">
//           {wedding.location}
//         </span>
        
//         <div className="space-y-8">
//           {wedding.caption.map((para, i) => (
//             <p 
//               key={i} 
//               className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-700 font-light italic"
//             >
//               {para}
//             </p>
//           ))}
//         </div>

//         <div className="mt-16 flex justify-center">
//           <div className="w-[1px] h-20 bg-neutral-200"></div>
//         </div>
//       </section>

//       {/* 3. DYNAMIC MASONRY GALLERY */}
// <section className="max-w-full mx-auto px-1 pb-32">
//   {/* 
//     Changed 'columns-1' to 'columns-2' for mobile view.
//     Responsive Breakpoints:
//     - Default (Mobile): 2 columns
//     - sm (Tablet): 2 columns
//     - lg (Desktop): 3 columns
//     - xl (Large Desktop): 4 columns
//   */}
//   <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
//     {wedding.images.map((src, index) => (
//       <div 
//         key={index} 
//         className="break-inside-avoid w-full group"
//       >
//         <div className="relative overflow-hidden transition-all duration-700 ease-in-out">
//           <img
//             src={src}
//             alt={`${wedding.couple} moment ${index + 1}`}
//             className="w-full h-auto block object-cover transition-transform duration-[1.2s] cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105"
//             loading="lazy"
//           />
          
//           {/* 
//             Overlay effect: 
//             Visible on desktop hover. 
//             On mobile, usually hidden to let the photography shine, 
//             but the 'group-hover' logic will still work on tap.
//           */}
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
//             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-6 w-6 md:h-8 md:w-8 text-white stroke-2" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor"
//                >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//       {/* FOOTER */}
//       <footer className="py-20 border-t border-neutral-100 text-center">
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
//         >
//           ↑ Back to top
//         </button>
//       </footer>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// // weddingData remains same...
// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img1.webp"),
//       img("Amruta_Amey/img200.webp"),
//       img("Amruta_Amey/img202.webp"),
//       img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"),
//       img("Amruta_Amey/img206.webp"),
//       img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"),
//       img("Amruta_Amey/img209.webp"),
//       img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"),
//       img("Amruta_Amey/img218.webp"),
//       img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"),
//       img("Amruta_Amey/img229.webp"),
//       img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"),
//       img("Amruta_Amey/img234.webp"),
//       img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"),
//       img("Amruta_Amey/img237.webp"),
//       img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"),
//       img("Amruta_Amey/img244.webp"),
//       img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"),
//       img("Amruta_Amey/img257.webp"),
//       img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"),
//       img("Amruta_Amey/img265.webp"),
//       img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"),
//       img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"),
//       img("Abhimanyu_Manisha/img602.webp"),
//       img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"),
//       img("Abhimanyu_Manisha/img605.webp"),
//       img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"),
//       img("Abhimanyu_Manisha/img608.webp"),
//       img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"),
//       img("Abhimanyu_Manisha/img611.webp"),
//       img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"),
//       img("Abhimanyu_Manisha/img614.webp"),
//       img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"),
//       img("Abhimanyu_Manisha/img617.webp"),
//       img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"),
//       img("Abhimanyu_Manisha/img620.webp"),
//       img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"),
//       img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"),
//       img("Bhakti_Sourabh/img309.webp"),
//       img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"),
//       img("Bhakti_Sourabh/img316.webp"),
//       img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"),
//       img("Bhakti_Sourabh/img319.webp"),
//       img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"),
//       img("Bhakti_Sourabh/img323.webp"),
//       img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"),
//       img("Bhakti_Sourabh/img328.webp"),
//       img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"),
//       img("Bhakti_Sourabh/img333.webp"),
//       img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"),
//       img("Bhakti_Sourabh/img338.webp"),
//       img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"),
//       img("Bhakti_Sourabh/img342.webp"),
//       img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"),
//       img("Bhakti_Sourabh/img346.webp"),
//       img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"),
//       img("Bhakti_Sourabh/img351.webp"),
//       img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"),
//       img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"),
//       img("Rohan_Preksha/img502.webp"),
//       img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"),
//       img("Rohan_Preksha/img505.webp"),
//       img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"),
//       img("Rohan_Preksha/img508.webp"),
//       img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"),
//       img("Rohan_Preksha/img514.webp"),
//       img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"),
//       img("Rohan_Preksha/img519.webp"),
//       img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"),
//       img("Rohan_Preksha/img534.webp"),
//       img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"),
//       img("Rohan_Preksha/img540.webp"),
//       img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"),
//       img("Rohan_Preksha/img545.webp"),
//       img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
//       "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"),
//       img("Chaitrali_Shubham/img402.webp"),
//       img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"),
//       img("Chaitrali_Shubham/img405.webp"),
//       img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"),
//       img("Chaitrali_Shubham/img409.webp"),
//       img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"),
//       img("Chaitrali_Shubham/img415.webp"),
//       img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"),
//       img("Chaitrali_Shubham/img421.webp"),
//       img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"),
//       img("Chaitrali_Shubham/img423.webp"),
//       img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"),
//       img("Chaitrali_Shubham/img428.webp"),
//       img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"),
//       img("Chaitrali_Shubham/img436.webp"),
//       img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
//       "What stood out was how naturally they moved through it all. Whether it was laughter in the smaller moments or the quiet pauses they shared, everything felt real. It wasn't about the scale or the setup, but about how present they were with each other and everyone around them."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"),
//       img("Aishwarya_Sanmay/img1.webp"),
//       img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"),
//       img("Aishwarya_Sanmay/img6.webp"),
//       img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"),
//       img("Aishwarya_Sanmay/img26.webp"),
//       img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"),
//       img("Aishwarya_Sanmay/img29.webp"),
//       img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"),
//       img("Aishwarya_Sanmay/img31.webp"),
//       img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"),
//       img("Aishwarya_Sanmay/img44.webp"),
//       img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"),
//       img("Aishwarya_Sanmay/img62.webp"),
//       img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"),
//       img("Aishwarya_Sanmay/img69.webp"),
//       img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"),
//       img("Aishwarya_Sanmay/img74.webp"),
//       img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };

// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   // State for Lightbox
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleBack = () => {
//     if (location.state?.from) {
//       navigate(location.state.from);
//     } else {
//       navigate("/");
//     }
//   };

//   const openLightbox = (index) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when open
//   };

//   const closeLightbox = () => {
//     setIsOpen(false);
//     document.body.style.overflow = 'auto';
//   };

//   const nextImage = (e) => {
//     e?.stopPropagation();
//     setCurrentIndex((prev) => (prev + 1) % wedding.images.length);
//   };

//   const prevImage = (e) => {
//     e?.stopPropagation();
//     setCurrentIndex((prev) => (prev - 1 + wedding.images.length) % wedding.images.length);
//   };

//   if (!wedding) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcfa] px-6 text-center">
//         <h1 className="font-serif text-4xl text-neutral-800 mb-6 font-light">Story Not Found</h1>
//         <Link to="/" className="font-sans uppercase tracking-[0.2em] text-xs text-neutral-500 border-b border-neutral-300 pb-1">
//           Back to Stories
//         </Link>
//       </div>
//     );
//   }

//   const heroImage = wedding.images[0];

//   return (
//     <div className="bg-white min-h-screen selection:bg-[#bba98a]/20">
//       <Helmet>
//         <title>{wedding.couple} | TILT SHIFT Films</title>
//       </Helmet>

//       {/* Floating Navigation */}
//       <button 
//         onClick={handleBack}
//         className="fixed top-28 left-16 z-50 mix-blend-difference text-white font-sans text-[10px] tracking-[0.4em] uppercase hover:opacity-60 transition-opacity"
//       >
//         ← Back
//       </button>

//       {/* 1. HERO SECTION */}
//       <section 
//         className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="relative z-10 text-center px-6">
//           <p className="font-sans text-[11px] tracking-[0.5em] uppercase text-white/90 mb-4 animate-fade-in">
//             Wedding Story
//           </p>
//           <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight font-light">
//             {wedding.couple}
//           </h1>
//         </div>
//       </section>

//       {/* 2. STORY DETAILS SECTION */}
//       <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
//         <span className="inline-block font-sans text-[10px] tracking-[0.4em] uppercase text-[#bba98a] mb-8 font-medium">
//           {wedding.location}
//         </span>
//         <div className="space-y-8">
//           {wedding.caption.map((para, i) => (
//             <p key={i} className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-700 font-light italic">
//               {para}
//             </p>
//           ))}
//         </div>
//         <div className="mt-16 flex justify-center">
//           <div className="w-[1px] h-20 bg-neutral-200"></div>
//         </div>
//       </section>

//       {/* 3. DYNAMIC MASONRY GALLERY */}
//       <section className="max-w-full mx-auto px-1 pb-32">
//         <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
//           {wedding.images.map((src, index) => (
//             <div 
//               key={index} 
//               className="break-inside-avoid w-full group cursor-pointer"
//               onClick={() => openLightbox(index)}
//             >
//               <div className="relative overflow-hidden transition-all duration-700 ease-in-out">
//                 <img
//                   src={src}
//                   alt={`${wedding.couple} moment ${index + 1}`}
//                   className="w-full h-auto block object-cover transition-transform duration-[1.2s] cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
//                   <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* LIGHTBOX POPUP */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center transition-all duration-300 animate-in fade-in"
//           onClick={closeLightbox}
//         >
//           {/* Close Button */}
//           <button 
//             className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-neutral-400 transition-colors z-[110]"
//             onClick={closeLightbox}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Left Arrow */}
//           <button 
//             className="absolute left-4 md:left-8 text-white hover:text-neutral-400 transition-colors p-2 z-[110]"
//             onClick={prevImage}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           {/* Image Container */}
//           <div className="w-full h-full p-4 md:p-12 flex items-center justify-center select-none">
//             <img 
//               src={wedding.images[currentIndex]} 
//               className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-500 scale-in-center"
//               alt="Full view"
//               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
//             />
//           </div>

//           {/* Right Arrow */}
//           <button 
//             className="absolute right-4 md:right-8 text-white hover:text-neutral-400 transition-colors p-2 z-[110]"
//             onClick={nextImage}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       )}

//       {/* FOOTER */}
//       <footer className="py-20 border-t border-neutral-100 text-center">
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
//         >
//           ↑ Back to top
//         </button>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
const img = (path) => allImages[`../assets/${path}`]?.default;

// weddingData... (kept same as your provided code)
const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Pune, Maharashtra",
    caption: [
      "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
      "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
    ],
    // images: [
    //   img("Amruta_Amey/img200.webp"),
    //   img("Amruta_Amey/img202.webp"),
    //   img("Amruta_Amey/img203.webp"),
    //   img("Amruta_Amey/img204.webp"),
    //   img("Amruta_Amey/img206.webp"),
    //   img("Amruta_Amey/img207.webp"),
    //   img("Amruta_Amey/img208.webp"),
    //   img("Amruta_Amey/img209.webp"),
    //   img("Amruta_Amey/img213.webp"),
    //   img("Amruta_Amey/img216.webp"),
    //   img("Amruta_Amey/img218.webp"),
    //   img("Amruta_Amey/img221.webp"),
    //   img("Amruta_Amey/img225.webp"),
    //   img("Amruta_Amey/img229.webp"),
    //   img("Amruta_Amey/img232.webp"),
    //   img("Amruta_Amey/img233.webp"),
    //   img("Amruta_Amey/img234.webp"),
    //   img("Amruta_Amey/img235.webp"),
    //   img("Amruta_Amey/img239.webp"),
    //   img("Amruta_Amey/img237.webp"),
    //   img("Amruta_Amey/img241.webp"),
    //   img("Amruta_Amey/img243.webp"),
    //   img("Amruta_Amey/img244.webp"),
    //   img("Amruta_Amey/img252.webp"),
    //   img("Amruta_Amey/img254.webp"),
    //   img("Amruta_Amey/img257.webp"),
    //   img("Amruta_Amey/img258.webp"),
    //   img("Amruta_Amey/img266.webp"),
    //   img("Amruta_Amey/img265.webp"),
    //   img("Amruta_Amey/img262.webp"),
    //   img("Amruta_Amey/img261.webp"),
    //   img("Amruta_Amey/img270.webp"),
    // ]
    images: [
      img("Amruta_Amey/img233.webp"),
  img("Amruta_Amey/img200.webp"),
  img("Amruta_Amey/img202.webp"),
  img("Amruta_Amey/img203.webp"),
  img("Amruta_Amey/img204.webp"),
  img("Amruta_Amey/img205.webp"),
  img("Amruta_Amey/img206.webp"),
  img("Amruta_Amey/img207.webp"),
  img("Amruta_Amey/img208.webp"),
  img("Amruta_Amey/img209.webp"),
  img("Amruta_Amey/img213.webp"),
  img("Amruta_Amey/img216.webp"),
  img("Amruta_Amey/img218.webp"),

  img("Amruta_Amey/img221.webp"),
  img("Amruta_Amey/img223.webp"),
  img("Amruta_Amey/img225.webp"),
  img("Amruta_Amey/img229.webp"),
  img("Amruta_Amey/img232.webp"),
  img("Amruta_Amey/img234.webp"),
  img("Amruta_Amey/img235.webp"),
  img("Amruta_Amey/img236.webp"),
  img("Amruta_Amey/img237.webp"),
  img("Amruta_Amey/img238.webp"),
  img("Amruta_Amey/img239.webp"),

  img("Amruta_Amey/img240.webp"),
  img("Amruta_Amey/img241.webp"),
  img("Amruta_Amey/img242.webp"),
  img("Amruta_Amey/img243.webp"),
  img("Amruta_Amey/img244.webp"),
  img("Amruta_Amey/img245.webp"),
  img("Amruta_Amey/img246.webp"),
  img("Amruta_Amey/img247.webp"),
  img("Amruta_Amey/img248.webp"),
  img("Amruta_Amey/img249.webp"),
  img("Amruta_Amey/img250.webp"),
  img("Amruta_Amey/img251.webp"),

  img("Amruta_Amey/img252.webp"),
  img("Amruta_Amey/img253.webp"),
  img("Amruta_Amey/img254.webp"),
  img("Amruta_Amey/img255.webp"),
  img("Amruta_Amey/img256.webp"),
  img("Amruta_Amey/img257.webp"),
  img("Amruta_Amey/img258.webp"),
  img("Amruta_Amey/img259.webp"),
  img("Amruta_Amey/img260.webp"),
  img("Amruta_Amey/img261.webp"),
  img("Amruta_Amey/img262.webp"),
  img("Amruta_Amey/img263.webp"),

  img("Amruta_Amey/img264.webp"),
  img("Amruta_Amey/img265.webp"),
  img("Amruta_Amey/img266.webp"),
  img("Amruta_Amey/img267.webp"),
  img("Amruta_Amey/img269.webp"),
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
      img("Abhimanyu_Manisha/img613.webp"),
      img("Abhimanyu_Manisha/img600.webp"),
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
    // images: [
    //   img("Bhakti_Sourabh/img304.webp"),
    //   img("Bhakti_Sourabh/img309.webp"),
    //   img("Bhakti_Sourabh/img310.webp"),
    //   img("Bhakti_Sourabh/img314.webp"),
    //   img("Bhakti_Sourabh/img316.webp"),
    //   img("Bhakti_Sourabh/img317.webp"),
    //   img("Bhakti_Sourabh/img318.webp"),
    //   img("Bhakti_Sourabh/img319.webp"),
    //   img("Bhakti_Sourabh/img321.webp"),
    //   img("Bhakti_Sourabh/img322.webp"),
    //   img("Bhakti_Sourabh/img323.webp"),
    //   img("Bhakti_Sourabh/img324.webp"),
    //   img("Bhakti_Sourabh/img327.webp"),
    //   img("Bhakti_Sourabh/img328.webp"),
    //   img("Bhakti_Sourabh/img330.webp"),
    //   img("Bhakti_Sourabh/img332.webp"),
    //   img("Bhakti_Sourabh/img333.webp"),
    //   img("Bhakti_Sourabh/img334.webp"),
    //   img("Bhakti_Sourabh/img335.webp"),
    //   img("Bhakti_Sourabh/img338.webp"),
    //   img("Bhakti_Sourabh/img339.webp"),
    //   img("Bhakti_Sourabh/img340.webp"),
    //   img("Bhakti_Sourabh/img342.webp"),
    //   img("Bhakti_Sourabh/img344.webp"),
    //   img("Bhakti_Sourabh/img345.webp"),
    //   img("Bhakti_Sourabh/img346.webp"),
    //   img("Bhakti_Sourabh/img349.webp"),
    //   img("Bhakti_Sourabh/img350.webp"),
    //   img("Bhakti_Sourabh/img351.webp"),
    //   img("Bhakti_Sourabh/img353.webp"),
    //   img("Bhakti_Sourabh/img357.webp"),
    //   img("Bhakti_Sourabh/img359.webp"),
    // ]
    images: [
      img("Bhakti_Sourabh/img356.webp"),
  img("Bhakti_Sourabh/img301.webp"),
  img("Bhakti_Sourabh/img303.webp"),
  img("Bhakti_Sourabh/img304.webp"),
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
  img("Bhakti_Sourabh/img319.webp"),
  img("Bhakti_Sourabh/img320.webp"),
  img("Bhakti_Sourabh/img321.webp"),
  img("Bhakti_Sourabh/img322.webp"),
  img("Bhakti_Sourabh/img323.webp"),
  img("Bhakti_Sourabh/img324.webp"),
  img("Bhakti_Sourabh/img326.webp"),
  img("Bhakti_Sourabh/img327.webp"),
  img("Bhakti_Sourabh/img328.webp"),

  img("Bhakti_Sourabh/img329.webp"),
  img("Bhakti_Sourabh/img330.webp"),
  img("Bhakti_Sourabh/img331.webp"),
  img("Bhakti_Sourabh/img332.webp"),
  img("Bhakti_Sourabh/img333.webp"),
  img("Bhakti_Sourabh/img334.webp"),
  img("Bhakti_Sourabh/img335.webp"),
  img("Bhakti_Sourabh/img336.webp"),
  img("Bhakti_Sourabh/img337.webp"),
  img("Bhakti_Sourabh/img338.webp"),
  img("Bhakti_Sourabh/img339.webp"),
  img("Bhakti_Sourabh/img340.webp"),

  img("Bhakti_Sourabh/img341.webp"),
  img("Bhakti_Sourabh/img342.webp"),
  img("Bhakti_Sourabh/img343.webp"),
  img("Bhakti_Sourabh/img344.webp"),
  img("Bhakti_Sourabh/img345.webp"),
  img("Bhakti_Sourabh/img346.webp"),
  img("Bhakti_Sourabh/img347.webp"),
  img("Bhakti_Sourabh/img348.webp"),
  img("Bhakti_Sourabh/img349.webp"),
  img("Bhakti_Sourabh/img350.webp"),
  img("Bhakti_Sourabh/img351.webp"),
  img("Bhakti_Sourabh/img352.webp"),

  img("Bhakti_Sourabh/img353.webp"),
  img("Bhakti_Sourabh/img354.webp"),
  img("Bhakti_Sourabh/img355.webp"),
  
  img("Bhakti_Sourabh/img357.webp"),
  img("Bhakti_Sourabh/img358.webp"),
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
    // images: [
    //   img("Rohan_Preksha/img501.webp"),
    //   img("Rohan_Preksha/img502.webp"),
    //   img("Rohan_Preksha/img503.webp"),
    //   img("Rohan_Preksha/img504.webp"),
    //   img("Rohan_Preksha/img505.webp"),
    //   img("Rohan_Preksha/img506.webp"),
    //   img("Rohan_Preksha/img507.webp"),
    //   img("Rohan_Preksha/img508.webp"),
    //   img("Rohan_Preksha/img509.webp"),
    //   img("Rohan_Preksha/img511.webp"),
    //   img("Rohan_Preksha/img514.webp"),
    //   img("Rohan_Preksha/img515.webp"),
    //   img("Rohan_Preksha/img517.webp"),
    //   img("Rohan_Preksha/img519.webp"),
    //   img("Rohan_Preksha/img520.webp"),
    //   img("Rohan_Preksha/img521.webp"),
    //   img("Rohan_Preksha/img534.webp"),
    //   img("Rohan_Preksha/img533.webp"),
    //   img("Rohan_Preksha/img536.webp"),
    //   img("Rohan_Preksha/img540.webp"),
    //   img("Rohan_Preksha/img543.webp"),
    //   img("Rohan_Preksha/img544.webp"),
    //   img("Rohan_Preksha/img545.webp"),
    //   img("Rohan_Preksha/img546.webp"),
    // ]

    images: [
      img("Rohan_Preksha/img538.webp"),
  img("Rohan_Preksha/img500.webp"),
  img("Rohan_Preksha/img501.webp"),
  img("Rohan_Preksha/img502.webp"),
  img("Rohan_Preksha/img503.webp"),
  img("Rohan_Preksha/img504.webp"),
  img("Rohan_Preksha/img505.webp"),
  img("Rohan_Preksha/img506.webp"),
  img("Rohan_Preksha/img507.webp"),
  img("Rohan_Preksha/img508.webp"),
  img("Rohan_Preksha/img509.webp"),
  img("Rohan_Preksha/img510.webp"),
  img("Rohan_Preksha/img511.webp"),

  img("Rohan_Preksha/img512.webp"),
  img("Rohan_Preksha/img513.webp"),
  img("Rohan_Preksha/img514.webp"),
  img("Rohan_Preksha/img515.webp"),
  img("Rohan_Preksha/img516.webp"),
  img("Rohan_Preksha/img517.webp"),
  img("Rohan_Preksha/img518.webp"),
  img("Rohan_Preksha/img519.webp"),
  img("Rohan_Preksha/img520.webp"),
  img("Rohan_Preksha/img521.webp"),
  img("Rohan_Preksha/img522.webp"),
  img("Rohan_Preksha/img523.webp"),

  img("Rohan_Preksha/img524.webp"),
  img("Rohan_Preksha/img525.webp"),
  img("Rohan_Preksha/img526.webp"),
  img("Rohan_Preksha/img527.webp"),
  img("Rohan_Preksha/img528.webp"),
  img("Rohan_Preksha/img529.webp"),
  img("Rohan_Preksha/img530.webp"),
  img("Rohan_Preksha/img531.webp"),
  img("Rohan_Preksha/img532.webp"),
  img("Rohan_Preksha/img533.webp"),
  img("Rohan_Preksha/img534.webp"),
  img("Rohan_Preksha/img535.webp"),

  img("Rohan_Preksha/img536.webp"),
  img("Rohan_Preksha/img537.webp"),
  
  img("Rohan_Preksha/img539.webp"),
  img("Rohan_Preksha/img540.webp"),
  img("Rohan_Preksha/img541.webp"),
  img("Rohan_Preksha/img542.webp"),
  img("Rohan_Preksha/img543.webp"),
  img("Rohan_Preksha/img544.webp"),
  img("Rohan_Preksha/img545.webp"),
  img("Rohan_Preksha/img546.webp"),
  img("Rohan_Preksha/img547.webp"),
  img("Rohan_Preksha/img548.webp"),
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
      img("Chaitrali_Shubham/img406.webp"),
      img("Chaitrali_Shubham/img407.webp"),
      img("Chaitrali_Shubham/img408.webp"),
      img("Chaitrali_Shubham/img409.webp"),
      img("Chaitrali_Shubham/img411.webp"),
      img("Chaitrali_Shubham/img412.webp"),
      img("Chaitrali_Shubham/img413.webp"),
      img("Chaitrali_Shubham/img414.webp"),
      img("Chaitrali_Shubham/img415.webp"),
      img("Chaitrali_Shubham/img416.webp"),
      img("Chaitrali_Shubham/img417.webp"),
      img("Chaitrali_Shubham/img418.webp"),
      img("Chaitrali_Shubham/img419.webp"),
      img("Chaitrali_Shubham/img420.webp"),
      img("Chaitrali_Shubham/img421.webp"),
      img("Chaitrali_Shubham/img422.webp"),
      img("Chaitrali_Shubham/img423.webp"),
      img("Chaitrali_Shubham/img424.webp"),
      img("Chaitrali_Shubham/img425.webp"),
      img("Chaitrali_Shubham/img426.webp"),
      img("Chaitrali_Shubham/img427.webp"),
      img("Chaitrali_Shubham/img428.webp"),
      img("Chaitrali_Shubham/img429.webp"),
      img("Chaitrali_Shubham/img430.webp"),
      img("Chaitrali_Shubham/img432.webp"),
      img("Chaitrali_Shubham/img434.webp"),
      img("Chaitrali_Shubham/img435.webp"),
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
    // images: [
    //   img("Aishwarya_Sanmay/img0.webp"),
    //   img("Aishwarya_Sanmay/img1.webp"),
    //   img("Aishwarya_Sanmay/img3.webp"),
    //   img("Aishwarya_Sanmay/img5.webp"),
    //   img("Aishwarya_Sanmay/img6.webp"),
    //   img("Aishwarya_Sanmay/img15.webp"),
    //   img("Aishwarya_Sanmay/img20.webp"),
    //   img("Aishwarya_Sanmay/img26.webp"),
    //   img("Aishwarya_Sanmay/img17.webp"),
    //   img("Aishwarya_Sanmay/img27.webp"),
    //   img("Aishwarya_Sanmay/img29.webp"),
    //   img("Aishwarya_Sanmay/img23.webp"),
    //   img("Aishwarya_Sanmay/img28.webp"),
    //   img("Aishwarya_Sanmay/img31.webp"),
    //   img("Aishwarya_Sanmay/img35.webp"),
    //   img("Aishwarya_Sanmay/img39.webp"),
    //   img("Aishwarya_Sanmay/img44.webp"),
    //   img("Aishwarya_Sanmay/img48.webp"),
    //   img("Aishwarya_Sanmay/img54.webp"),
    //   img("Aishwarya_Sanmay/img62.webp"),
    //   img("Aishwarya_Sanmay/img64.webp"),
    //   img("Aishwarya_Sanmay/img67.webp"),
    //   img("Aishwarya_Sanmay/img69.webp"),
    //   img("Aishwarya_Sanmay/img70.webp"),
    //   img("Aishwarya_Sanmay/img73.webp"),
    //   img("Aishwarya_Sanmay/img74.webp"),
    //   img("Aishwarya_Sanmay/img80.webp"),
    //   img("Aishwarya_Sanmay/img82.webp"),
    // ]

    images: [
      img("Aishwarya_Sanmay/img38.webp"),
  img("Aishwarya_Sanmay/img0.webp"),
  img("Aishwarya_Sanmay/img1.webp"),
  img("Aishwarya_Sanmay/img3.webp"),
  img("Aishwarya_Sanmay/img4.webp"),
  img("Aishwarya_Sanmay/img5.webp"),
  img("Aishwarya_Sanmay/img6.webp"),
  img("Aishwarya_Sanmay/img9.webp"),
  img("Aishwarya_Sanmay/img11.webp"),
  img("Aishwarya_Sanmay/img12.webp"),
  img("Aishwarya_Sanmay/img13.webp"),
  img("Aishwarya_Sanmay/img15.webp"),
  img("Aishwarya_Sanmay/img17.webp"),
  img("Aishwarya_Sanmay/img18.webp"),
  img("Aishwarya_Sanmay/img19.webp"),
  img("Aishwarya_Sanmay/img20.webp"),
  img("Aishwarya_Sanmay/img22.webp"),
  img("Aishwarya_Sanmay/img23.webp"),
  img("Aishwarya_Sanmay/img25.webp"),
  img("Aishwarya_Sanmay/img26.webp"),
  img("Aishwarya_Sanmay/img27.webp"),
  img("Aishwarya_Sanmay/img28.webp"),
  img("Aishwarya_Sanmay/img29.webp"),
  img("Aishwarya_Sanmay/img30.webp"),
  img("Aishwarya_Sanmay/img31.webp"),
  img("Aishwarya_Sanmay/img32.webp"),
  img("Aishwarya_Sanmay/img33.webp"),
  img("Aishwarya_Sanmay/img35.webp"),
  img("Aishwarya_Sanmay/img36.webp"),
  
  img("Aishwarya_Sanmay/img39.webp"),
  img("Aishwarya_Sanmay/img40.webp"),
  
  img("Aishwarya_Sanmay/img42.webp"),
  img("Aishwarya_Sanmay/img43.webp"),
  img("Aishwarya_Sanmay/img44.webp"),
  img("Aishwarya_Sanmay/img45.webp"),
  img("Aishwarya_Sanmay/img47.webp"),
  img("Aishwarya_Sanmay/img48.webp"),
  img("Aishwarya_Sanmay/img50.webp"),
  img("Aishwarya_Sanmay/img51.webp"),
  img("Aishwarya_Sanmay/img52.webp"),
  img("Aishwarya_Sanmay/img53.webp"),
  img("Aishwarya_Sanmay/img54.webp"),
  img("Aishwarya_Sanmay/img55.webp"),
  img("Aishwarya_Sanmay/img56.webp"),
  img("Aishwarya_Sanmay/img57.webp"),
  img("Aishwarya_Sanmay/img58.webp"),
  img("Aishwarya_Sanmay/img59.webp"),
  img("Aishwarya_Sanmay/img60.webp"),
  img("Aishwarya_Sanmay/img61.webp"),
  img("Aishwarya_Sanmay/img62.webp"),
  img("Aishwarya_Sanmay/img63.webp"),
  img("Aishwarya_Sanmay/img64.webp"),
  img("Aishwarya_Sanmay/img65.webp"),
  img("Aishwarya_Sanmay/img66.webp"),
  img("Aishwarya_Sanmay/img67.webp"),
  img("Aishwarya_Sanmay/img68.webp"),
  img("Aishwarya_Sanmay/img69.webp"),
  img("Aishwarya_Sanmay/img70.webp"),
  img("Aishwarya_Sanmay/img71.webp"),
  img("Aishwarya_Sanmay/img72.webp"),
  img("Aishwarya_Sanmay/img73.webp"),
  img("Aishwarya_Sanmay/img74.webp"),
  img("Aishwarya_Sanmay/img75.webp"),
  img("Aishwarya_Sanmay/img76.webp"),
  img("Aishwarya_Sanmay/img77.webp"),
  img("Aishwarya_Sanmay/img78.webp"),
  img("Aishwarya_Sanmay/img80.webp"),
  img("Aishwarya_Sanmay/img81.webp"),
  img("Aishwarya_Sanmay/img82.webp"),
  img("Aishwarya_Sanmay/img84.webp"),
  img("Aishwarya_Sanmay/img85.webp"),
]
  }
};

export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddingData[slug];
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleBack = () => {
    if (location.state?.from) navigate(location.state.from);
    else navigate("/");
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % wedding.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + wedding.images.length) % wedding.images.length);
  };

  if (!wedding) return null;

  const heroImage = wedding.images[0];

  return (
    <div className="bg-white min-h-screen selection:bg-[#bba98a]/20">
      <Helmet>
        <title>{wedding.couple} | TILT SHIFT Films</title>
      </Helmet>

      {/* Floating Navigation (Back Button) */}
      <button 
        onClick={handleBack}
        className="fixed top-28 left-8 md:left-16 z-40 mix-blend-difference text-white font-sans text-[10px] tracking-[0.4em] uppercase hover:opacity-60 transition-opacity"
      >
        ← Back
      </button>

      {/* 1. HERO SECTION */}
      <section 
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-6">
          <p className="font-sans text-[11px] tracking-[0.5em] uppercase text-white/90 mb-4">
            Wedding Story
          </p>
          <h1 className="font-serif text-white text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight font-light">
            {wedding.couple}
          </h1>
        </div>
      </section>

      {/* 2. STORY DETAILS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <span className="inline-block font-sans text-[10px] tracking-[0.4em] uppercase text-[#bba98a] mb-8 font-medium">
          {wedding.location}
        </span>
        <div className="space-y-8">
          {wedding.caption.map((para, i) => (
            <p key={i} className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-700 font-light italic">
              {para}
            </p>
          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <div className="w-[1px] h-20 bg-neutral-200"></div>
        </div> */}
      </section>

      {/* 3. DYNAMIC MASONRY GALLERY */}
      <section className="max-w-full mx-auto px-1 pb-32">
        <div className="columns-2 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {wedding.images.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid w-full group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden transition-all duration-700 ease-in-out bg-neutral-100">
                <img
                  src={src}
                  alt={`${wedding.couple} moment ${index + 1}`}
                  className="w-full h-auto block object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 text-white stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX POPUP */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button - Top Right */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 border rounded-full text-white/70 hover:text-white transition-all z-[10000] p-2"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 md:left-8 text-white border rounded-full hover:text-white transition-all p-4 z-[10000]"
            onClick={prevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className="absolute right-4 md:right-8 text-white border rounded-full hover:text-white transition-all p-4 z-[10000]"
            onClick={nextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-2 md:p-10 select-none">
            <img 
              src={wedding.images[currentIndex]} 
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500"
              alt="Full screen view"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
          
          {/* Image Counter (Optional but elegant) */}
          <div className="absolute bottom-8 text-white/40 font-sans text-[10px] tracking-[0.2em] uppercase">
            {currentIndex + 1} / {wedding.images.length}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-20 border-t border-neutral-100 text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
        >
          ↑ Back to top
        </button>
      </footer>
    </div>
  );
}

//below is image1 

// import React from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// // Image loading logic
// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img200.webp"), img("Amruta_Amey/img202.webp"), img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"), img("Amruta_Amey/img206.webp"), img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"), img("Amruta_Amey/img209.webp"), img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"), img("Amruta_Amey/img218.webp"), img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"), img("Amruta_Amey/img229.webp"), img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"), img("Amruta_Amey/img234.webp"), img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"), img("Amruta_Amey/img237.webp"), img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"), img("Amruta_Amey/img244.webp"), img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"), img("Amruta_Amey/img257.webp"), img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"), img("Amruta_Amey/img265.webp"), img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"), img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"), img("Abhimanyu_Manisha/img602.webp"), img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"), img("Abhimanyu_Manisha/img605.webp"), img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"), img("Abhimanyu_Manisha/img608.webp"), img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"), img("Abhimanyu_Manisha/img611.webp"), img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"), img("Abhimanyu_Manisha/img614.webp"), img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"), img("Abhimanyu_Manisha/img617.webp"), img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"), img("Abhimanyu_Manisha/img620.webp"), img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"), img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"), img("Bhakti_Sourabh/img309.webp"), img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"), img("Bhakti_Sourabh/img316.webp"), img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"), img("Bhakti_Sourabh/img319.webp"), img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"), img("Bhakti_Sourabh/img323.webp"), img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"), img("Bhakti_Sourabh/img328.webp"), img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"), img("Bhakti_Sourabh/img333.webp"), img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"), img("Bhakti_Sourabh/img338.webp"), img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"), img("Bhakti_Sourabh/img342.webp"), img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"), img("Bhakti_Sourabh/img346.webp"), img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"), img("Bhakti_Sourabh/img351.webp"), img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"), img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"), img("Rohan_Preksha/img502.webp"), img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"), img("Rohan_Preksha/img505.webp"), img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"), img("Rohan_Preksha/img508.webp"), img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"), img("Rohan_Preksha/img514.webp"), img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"), img("Rohan_Preksha/img519.webp"), img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"), img("Rohan_Preksha/img534.webp"), img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"), img("Rohan_Preksha/img540.webp"), img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"), img("Rohan_Preksha/img545.webp"), img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way.",
//       "What stood out was how effortlessly everything came together. Just two people surrounded by their families, celebrating in a way that felt familiar and comforting."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"), img("Chaitrali_Shubham/img402.webp"), img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"), img("Chaitrali_Shubham/img405.webp"), img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"), img("Chaitrali_Shubham/img409.webp"), img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"), img("Chaitrali_Shubham/img415.webp"), img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"), img("Chaitrali_Shubham/img421.webp"), img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"), img("Chaitrali_Shubham/img423.webp"), img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"), img("Chaitrali_Shubham/img428.webp"), img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"), img("Chaitrali_Shubham/img436.webp"), img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout.",
//       "What stood out was how naturally they moved through it all. It wasn't about the scale or the setup, but about how present they were with each other."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"), img("Aishwarya_Sanmay/img1.webp"), img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"), img("Aishwarya_Sanmay/img6.webp"), img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"), img("Aishwarya_Sanmay/img26.webp"), img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"), img("Aishwarya_Sanmay/img29.webp"), img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"), img("Aishwarya_Sanmay/img31.webp"), img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"), img("Aishwarya_Sanmay/img44.webp"), img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"), img("Aishwarya_Sanmay/img62.webp"), img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"), img("Aishwarya_Sanmay/img69.webp"), img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"), img("Aishwarya_Sanmay/img74.webp"), img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };

// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (location.state?.from) {
//       navigate(location.state.from);
//     } else {
//       navigate("/");
//     }
//   };

//   if (!wedding) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-[#fdfcfa] px-6 text-center">
//         <h1 className="font-serif text-4xl text-neutral-800 mb-6">Wedding Not Found</h1>
//         <Link to="/" className="font-sans uppercase tracking-[0.2em] text-xs text-neutral-500 hover:text-black transition-colors duration-300 border-b border-neutral-300 pb-1">
//           Back to Stories
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#fdfcfa] min-h-screen selection:bg-[#bba98a]/20">
//       <Helmet>
//         <title>{wedding.couple} | TILT SHIFT Films</title>
//       </Helmet>

//       {/* Animation & Font Import Layer */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap');
        
//         @keyframes reveal-up {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         .reveal {
//           animation: reveal-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
//         }
//       `}</style>

//       {/* Fixed Sidebar Navigation (Desktop) / Top Nav (Mobile) */}
//       <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
//         <button
//           onClick={handleBack}
//           className="pointer-events-auto group flex items-center gap-4 font-sans text-[10px] tracking-[0.4em] uppercase text-neutral-400 hover:text-neutral-900 transition-all duration-500"
//         >
//           <span className="w-8 h-[1px] bg-neutral-300 group-hover:w-14 group-hover:bg-neutral-900 transition-all duration-500"></span>
//           Back
//         </button>
//       </nav>

//       <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        
//         {/* Editorial Header */}
//         <header className="mb-24 lg:mb-40 reveal">
//           <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-neutral-100 pb-12">
//             <div className="max-w-4xl">
//               <span className="inline-block font-sans text-[11px] tracking-[0.5em] uppercase text-[#bba98a] mb-6">
//                 Cinema Journal • Vol. 01
//               </span>
//               <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-neutral-900 tracking-tighter">
//                 {wedding.couple}
//               </h1>
//             </div>
//             <div className="lg:text-right">
//               <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400 mb-1">Destination</p>
//               <p className="font-serif text-2xl italic text-neutral-700">{wedding.location}</p>
//             </div>
//           </div>
//         </header>

//         {/* Narrative Split Layout */}
//         <section className="mb-32 grid lg:grid-cols-12 gap-12 items-start reveal" style={{ animationDelay: '0.2s' }}>
//           <div className="lg:col-span-4">
//             <div className="w-12 h-[1px] bg-[#bba98a] mb-8"></div>
//             <h3 className="font-sans text-[10px] tracking-[0.4em] uppercase text-neutral-400">The Narrative</h3>
//           </div>
//           <div className="lg:col-span-8 space-y-10">
//             {wedding.caption.map((para, i) => (
//               <p key={i} className="font-serif text-xl md:text-3xl leading-relaxed text-neutral-600 font-light italic">
//                 "{para}"
//               </p>
//             ))}
//           </div>
//         </section>

//         {/* Decorative Divider */}
//         <div className="flex items-center justify-center gap-6 mb-32 opacity-30">
//           <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-neutral-900"></div>
//           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
//           <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-neutral-900"></div>
//         </div>

//         {/* Masonry-Style Image Grid */}
//         <section className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
//           {wedding.images.map((src, index) => (
//             <div 
//               key={index} 
//               className="break-inside-avoid group relative overflow-hidden bg-neutral-100 rounded-[2px]"
//             >
//               <img
//                 src={src}
//                 alt={`${wedding.couple} - Moment ${index + 1}`}
//                 className="w-full h-auto object-cover transition-transform duration-[2s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-105"
//                 loading="lazy"
//               />
//               {/* Subtle hover overlay */}
//               <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//             </div>
//           ))}
//         </section>

//         {/* Footer Navigation */}
//         <footer className="mt-40 border-t border-neutral-100 pt-20 text-center">
//           <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-neutral-400 mb-8">End of Story</p>
//           <button 
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="font-serif italic text-2xl text-neutral-800 hover:text-[#bba98a] transition-colors duration-500"
//           >
//             Back to top
//           </button>
//         </footer>

//       </main>
//     </div>
//   );
// }

//below is image 2

// import React, { useEffect } from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// // Image loading logic remains consistent
// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// // ... (weddingData object remains the same) ...
// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img200.webp"), img("Amruta_Amey/img202.webp"), img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"), img("Amruta_Amey/img206.webp"), img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"), img("Amruta_Amey/img209.webp"), img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"), img("Amruta_Amey/img218.webp"), img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"), img("Amruta_Amey/img229.webp"), img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"), img("Amruta_Amey/img234.webp"), img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"), img("Amruta_Amey/img237.webp"), img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"), img("Amruta_Amey/img244.webp"), img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"), img("Amruta_Amey/img257.webp"), img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"), img("Amruta_Amey/img265.webp"), img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"), img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"), img("Abhimanyu_Manisha/img602.webp"), img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"), img("Abhimanyu_Manisha/img605.webp"), img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"), img("Abhimanyu_Manisha/img608.webp"), img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"), img("Abhimanyu_Manisha/img611.webp"), img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"), img("Abhimanyu_Manisha/img614.webp"), img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"), img("Abhimanyu_Manisha/img617.webp"), img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"), img("Abhimanyu_Manisha/img620.webp"), img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"), img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"), img("Bhakti_Sourabh/img309.webp"), img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"), img("Bhakti_Sourabh/img316.webp"), img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"), img("Bhakti_Sourabh/img319.webp"), img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"), img("Bhakti_Sourabh/img323.webp"), img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"), img("Bhakti_Sourabh/img328.webp"), img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"), img("Bhakti_Sourabh/img333.webp"), img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"), img("Bhakti_Sourabh/img338.webp"), img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"), img("Bhakti_Sourabh/img342.webp"), img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"), img("Bhakti_Sourabh/img346.webp"), img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"), img("Bhakti_Sourabh/img351.webp"), img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"), img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"), img("Rohan_Preksha/img502.webp"), img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"), img("Rohan_Preksha/img505.webp"), img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"), img("Rohan_Preksha/img508.webp"), img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"), img("Rohan_Preksha/img514.webp"), img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"), img("Rohan_Preksha/img519.webp"), img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"), img("Rohan_Preksha/img534.webp"), img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"), img("Rohan_Preksha/img540.webp"), img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"), img("Rohan_Preksha/img545.webp"), img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way.",
//       "What stood out was how effortlessly everything came together. Just two people surrounded by their families, celebrating in a way that felt familiar and comforting."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"), img("Chaitrali_Shubham/img402.webp"), img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"), img("Chaitrali_Shubham/img405.webp"), img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"), img("Chaitrali_Shubham/img409.webp"), img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"), img("Chaitrali_Shubham/img415.webp"), img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"), img("Chaitrali_Shubham/img421.webp"), img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"), img("Chaitrali_Shubham/img423.webp"), img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"), img("Chaitrali_Shubham/img428.webp"), img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"), img("Chaitrali_Shubham/img436.webp"), img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout.",
//       "What stood out was how naturally they moved through it all. It wasn't about the scale or the setup, but about how present they were with each other."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"), img("Aishwarya_Sanmay/img1.webp"), img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"), img("Aishwarya_Sanmay/img6.webp"), img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"), img("Aishwarya_Sanmay/img26.webp"), img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"), img("Aishwarya_Sanmay/img29.webp"), img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"), img("Aishwarya_Sanmay/img31.webp"), img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"), img("Aishwarya_Sanmay/img44.webp"), img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"), img("Aishwarya_Sanmay/img62.webp"), img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"), img("Aishwarya_Sanmay/img69.webp"), img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"), img("Aishwarya_Sanmay/img74.webp"), img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };
// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Scroll to top on load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   const handleBack = () => {
//     if (location.state?.from) navigate(location.state.from);
//     else navigate("/");
//   };

//   if (!wedding) {
//     return (
//       <div className="h-screen flex items-center justify-center bg-[#1a1a1a] text-white">
//         <Link to="/" className="font-serif italic text-2xl">Return to Archive</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#f4f1ee] min-h-screen selection:bg-[#bba98a] selection:text-white overflow-x-hidden">
//       <Helmet>
//         <title>{wedding.couple} — TILT SHIFT Films</title>
//       </Helmet>

//       {/* Advanced Global Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Jost:wght@200;300;400&display=swap');
        
//         .text-vertical { writing-mode: vertical-rl; }
        
//         .img-reveal {
//           clip-path: inset(100% 0 0 0);
//           animation: clip-reveal 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
//         }

//         @keyframes clip-reveal {
//           to { clip-path: inset(0% 0 0 0); }
//         }

//         .grain {
//           position: fixed; top: 0; left: 0; width: 100%; height: 100%;
//           background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
//           opacity: 0.04; pointer-events: none; z-index: 50;
//         }
//       `}</style>

//       <div className="grain" />

//       {/* Minimalist Top Navigation */}
//       <nav className="fixed top-0 left-0 w-full z-[60] mix-blend-difference flex justify-between p-6 md:p-10 items-center">
//         <button
//           onClick={handleBack}
//           className="group flex items-center gap-3 font-sans text-[9px] tracking-[0.5em] uppercase text-white/70 hover:text-white transition-all"
//         >
//           <span className="w-6 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-700"></span>
//           Index
//         </button>
//         <div className="font-sans text-[9px] tracking-[0.5em] uppercase text-white/50">
//           Tilt Shift © 2026
//         </div>
//       </nav>

//       <main className="relative">
//         {/* HERO SECTION: Large Split Text */}
//         <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative mb-32">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
//             <h2 className="font-serif text-[25vw] leading-none whitespace-nowrap uppercase tracking-tighter">
//               {wedding.couple.split(" & ")[0]}
//             </h2>
//           </div>

//           <div className="relative z-10">
//             <p className="font-sans text-[11px] tracking-[0.6em] uppercase text-[#bba98a] mb-8 overflow-hidden">
//               <span className="inline-block animate-bounce-subtle">Memories in Motion</span>
//             </p>
            
//             <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.8] text-neutral-900 tracking-tighter flex flex-col">
//               <span className="reveal inline-block">{wedding.couple.split(" & ")[0]}</span>
//               <span className="reveal inline-block italic font-light ml-[10vw] md:ml-[20vw] text-[#bba98a]">
//                 & {wedding.couple.split(" & ")[1]}
//               </span>
//             </h1>
//           </div>

//           <div className="absolute bottom-10 right-6 md:right-20 flex items-center gap-4 reveal" style={{animationDelay: '0.5s'}}>
//              <div className="text-right">
//                 <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-neutral-400">Captured at</p>
//                 <p className="font-serif italic text-xl text-neutral-800">{wedding.location}</p>
//              </div>
//              <div className="w-[1px] h-12 bg-neutral-200"></div>
//           </div>
//         </section>

//         {/* NARRATIVE: The Book Look */}
//         <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 mb-60">
//           <div className="md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
//             <div className="relative">
//               <span className="absolute -left-12 top-2 text-vertical font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-300 hidden md:block">
//                 Description
//               </span>
//               <div className="space-y-12">
//                 {wedding.caption.map((para, i) => (
//                   <p key={i} className="font-serif text-2xl md:text-4xl leading-[1.4] text-neutral-700 font-light last:text-[#bba98a]">
//                     {para}
//                   </p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* GALLERY: The Asymmetric Journal */}
//         <section className="max-w-[1800px] mx-auto px-4 md:px-10 pb-40">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-y-40 items-center">
//             {wedding.images.map((src, index) => {
//               // Create an asymmetric rhythm: some span 4 cols, some 6, some 8
//               const spans = ["md:col-span-7", "md:col-start-7 md:col-span-5", "md:col-start-2 md:col-span-10", "md:col-span-6", "md:col-start-8 md:col-span-4"];
//               const span = spans[index % spans.length];
              
//               return (
//                 <div key={index} className={`${span} group relative`}>
//                   <div className="overflow-hidden bg-neutral-200 img-reveal" style={{animationDelay: `${(index % 3) * 0.2}s`}}>
//                     <img
//                       src={src}
//                       alt=""
//                       className="w-full h-auto object-cover scale-110 group-hover:scale-100 transition-transform duration-[2.5s] ease-out"
//                     />
//                   </div>
//                   {/* Image counter */}
//                   <span className="absolute -bottom-8 left-0 font-sans text-[10px] tracking-widest text-neutral-300">
//                     {String(index + 1).padStart(2, '0')} / {wedding.images.length}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* FINAL CALL: Cinematic Outro */}
//         <footer className="bg-[#1a1714] text-[#f4f1ee] pt-40 pb-20 px-6 overflow-hidden relative">
//           <div className="max-w-7xl mx-auto relative z-10 text-center">
//             <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10">End of Volume</p>
//             <h2 className="font-serif text-6xl md:text-[10vw] italic leading-none mb-20 opacity-90">
//               The Archive
//             </h2>
            
//             <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/10 pt-10">
//               <button 
//                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 className="font-sans text-[10px] tracking-[0.4em] uppercase hover:text-[#bba98a] transition-colors"
//               >
//                 Return to Top
//               </button>
//               <p className="font-serif italic text-lg opacity-40">Created by Tilt Shift Films</p>
//               <Link to="/" className="font-sans text-[10px] tracking-[0.4em] uppercase hover:text-[#bba98a] transition-colors">
//                 Next Story →
//               </Link>
//             </div>
//           </div>
          
//           {/* Large background text in footer */}
//           <div className="absolute -bottom-10 left-0 w-full text-center opacity-[0.02] pointer-events-none select-none">
//              <span className="font-serif text-[30vw] leading-none uppercase italic">Cinema</span>
//           </div>
//         </footer>
//       </main>
//     </div>
//   );
// }

//below is image 3

// import React, { useEffect } from "react";
// import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const allImages = import.meta.glob("../assets/**/*.{webp,jpeg,png,webp}", { eager: true });
// const img = (path) => allImages[`../assets/${path}`]?.default;

// // ... (weddingData stays the same) ...
// const weddingData = {
//   "amruta-amey": {
//     couple: "Amruta & Amey",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Amruta & Amey's wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
//       "From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
//     ],
//     images: [
//       img("Amruta_Amey/img200.webp"), img("Amruta_Amey/img202.webp"), img("Amruta_Amey/img203.webp"),
//       img("Amruta_Amey/img204.webp"), img("Amruta_Amey/img206.webp"), img("Amruta_Amey/img207.webp"),
//       img("Amruta_Amey/img208.webp"), img("Amruta_Amey/img209.webp"), img("Amruta_Amey/img213.webp"),
//       img("Amruta_Amey/img216.webp"), img("Amruta_Amey/img218.webp"), img("Amruta_Amey/img221.webp"),
//       img("Amruta_Amey/img225.webp"), img("Amruta_Amey/img229.webp"), img("Amruta_Amey/img232.webp"),
//       img("Amruta_Amey/img233.webp"), img("Amruta_Amey/img234.webp"), img("Amruta_Amey/img235.webp"),
//       img("Amruta_Amey/img239.webp"), img("Amruta_Amey/img237.webp"), img("Amruta_Amey/img241.webp"),
//       img("Amruta_Amey/img243.webp"), img("Amruta_Amey/img244.webp"), img("Amruta_Amey/img252.webp"),
//       img("Amruta_Amey/img254.webp"), img("Amruta_Amey/img257.webp"), img("Amruta_Amey/img258.webp"),
//       img("Amruta_Amey/img266.webp"), img("Amruta_Amey/img265.webp"), img("Amruta_Amey/img262.webp"),
//       img("Amruta_Amey/img261.webp"), img("Amruta_Amey/img270.webp"),
//     ]
//   },
//   "abhimanyu-manisha": {
//     couple: "Abhimanyu & Manisha",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Abhimanyu and Manisha's wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second.",
//       "When the ceremony began everything slowed down and fell calm and meaningful. In between it all they stayed present sharing real moments with their people. It was warm honest and truly a reflection of them."
//     ],
//     images: [
//       img("Abhimanyu_Manisha/img601.webp"), img("Abhimanyu_Manisha/img602.webp"), img("Abhimanyu_Manisha/img603.webp"),
//       img("Abhimanyu_Manisha/img604.webp"), img("Abhimanyu_Manisha/img605.webp"), img("Abhimanyu_Manisha/img606.webp"),
//       img("Abhimanyu_Manisha/img607.webp"), img("Abhimanyu_Manisha/img608.webp"), img("Abhimanyu_Manisha/img609.webp"),
//       img("Abhimanyu_Manisha/img610.webp"), img("Abhimanyu_Manisha/img611.webp"), img("Abhimanyu_Manisha/img612.webp"),
//       img("Abhimanyu_Manisha/img613.webp"), img("Abhimanyu_Manisha/img614.webp"), img("Abhimanyu_Manisha/img615.webp"),
//       img("Abhimanyu_Manisha/img616.webp"), img("Abhimanyu_Manisha/img617.webp"), img("Abhimanyu_Manisha/img618.webp"),
//       img("Abhimanyu_Manisha/img624.webp"), img("Abhimanyu_Manisha/img620.webp"), img("Abhimanyu_Manisha/img621.webp"),
//       img("Abhimanyu_Manisha/img622.webp"), img("Abhimanyu_Manisha/img623.webp"),
//     ]
//   },
//   "bhakti-sourabh": {
//     couple: "Bhakti & Sourabh",
//     location: "Jodhpur, Rajasthan",
//     caption: [
//       "Bhakti and Sourabh's wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings.",
//       "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people."
//     ],
//     images: [
//       img("Bhakti_Sourabh/img304.webp"), img("Bhakti_Sourabh/img309.webp"), img("Bhakti_Sourabh/img310.webp"),
//       img("Bhakti_Sourabh/img314.webp"), img("Bhakti_Sourabh/img316.webp"), img("Bhakti_Sourabh/img317.webp"),
//       img("Bhakti_Sourabh/img318.webp"), img("Bhakti_Sourabh/img319.webp"), img("Bhakti_Sourabh/img321.webp"),
//       img("Bhakti_Sourabh/img322.webp"), img("Bhakti_Sourabh/img323.webp"), img("Bhakti_Sourabh/img324.webp"),
//       img("Bhakti_Sourabh/img327.webp"), img("Bhakti_Sourabh/img328.webp"), img("Bhakti_Sourabh/img330.webp"),
//       img("Bhakti_Sourabh/img332.webp"), img("Bhakti_Sourabh/img333.webp"), img("Bhakti_Sourabh/img334.webp"),
//       img("Bhakti_Sourabh/img335.webp"), img("Bhakti_Sourabh/img338.webp"), img("Bhakti_Sourabh/img339.webp"),
//       img("Bhakti_Sourabh/img340.webp"), img("Bhakti_Sourabh/img342.webp"), img("Bhakti_Sourabh/img344.webp"),
//       img("Bhakti_Sourabh/img345.webp"), img("Bhakti_Sourabh/img346.webp"), img("Bhakti_Sourabh/img349.webp"),
//       img("Bhakti_Sourabh/img350.webp"), img("Bhakti_Sourabh/img351.webp"), img("Bhakti_Sourabh/img353.webp"),
//       img("Bhakti_Sourabh/img357.webp"), img("Bhakti_Sourabh/img359.webp"),
//     ]
//   },
//   "Rohan-preksha": {
//     couple: "Rohan & Preksha",
//     location: "Pushkar, Rajasthan",
//     caption: [
//       "Rohan and Preksha's wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner.",
//       "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them."
//     ],
//     images: [
//       img("Rohan_Preksha/img501.webp"), img("Rohan_Preksha/img502.webp"), img("Rohan_Preksha/img503.webp"),
//       img("Rohan_Preksha/img504.webp"), img("Rohan_Preksha/img505.webp"), img("Rohan_Preksha/img506.webp"),
//       img("Rohan_Preksha/img507.webp"), img("Rohan_Preksha/img508.webp"), img("Rohan_Preksha/img509.webp"),
//       img("Rohan_Preksha/img511.webp"), img("Rohan_Preksha/img514.webp"), img("Rohan_Preksha/img515.webp"),
//       img("Rohan_Preksha/img517.webp"), img("Rohan_Preksha/img519.webp"), img("Rohan_Preksha/img520.webp"),
//       img("Rohan_Preksha/img521.webp"), img("Rohan_Preksha/img534.webp"), img("Rohan_Preksha/img533.webp"),
//       img("Rohan_Preksha/img536.webp"), img("Rohan_Preksha/img540.webp"), img("Rohan_Preksha/img543.webp"),
//       img("Rohan_Preksha/img544.webp"), img("Rohan_Preksha/img545.webp"), img("Rohan_Preksha/img546.webp"),
//     ]
//   },
//   "Chaitrali_Shubham": {
//     couple: "Chaitrali & Shubham",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Chaitrali and Shubham's wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way.",
//       "What stood out was how effortlessly everything came together. Just two people surrounded by their families, celebrating in a way that felt familiar and comforting."
//     ],
//     images: [
//       img("Chaitrali_Shubham/img401.webp"), img("Chaitrali_Shubham/img402.webp"), img("Chaitrali_Shubham/img403.webp"),
//       img("Chaitrali_Shubham/img404.webp"), img("Chaitrali_Shubham/img405.webp"), img("Chaitrali_Shubham/img407.webp"),
//       img("Chaitrali_Shubham/img408.webp"), img("Chaitrali_Shubham/img409.webp"), img("Chaitrali_Shubham/img411.webp"),
//       img("Chaitrali_Shubham/img412.webp"), img("Chaitrali_Shubham/img415.webp"), img("Chaitrali_Shubham/img416.webp"),
//       img("Chaitrali_Shubham/img418.webp"), img("Chaitrali_Shubham/img421.webp"), img("Chaitrali_Shubham/img422.webp"),
//       img("Chaitrali_Shubham/img420.webp"), img("Chaitrali_Shubham/img423.webp"), img("Chaitrali_Shubham/img425.webp"),
//       img("Chaitrali_Shubham/img427.webp"), img("Chaitrali_Shubham/img428.webp"), img("Chaitrali_Shubham/img432.webp"),
//       img("Chaitrali_Shubham/img434.webp"), img("Chaitrali_Shubham/img436.webp"), img("Chaitrali_Shubham/img438.webp"),
//     ]
//   },
//   "Aishwarya_Sanmay": {
//     couple: "Aishwarya & Sanmay",
//     location: "Pune, Maharashtra",
//     caption: [
//       "Aishwarya and Sanmay's wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout.",
//       "What stood out was how naturally they moved through it all. It wasn't about the scale or the setup, but about how present they were with each other."
//     ],
//     images: [
//       img("Aishwarya_Sanmay/img0.webp"), img("Aishwarya_Sanmay/img1.webp"), img("Aishwarya_Sanmay/img3.webp"),
//       img("Aishwarya_Sanmay/img5.webp"), img("Aishwarya_Sanmay/img6.webp"), img("Aishwarya_Sanmay/img15.webp"),
//       img("Aishwarya_Sanmay/img20.webp"), img("Aishwarya_Sanmay/img26.webp"), img("Aishwarya_Sanmay/img17.webp"),
//       img("Aishwarya_Sanmay/img27.webp"), img("Aishwarya_Sanmay/img29.webp"), img("Aishwarya_Sanmay/img23.webp"),
//       img("Aishwarya_Sanmay/img28.webp"), img("Aishwarya_Sanmay/img31.webp"), img("Aishwarya_Sanmay/img35.webp"),
//       img("Aishwarya_Sanmay/img39.webp"), img("Aishwarya_Sanmay/img44.webp"), img("Aishwarya_Sanmay/img48.webp"),
//       img("Aishwarya_Sanmay/img54.webp"), img("Aishwarya_Sanmay/img62.webp"), img("Aishwarya_Sanmay/img64.webp"),
//       img("Aishwarya_Sanmay/img67.webp"), img("Aishwarya_Sanmay/img69.webp"), img("Aishwarya_Sanmay/img70.webp"),
//       img("Aishwarya_Sanmay/img73.webp"), img("Aishwarya_Sanmay/img74.webp"), img("Aishwarya_Sanmay/img80.webp"),
//       img("Aishwarya_Sanmay/img82.webp"),
//     ]
//   }
// };

// export default function WeddingPage() {
//   const { slug } = useParams();
//   const wedding = weddingData[slug];
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   const handleBack = () => {
//     if (location.state?.from) navigate(location.state.from);
//     else navigate("/");
//   };

//   if (!wedding) return null;

//   return (
//     <div className="bg-[#f9f9f9] min-h-screen font-light selection:bg-neutral-200">
//       <Helmet>
//         <title>{wedding.couple} — TILT SHIFT</title>
//       </Helmet>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Montserrat:wght@200;300;400&display=swap');
        
//         .font-serif { font-family: 'Cormorant Garamond', serif; }
//         .font-sans { font-family: 'Montserrat', sans-serif; }

//         .reveal-frame {
//           animation: frame-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }

//         @keyframes frame-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       {/* Persistent Back Navigation */}
//       <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-start">
//         <button 
//           onClick={handleBack}
//           className="group flex items-center gap-4 font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400 hover:text-neutral-900 transition-all duration-500"
//         >
//           <span className="w-6 h-[1px] bg-neutral-300 group-hover:w-10 group-hover:bg-neutral-900 transition-all duration-700"></span>
//           Back
//         </button>
//       </nav>

//       <main className="max-w-6xl mx-auto px-6 pt-32 pb-40">
        
//         {/* Header Section: Compact & Sophisticated */}
//         <header className="text-center mb-32 reveal-frame">
//           <span className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#bba98a] block mb-6">
//             Wedding Collection
//           </span>
//           <h1 className="font-serif text-5xl md:text-7xl text-neutral-800 mb-4 tracking-tight">
//             {wedding.couple}
//           </h1>
//           <p className="font-serif italic text-xl text-neutral-500">{wedding.location}</p>
//           <div className="mt-12 flex justify-center">
//             <div className="w-[1px] h-16 bg-neutral-200"></div>
//           </div>
//         </header>

//         {/* Hero Image: Centered & Framed (Not Full Screen) */}
//         <section className="mb-40 flex justify-center reveal-frame" style={{ animationDelay: '0.2s' }}>
//           <div className="w-full max-w-4xl p-4 bg-white shadow-sm border border-neutral-100">
//             <img 
//               src={wedding.images[0]} 
//               alt="Opening Moment" 
//               className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
//             />
//           </div>
//         </section>

//         {/* Narrative Section */}
//         <section className="max-w-2xl mx-auto mb-40 text-center px-4 reveal-frame" style={{ animationDelay: '0.4s' }}>
//           <div className="space-y-8">
//             {wedding.caption.map((para, i) => (
//               <p key={i} className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-600 font-light italic">
//                 {para}
//               </p>
//             ))}
//           </div>
//         </section>

//         {/* Small Tiled Gallery: Controlled Sizes */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
//           {wedding.images.slice(1).map((src, index) => {
//             // This creates a pattern where images aren't all the same size
//             const isSmall = index % 3 === 0; 
            
//             return (
//               <div 
//                 key={index} 
//                 className={`flex flex-col ${isSmall ? 'md:px-20' : 'px-0'} group`}
//               >
//                 <div className="relative overflow-hidden bg-white p-3 shadow-sm border border-neutral-100 transition-transform duration-700 hover:-translate-y-2">
//                   <img 
//                     src={src} 
//                     className="w-full h-auto object-cover" 
//                     alt={`Moment ${index + 2}`} 
//                   />
//                 </div>
//                 <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-neutral-300">
//                     Scene {String(index + 2).padStart(2, '0')}
//                   </span>
//                   <div className="h-[1px] w-8 bg-neutral-100"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </section>

//         {/* Refined Footer */}
//         <footer className="mt-60 pt-20 border-t border-neutral-100 text-center">
//           <h2 className="font-serif italic text-3xl text-neutral-800 mb-10">Fin.</h2>
//           <div className="flex justify-center gap-12">
//             <button 
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//               className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
//             >
//               Scroll Top
//             </button>
//             <Link 
//               to="/" 
//               className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
//             >
//               Archive
//             </Link>
//           </div>
//         </footer>

//       </main>
//     </div>
//   );
// }