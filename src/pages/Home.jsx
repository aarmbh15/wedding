// src/pages/Home.jsx
import { Helmet } from "react-helmet-async";
import HeroVideoSlider from '../components/HeroVideoSlider.jsx';
import ImageSlider from '../components/ImageSlider.jsx';


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Paramveer & [Partner] | Our Wedding - February 19, 2026</title>
        <meta
          name="description"
          content="Celebrate love with Paramveer & [Partner] on February 19, 2026 in Pune/Mumbai. View stunning photos, videos, venue details, our story, and RSVP today."
        />
        <meta
          name="keywords"
          content="wedding, indian wedding, Paramveer wedding, love story, Mumbai wedding, Pune wedding, marriage celebration"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Paramveer & [Partner] Wedding Celebration" />
        <meta
          property="og:description"
          content="Join us on February 19, 2026 for a day of love, traditions, and joy."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=1200" /> {/* Replace with your hero image */}
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Full-screen Hero Video Slider with overlay animation */}
      <HeroVideoSlider />

      {/* Romantic Couple Intro - Fade in & scale animation */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-rose-50 via-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.08),transparent_50%)]"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-900 tracking-wider mb-6 drop-shadow-lg">
            Paramveer <span className="text-gold mx-4">&</span> [Partner Name]
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light italic mb-8 tracking-wide">
            February 19, 2026 • Pune / Mumbai
          </p>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            From first glance to forever — we're beyond excited to share our most special day with the people we love most.
          </p>
          <div className="mt-12">
            <a
              href="/rsvp" // or link to contact/form
              className="inline-block px-12 py-5 bg-gold text-white font-medium text-lg rounded-full hover:bg-yellow-600 transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              RSVP Now →
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery Slider - Attractive with hover zoom */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center text-gray-800 mb-12 animate-fade-in">
            Our Beautiful Moments
          </h2>
          <ImageSlider />
        </div>
      </section>

      {/* Wedding Details Cards - Hover scale + shadow lift */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center text-gray-800 mb-16 animate-fade-in-up">
            The Celebration Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-xl p-10 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="text-6xl mb-6 group-hover:animate-bounce">📍</div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Venue</h3>
              <p className="text-xl text-gray-700">Elegant Waterfront Garden, Pune</p>
              <p className="text-gray-600 mt-3">Surrounded by nature, lights & love</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="text-6xl mb-6 group-hover:animate-bounce">📅</div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Date</h3>
              <p className="text-2xl text-gray-700 font-medium">February 19, 2026</p>
              <p className="text-gray-600 mt-3">A day we'll cherish forever</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <div className="text-6xl mb-6 group-hover:animate-bounce">🕒</div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Time</h3>
              <p className="text-2xl text-gray-700 font-medium">1:00 PM onwards</p>
              <p className="text-gray-600 mt-3">Ceremony • Reception • Dinner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Highlights - Slide in animation */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center text-gray-800 mb-16 animate-fade-in">
            A Day to Remember
          </h2>
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-10 animate-slide-in-left">
              <div className="md:w-1/3">
                <img
                  src="http://www.marriagecolours.com/wp-content/uploads/2025/10/Aishwarya-Shanthan-Wedding-Shelter-Resort-6.jpg"
                  alt="Wedding venue at sunset with floral mandap"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover transform transition duration-700 hover:scale-105"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-gold mb-4">The Ceremony</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under a floral mandap with golden hour light and ocean breeze — our vows exchanged with family blessings.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-10 animate-slide-in-right">
            <div className="py-10 text-center">
  <h3 className="text-3xl mb-4">Test Image (should load instantly)</h3>
  <img
    src="https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?w=800"
    alt="Test wedding couple"
    className="mx-auto max-w-md rounded-xl shadow-2xl"
  />
</div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-gold mb-4">Reception & Celebration</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fairy lights, live music, dancing, and heartfelt toasts — an evening filled with joy and togetherness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick RSVP Teaser */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-rose-100 text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-gray-700 mb-8">
            Your presence means the world to us. Let us know if you'll join the celebration!
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-white font-medium rounded-full hover:bg-yellow-600 transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            Send Your RSVP →
          </a>
        </div>
      </section>
    </>
  );
}