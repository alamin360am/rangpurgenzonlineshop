import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import useTitle from '../hooks/useTitle';
import Title from '../components/Title';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  useTitle("Cart")
  const {products, cartItems, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tampData = [];
    for(const items in cartItems) {
      for(const item in cartItems[items]) {
        if(cartItems[items][item] > 0) {
          tampData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tampData);
    
  }, [cartItems])
  return (
    <div className='py-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"Your"} text2={"Products"} />
      </div>

      <div>
        {
          cartData.length === 0 ? <p className='text-lg text-center'>No Product Selected</p> : (
          cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);
            
            return (
              <div key={index} className='py-4 border-t last:border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt="Product Image" className='w-16 sm:w-20' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{productData.price}tk</p>
                      <p className='px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-100'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                 onChange={
                  (e)=> e.target.value === "" || e.target.value === "0" ? null :
                  updateQuantity(item._id, item.size, Number(e.target.value))}
                 type="number" 
                 min={1} 
                 defaultValue={item.quantity} 
                 className='border border-gray-300 sm:max-w-20 px-1 sm:px-2 py-1'
                />
                <RiDeleteBin6Line
                 onClick={() => updateQuantity(item._id, item.size, 0)}
                 className='text-xl text-red-400 mr-4 cursor-pointer' 
                />
              </div>
            )
          }))
        }
      </div>
    </div>
  )
}

export default Cart
