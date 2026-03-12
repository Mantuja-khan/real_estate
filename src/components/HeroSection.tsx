import { useState, useEffect } from "react";
import entryImg from "@/assets/entry.jpeg";
import hero1Img from "@/assets/HERO_1.png";

const images = [hero1Img, entryImg];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white w-full overflow-hidden relative">
      <div
        className="w-full h-auto flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, idx) => (
          <div key={idx} className="w-full h-[180px] md:h-[400px] lg:h-[500px] bg-white flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img
              src={imgSrc}
              alt={`Haryana Deen Dayal Jan awas Yojna View ${idx + 1}`}
              className="w-full h-full object-cover object-top transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://i.pinimg.com/736x/1d/af/f8/1daff8a998584f1cd7910d01c0cf42c8.jpg';
              }}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
