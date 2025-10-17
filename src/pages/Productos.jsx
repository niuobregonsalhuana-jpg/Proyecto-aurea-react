
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
    <div className="overflow-hidden relative w-full max-w-3xl mx-auto rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Botones de navegación opcionales */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

function Productos () {
return (
<div className="letter">
      <b>Los Mejores Productos de Aurea para ti:</b>
    </div> 
)
}

export default Productos;


