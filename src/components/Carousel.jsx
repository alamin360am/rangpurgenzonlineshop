import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/Context";
import { motion, AnimatePresence } from "framer-motion";
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
        <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden rounded-2xl shadow-lg bg-white">
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    
                <div className="p-6 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">{sliderProduct[current].name}</h2>
                    <p className="text-gray-600">{sliderProduct[current].description}</p>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
                    Shop Now
                    </button>
                </div>
                <div>
                    <img
                    src={sliderProduct[current].image[0]}
                    alt={sliderProduct[current].title}
                    className="w-full h-64 object-cover rounded-lg"
                    />
                </div>

                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button onClick={prev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronLeft />
            </button>
            <button onClick={next} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <ChevronRight />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderProduct.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full ${
                    index === current ? "bg-blue-600" : "bg-gray-300"
                    }`}
                />
                ))}
            </div>

        </div>
  )
}

export default Carousel
