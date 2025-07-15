import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import ProductItem from './ProductItem';

const RelatedProducts = ({category}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category);

            setRelated(productCopy.slice(0,5));            
        }
    }, [products, category]); 
    
    
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6">
        {
          related.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))
        }
    </div>
  )
}

export default RelatedProducts
