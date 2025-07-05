import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Context';
import Ratting from '../components/Ratting';
import AddToCartButton from '../components/AddToCartButton';
import useTitle from '../hooks/useTitle';

const Products = () => {
  useTitle("Product");
  const productId = useParams();
  const {products} = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");

  const fetchProduct = async () => {
    products.map(item => {
      if(item._id === productId.id) {
        setProductData(item);   
        setImage(item.image[0]);
        return null
      }
    })
  }

  useEffect(()=>{
    fetchProduct();
  }, []);

  return productData ? (
    <div className='border-t-2 border-gray-100 py-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="mt-2">
            <Ratting item={productData} />
          </div>
          <div className="flex items-end gap-1.5">
            <p className='mt-3 font-medium text-3xl'>{productData.price}</p>
            <span className='font-light text-gray-400'>taka</span>
          </div>
          <p className='my-2 text-gray-500 md:w-4/5 text-justify'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                 onClick={() => setSize(item)}
                 className={`border ${item === size ? 'border-orange-500' : 'border-gray-200'} py-2 px-4 bg-gray-100 outline-none cursor-pointer`} 
                 key={index}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <AddToCartButton />
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
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Products
