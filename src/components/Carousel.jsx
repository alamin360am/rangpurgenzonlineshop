import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Context";
// import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
    const {products} = useContext(ShopContext);
    const [current, setCurrent] = useState(0);
    
    const sliderProduct = products.filter((product) => product.slider == true);    
    const next = ()=> setCurrent((current + 1) % sliderProduct.length);
    const prev = ()=> setCurrent((current - 1 + sliderProduct.length) % sliderProduct.length);

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval)
    })
    return (
    <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden rounded-2xl shadow-xl bg-white">
      <div className="relative h-[300px] md:h-[400px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderProduct.map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full flex flex-col md:flex-row items-center justify-between px-6 gap-6"
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {slide.name}
                </h2>
                <p className="text-gray-600">{slide.description}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                  Shop Now
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={slide.image[0]}
                  alt={slide.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderProduct.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
