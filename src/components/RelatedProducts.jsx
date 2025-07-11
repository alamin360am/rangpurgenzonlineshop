import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category);
            productCopy = productCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productCopy.slice(0,5));            
        }
    }, [products])
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-6 bg-white">
        {
          related.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
        }
    </div>
  )
}

export default RelatedProducts
