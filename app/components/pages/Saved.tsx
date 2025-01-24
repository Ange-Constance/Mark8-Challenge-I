import React from 'react'
import ProductCard from '../ProductCard'
import { OpenStore } from '../OpenStore'

const Saved = () => {
  return (
    

    <div className='mx-20'>
    <div className='bg-gray-100 rounded-2xl mt-10 mb-20'>

    <div className="flex flex-col items-center justify-center bg-[url('/product-bg.png')]  bg-cover bg-opacity-10 bg-center   text-black p-12  w-[1,568px] h-[262px] mx-20 mt[108px] mb-10">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-6">
             Saved Products
          </h1>
          <p className="text-gray-400">4 saved</p>
        </div>
  
        </div>
      </div>

    <div className='flex flex-col gap-10 mb-20'>

      <div className='flex flex-row justify-between'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>

      <div className='flex flex-row justify-between'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>

      </div>

      <div className='mb-20'>
        <OpenStore/>
      </div>

      </div>
  )
}

export default Saved