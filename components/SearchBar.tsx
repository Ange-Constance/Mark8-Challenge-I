'use client'
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchProducts from './SearchProducts';
import { FiX } from 'react-icons/fi';


const SearchBar = () => {
 
    const [isPopupVisible, setIsPopupVisible] = useState(false);
  
    const togglePopup = () => {
      setIsPopupVisible(!isPopupVisible);
    };



  return (
    <div>
       <button
        onClick={togglePopup}
        className="flex items-center justify-center bg-gray-200 rounded-full p-3 hover:bg-gray-300 transition"
      >
        <AiOutlineSearch size={20} className="text-gray-600" />
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Popup Content */}

          <div className=" rounded-lg shadow-lg p-6 w-[400px]">
          <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <FiX size={24} />
            </button>
        <SearchProducts/>
        </div>
          </div>

    )}

    </div>
  );
};


export default SearchBar;
