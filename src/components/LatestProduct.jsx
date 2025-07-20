import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Ratting from './Ratting';
import ProductItem from './ProductItem';

const LatestProduct = () => {
    const {products} = useContext(ShopContext)

    const latestProduct = [...products].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0,5);

  return (
    <div>
      <SectionHeading text1={"Latest"} text2={"Products"} subtitle={"Our latest products"} />
      <section className="py-5 bg-gray-300/50">
      <div className="container mx-auto px-4">
        
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
        {latestProduct.map((item, index) =>
          <ProductItem key={index} item={item} />
        )}
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
