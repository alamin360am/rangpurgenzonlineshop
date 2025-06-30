import React, { useContext } from 'react'
import SectionHeading from './SectionHeading'
import { ShopContext } from '../context/Context'
import { Link } from 'react-router-dom'

const BestSell = () => {
    const {products} = useContext(ShopContext);
    
    const bestSellingProduct = [...products].sort((a,b) => b.sell - a.sell).slice(0, 5)

    console.log(bestSellingProduct);
    

  return (
    <div>
      <SectionHeading heading={"Our Best Selling Product"} />
      <section className="py-12 bg-gray-300/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">সেরা বিক্রিত পণ্য</h2>
          <p className="text-gray-900 max-w-lg mx-auto">আমাদের গ্রাহকদের সবচেয়ে প্রিয় পণ্যগুলো</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {bestSellingProduct.map((product, index) => (
            <div key={product._id} className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 
                ${
                    index < 3 ? 
                    index === 0 ? 'bg-cyan-200' : 
                    index === 1 ? 'bg-green-200' : 
                    'bg-fuchsia-300' : 
                    'bg-white'
                }`}>
              <div className="relative">
                <img 
                  src={product.image[0]} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.price}
                </span>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 text-xs ml-1">({product.rating})</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">৳{product.discountPrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">৳{product.price}</span>
                </div>
                
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  কার্টে যোগ করুন
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to={'/collection'} className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300">
            সব পণ্য দেখুন
          </Link>
        </div>
      </div>
      </section>
    </div>
  )
}

export default BestSell
