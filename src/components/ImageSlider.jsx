// src/components/ImageSlider.jsx
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ImageSlider() {
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
  

  return (
    <section className="py-10 bg-amber-50">
      <h2 className="text-center text-4xl font-bold text-gold mb-6">Our Beautiful Moments</h2>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={true} 
        showStatus={false}
        interval={4000}
        className="max-w-5xl mx-auto"
      >
        {images.map((img, index) => (
          <div key={index}>
            <img 
              src={img} 
              alt={`Wedding memory ${index + 1}`} 
              className="object-cover h-96 w-full" 
              loading="lazy" 
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}