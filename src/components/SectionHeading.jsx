import React from 'react'

const SectionHeading = ({heading}) => {
  return (
        <div className="w-full py-10 flex justify-center items-center">
            <div className="flex items-center justify-center w-full max-w-6xl px-4">
                {/* Left Line */}
                <div className="hidden sm:block flex-grow border-t border-black"></div>

                {/* Middle Text with Arrows */}
                <div className="relative text-black font-semibold text-base sm:text-lg md:text-xl px-6 py-2 mx-4 border border-white">

                    {/* Left Arrow */}
                    <div className="absolute -left-4 top-0 bottom-0 w-4 border-t border-l border-b border-black transform -skew-x-12"></div>
          
                    <span className="relative z-10">{heading}</span>
          
                    {/* Right Arrow */}
                    <div className="absolute -right-4 top-0 bottom-0 w-4 border-t border-r border-b border-black transform skew-x-12"></div>
                </div>

                {/* Right Line */}
                <div className="hidden sm:block flex-grow border-t border-black"></div>
            </div>
        </div>
  )
}

export default SectionHeading
