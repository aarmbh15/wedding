// src/pages/Home.jsx
import { Helmet } from "react-helmet-async";
import HeroVideoSlider from '../components/HeroVideoSlider.jsx';
import ImageSlider from '../components/ImageSlider.jsx';


export default function Home() {
  return (
    <>
      <Helmet>
        {/* <title>Paramveer & [Partner] | Our Wedding - February 19, 2026</title> */}
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
<section className="py-24 md:py-36 bg-gradient-to-b from-rose-50 via-white to-rose-50 relative overflow-hidden">

  {/* Soft Golden Glow Background */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-200 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* 🖼️ Wedding Image */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-yellow-200 via-rose-200 to-yellow-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>

        <img
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
          alt="Wedding Photography"
          className="relative rounded-3xl shadow-2xl object-cover w-full h-[520px] transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* 💍 Business Content */}
      <div className="text-center md:text-left">

        <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 tracking-wide mb-6">
          Capturing Timeless Celebrations
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 font-light italic mb-6 tracking-wide">
          Cinematic Wedding Photography & Films
        </p>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-10">
          From intimate haldi ceremonies to grand wedding receptions, 
          we preserve every emotion, detail, and unforgettable moment 
          through artistic storytelling and breathtaking visuals.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
          <a
            href="/portfolio"
            className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
          >
            View Portfolio →
          </a>

          <a
            href="/contact"
            className="px-10 py-4 border border-gray-800 text-gray-800 rounded-full text-lg hover:bg-gray-900 hover:text-white transition-all duration-500"
          >
            Book Your Date
          </a>
        </div>

      </div>

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
      <section className="py-24 bg-gradient-to-br from-green-50 to-rose-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-serif text-center text-gray-800 mb-16">
      Our Signature Celebrations
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img1.jpg"
          alt="Haldi Ceremony"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Haldi Ceremony</h3>
          <p className="text-sm opacity-90">Vibrant • Joyful • Traditional</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img2.jpg"
          alt="Engagement"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Engagement</h3>
          <p className="text-sm opacity-90">Elegant • Emotional • Timeless</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img3.jpg"
          alt="Wedding Ceremony"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Wedding Ceremony</h3>
          <p className="text-sm opacity-90">Sacred • Grand • Emotional</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img4.jpg"
          alt="Reception"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Reception</h3>
          <p className="text-sm opacity-90">Glamorous • Celebratory • Magical</p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img5.jpg"
          alt="Pre-Wedding Shoot"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Pre-Wedding Shoot</h3>
          <p className="text-sm opacity-90">Romantic • Cinematic • Artistic</p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="relative group overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/src/assets/img6.jpg"
          alt="Candid Moments"
          className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-semibold">Candid Moments</h3>
          <p className="text-sm opacity-90">Natural • Raw • Beautiful</p>
        </div>
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