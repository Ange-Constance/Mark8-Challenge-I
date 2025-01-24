
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import StoreItem from '../StoreItem'
import Button from '../Button'
import { OpenStore } from '../OpenStore'

const Stores = () => {
  return (
    <div className='mx-20 '>
      <div className='bg-[#F7F8FB] rounded-2xl'>

      
<div className="flex flex-col items-center justify-center bg-[url('/product-bg.png')] bg-cover bg-opacity-10 bg-center   text-black p-10  w-[1,568px] h-[262px] mx-20 mt[108px] mb-10">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-6">
           <span className="text-[#A4C400]">Mark8</span> Stores
        </h1>
        <p className="text-gray-400">54 stores</p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#0C0C0D0A] rounded-md px-4 py-2 w-[600px] ">
        <AiOutlineSearch size={20} className="text-[#A4C400] mr-2" />
        <input
          type="text"
          placeholder="Search Store?"
          className="bg-transparent focus:outline-none flex-1 text-black placeholder-gray-500"
        />
        <FiSettings size={20} className="text-gray-400 cursor-pointer hover:text-white ml-2" />
      </div>

      {/* Category Filters */}
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-1 border rounded-full text-sm text-black border-gray-500 hover:bg-[#A4C400] hover:text-black">
          All
        </button>
        <button className="px-4 py-1 border rounded-full text-sm text-gray-400 border-gray-500 hover:bg-[#A4C400] hover:text-black">
          Vectors
        </button>
        <button className="px-4 py-1 border rounded-full text-sm text-gray-400 border-gray-500 hover:bg-[#A4C400] hover:text-black">
          Icons
        </button>
        <button className="px-4 py-1 border rounded-full text-sm text-gray-400 border-gray-500 hover:bg-[#A4C400] hover:text-black">
          Backgrounds
        </button>
      </div>
    </div>
    </div>

    <div className='flex flex-col mb-11'>
    <StoreItem/>
    <StoreItem/>
    <StoreItem/>
    <StoreItem/>
    </div>
    
    <div className='flex mb-11 justify-center'>
      <Button/>
    </div>

    <div className='mb-11'>
      <OpenStore/>
    </div>
    </div>
  )
}

export default Stores