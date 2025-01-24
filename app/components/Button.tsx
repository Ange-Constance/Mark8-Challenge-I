import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Button = () => {
  return (
   

        <div className="">
        
        <button className="flex flex-row justify-center gap-3  px-8 py-2 items-center border border-gray-300 rounded-lg w-[161px] h-[48px] whitespace-nowrap ">
            <AiOutlineDown size={16} className="text-[#D4FA24]" />
            <span className="font-semibold text-[14px]">Load More</span>
        </button>
        
        </div>
   
  )
}

export default Button