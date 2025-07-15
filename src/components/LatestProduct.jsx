import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Ratting from './Ratting';

const LatestProduct = () => {
    const {products} = useContext(ShopContext)

    const latestProduct = [...products].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);

  return (
    <div>
      <SectionHeading text1={"Latest"} text2={"Products"} subtitle={"Our latest products"} />
      <section className="py-12 bg-gray-300/50">
      <div className="container mx-auto px-4">
        
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {latestProduct.map((item, index) => (
          <div key={index} className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white group h-full">
            {/* Image section */}
            <div className="relative overflow-hidden">
              <img 
                src={item.image[0]} 
                alt={item.name} 
                className="w-full h-52 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 text-white text-xs font-semibold px-2 py-1 rounded shadow animate-gradient-x bg-[length:200%_200%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                {Math.floor(((item.price - item.discountPrice)/item.price) * 100)}% OFF
              </span>
            </div>

            {/* Content section */}
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <Ratting item={item} />
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mt-2 mb-1 line-clamp-2">
                  {item.name}
                </h3>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-blue-600">৳{item.discountPrice}</span>
                  <span className="text-sm text-gray-400 line-through ml-2">৳{item.price}</span>
                </div>
              </div>
              <Link 
                to={`/product/${item._id}`} 
                className="mt-4 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-sm rounded-xl transition-all duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
          ))}
      </div>
        
        <div className="text-center mt-10">
          <Link to={'/collection'} className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
            See All Products
          </Link>
        </div>
      </div>
      </section>
    </div>
  )
}

export default LatestProduct
