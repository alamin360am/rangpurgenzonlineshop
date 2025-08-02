import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import Title from '../components/Title';
import useTitle from '../Hooks/useTitle';

const Cart = () => {
  useTitle("Cart");
  const { products, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // Build cartData from cartItems
  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const shippingCost = 100;

  const calculateSubtotal = () => {
    return cartData.reduce((total, item) => {
      const product = products.find((p) => p._id === item._id);
      return product ? total + product.price * item.quantity : total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const total = subtotal > 0 ? subtotal + shippingCost : 0;
  const isCartEmpty = cartData.length === 0;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 lg:p-12 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <div className='mb-4'>
          <Title text1={"your"} text2={"shopping cart"} />
        </div>

        {isCartEmpty ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.186 1.157.494 1.256h14.588m-14.588 0a2 2 0 100 4 2 2 0 000-4zm16 4a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="mt-4 text-xl text-gray-500">Your cart is empty.</p>
            <Link
              to="/collection"
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {/* Left Column - Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartData.map((item) => {
                const product = products.find((p) => p._id === item._id);
                if (!product) return null;

                return (
                  <div
                    key={`${item._id}-${item.size}`}
                    className="flex flex-col justify-between sm:flex-row gap-0 lg:gap-5 sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
                  >
                    <div className='flex gap-4'>
                      <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-md border border-gray-200 mx-auto sm:mx-0"
                    />

                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-gray-800 mb-1/2">{product.name}</h2>
                      <p className="text-gray-900 font-medium mb-1"><span className='text-gray-400'>TK.</span> {product.price.toFixed(2)}/-</p>
                      <p className="text-sm text-gray-900">Size: <span className='px-1 py-1/2 bg-blue-500 text-white rounded-lg shadow'>{item.size}</span></p>

                      <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                        <span className="text-gray-500">Quantity:</span>
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                            onClick={() =>
                              updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))
                            }
                          >
                            −
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            className="px-3 py-1 text-gray-600 hover:bg-gray-200"
                            onClick={() =>
                              updateQuantity(item._id, item.size, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex flex-row sm:flex-col justify-between items-center sm:w-auto w-full text-right gap-2">
                      <p className="text-lg font-bold text-gray-800">
                        ${(product.price * item.quantity).toFixed(2)}
                      </p>
                      <RiDeleteBin6Line
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="text-2xl text-red-500 cursor-pointer hover:text-red-700 transition"
                        title="Remove item"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column - Order Summary */}
            <div className="md:col-span-1 mt-8 md:mt-0">
              <div className="bg-gray-50 rounded-xl p-6 shadow-md sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 my-4"></div>
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button onClick={()=> navigate('/place-order')} className="w-full mt-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;




// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/Context'
// import useTitle from '../hooks/useTitle';
// import Title from '../components/Title';
// import { RiDeleteBin6Line } from "react-icons/ri";

// const Cart = () => {
//   useTitle("Cart")
//   const {products, cartItems, updateQuantity} = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(()=>{
//     const tampData = [];
//     for(const items in cartItems) {
//       for(const item in cartItems[items]) {
//         if(cartItems[items][item] > 0) {
//           tampData.push({
//             _id: items,
//             size: item,
//             quantity: cartItems[items][item]
//           })
//         }
//       }
//     }
//     setCartData(tampData);
    
//   }, [cartItems])
//   return (
//     <div className='py-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={"Your"} text2={"Products"} />
//       </div>

//       <div>
//         {
//           cartData.length === 0 ? <p className='text-lg text-center'>No Product Selected</p> : (
//           cartData.map((item, index) => {
//             const productData = products.find(product => product._id === item._id);
            
//             return (
//               <div key={index} className='py-4 border-t last:border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className='flex items-start gap-6'>
//                   <img src={productData.image[0]} alt="Product Image" className='w-16 sm:w-20' />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                     <div className="flex items-center gap-5 mt-2">
//                       <p>{productData.price}tk</p>
//                       <p className='px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-100'>{item.size}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <input
//                  onChange={
//                   (e)=> e.target.value === "" || e.target.value === "0" ? null :
//                   updateQuantity(item._id, item.size, Number(e.target.value))}
//                  type="number" 
//                  min={1} 
//                  defaultValue={item.quantity} 
//                  className='border border-gray-300 sm:max-w-20 px-1 sm:px-2 py-1'
//                 />
//                 <RiDeleteBin6Line
//                  onClick={() => updateQuantity(item._id, item.size, 0)}
//                  className='text-xl text-red-400 mr-4 cursor-pointer' 
//                 />
//               </div>
//             )
//           }))
//         }
//       </div>
//     </div>
//   )
// }

// export default Cart
