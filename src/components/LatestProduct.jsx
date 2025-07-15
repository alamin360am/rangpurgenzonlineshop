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
      <SectionHeading heading={"Our Latest Product"} />
      <section className="py-12 bg-gray-300/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">সর্বশেষ পণ্যসমুহ</h2>
          <p className="text-gray-900 max-w-lg mx-auto">আমাদের সর্বশেষ সংযোজন</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {latestProduct.map((product) => (
            <div key={product._id} className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}>
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
                <div className="flex items-center">
                  <Ratting item={product} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900">৳{product.discountPrice}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">৳{product.price}</span>
                </div>
                
                <p className='text-center bg-gray-900 text-white px-8 py-3 text-sm active:bg-gray-700 uppercase cursor-pointer'>More Details</p>
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
