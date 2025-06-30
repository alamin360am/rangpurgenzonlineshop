import React from 'react'

const SectionHeading = ({heading}) => {
  return (
        <div className="w-full py-10 flex justify-center items-center">
            <div className="flex items-center justify-center w-full max-w-6xl px-4">
                {/* Left Line */}
                <div className="hidden sm:block flex-grow border-t-2 border-black"></div>

                {/* Middle Text with Arrows */}
                <div className="relative text-black font-bold text-base sm:text-lg md:text-2xl px-6 py-2 mx-4 border border-white">

                    {/* Left Arrow */}
                    <div className="absolute -left-4 top-0 bottom-0 w-4 border-t-2 border-l-2 border-b-2 border-black transform -skew-x-12"></div>
          
                    <span className="relative z-10">{heading}</span>
          
                    {/* Right Arrow */}
                    <div className="absolute -right-4 top-0 bottom-0 w-4 border-t-2 border-r-2 border-b-2 border-black transform skew-x-12"></div>
                </div>

                {/* Right Line */}
                <div className="hidden sm:block flex-grow border-t-2 border-black"></div>
            </div>
        </div>
  )
}

export default SectionHeading
