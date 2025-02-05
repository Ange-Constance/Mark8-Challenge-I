"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const WelcomeComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#1C1F26] text-white p-10 rounded-2xl max-w-full h-[262px] mx-20  mt[108px] mb-10">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          Welcome to <span className="text-[#A4C400]">Mark8</span>
        </h1>
        <p className="text-gray-400">12,932 Products</p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#2A2E36] rounded-full px-4 py-2 w-full max-w-md shadow">
        <AiOutlineSearch size={20} className="text-[#A4C400] mr-2" />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent focus:outline-none flex-1 text-white placeholder-gray-500"
        />
        <FiSettings
          size={20}
          className="text-gray-400 cursor-pointer hover:text-white ml-2"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-1 border rounded-full text-sm text-white border-gray-500 hover:bg-[#A4C400] hover:text-black">
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
  );
};

export default WelcomeComponent;
