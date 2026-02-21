// src/components/ImageSlider.jsx
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function ImageSlider() {
  const images = [
    '/src/assets/1.jpg',
    '/src/assets/1.jpg',
    '/src/assets/1.jpg',
  ];

  return (
    <section className="py-10 bg-amber-50">
      <h2 className="text-center text-4xl font-bold text-gold mb-6">Memories Gallery</h2>
      <Carousel autoPlay infiniteLoop showThumbs={true} className="max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Wedding memory ${index + 1}`} className="object-cover h-96" loading="lazy" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}