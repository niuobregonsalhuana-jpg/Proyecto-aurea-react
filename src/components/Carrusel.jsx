import React, { useState, useEffect } from "react";

const Carousel = ({ images = [], interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slide);
  }, [images.length, interval]);

  return (
    <div className="bg-pink-50 py-8 px-6 sm:px-12 lg:px-20">
      {/* Contenedor del carrusel */}
      <div className="overflow-hidden relative w-full max-w-7xl mx-auto rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[300px] md:h-[360px] lg:h-[400px] flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Botones de navegación */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-pink-500 scale-125" : "bg-white/70 hover:bg-pink-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
