import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from './Ratting';
import AddToCartButton from './AddToCartButton';

const ProductItem = ({ item }) => {
  return (
    <Link to={`/product/${item._id}`}>
      <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative overflow-hidden">
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {item.price}
          </span>
        </div>

        <div className="p-4">
          <Ratting item={item} />

          <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>

          <div className="flex items-center mb-3">
            <span className="text-lg font-bold text-gray-900">৳{item.discountPrice}</span>
            <span className="text-sm text-gray-500 line-through ml-2">৳{item.price}</span>
          </div>

          <AddToCartButton />
          <hr className="mt-8 sm:w-4/5" />
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
