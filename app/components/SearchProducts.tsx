import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'

const SearchProducts = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className='flex flex-row justify-between items-center w-[888px] h-[128px] p-10 bg-white shadow-2xl rounded-lg '>

    <div>
        <p className='font-bold text-[16px]'>Search</p>
    </div>
     
      {/* Search Bar */}
          <div className="flex items-center bg-[#0C0C0D0A] rounded-lg px-4 py-2 w-[574px] h-[48px] shadow">
            <AiOutlineSearch size={20} className="text-[#A4C400] mr-2" />
            <input
              type="text"
              placeholder="Search product,stores,etc..."
              className="bg-transparent focus:outline-none flex-1 text-white placeholder-gray-500"
            />
            
          </div>
       
       <div>
           <button className='flex flex-row items-center gap-3 bg-[#C1CF16] px-8 py-2 rounded-lg h-[48px]'>
               <span className='font-semibold text-[14px]'>Search</span>
               <FaSearch size={16}/>
           </button>
       </div>


          </div>
          </div>
    
  )
}

export default SearchProducts