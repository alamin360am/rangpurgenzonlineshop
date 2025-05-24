import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from "../context/Context";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const {products} = useContext(ShopContext);
  const items = products.filter((product) => product.slider == true);

  // Auto-advance the carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(interval);
  });

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-96">
          <img 
            src={items[currentIndex].image[0]} 
            alt={items[currentIndex].name} 
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-gray-50 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {items[currentIndex].name}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {items[currentIndex].description}
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 self-start">
            Shop Now
          </button>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition duration-300"
      >
        <ChevronLeft />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition duration-300"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
