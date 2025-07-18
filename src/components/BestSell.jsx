import React, { useContext } from 'react'
import SectionHeading from './SectionHeading'
import { ShopContext } from '../context/Context'
import { Link } from 'react-router-dom'
import Ratting from './Ratting'
import ProductItem from './ProductItem'

const BestSell = () => {
    const {products} = useContext(ShopContext);
    
    const bestSellingProduct = [...products].sort((a,b) => b.sell - a.sell).slice(0, 5)    

  return (
    <div>      
        <SectionHeading text1={"Best"} text2={"Selling Products"} subtitle={"Our customers' most favorite products"} />
      <section className="py-12 bg-gray-300/50">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {bestSellingProduct.map((item, index) => (
            <ProductItem key={index} item={item} />
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

export default BestSell
