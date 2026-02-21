// src/components/HeroVideoSlider.jsx
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export default function HeroVideoSlider() {
  const videos = [video1, video2];

  return (
    <section className="relative h-screen overflow-hidden ">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
        transitionTime={1000}
      >
        {videos.map((video, index) => (
          <div key={index} className="relative h-screen mt-8" >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-5xl md:text-7xl font-serif font-light text-center px-6">
                Our Wedding Journey
              </h1>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}