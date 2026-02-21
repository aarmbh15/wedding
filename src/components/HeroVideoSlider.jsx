// src/components/HeroVideoSlider.jsx
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

export default function HeroVideoSlider() {
  const videos = [video1, video2];

  return (
    // Uses 100svh to prevent the "jumping" effect when mobile browser address bars hide/appear
    <section className="relative w-full h-[100svh] overflow-hidden bg-neutral-900">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={6000}
        transitionTime={1000}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={false}
        // Tailwind class to ensure the carousel container fills the height
        className="h-full"
      >
        {videos.map((video, index) => (
          <div key={index} className="relative w-full h-[100svh]">
            
            {/* 1. Video Layer: object-cover ensures it fills the screen like a background-image */}
            <div className="absolute inset-0 w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              >
                <source src={video} type="video/mp4" />
              </video>
            </div>

            {/* 2. Overlay Layer: Gradient provides better text contrast than a flat color */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/60 flex items-center justify-center px-6">
              
              {/* 3. Content Box: Max-width prevents text from stretching too wide on Ultrawide monitors */}
              <div className="text-center w-full max-w-[90%] md:max-w-3xl lg:max-w-5xl">
                
                <h1 className="
                  text-white font-serif font-light tracking-tight
                  text-3xl       /* Mobile */
                  xs:text-4xl    /* Small phones */
                  sm:text-5xl    /* Tablets */
                  md:text-6xl    /* Laptops */
                  lg:text-7xl    /* Desktops */
                  xl:text-8xl    /* 4K Screens */
                  leading-[1.1]
                  drop-shadow-2xl
                ">
                  Our Wedding Journey
                </h1>

                {/* Decorative Element - hidden on very small screens to save space */}
                <div className="hidden xs:block w-16 md:w-24 h-px bg-white/40 mx-auto my-6 md:my-8"></div>

                <p className="
                  text-white/90 font-light tracking-[0.15em] uppercase
                  text-[10px]    /* Tiny mobile */
                  sm:text-xs     /* Mobile */
                  md:text-sm     /* Tablet */
                  lg:text-lg     /* Desktop */
                  mt-4 xs:mt-0
                ">
                  A celebration of love, laughter & forever
                </p>

                {/* Responsive Button */}
                <div className="mt-8 md:mt-12">
                   <button className="
                     px-6 py-2 md:px-10 md:py-4 
                     border border-white/80 text-white 
                     text-[10px] md:text-xs tracking-[0.2em] uppercase
                     hover:bg-white hover:text-black 
                     transition-all duration-500 ease-in-out
                   ">
                     Our Story
                   </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Carousel>
      
      {/* Scroll Indicator - common in Hero sections */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}