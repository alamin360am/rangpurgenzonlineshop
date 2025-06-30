import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";




const Title = ({text1, text2}) => {
  return (
    <div>
      <h2 className='flex justify-center items-center gap-2 text-xl text-gray-900 font-bold uppercase'>
        <span className='text-gray-500'>{text1}</span> {text2}<BsArrowRight className='text-gray-500' />
        </h2>
    </div> 
  )
}

export default Title
