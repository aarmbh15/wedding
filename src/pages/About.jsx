// src/pages/About.jsx
// Correct (react-helmet-async):
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Helmet>
        <title>Our Wedding - About Us</title>
        <meta name="description" content="Learn more about our story and journey together." />
        <meta name="keywords" content="about us, wedding story, couple" />
      </Helmet>
      <h1 className="text-5xl font-bold text-center text-green mb-8">About Us</h1>
      <p className="text-lg mb-4">We met in Mumbai and fell in love instantly. Our journey has been filled with adventures and now we're tying the knot!</p>
      <img src="/src/assets/img1.jpg" alt="Couple photo" className="mx-auto h-96 object-cover" loading="lazy" />
    </div>
  );
}