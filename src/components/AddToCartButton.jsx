import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'

const AddToCartButton = ({id, size}) => {
  const {addToCart} = useContext(ShopContext);
  
  return (
    <button onClick={()=> addToCart(id, size)} className='bg-gray-900 text-white px-8 py-3 text-sm active:bg-gray-700 uppercase cursor-pointer'>
      Add to Cart
    </button>
  )
}

export default AddToCartButton
