import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FiArrowRight } from 'react-icons/fi';
export const OpenStore = () => {
  return (
    <div className='flex flex-row justify-between w-[1,568px] h-[128px] bg-[#F7F8FB] p-10 rounded-2xl'>
        <div>
            {/* header */}
            <h1 className='text-[24px] font-bold'><span className='text-[#C1CF16]'>Open </span>your Store</h1>

        </div>
    <div className='flex flex-row bg-[#0C0C0D0A] w-[600px] h-[48px] items-center gap-3 px-4 py-2 rounded-lg '>
        <FaEnvelope  className='text-[#C1CF16] size-4 '/>
        <input type="text"
        placeholder='Enter your Email'
        className="bg-transparent border-none focus:outline-none"
        />
    </div>

<div>
    <button className='flex flex-row items-center gap-3 bg-[#C1CF16] px-8 py-2 rounded-lg h-[48px]'>
        <span className='font-semibold text-[14px]'>Submit</span>
        <FiArrowRight size={16}/>
    </button>
</div>
    </div>
  )
}
