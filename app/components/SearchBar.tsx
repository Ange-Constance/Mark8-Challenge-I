'use client'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder=""
        className="w-full pl-10 pr-4 py-2 bg-transparent text-gray-700 focus:outline-none"/>
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
