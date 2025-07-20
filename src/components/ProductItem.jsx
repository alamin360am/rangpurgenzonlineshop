import React from 'react';
import { Link } from 'react-router-dom';
import Ratting from './Ratting';

const ProductItem = ({ item }) => {
  const offer = item.price - item.discountPrice
  const percentage = Math.floor((offer / item.price) * 100)

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white group h-full">
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img 
          src={item.image[0]} 
          alt={item.name}
          className="w-full h-36 md:h-42 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 -right-8 rotate-45 text-white text-xs font-semibold px-8 py-1 rounded shadow animate-gradient-x bg-[length:200%_200%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          {percentage}% OFF
        </span>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-between flex-grow p-2">
        <div className='px-2'>
          <Ratting item={item} />

          <h3 className="text-base md:text-lg font-semibold text-gray-800 mt-2 mb-1 line-clamp-2">
            {item.name}
          </h3>

          <div className="flex items-center mb-2">
            <span className="text-lg font-bold text-blue-600">৳{item.discountPrice}</span>
            <span className="text-sm text-gray-400 line-through ml-2">৳{item.price}</span>
          </div>
        </div>

        <Link 
          to={`/product/${item._id}`} 
          className="text-center bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm rounded-xl transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Ratting from './Ratting';

// const ProductItem = ({ item }) => {
//   return (
//     <div className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full bg-white">
//       {/* Image section */}
//       <div className="relative">
//         <img 
//           src={item.image[0]} 
//           alt={item.name} 
//           className="w-full h-48 object-cover"
//         />
//         <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
//           ৳{item.price}
//         </span>
//       </div>

//       {/* Content section */}
//       <div className="flex flex-col justify-between flex-grow p-4">
//         <div>
//           <div className="flex items-center">
//             <Ratting item={item} />
//           </div>

//           <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>

//           <div className="flex items-center mb-2">
//             <span className="text-lg font-bold text-gray-900">৳{item.discountPrice}</span>
//             <span className="text-sm text-gray-500 line-through ml-2">৳{item.price}</span>
//           </div>
//         </div>

//         <Link 
//           to={`/product/${item._id}`} 
//           className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 text-sm active:bg-gray-700 uppercase cursor-pointer mt-4"
//         >
//           More Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;
