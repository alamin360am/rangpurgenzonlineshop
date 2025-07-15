import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Context';
import Ratting from '../components/Ratting';
import AddToCartButton from '../components/AddToCartButton';
import useTitle from '../hooks/useTitle';
import RelatedProducts from '../components/RelatedProducts';
import Title from '../components/Title';

const Products = () => {
  useTitle("Product");
  const {id} = useParams();
  const {products} = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState({});
  const [selectedSize, setSelectedSize] = useState(""); 
  
  useEffect(()=>{
    const newProduct = products.find(product=> product._id === id)
    if (newProduct) {
      setProductData(newProduct);
      setImage(newProduct.image?.[0] || "");
    }    
  }, [id, products])

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-5 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex">
        {/* Left Column - Product Images */}
        <div className="md:w-1/2 p-4 md:p-8">
          <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
            <img 
              src={image ? image : null} 
              alt={productData?.name} 
              className="w-full h-96 object-cover transition-transform duration-300 ease-in-out hover:scale-105" 
            />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {Array.isArray(productData.image) &&
            productData.image.map((img, index) => (
              <div 
                key={index}
                onClick={() => setImage(img)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-transform duration-200 ease-in-out 
                  ${image === img ? 'border-blue-500 shadow-md' : 'border-transparent hover:border-gray-300'}`}
              >
                <img 
                  src={img} 
                  alt={`${productData.name} thumbnail ${index + 1}`} 
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover transform hover:scale-105 transition-transform duration-200 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="md:w-1/2 p-4 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">{productData.name}</h1>
          <Ratting item={productData} />
          <div className="flex items-end gap-1.5">
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-gray-600">{productData.price}</p>
            <span className='font-light text-gray-400'>taka</span>
          </div>
          <p className="mt-4 text-gray-600">{productData.description}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Sizes</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {productData?.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md transition-all duration-200 ease-in-out ${size === selectedSize ? 'bg-blue-500 text-white border-blue-500 shadow-md' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <AddToCartButton id={productData._id} size={selectedSize} />
          </div>
          
          <hr className='mt-8 sm:w-4/5 text-gray-500' />
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
             <p>100% Original product</p>
             <p>Cash on delivery is available for this product</p>
             <p>Easy return and exchange policy within 7 days</p>
           </div>
        </div>
      </div>
      {/* Description and review */}
      {/* TODO: will be change and get description and review from api */}
      <div className="mt-20">
        <div className="flex">
          <b className='border border-gray-500 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde corporis ab quod debitis non neque quas voluptas magnam obcaecati voluptatem culpa pariatur laborum tempora consectetur quaerat soluta beatae aperiam iusto iure fuga facilis, cum inventore corrupti? Repellendus, numquam nisi asperiores neque porro fugit excepturi fuga, similique et, dolores dolore enim!</p>
        </div>
        {productData?.category && (
          <div className='pt-6 pl-4'>
          <div className='mb-4'>
           <Title text1={"Related"} text2={"Products"} />
          </div>
          <RelatedProducts category={productData.category} />
       </div>
        )}
        
       </div>       
    </div>
  );
};

export default Products;



// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/Context';
// import Ratting from '../components/Ratting';
// import AddToCartButton from '../components/AddToCartButton';
// import useTitle from '../hooks/useTitle';
// import RelatedProducts from '../components/RelatedProducts';
// import Title from '../components/Title';

// const Products = () => {
//   useTitle("Product");
//   const productId = useParams();
//   const {products} = useContext(ShopContext);
//   const [image, setImage] = useState("");
//   const [productData, setProductData] = useState(false);
//   const [size, setSize] = useState("");

//   const fetchProduct = async () => {
//     products.map(item => {
//       if(item._id === productId.id) {
//         setProductData(item);   
//         setImage(item.image[0]);
//         return null
//       }
//     })
//   }

//   useEffect(()=>{
//     fetchProduct();
//   }, []);

//   return productData ? (
//     <div className='border-t-2 border-gray-100 py-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/* Product Data */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Product Image */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {
//               productData.image.map((item, index) => (
//                 <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
//               ))
//             }
//           </div>
//           <div className="w-full sm:w-[80%]">
//             <img className='w-full h-auto' src={image} alt="" />
//           </div>
//         </div>
//         {/* Product Info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className="mt-2">
//             <Ratting item={productData} />
//           </div>
//           <div className="flex items-end gap-1.5">
//             <p className='mt-3 font-medium text-3xl'>{productData.price}</p>
//             <span className='font-light text-gray-400'>taka</span>
//           </div>
//           <p className='my-2 text-gray-500 md:w-4/5 text-justify'>{productData.description}</p>
//           <div className="flex flex-col gap-4 my-8">
//             <p>Select Size</p>
//             <div className="flex gap-2">
//               {productData.sizes.map((item, index) => (
//                 <button
//                  onClick={() => setSize(item)}
//                  className={`border ${item === size ? 'border-orange-500' : 'border-gray-200'} py-2 px-4 bg-gray-100 outline-none cursor-pointer`} 
//                  key={index}>
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <AddToCartButton id={productData._id} size={size} />
//           <hr className='mt-8 sm:w-4/5 text-gray-500' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% Original product</p>
//             <p>Cash on delivery is available for this product</p>
//             <p>Easy return and exchange policy within 7 days</p>
//           </div>
//         </div>
//       </div>
//       {/* Description and review */}
//       {/* TODO: will be change and get description and review from api */}
//       <div className="mt-20">
//         <div className="flex">
//           <b className='border border-gray-500 px-5 py-3 text-sm'>Description</b>
//           <p className='border border-gray-300 px-5 py-3 text-sm'>Reviews</p>
//         </div>
//         <div className="flex flex-col gap-4 border border-gray-300 p-6 text-sm text-gray-500">
//           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde corporis ab quod debitis non neque quas voluptas magnam obcaecati voluptatem culpa pariatur laborum tempora consectetur quaerat soluta beatae aperiam iusto iure fuga facilis, cum inventore corrupti? Repellendus, numquam nisi asperiores neque porro fugit excepturi fuga, similique et, dolores dolore enim!</p>
//         </div>
//       </div>
//       <div className='pt-6 pl-4 bg-orange-50'>
//         <div className='mb-4'>
//           <Title text1={"Related"} text2={"Products"} />
//         </div>
//         <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//       </div>
//     </div>
//   ) : <div className='opacity-0'></div>
// }

// export default Products
