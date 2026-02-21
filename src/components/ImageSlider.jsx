// src/components/ImageSlider.jsx

import img1 from '../assets/img8.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.webp';
import img6 from '../assets/img6.webp';

export default function ImageSlider() {
<<<<<<< Updated upstream
  const images = [
    '/src/assets/1.jpg',
    '/src/assets/2.jpg',
    '/src/assets/3.jpg',
    '/src/assets/4.jpg',
    '/src/assets/5.jpg',
    '/src/assets/2.jpg',
    '/src/assets/3.jpg',
    '/src/assets/4.jpg',
    '/src/assets/5.jpg',
    '/src/assets/11.jpg',
    '/src/assets/22.jpg',
    '/src/assets/5.jpg',
    // Add more paths to your real wedding photos
  ];
  
=======
  const images = [img1, img2, img3, img4, img5, img6];
>>>>>>> Stashed changes

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">

      {/* Animation CSS Inside Component */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
      </style>

      {/* Left Gradient Fade */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

      {/* Right Gradient Fade */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Row */}
      <div className="flex gap-8 animate-marquee hover:[animation-play-state:paused]">
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[360px] rounded-3xl overflow-hidden shadow-xl flex-shrink-0"
          >
            <img
              src={img}
              alt={`Wedding moment ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}