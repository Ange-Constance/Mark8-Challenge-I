import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const SingleProductItem = () => {
  return (
    <div>
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-[250px] h-[344px]">
    {/* Product Image Section */}
    <div className=" bg-[url('/product-bg.png')] bg-cover bg-center opacity-80 h-[256px] bg-gray-100 flex items-center justify-center">
      {/* Placeholder for product image */}
      {/* <div className="bg-gray-300 h-[150px] w-[150px]"></div> */}

    </div>

    {/* Product Info Section */}
    <div className="p-5 h-[88px]">
      {/* Product Name */}
      <p className="text-gray-800 text-[14px] font-medium">Product 1</p>
       
      <div className='flex flex-row justify-between  gap-5'>
      {/* Price Section */}
      <div className="flex items-center">
        <p className="text-[#A4C400] text-[16px] font-semibold">9,000 Rwf</p>
        <p className="text-gray-400 line-through text-[14px]">12,000 Rwf</p>
      </div>

      {/* Action Buttons */}
      <div className=" ">
        
        <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
          <FaRegHeart size={18} className="text-gray-600" />
        </button>
      </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default SingleProductItem