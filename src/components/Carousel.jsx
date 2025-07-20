import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from "../context/Context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { products } = useContext(ShopContext);
  const items = products.filter((product) => product.slider === true);

  const sliderBG = (category) => {
    if (category === "Men") return "#a29bfe";
    if (category === "Women") return "#fd79a8";
    if (category === "Kids") return "#fab1a0";
    return "#fdcb6e";
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (items.length === 0) return null;

  return (
    <div className="flex justify-center md:pt-30 md:pb-12 pb-2 pt-20 px-4 md:px-0 relative mx-auto overflow-hidden rounded-lg shadow-xl bg-[#fdcb6e]">
      <div key={currentIndex}
           className="flex flex-col w-full md:flex-row max-w-6xl transition-all duration-700 ease-in-out transform scale-100 opacity-100">
        
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-48 md:h-96 transition-all duration-700 ease-in-out transform">
          <img 
            src={items[currentIndex].image[0]} 
            alt={items[currentIndex].name} 
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        {/* Right side - Content */}
        <div
          className="w-full md:w-1/2 px-6 py-2 sm:px-12 md:p-8 flex flex-col justify-center rounded-b-lg md:rounded-r-lg md:rounded-bl-none transition-all duration-700 ease-in-out"
          style={{ backgroundColor: sliderBG(items[currentIndex].category) }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
            {items[currentIndex].name}
          </h2>
          <p className="text-gray-50 h-12 sm:h-full overflow-hidden text-sm sm:text-base mb-2 sm:mb-6 leading-relaxed sm:block">
            {items[currentIndex].description}
          </p>
          <Link
              to={`/product/${items[currentIndex]._id}`}
              className="inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 text-sm font-semibold rounded-md shadow-md transition duration-300"
            >View Product</Link>

          {/* Navigation dots */}
          <div className="flex justify-center mt-3 sm:mt-8 space-x-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-1 h-1 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 translate-y-6 bg-white/70 hover:bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 translate-y-6 bg-white/70 hover:bg-white/90 backdrop-blur-md border border-gray-200 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition"
        >
          <ChevronRight size={20} />
        </button>
    </div>
  );
};

export default Carousel;
