// import React from 'react'

// const SectionHeading = ({heading}) => {
//   return (
//     <div className="w-full py-10 flex justify-center items-center">
//         <div className="flex items-center justify-center w-full max-w-6xl px-4">
//             {/* Left Line */}
//             <div className="hidden sm:block flex-grow border-t-2 border-black"></div>
//             {/* Middle Text with Arrows */}
//             <div className="relative text-black font-bold text-base sm:text-lg md:text-2xl px-6 py-2 mx-4 border border-white">
//                 {/* Left Arrow */}
//                 <div className="absolute -left-4 top-0 bottom-0 w-4 border-t-2 border-l-2 border-b-2 border-black transform -skew-x-12"></div>          
//                 <span className="relative z-10 uppercase">{heading}</span>          
//                 {/* Right Arrow */}
//                 <div className="absolute -right-4 top-0 bottom-0 w-4 border-t-2 border-r-2 border-b-2 border-black transform skew-x-12"></div>
//             </div>
//             {/* Right Line */}
//             <div className="hidden sm:block flex-grow border-t-2 border-black"></div>
//         </div>
//     </div>
//   )
// }

// export default SectionHeading


// src/components/SectionHeading.jsx
import React from 'react';

const SectionHeading = ({ text1, text2, subtitle }) => {
  return (
    <div className="relative text-center my-12 px-4">
      {/* Glow background circle effect */}
      <div className="absolute inset-0 flex justify-center -z-10">
        <div className="w-40 h-40 md:w-60 md:h-60 bg-gradient-to-tr from-blue-400 via-blue-300 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Main heading */}
      <h2 className="text-xl md:text-3xl font-extrabold text-gray-900  tracking-tight drop-shadow-sm">
        <span>{text1} </span>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {text2}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Bottom border animation bar */}
      <div className="mt-3 flex justify-center">
        <div className="h-1 w-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse shadow-md" />
      </div>
    </div>
  );
};

export default SectionHeading;
