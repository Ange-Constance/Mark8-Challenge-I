import React from 'react'
import { AiOutlineCompass, AiOutlineDown } from 'react-icons/ai'
import { FaPhone, FaRegHeart, FaUser } from 'react-icons/fa'
import { MdStarHalf } from 'react-icons/md'
import SingleProductItem from './SingleProductItem'

const StoreItem = () => {
  return (
    <div className=' border border-[#DBDBDB] rounded-2xl mb-11'>

        <div className='flex flex-row justify-between items-center px-10 py-5  border-b-2 border-[#DBDBDB]'>

            {/* Title section */}

              <div className='flex flex-row justify-between items-center w-[327px] h-[60px] px-5'>
                    <div className='flex flex-row justify-between items-center gap-5 '>
                    <div>
                        {/* Image side */}
                     <img src="product-bg.png" alt="" className='h-[60px] w-[60px] rounded-2xl bg-[#C1CF16] opacity-80' />
                    </div>
            
                    <div className=''>
                        <h1 className='text-[14px] font-semibold mb-2'>Awesome Shop 3</h1>
                        <p className='text-[12px]'>134 Products</p>
                    </div>
                    </div>
                    <div>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-3'>
                 <div>
                          <button className='flex flex-row items-center gap-3 bg-[#C1CF16] px-8 py-2 rounded-lg h-[48px]'>
                              <FaUser  size={16}/>
                              <span className='font-semibold text-[14px]'>View Profile</span>
                              
                          </button>
                      </div>

                       <div className="flex items-center gap-2 ">
                                <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                                  <FaPhone size={18} className="text-gray-600" />
                                </button>
                                <button className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition">
                                  <FaRegHeart size={18} className="text-gray-600" />
                                </button>
                              </div>
                              </div>

        </div>
        <div className='flex flex-row justify-between p-10 '>
        <div className='flex flex-col '>
            {/* About section */}
        <div className='mb-8'>
      <h1 className='font-bold text-[16px] mb-4'>About</h1>
      <p className='text-[#495D69] font-light w-[350px]'>A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals.</p>

        </div>

        <div className='mb-8'>
          <h1 className='font-bold text-[16px] mb-4'>Categories</h1>
          <div className='flex gap-3'>
            {/* actinable buttons */}

        <button className="px-5 py-2 border rounded-full text-sm text-[#495D69] border-gray-300  hover:bg-[#A4C400] hover:text-black">
            Vectors
        </button>
        <button className="px-5 py-2 border rounded-full text-sm text-[#495D69] border-gray-300 hover:bg-[#A4C400] hover:text-black">
        Icons
        </button>
        <button className="px-5 py-2 border rounded-full text-sm text-[#495D69] border-gray-300 hover:bg-[#A4C400] hover:text-black">
         Background 
        </button>
          </div>
        </div>


        <div className='mb-8'>
          {/* Ratings */}

          <h1 className='font-bold text-[16px] mb-4'>Reviews</h1>
          <div className='flex flex-row items-center gap-3'>
          <MdStarHalf size={16} className="text-[#C1CF16]" />
          <p > <span className='font-semibold'>4.9 </span><span className='text-gray-400'>(14 reviews)</span></p>
        </div>
        </div>

        <div>
          {/* button */}
          <button className="flex flex-row justify-center gap-3  px-8 py-2 items-center border border-gray-300 rounded-lg w-[207px] h-[48px] whitespace-nowrap ">
              <AiOutlineCompass size={16} className="text-[#C1CF16]" />
              <span className="font-semibold text-[14px]">Explore Products</span>
          </button>
        </div>

        </div>
      
      <div className='flex flex-row gap-5 '>
      <SingleProductItem/>
      <SingleProductItem/>
      <SingleProductItem/>
      </div>
        </div>
    </div>
  )
}

export default StoreItem