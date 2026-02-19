// src/components/HeroVideoSlider.jsx
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function HeroVideoSlider() {
  const videos = [
    '/src/assets/video1.mp4',
    '/src/assets/video2.mp4',
  ];

  return (
    <section className="relative h-screen">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={5000} transitionTime={1000}>
        {videos.map((video, index) => (
          <div key={index} className="h-screen">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover" loading="lazy">
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <h1 className="text-white text-6xl font-bold text-center">Our Wedding Journey</h1>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}